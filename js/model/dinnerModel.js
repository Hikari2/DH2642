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

    this.addObserver = function (observer)
    {
        observers.push(observer);
    }



    this.setPendingDish = function (obj)
    {
        pendingDish = obj;

        if (pendingDish.RecipeID != undefined) {
            notifyObservers();
            return;
        }

        this.getDish(obj);
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
    this.getSelectedDish = function (RecipeID) {
        for (var i = 0; i < menu.length; i++)
            if (menu[i].id == RecipeID)
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
            for (var j = 0; j < menu[i].Ingredients.length; j++)
                result.push(menu[i].Ingredients[j]);
        return result;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        var tPrice = 0;
        var ingredients = this.getAllIngredients();

        for (var i = 0; i < ingredients.length; i++) {
            tPrice += ingredients[i].Quantity;
        }

        return (tPrice * guestCount);
    }

    //Returns the price of a dish
    this.getDishPrice = function (dish) {
        var cost = 0;

        for (var i = 0; i < dish.Ingredients.length; i++)
            cost += (dish.Ingredients[i].Quantity);

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
            if (menu[i].RecipeID == id)
                menu.splice(i, 1);
        }
        notifyObservers();
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

    this.getDish = function (RecipeID) {
        var url = "http://api.bigoven.com/recipe/" + RecipeID + "?api_key=" + apiKey;
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
