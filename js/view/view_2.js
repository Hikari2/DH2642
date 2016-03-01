/* 
 * Java script for view 2
 */

var View_2 = function (container, model) {

    model.addObserver(this);
    this.container = container;
    this.guestCounter = container.find("#guestCounter");
    this.confirmButton = container.find("#confirmButton");

    this.update = function (obj) {

        var guestCount = model.getNumberOfGuests();
        container.find("#totalGuests").html(guestCount);

        var pendingDish = model.getPendingDish();

        $('#view_2 #menuTable').html(" ");

        var menu = model.getFullMenu();
        
        var row = "<tr><th>Dish Name</th><th>Cost</th><th></th></tr>";
        $('#view_2 #menuTable').append(row);

        for (var i = 0; i < menu.length; i++) {
            row = "<tr class='menuRow'>";
            row += "<td><p class='nameCol'>" + menu[i].Title + "</p></td>";
            row += "<td><p class='priceCol'>";
            row += (model.getDishPrice(menu[i]) * guestCount).toFixed(1) + "</p></td>";
            row += "<td><img id='" + menu[i].RecipeID + "' class='cancelButton' src = images/cross.png></td>";
            row += "</tr>";
            $('#view_2 #menuTable').append(row);
        }

        if (pendingDish != undefined)
            $('#view_2 #menuTable').append("<tr class='pendingDishRow' style='border: solid'><td><p>Pending</p></td><td><p class='priceCol'>" + (model.getDishPrice(obj) * guestCount).toFixed(1) + "</p></td><td></td></tr>");
        else
            $('#view_2 #menuTable').append("<tr class='pendingDishRow'><td><p>Pending</p></td><td><p class='priceCol'></p></td><td></td></tr>");

        this.totalCost = container.find("#totalCost");

         this.totalCost.html((model.getTotalMenuPrice()).toFixed(1));
        
    };

    this.update();
}


