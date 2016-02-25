/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_4Controller = function (view, model) {
    
    view.backButton.on({
        "click": function () {
        model.addDishToMenu(model.getPendingDish());
        model.removePendingDish();
        $("#view_4").hide();
        $("#view_3").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });
    
    
    view.confirmButton.on({
        "click": function () {
        model.addDishToMenu(model.getPendingDish());
        model.removePendingDish();
        $("#view_4").hide();
        $("#view_3").show();
        },
        "mouseover": function (e) {
            $(e.target).css('background-color', '#ffb732');
        },
        "mouseout": function (e) {
            $(e.target).css('background-color', 'orange');
        }
    });
};
