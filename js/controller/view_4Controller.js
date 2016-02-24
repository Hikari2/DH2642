/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_4Controller = function (view, model) {

    view.backButton.click(function () {
        $("#view_4").hide();
        $("#view_3").show();
        model.removePendingDish();      
        });

    view.confirmButton.click(function () {
        model.addDishToMenu(model.getPendingDish());
        model.removePendingDish();
        $("#view_4").hide();
        $("#view_3").show();
        });
};
