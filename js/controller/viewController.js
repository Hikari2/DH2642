

var View_1Controller = function (view, model) {

    view.newDinnerButton.on('click', function () {
        $("#view_1").hide();
        $("#view_2").show();
        $("#view_3").show();
    });
}

var View_2Controller = function (view, model) {

    view.guestCounter.on('change', function () {
        model.setNumberOfGuests($(this).val());
        view.update();
    });

    view.confirmButton.on('click', function () {
        $("#view_2").hide();
        $("#view_3").hide();
        $("#view_4").hide();
        $("#view_5").show();
    });
}

var View_3Controller = function (view, model) {

    view.searchButton.on('click', function () {
        view.update();
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
                $(e.target).css('background-color', '#000000');
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

}

var View_5Controller = function (view, model) {

    view.returnButton.on('click', function () {
        $("#view_2").show();
        $("#view_3").show();
        $("#view_5").hide();
    });

    view.printButton.on('click', function () {
        $("#view_5").hide();
        $("#view_6").show();
    });

}

var View_6Controller = function (view, model) {

    view.returnButton.on('click', function () {
        $("#view_2").show();
        $("#view_3").show();
        $("#view_6").hide();
    });
}