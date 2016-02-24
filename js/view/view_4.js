/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_4 = function (container, model) {

    model.addObserver(this);

    this.backButton = container.find("#backButton");

    this.update = function (dishID) {

        var dish = model.getDish(dishID);

        if (dish === undefined)
            return;

        var iUrl = "images/" + dish.image;
        $("#dishDetail").html("<h1>" + dish.name + "</h1>" + "<br><img src='" + iUrl + "' height='280' width='280'><br><br><p>" + dish.description + "</p>");
        $("#dish-instructions").html(dish.description);


        $('#view_4 #ingredient-list').html(" ");

        var ingredients = dish.ingredients;
        var row;
        for (var i = 0; i < ingredients.length; i++) {
            row = "<tr>";
            row += "<td>" + ingredients[i].quantity + " " + ingredients[i].unit + "</td>";
            row += "<td>" + ingredients[i].name + "</td>";
            row += "<td>SEK</td>";
            row += "<td>" + ingredients[i].price + "</td>";
            row += "</tr>";
            $('#view_4 #ingredient-list').append(row);
        }

        container.find("#totalGuests").html(model.getNumberOfGuests());

        row = "<tr>";
        row += "<td></td>";
        row += "<td>SEK</td>";
        row += "";
        row += "<td>" + model.getDishPrice(dish.id) + "</td>";
        row += "</tr>";
        $('#view_4 #ingredient-list').append(row);
    }
    
    this.update();
    
    this.confirmButton = container.find("#confirmButton");
}