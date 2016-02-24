/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_1Controller = function (view, model) {

    view.newDinnerButton.on({
        "click": function () {
            $("#view_1").hide();
            $("#view_2").show();
            $("#view_3").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#FFAF32');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });
};