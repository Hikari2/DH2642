/* 
 * Java script for view 6
 */

var View_6 = function (container, model) {

    model.addObserver(this);
    this.container = container;
    this.returnButton = container.find("#returnButton");
    
    this.update = function () {

        $('#view_6 #mealTable').html(" ");

        var menu = model.getFullMenu();
        var row;
        for (var i = 0; i < menu.length; i++) {
            row = "<tr>";
            row += "<td><img src = " + menu[i].ImageURL + "></td>";
            row += "<td><h1>" + menu[i].Title + "</h1></td>";
            row += "<td><h3>Preparation</h3> </p>" + menu[i].Description + "</p></td>";
            row += "</tr>";
            $('#view_6 #mealTable').append(row);
        }

        container.find("#totalGuests").html(model.getNumberOfGuests());
    }
    
    this.update();
}