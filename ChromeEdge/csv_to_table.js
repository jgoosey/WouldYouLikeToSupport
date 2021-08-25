// from: https://github.com/pavelsr/csv-to-DataTableer/blob/master/index.js

function createTable(tableData, callback) {
  var table = $("table#codes_table");

  table.empty();

  var header_columns = ["Name", "Website", "URL", "Code"];
  var thead_tr = $("<tr>");
  $.each(header_columns, function (x, hcol) {
    $("<th>").text(hcol).appendTo(thead_tr);
  });
  table.append($("<thead>").append(thead_tr));

  var tbody = $("<tbody>");
  $.each(tableData.data, function (x, row) {
    var tr = $("<tr>");
    $.each(row, function (y, col) {
      tr.append($("<td>").text(col));
    });
    tbody.append(tr);
  });

  table.append(tbody);
  callback();
}

function DataTable() {
  $("#codes_table").DataTable({
    paging: true,
    scrollY: 400,
    scrollX: false,
    info: false,
    language: {
      searchPlaceholder: "Search by name, website, or code!",
    },
  });
  console.log("DataTable finished");
}

Papa.parse("data/codes.csv", {
  header: true,
  download: true,
  skipEmptyLines: "greedy",
  delimiter: ",",
  error: true,
  fastMode: true,
  // quoteChar: '"',
  complete: function (results) {
    // console.log(results.meta.fields);
    console.log("Parsing complete:", results.data);
    createTable(results, DataTable);
  },
});
