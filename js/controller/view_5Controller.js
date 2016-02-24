/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_5Controller = function (view, model) {

    view.returnButton.on({
        "click": function () {
            $("#view_2").show();
            $("#view_3").show();
            $("#view_5").hide();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });

    view.printButton.on({
        "click": function () {
            $("#view_5").hide();
            $("#view_6").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });
};
