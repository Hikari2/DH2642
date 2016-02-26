/* 
 * Controller for view 4 
 */


var View_4Controller = function (mainCtrl, view, model) {

    view.backButton.click(function () {
        mainCtrl.showSelectDish();
        model.removePendingDish();
    });

    view.confirmButton.click(function () {
        mainCtrl.showSelectDish();
        model.addDishToMenu(model.getPendingDish());
        model.removePendingDish();
    });

    this.show = function () {
        $("#view_4").show();
    }
    this.hide = function () {
        $("#view_4").hide();
    }
};
