//DinnerModel Object constructor
var DinnerModel = function () {

    var guestCount = 1;
    var menu = [];
    var pendingDish;

    var observers = [];
    var apiKey = "1hg3g4Dkwr6pSt22n00EfS01rz568IR6";

    var notifyObservers = function (obj)
    {
        for (var i = 0; i < observers.length; i++)
        {
            observers[i].update(obj);
        }
    }

    // Add new obs. to array
    this.addObserver = function (observer)
    {
        observers.push(observer);
    }

    this.setPendingDish = function (id)
    {
        pendingDish = id;
        notifyObservers(id);
    }

    this.getPendingDish = function ()
    {
        return pendingDish;
    }

    this.removePendingDish = function ()
    {
        pendingDish = undefined;
        notifyObservers();
    }

    this.setNumberOfGuests = function (num) {
        guestCount = num;
        notifyObservers();
    }

    // should return fl
    this.getNumberOfGuests = function () {
        return guestCount;
    }

    //Returns the dish that is on the menu for selected type 
    this.getSelectedDish = function (type) {
        for (var i = 0; i < menu.length; i++)
            if (menu[i].type == type)
                return menu[i];
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function () {
        var result = [];
        for (var i = 0; i < menu.length; i++)
            for (var j = 0; j < menu[i].ingredients.length; j++)
                result.push(menu[i].ingredients[j]);

        return result;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        var tPrice = 0;
        var ingredients = this.getAllIngredients();
        for (var i = 0; i < ingredients.length; i++) {
            tPrice += ingredients[i].price;
        }
        return (tPrice * guestCount);
    }

    this.getDishPrice = function (id) {
        var cost = 0;
        var dish = this.getDish(id);

        for (var j = 0; j < dish.ingredients.length; j++)
            cost += (dish.ingredients[j].price);
        return cost;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {
        var type;   
        var newDish;

        for (var i = 0; i < dishes.length; i++) {
            if (dishes[i].id == id) {
                type = dishes[i].type;
                newDish = dishes[i];
            }
        }

        for (var j = 0; j < menu.length; j++) {
            if (menu[j].type == type)
                menu.splice(j, 1);
        }

        menu.push(newDish);
        notifyObservers();

    }

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        for (var i = 0; i < menu.length; i++) {
            dish = menu[i];
            if (dish.id == id)
                menu.splice(i, 1);
        }
        notifyObservers();

    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter) {
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=10" + "&any_kw=" + filter + "&any_kw=" + type + "&api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: url,
            cache: false,
            success: function (data) {
                notifyObservers(data);
            },
            error: function (xhr, status, error) {
                console.log(xhr);
                notifyObservers("error");
            }
        });
    }
    
    this.getDish = function (type, filter) {
         var url = "http://api.bigoven.com/recipe/" + type + "?api_key=" + apiKey;
         var dinnerModel = this;    
         $.ajax({
	        type: "GET",
	        dataType: 'json',
	        cache: true,
	        url: url,
	        success: function (data) {
	        var dish = data;
            	var recipe = {
                            'id':dish.RecipeID,
                            'name':dish.Title,
                            'type':dish.Category,
                            'image':dish.ImageURL,
                            'description':dish.Description,
                            'instruction':dish.Instructions,
                            }

		var result = [];
		var tPrice = 0;

		menu.Ingredients.forEach(function (ingredients) {
                    var quantity = ingredients.Quantity;
                    var price = quantity;
                   tPrice += price;
                    var ingredients = {
                                    'name':ingredients.Name,
                                    'quantity':quantity,
                                    'unit':ingredients.Unit,
                                    'price':price
                                    }
                    ingredients.push(ingredients);
                });

		recipe.ingredients = result;
		recipe.price = tPrice;
                
		dinnerModel.notifyObservers(recipe);
		currentDish = recipe;
		return recipe;
            }
	    });
	};
    }