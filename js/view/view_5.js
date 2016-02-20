/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_5 = function (container, model) {
    //this.backButton = container.find("#goBackAndEditDinner");
    //this.confirmbutton = container.find("#printFullRecipe");

    this.update = function () {
        var menu = model.getFullMenu();

        var row = "";
        for (var i = 0; i < menu.length; i++) {
            row = "<div class=col-md-2>";
            row += "<img src='" + "images/" + menu[i].image + "'>";
            row += "<h1>" + menu[i].name + "</h1>";
            row += "<p>" + model.getDishPrice(menu[i].id) + "<span> SEK</span></p>";
            row += "</div>";
            $('#view_5 #mid').append(row);
        }
        
        var total = 0;
        for (var j=0; j<menu.length; j++){
            total += model.getDishPrice(menu[j].id) ;
        }

        row = "<div class=col-md-1><h3>Total</h3>";
        row += "<p><span>"+total+"</span> SEK</p></div>";
        $('#view_5 #mid').append(row);
        
        container.find("#totalGuests").html(model.getNumberOfGuests());
    }

    this.update();
}