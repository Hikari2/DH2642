/* 
 * Java script for view 2
 */

var View_2 = function (container, model) {

    model.addDishToMenu(2);
    model.addDishToMenu(100);
    model.addDishToMenu(200);
    model.addObserver(this);
    this.container = container;
    this.guestCounter = container.find("#guestCounter");
    this.confirmButton = container.find("#confirmButton");

    this.update = function () {

        $('#view_2 #menuTable').html(" ");

        var menu = model.getFullMenu();
        var row = "<tr><th>Dish Name</th><th>Cost</th><th></th></tr>";
        $('#view_2 #menuTable').append(row);

        for (var i = 0; i < menu.length; i++) {
            row = "<tr class='menuRow'>";
            row += "<td><p class='nameCol'>" + menu[i].name + "</p></td>";
            row += "<td><p class='priceCol'>" + model.getDishPrice(menu[i].id) + "</p></td>";
            row += "<td><img id='"+menu[i].id+"' class='cancelButton' src = images/cross.png></td>";
            row += "</tr>";
            $('#view_2 #menuTable').append(row);
        }

        $('#view_2 #menuTable').append("<tr class='pendingDishRow'><td>Pending</td><td><p class='priceCol'>" + model.getDishPrice(111) + "</p></td></tr>");

        this.totalCost = container.find("#totalCost");

        this.totalCost.html(model.getTotalMenuPrice());
    };

    this.update();
}


