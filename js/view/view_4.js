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

    this.loadingLogo = container.find("#loadingLogo");
    this.row = container.find(".row");

    this.update = function (obj) {

        if (obj == "error") {
            this.row.html("Something went wrong");
            this.row.show();
            this.loadingLogo.hide();
        }

        else if (model.getPendingDish() != undefined) {

            var guestCount = model.getNumberOfGuests();
            container.find("#totalGuests").html(guestCount);

            dish = model.getPendingDish();

            $("#dishDetail").html("<h1>" + dish.Title + "</h1>" + "<br><img src='" + dish.ImageURL + "' height='280' width='280'><br><br><p>" + dish.Description + "</p>");
            $("#dish-instructions").html(dish.Description);

            $('#view_4 #ingredient-list').html(" ");

            var ingredients = dish.Ingredients;
            var row;
            for (var i = 0; i < ingredients.length; i++) {
                row = "<tr>";
                row += "<td>" + (ingredients[i].Quantity * guestCount).toFixed(1) + " " + ingredients[i].Unit + "</td>";
                row += "<td>" + ingredients[i].Name + "</td>";
                row += "<td>SEK</td>";
                row += "<td>" + (ingredients[i].Quantity * guestCount).toFixed(1) + "</td>";
                row += "</tr>";
                $('#view_4 #ingredient-list').append(row);
            }

            row = "<tr>";
            row += "<td></td>";
            row += "<td></td> ";
            row += "<td>SEK</td>";
            row += "";
            row += "<td>" + (model.getDishPrice(dish) * guestCount).toFixed(1) + "</td>";
            row += "</tr>";
            $('#view_4 #ingredient-list').append(row);

            this.row.show();
            this.loadingLogo.hide();
        }
    }
}