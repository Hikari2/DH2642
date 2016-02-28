/* 
 * Controller for view 1 (front page)
 */


var View_1Controller = function (mainCtrl, view, model) {


    view.newDinnerButton.on("click", function () {
        mainCtrl.showSelectDish();
    });

    this.show = function () {
        $("#view_1").show();
    }
    this.hide = function () {
        $("#view_1").hide();
        $("#main").css("background-image", "none");
    }
};