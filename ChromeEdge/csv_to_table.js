// from: https://datatables.net/plug-ins/dataRender/hyperLink

jQuery.fn.dataTable.render.hyperLink = function (
  anchorText,
  location,
  width,
  height
) {
  validateAndReturnDefaultIfFailed = function (item, defaultValue) {
    if (typeof item === "number") {
      return item;
    }

    if (typeof item === "string") {
      return parseInt(item) ? item : defaultValue;
    }

    return defaultValue;
  };

  var anchorText = anchorText || "Click here";
  var location = location || "newTab";
  var width = validateAndReturnDefaultIfFailed(width, "600");
  var height = validateAndReturnDefaultIfFailed(height, "400");

  return function (data, type, row) {
    // restriction only for table display rendering
    if (type !== "display") {
      return data;
    }

    var url = data;

    try {
      url = new URL(data);

      switch (location) {
        case "newTab":
          return (
            '<a title="' +
            url +
            '" href="' +
            url +
            '" target="_blank">' +
            anchorText +
            "</a>"
          );
        case "popup":
          return (
            '<a title="' +
            url +
            '" href="' +
            url +
            '" target="popup" rel="noopener noreferrer" onclick="window.open(\'' +
            url +
            "', '" +
            anchorText +
            "', 'width=" +
            width +
            ",height=" +
            height +
            "'); return false;\">" +
            anchorText +
            "</a>"
          );
        default:
          return (
            '<a title="' +
            url +
            '" href="' +
            url +
            '" target="_blank">' +
            anchorText +
            "</a>"
          );
      }
    } catch (e) {
      return url;
    }
  };
};

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
    scrollY: 363,
    scrollX: false,
    info: false,
    responsive: true,
    colReorder: {
      order: [0, 1, 3, 2],
    },
    language: {
      searchPlaceholder: "name, website, or code",
    },
    columnDefs: [
      {
        targets: 2,
        render: $.fn.dataTable.render.hyperLink(),
      },
      { orderable: false, targets: 2 },
    ],
    /* lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ], */
  });
  //console.log("DataTable finished");
}

Papa.parse("data/codes.csv", {
  header: true,
  download: true,
  skipEmptyLines: "greedy",
  delimiter: ",",
  error: true,
  fastMode: true,
  complete: function (results) {
    //console.log(results.meta.fields);
    //console.log("Parsing complete:", results.data);
    createTable(results, DataTable);
  },
});
