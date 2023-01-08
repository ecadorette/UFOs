// import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//create a function to build the table
function buildTable(data) {
    //first clear out any existing data
    tbody.html("");
//next loop through each object in the data
data.forEach((dataRow) => {
    //and append a reow and cells for each value in the row
    //append a row to the table body
    let row = tbody.append("tr");

    //loop through each field in the dataRow and add
    //each value as a table cell(td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
}