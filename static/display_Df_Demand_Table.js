// Function to display the df_demand_table
function displayDfDemandTable(demandData) {
    var tableBody = document.getElementById('dfDemandTableBody');
    tableBody.innerHTML = '';

    demandData.forEach(data => {
        var row = tableBody.insertRow();
        var cellScenario = row.insertCell(0);
        var cellUSA = row.insertCell(1);
        var cellGermany = row.insertCell(2);
        var cellJapan = row.insertCell(3);
        var cellBrazil = row.insertCell(4);
        var cellIndia = row.insertCell(5);

        cellScenario.innerText = data.scenario;
        cellUSA.innerText = data.USA;
        cellGermany.innerText = data.GERMANY;
        cellJapan.innerText = data.JAPAN;
        cellBrazil.innerText = data.BRAZIL;
        cellIndia.innerText = data.INDIA;
    });
}
