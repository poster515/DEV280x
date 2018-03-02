// Execute when the DOM is fully loaded
$(document).ready(function() {

    $('#settings_menu').on('change', function(x) {

        var e = document.getElementById("settings_menu");
        var setting = e.options[e.selectedIndex].text; //obtain value that the select menu has

        // Delete any list items in the table, if there were any
        $(settings_table).empty();

        switch(setting){
            case("Password"):
                $("#settings_table").append("<li><input type='text' name='password' placeholder='New password' /></li>");
                $("#settings_table").append("<li><input type='text' name='confirm_password' placeholder='Confirm password' /></li>");
                break;

            case("Email"):
                $("#settings_table").append("<li><input type='text' name='email' placeholder='New email' /></li>");
                break;

            case("Phone"):
                $("#settings_table").append("<li><input type='text' name='phone' placeholder='New phone' /></li>");
                break;

            case("Bench 1 Rep Max"):
                $("#settings_table").append("<li><input type='text' name='bench1RM' placeholder='New bench 1 rep max' /></li>");
                break;

            case("Squat 1 Rep Max"):
                $("#settings_table").append("<li><input type='text' name='squat1RM' placeholder='New squat 1 rep max' /></li>");
                break;

            case("Deadlift 1 Rep Max"):
                $("#settings_table").append("<li><input type='text' name='deadlift1RM' placeholder='New deadlift 1 rep max' /></li>");
                break;
        }
    });
});