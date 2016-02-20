/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_4 = function (container, model) {
    //this.backButton = container.find("#backToSelectDish");
    //this.confirmbutton = container.find("#confirmDish");
    //this.dishDetailsView = container.find("#dishDetailsView");

    this.update = function (dishID) {

        var dish = model.getDish(dishID);

        if (dish == undefined)
            return;

        var iUrl = "images/" + dish.image;

        $("#dishDetail").html("<h1>" + dish.name + "</h1>" + "<br><img src='" + iUrl + "' height='280' width='280'><br><br><p>" + dish.description + "</p>");
        $("#dish-instructions").html(dish.description);
        var table = document.getElementById("ingredient-list");

        if (table == undefined)
            return;

        table.innerHTML = "";
        var ingredients = dish.ingredients;

        for (i = 0; i < ingredients.length; i++) {
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

            var c1 = row.insertCell(0);
            c1.innerHTML = ingredients[i].quantity + " " + ingredients[i].unit;

            var c2 = row.insertCell(1);
            c2.innerHTML = ingredients[i].name;

            var c3 = row.insertCell(2);
            c3.innerHTML = "SEK ";

            var c4 = row.insertCell(3);
            c4.innerHTML = ingredients[i].price;
        }

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var c1 = row.insertCell(0);
        c1.innerHTML = "<button>Confirm Dish</button>";

        var c2 = row.insertCell(1);
        c2.innerHTML = " ";

        var c3 = row.insertCell(2);
        c3.innerHTML = "SEK ";

        var c4 = row.insertCell(3);
        c4.innerHTML = model.getDishPrice(dish.id);

        container.find("#totalGuests").html(model.getNumberOfGuests());
    }
    this.update(1);
}