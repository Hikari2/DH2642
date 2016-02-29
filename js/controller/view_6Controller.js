/* 
 * Controller for view 6 
 */


var View_6Controller = function (mainCtrl, view, model) {

    view.returnButton.on("click", function () {
        mainCtrl.showSelectDish();
    });

    this.show = function () {
        view.container.show();
    }
    this.hide = function () {
        view.container.hide();
    }
};