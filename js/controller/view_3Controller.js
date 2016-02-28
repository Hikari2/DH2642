/* 
 * Controller for view 3
 */


var View_3Controller = function (mainCtrl, view, model) {

    model.getAllDishes(view.typeSelector.val(), view.searchField.val());

    view.typeSelector.on('change', function () {
        model.getAllDishes(view.typeSelector.val(), view.searchField.val());
    });

    view.searchButton.on("click", function () {
        model.getAllDishes(view.typeSelector.val(), view.searchField.val());
    });

    view.container.on({
        "click": function (e) {
            if ($(e.target).hasClass('dishImage')) {
                mainCtrl.showDishDetail();
                model.setPendingDish((e.target || e.srcElement).id);
            }
        },
        "mouseover": function (e) {
            if ($(e.target).hasClass('dishImage')) {
                $(e.target).css('background-color', 'black');
            }
        },
        "mouseout": function (e) {
            if ($(e.target).hasClass('dishImage')) {
                $(e.target).css('background-color', '');
            }
        }
    });

    this.show = function () {
        $("#view_3").show();
    }
    this.hide = function () {
        $("#view_3").hide();
    }
};

