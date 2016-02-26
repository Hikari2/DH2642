/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_4 = function (container, model) {

    model.addObserver(this);
    this.container = container;
    this.backButton = container.find("#backButton");
    this.confirmButton = container.find("#confirmButton");

    this.update = function () {

        var guestCount = model.getNumberOfGuests();
        container.find("#totalGuests").html(guestCount);

        var pendingDish = model.getPendingDish();
        
        if (pendingDish == undefined)
            return;
        
        var dish = model.getDish(pendingDish);


        var iUrl = "images/" + dish.image;
        $("#dishDetail").html("<h1>" + dish.name + "</h1>" + "<br><img src='" + iUrl + "' height='280' width='280'><br><br><p>" + dish.description + "</p>");
        $("#dish-instructions").html(dish.description);

        $('#view_4 #ingredient-list').html(" ");

        var ingredients = dish.ingredients;
        var row;
        for (var i = 0; i < ingredients.length; i++) {
            row = "<tr>";
            row += "<td>" + (ingredients[i].quantity * guestCount).toFixed(1) + " " + ingredients[i].unit + "</td>";
            row += "<td>" + ingredients[i].name + "</td>";
            row += "<td>SEK</td>";
            row += "<td>" + (ingredients[i].price * guestCount).toFixed(1) + "</td>";
            row += "</tr>";
            $('#view_4 #ingredient-list').append(row);
        }

        row = "<tr>";
        row += "<td></td>";
        row += "<td></td> ";
        row += "<td>SEK</td>";
        row += "";
        row += "<td>" + model.getDishPrice(dish.id) * guestCount + "</td>";
        row += "</tr>";
        $('#view_4 #ingredient-list').append(row);
    }
}