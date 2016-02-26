/* 
 * Controller for view 5 
 */


var View_5Controller = function (mainCtrl, view, model) {

    view.returnButton.on("click", function () {
        mainCtrl.showSelectDish();
    });

    view.printButton.on("click", function () {
        mainCtrl.dinnerInstruction();
    });

    this.show = function () {
        $("#view_5").show();
    }
    this.hide = function () {
        $("#view_5").hide();
    }
};
