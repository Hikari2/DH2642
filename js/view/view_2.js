/* 
 * Java script for view 2
 */

var View_2 = function (container, model) {

    model.addDishToMenu(2);
    model.addDishToMenu(100);
    model.addDishToMenu(200);
    this.guestCounter = container.find("#guestCounter");
    this.confirmButton = container.find("#confirmButton");

    this.update = function () {
        var menu = model.getFullMenu();

        var table = document.getElementById("menuTable");

        if (table == undefined)
            return;

        table.innerHTML = " <tr><th>Dish Name</th><th>Cost</th></tr>";

        for (i = 0; i < menu.length; i++) {
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

            var c1 = row.insertCell(0);
            c1.innerHTML = menu[i].name;

            var c2 = row.insertCell(1);
            c2.innerHTML = model.getDishPrice(menu[i].id);
        }

        this.totalCost = container.find("#totalCost");

        this.totalCost.html(model.getTotalMenuPrice());
    };

    this.hide = function () {
        $("#view_2").hide();
    };

    this.update();
}


