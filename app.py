from flask import Flask, request, jsonify, render_template
import pandas as pd
from pulp import *
import matplotlib.pyplot as plt
import numpy as np

app = Flask(__name__, static_folder='static')

# Global variable to store user input data
user_input_data = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/optimize_plant_setup', methods=['POST'])
def optimize_plant_setup():
    global user_input_data  # Access the global variable
    data = request.get_json()
    user_input_data = data  # Save the user input data

    # Load data from files (replace with your actual file paths)
    variable_costs_path = "data/variable_costs.xlsx"
    freight_costs_path = 'data/freight_costs.xlsx'
    fixed_cost_path = 'data/fixed_cost.xlsx'
    capacity_path = 'data/capacity.xlsx'

    manvar_costs = pd.read_excel(variable_costs_path, index_col=0)
    freight_costs = pd.read_excel(freight_costs_path, index_col=0)
    var_cost = freight_costs / 1000 + manvar_costs
    fixed_costs = pd.read_excel(fixed_cost_path, index_col=0)
    cap = pd.read_excel(capacity_path, index_col=0)
    demand = pd.DataFrame.from_dict(data, orient='index', columns=['Demand'])

    # Define Decision Variables
    loc = ['USA', 'GERMANY', 'JAPAN', 'BRAZIL', 'INDIA']
    size = ['LOW', 'HIGH']
    plant_name = [(i, s) for s in size for i in loc]
    prod_name = [(i, j) for i in loc for j in loc]

    # Initialize Class
    model = LpProblem("Capacitated Plant Location Model", LpMinimize)

    # Create Decision Variables
    x = LpVariable.dicts("production_", prod_name, lowBound=0, upBound=None, cat='continuous')
    y = LpVariable.dicts("plant_", plant_name, cat='Binary')

    # Define Objective Function
    model += (lpSum([fixed_costs.loc[i, s] * y[(i, s)] * 1000 for s in size for i in loc])
              + lpSum([var_cost.loc[i, j] * x[(i, j)] for i in loc for j in loc]))

    # Add Constraints
    for j in loc:
        model += lpSum([x[(i, j)] for i in loc]) == demand.loc[j, 'Demand']
    for i in loc:
        model += lpSum([x[(i, j)] for j in loc]) <= lpSum([cap.loc[i, s] * y[(i, s)] * 1000 for s in size])

    # Solve Model
    model.solve()

    # Results Plant (Boolean)
    df_bool = pd.DataFrame(data=[y[plant_name[i]].varValue for i in range(len(plant_name))],
                           index=[i + '-' + s for s in size for i in loc],
                           columns=['Plant Opening'])

    # Prepare the results in JSON format
    results = {
        'plants_data': df_bool.to_dict()['Plant Opening'],
    }

    return jsonify(results)

@app.route('/generate_df_demand_data', methods=['GET'])
def generate_df_demand_data():
    global user_input_data  # Access the global variable

    if user_input_data is None:
        return jsonify({'df_demand_table': []})  # Return empty data if user input data is not available

    N = 50
    CV = 0.5

    df_demand = pd.DataFrame({'scenario': np.array(range(1, N + 1))})
    data = pd.DataFrame.from_dict(user_input_data, orient='index', columns=['Demand'])

    # Demand
    markets = data['Demand'].values
    for col, value in zip(data.index, markets):
        sigma = CV * value
        df_demand[col] = np.random.normal(value, sigma, N)
        df_demand[col] = df_demand[col].apply(lambda t: t if t >= 0 else 0)

    # Add Initial Scenario
    COLS = ['scenario'] + list(data.index)
    VALS = [0] + list(data['Demand'].values)
    df_init = pd.DataFrame(dict(zip(COLS, VALS)), index=[0])

    # Concat
    df_demand = pd.concat([df_init, df_demand])

    df_demand_table = df_demand.to_dict(orient='records')
    return jsonify({'df_demand_table': df_demand_table})

if __name__ == '__main__':
    app.run(debug=True)
