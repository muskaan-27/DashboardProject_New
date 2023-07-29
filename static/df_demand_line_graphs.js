// Function to create line graphs for all countries in df_demand_table
function createLineGraphs(demandData) {
    createLineGraphUSA(demandData);
    createLineGraphGermany(demandData);
    createLineGraphJAPAN(demandData);
    createLineGraphBRAZIL(demandData);
    createLineGraphINDIA(demandData);
}

// Function to create the line graph for the USA country
function createLineGraphUSA(demandData) {
    // Extract scenario and demand data for USA country
    var scenarioData = demandData.map(data => data.scenario);
    var demandUSAData = demandData.map(data => data.USA);

    // Get the canvas element
    var canvas = document.getElementById("lineGraphUSA");

    // Check if the canvas element exists and has a context
    if (canvas && canvas.getContext) {
        // Create the line graph
        var lineGraphUSA = new Chart(canvas, {
            type: 'line',
            data: {
                labels: scenarioData,
                datasets: [{
                    label: 'Demand (USA)',
                    data: demandUSAData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Scenario Number'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Demand'
                        }
                    }
                }
            }
        });
    }
}

// Function to create the line graph for the GERMANY country
function createLineGraphGermany(demandData) {
    var scenarios = demandData.map(data => data.scenario);
    var demandGERMANYData = demandData.map(data => data.GERMANY);

    // Get the canvas element
    var canvas = document.getElementById("lineGraphGermany");

    if (canvas && canvas.getContext) {
        // Create the line graph
        var lineGraphGermany = new Chart(canvas, {
            type: 'line',
            data: {
                labels: scenarios,
                datasets: [
                    {
                        label: 'Demand (GERMANY)',
                        data: demandGERMANYData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1,
                        fill: true
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Scenario Number'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Demand'
                        }
                    }
                }
            }
        });
    }
}

// Function to create the line graph for the JAPAN country
function createLineGraphJAPAN(demandData) {
    // Extract scenario and demand data for JAPAN country
    var scenarioData = demandData.map(data => data.scenario);
    var demandJAPANData = demandData.map(data => data.JAPAN);

    // Get the canvas element
    var canvas = document.getElementById("lineGraphJAPAN");

    // Check if the canvas element exists and has a context
    if (canvas && canvas.getContext) {
        // Create the line graph
        var lineGraphJAPAN = new Chart(canvas, {
            type: 'line',
            data: {
                labels: scenarioData,
                datasets: [{
                    label: 'Demand (JAPAN)',
                    data: demandJAPANData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Scenario Number'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Demand'
                        }
                    }
                }
            }
        });
    }
}

// Function to create the line graph for the BRAZIL country
function createLineGraphBRAZIL(demandData) {
    // Extract scenario and demand data for BRAZIL country
    var scenarioData = demandData.map(data => data.scenario);
    var demandBRAZILData = demandData.map(data => data.BRAZIL);

    // Get the canvas element
    var canvas = document.getElementById("lineGraphBRAZIL");

    // Check if the canvas element exists and has a context
    if (canvas && canvas.getContext) {
        // Create the line graph
        var lineGraphBRAZIL = new Chart(canvas, {
            type: 'line',
            data: {
                labels: scenarioData,
                datasets: [{
                    label: 'Demand (BRAZIL)',
                    data: demandBRAZILData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Scenario Number'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Demand'
                        }
                    }
                }
            }
        });
    }
}

// Function to create the line graph for the INDIA country
function createLineGraphINDIA(demandData) {
    // Extract scenario and demand data for INDIA country
    var scenarioData = demandData.map(data => data.scenario);
    var demandINDIAData = demandData.map(data => data.INDIA);

    // Get the canvas element
    var canvas = document.getElementById("lineGraphINDIA");

    // Check if the canvas element exists and has a context
    if (canvas && canvas.getContext) {
        // Create the line graph
        var lineGraphINDIA = new Chart(canvas, {
            type: 'line',
            data: {
                labels: scenarioData,
                datasets: [{
                    label: 'Demand (INDIA)',
                    data: demandINDIAData,
                   
                    label: 'Demand (INDIA)',
                    data: demandINDIAData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Scenario Number'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Demand'
                        }
                    }
                }
            }
        });
    }
}
