function createBarGraph(plantsData) {
    var countries = Object.keys(plantsData);
    var labels = countries.map(country => `${country}`); // Format the label as "country-HIGH"
    var values = countries.map(country => plantsData[country] === 1 ? 1 : 0); // 1 for open, 0 for closed

    // Create the bar graph
    var plantOpeningChart = new Chart(document.getElementById("plantOpeningChart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Plant Opening',
                    data: values,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            indexAxis: 'x', // Display bars horizontally
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1 // Show only integer values on the y-axis
                    }
                }
            }
        }
    });
}