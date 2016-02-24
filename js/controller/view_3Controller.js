/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_3Controller = function (view, model) {

    view.typeSelector.on('change', function () {
        view.update();
    });

    view.searchButton.on({
        "click": function () {
            view.update();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });


    view.container.on({
        "click": function (e) {
            if ($(e.target).hasClass('dishImage')) {
                $("#view_3").hide();
                $("#view_4").show();
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
};

