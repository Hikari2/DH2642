/* 
 * Controller for view 1 (front page)
 */


var View_1Controller = function (mainCtrl, view, model) {


    view.newDinnerButton.on("click", function () {
        mainCtrl.showSelectDish();
    });

    this.show = function () {
        view.container.show();
    }
    this.hide = function () {
        view.container.hide();
    }
};