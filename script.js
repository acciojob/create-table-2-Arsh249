function createTable() {
    //Write your code here
   let rows = parseInt(prompt("Input number of rows"));
    // Prompt the user for the number of columns
    let columns = parseInt(prompt("Input number of columns"));

    // Get the table element by its ID
    let table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Create the rows and columns as per the user input
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(); // Create a new row
        for (let j = 0; j < columns; j++) {
            let cell = row.insertCell(); // Create a new cell in the row
            cell.textContent = `Row-${i} Column-${j}`; // Set the cell's text
        }
    }
}
