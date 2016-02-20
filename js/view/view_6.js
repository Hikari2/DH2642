/* 
 * Java script for view 6
 */

var View_6 = function (container, model) {
    this.update = function () {
        var menu = model.getFullMenu();
        var row; 
        for (var i = 0; i < menu.length; i++) {
            row = "<tr>";
            row += "<td><img src = images/"+menu[i].image+"></td>";
            row += "<td><h1>"+menu[i].name+"</h1></td>";
            row += "<td><h3>Preparation</h3> <p>"+menu[i].description+"</p></td>";
            row += "</tr>";
            $('#view_6 #mealTable').append(row);
        }
        
        container.find("#totalGuests").html(model.getNumberOfGuests());
    }
    this.update();
}