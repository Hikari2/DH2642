
var View_2Controller = function (view, model) {

    view.guestCounter.on('change', function (eventObject ) {
        model.setNumberOfGuests(2);
        view.update(); 
    });
}