function displayResultTable(plantsData) {
    var tableBody = document.getElementById('resultTableBody');
    tableBody.innerHTML = '';

    Object.entries(plantsData).forEach(([countryPlant, opening]) => {
        var row = tableBody.insertRow();
        var cellCountryPlant = row.insertCell(0);
        var cellOpening = row.insertCell(1);

        cellCountryPlant.innerText = countryPlant;
        cellOpening.innerText = opening;
    });
}