//ExampleView Object constructor
var ExampleView = function (container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.numberOfGuests = container.find("#numberOfGuests");
    this.plusButton = container.find("#plusGuest");
    this.minusButton = container.find("#minusGuest");

    this.numberOfGuests.html(model.getNumberOfGuests());
}

var View_1 = function (container, model) {
    this.newDinnerButton = container.find("#newDinnerButton");
}

var View_2 = function (container, model) {
    model.addDishToMenu(1);
    model.addDishToMenu(2);
    model.addDishToMenu(100);
    model.addDishToMenu(202);
    model.addDishToMenu(201);

    var menu = model.getFullMenu();

    var table = document.getElementById("menuTable");

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
}

var View_3 = function (container, model) {

    var dishes = model.getAllDishes("main dish");
    var grid = document.getElementById("grid");

    for (i = 0; i < dishes.length; i++) {
        var column = document.createElement("div");
        column.className = "col-md-2";

        var image = document.createElement("IMG");
        image.src = "images/" + dishes[i].image;
        column.appendChild(image);

        var name = document.createElement("p");
        name.innerHTML = dishes[i].name;
        column.appendChild(name);

        var description = document.createElement("span");
        description.innerHTML = "Lorem ipsum dolor sit omet, consectetur odipiscing elit, sed do siusmod tempor incididunt ut labore et dolore";
        column.appendChild(description);

        grid.appendChild(column);
    }
}

var View_4 = function (container, model) {
    this.backButton = container.find("#backToSelectDish");
    this.confirmbutton = container.find("#confirmDish");
    this.dishDetailsView = container.find("#dishDetailsView");

    this.update = function (result) {

        if (result != undefined) {
            var iUrl = "";

            iUrl = "images/" + dishes[i].image;

            $("#dishDetail").html(result.Title + "<br><img src='" + iUrl + "' height='280' width='280'><br><br><p>" + result.Instructions + "</p>");

            var string = "";
            var ingredients = result.Ingredients;

            for (var i = 0; i < ingredients.length; i++) {
                string = string + (parseFloat(ingredients[i].Quantity).toFixed(2) + " " + ingredients[i].MetricUnit + " " + ingredients[i].Name + "<font style='position:absolute; right:11px;'>SEK " + parseFloat(ingredients[i].Quantity).toFixed(2) + "</font><br>");
            }

            var tPrice = 0;

            $("#dishRecipe").html(string);

            for (var i = 0; i < ingredients.length; i++) {
                tPrice += ingredients[i].Quantity;
            }
        }
        $("#dishPrice").html("<font style='float:right;'>SEK " + parseFloat(totalCost).toFixed(2) + "</font>");

    }
}

var View_5 = function (container, model) {
    this.backButton = container.find("#goBackAndEditDinner");
    this.confirmbutton = container.find("#printFullRecipe");

    this.update = function (result) {

        var item = model.getSelectedDish('Starters');
        if (item != undefined) {
            container.find("#appPic").html("<img src='" + item.ImageURL + "' height='150' width='150'>");
            container.find("#appTitle").html(item.Title.substring(0, 20) + "...");
        }

        item = model.getSelectedDish('Main Dish');
        if (item != undefined) {
            container.find("#mainPic").html("<img src='" + item.ImageURL + "' height='150' width='150'>");
            container.find("#mainTitle").html(item.Title.substring(0, 20) + "...");
        }

        item = model.getSelectedDish('Desserts');
        if (item != undefined) {
            container.find("#desPic").html("<img src='" + item.ImageURL + "' height='150' width='150'>");
            container.find("#desTitle").html(item.Title.substring(0, 20) + "...");
        }

        container.find("#totalGuests").html(model.getNumberOfGuests());

        container.find("#starSum").html(model.getTotalMenuPrice('Starters'));
        container.find("#mainSum").html(model.getTotalMenuPrice('Main Dish'));
        container.find("#desSum").html(model.getTotalMenuPrice('Desserts'));

        container.find("#tPrice").html(model.getTotalMenuPrice());
    }
}

var View_6 = function (container, model) {

}