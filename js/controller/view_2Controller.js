/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_2Controller = function (view, model) {

    view.guestCounter.on('change', function () {
        model.setNumberOfGuests($(this).val());
    });

    view.confirmButton.on({
        "click": function () {
            $("#view_2").hide();
            $("#view_3").hide();
            $("#view_4").hide();
            $("#view_5").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });

    view.container.on('click', function (e) {
        if ($(e.target).hasClass('cancelButton')) {
            model.removeDishFromMenu(e.target.id);
        }
    });

    view.container.click(function (e) {
        if ($(e.target).hasClass('clickable')) {
            $("#view_4").show();
            model.setPendingDish((e.target || e.srcElement).id);
        }
    });
};
