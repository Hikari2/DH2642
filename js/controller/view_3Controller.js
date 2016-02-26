/* 
 * Controller for view 3
 */


var View_3Controller = function (mainCtrl, view, model) {

    view.typeSelector.on('change', function () {
        view.update();
    });

    view.searchButton.on("click", function () {
        view.update();
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

