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