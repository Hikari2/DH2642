//DinnerModel Object constructor
var DinnerModel = function () {

    var guestCount = 1;
    var menu = [];
    var pendingDish;

    var apiKey = "r02x0R09O76JMCMc4nuM0PJXawUHpBUL";
    
    var observers = [];
    
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
        this.getDish(id);
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
    this.getSelectedDish = function (id) {
        for (var i = 0; i < menu.length; i++)
            if (menu[i].id == id)
                return menu[i];
        notifyObservers(id);
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function (id) {
        
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

    //Returns the price of a dish
    this.getDishPrice = function (dish) {
        var cost = 0;

        for (var i = 0; i < dish.Ingredients.length; i++)
            cost += (dish.Ingredients[i].MetricQuantity);

        return cost;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (newDish) {

        for (var i = 0; i < menu.length; i++) {
            if (menu[i].Category == newDish.Category)
                menu.splice(i, 1);
        }
        menu.push(newDish);
    }

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {

        for (var i = 0; i < menu.length; i++) {
            if (menu[i].IngredientID == id)
                menu.splice(i, 1);
        }
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter) {
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=50" + "&any_kw=" + filter + "&any_kw=" + type + "&api_key=" + apiKey;
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

    this.getDish = function (id) {
        var url = "http://api.bigoven.com/recipe/" + id + "?api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                notifyObservers(data);
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            }
        });
    }
}   