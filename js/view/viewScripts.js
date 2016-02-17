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
    model.addDishToMenu(2);
    model.addDishToMenu(1);
    model.addDishToMenu(100);
    model.addDishToMenu(202);
    model.addDishToMenu(201);

    this.guestCounter = container.find("#guestCounter");

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

    this.update();
}

var View_3 = function (container, model) {

    var dishes = model.getAllDishes("main dish");
    var grid = document.getElementById("grid");

    if (grid == undefined)
        return;

    for (i = 0; i < dishes.length; i++) {
        var column = document.createElement("div");
        column.className = "col-md-4";

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
    //this.backButton = container.find("#backToSelectDish");
    //this.confirmbutton = container.find("#confirmDish");
    //this.dishDetailsView = container.find("#dishDetailsView");

    this.update = function (dishID) {

        var dish = model.getDish(dishID);

        if (dish == undefined)
            return;

        var iUrl = "images/" + dish.image;

        $("#dishDetail").html("<h1>" + dish.name + "</h1>" + "<br><img src='" + iUrl + "' height='280' width='280'><br><br><p>" + dish.description + "</p>");

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

var View_5 = function (container, model) {
    //this.backButton = container.find("#goBackAndEditDinner");
    //this.confirmbutton = container.find("#printFullRecipe");

    this.update = function () {
        var dish = model.getSelectedDish('starter');
        if (dish != undefined) {
            container.find("#appPic").html("<img src='" + "images/" + dish.image + "' height='150' width='150'>");
            container.find("#appName").html(dish.name.substring(0, 20));
        }

        dish = model.getSelectedDish('main dish');
        if (dish != undefined) {
            container.find("#mainPic").html("<img src='" + "images/" + dish.image + "' height='150' width='150'>");
            container.find("#mainName").html(dish.name.substring(0, 20));
        }

        dish = model.getSelectedDish('dessert');
        if (dish != undefined) {
            container.find("#desPic").html("<img src='" + "images/" + dish.image + "' height='150' width='150'>");
            container.find("#desName").html(dish.name.substring(0, 20));
        }

        container.find("#totalGuests").html(model.getNumberOfGuests());

        var starter = model.getSelectedDish('starter');
        var main = model.getSelectedDish('main dish');
        var desert = model.getSelectedDish('dessert');

        container.find("#starSum").html(model.getDishPrice(starter.id));
        container.find("#mainSum").html(model.getDishPrice(main.id));
        container.find("#desSum").html(model.getDishPrice(desert.id));

        container.find("#totalCost").html(model.getTotalMenuPrice());
    }

    this.update();
}

var View_6 = function (container, model) {
    this.backButton = container.find("#goBackAndEditDinner");

    
       var menu = model.getFullMenu();
        for (dish in menu) {
            if (menu[dish].Category == 'starter') {
                container.find("#starPic1").html("<img src='" + menu[dish].ImageURL + "'height='20' width='20'>");
                container.find("#starName1").html(menu[dish].name);
                //document.write(Preparation);
                container.find("#starPrep1").html("Preparation");
                container.find("#starDesc1").html(menu[dish].description);
            }
            if (menu[dish].Category == 'main dish') {
                container.find("#mainPic2").html("<img src='" + menu[dish].ImageURL + "'height='20' width='20'>");
                container.find("#mainName2").html(menu[dish].name);
                container.find("#mainPrep2").html("Preparation");
                container.find("#mainDesc2").html(menu[dish].description);
            }
            if (menu[dish].Category == 'dessert') {
                container.find("#desPic3").html("<img src='" + menu[dish].ImageURL + "'height='20' width='20'>");
                container.find("#desName3").html(menu[dish].name);
                container.find("#desPrep3").html("Preparation");
                container.find("#desDesc3").html(menu[dish].description);
            }
        }
}