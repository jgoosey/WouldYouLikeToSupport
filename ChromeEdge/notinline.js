// from: https://github.com/derekeder/csv-to-html-table/blob/master/index.html

function format_link(link) {
  if (link) return "<a href='" + link + "' target='_blank'>" + link + "</a>";
  else return "";
}

CsvToHtmlTable.init({
  csv_path: "data/codes.csv",
  element: "table-container",
  allow_download: false,
  csv_options: {
    separator: ",",
    delimiter: '"',
  },
  datatables_options: {
    paging: true,
    scroller: true,
  },
  custom_formatting: [[2, format_link]],
});
