// Execute when the DOM is fully loaded
$(document).ready(function() {

    var myTable = document.getElementById("body_table");

    // Delete any list items in the table, if there were any
    $(body_table).empty();

    $.getJSON("/history", function(data, textStatus, jqXHR) {
        $.each(data, function (i) {
            // Create an empty <tr> element and add it to the next position of the table:
            var row = myTable.insertRow(i);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);

            // Add some text to the new cells:
            cell1.innerHTML = data[i].name;
            cell2.innerHTML = data[i].email;
        });
    });
});
