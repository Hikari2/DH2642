

/* global id */

var View_1Controller = function (view, model) {

    view.newDinnerButton.on({
        "click": function () {
            $("#view_1").hide();
            $("#view_2").show();
            $("#view_3").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#FFAF32');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });
}

var View_2Controller = function (view, model) {

    view.guestCounter.on('change', function () {
        model.setNumberOfGuests($(this).val());
    });

    view.confirmButton.on({
        "click": function () {
            $("#view_2").hide();
            $("#view_3").hide();
            $("#view_4").hide();
            $("#view_5").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });


    view.container.on('click', function (e) {
        if ($(e.target).hasClass('cancelButton')) {
            model.removeDishFromMenu(e.target.id);
        }
    });


    view.container.click(function (e) {
        if ($(e.target).hasClass('clickable')) {
            $("#view_4").show();
            model.setPendingDish(e.target.id);
        }
    });
}

var View_3Controller = function (view, model) {
    
    view.typeSelector.on('change', function () {
        view.update();
    });

    view.searchButton.on({
        "click": function () {
            view.update();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });


    view.container.on({
        "click": function (e) {
            if ($(e.target).hasClass('dishImage')) {
                $("#view_3").hide();
                $("#view_4").show();
            }
        },
        "mouseover": function (e) {
            if ($(e.target).hasClass('dishImage')) {
                $(e.target).css('background-color', '#8B0000');
            }
        },
        "mouseout": function (e) {
            if ($(e.target).hasClass('dishImage')) {
                $(e.target).css('background-color', '');
            }
        }
    });
}

var View_4Controller = function (view, model) {

    view.backButton.click(function () {
        $("#view_4").hide();
        $("#view_3").show();
    });

    view.confirmButton.click(function () {
        //model.addDishToMenu(view.id);
        $("#view_4").hide();
        $("#view_3").show();
    });

    dishes = model.getFullMenu();
    var dishesType = [];
    var pendingDish = [];
    for (var i = 0; i < dishes.length; i++) {
        dishesType.push(model.getDish(dishes[i]));
    }

    for (var i = 0; i < dishesType.length; i++) {
        if (dishesType[i].type === id) {
            pendingDish.push(dishesType[i]);
        }
    }

    model.pendingDish(pendingDish);
    notifyObservers();
};


var View_5Controller = function (view, model) {

    view.returnButton.on({
        "click": function () {
            $("#view_2").show();
            $("#view_3").show();
            $("#view_5").hide();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });

    view.printButton.on({
        "click": function () {
            $("#view_5").hide();
            $("#view_6").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });
}

var View_6Controller = function (view, model) {

    view.returnButton.on({
        "click": function () {
            $("#view_2").show();
            $("#view_3").show();
            $("#view_6").hide();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });
}