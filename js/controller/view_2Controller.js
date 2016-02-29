/* 
 * Controller for view 2
 */


var View_2Controller = function (mainCtrl, view, model) {

    view.guestCounter.on('change', function () {
        model.setNumberOfGuests($(this).val());
    });

    view.confirmButton.on("click", function () {
        mainCtrl.showDinnerOverview();
        model.removePendingDish();
    });

    view.container.on('click', function (e) {
        if ($(e.target).hasClass('cancelButton')) {
            model.removeDishFromMenu(e.target.id);
        }
    });

    this.show = function () {
        view.container.show();
    }
    this.hide = function () {
        view.container.hide();
    }
};
