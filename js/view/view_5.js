/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View_5 = function (container, model) {

    model.addObserver(this);
    this.returnButton = container.find("#returnButton");
    this.printButton = container.find("#printButton");

    this.update = function () {

        var menu = model.getFullMenu();

        $('#view_5 #mid').html(" ");

        var row = "";
        for (var i = 0; i < menu.length; i++) {
            row = "<div class=col-xs-2>";
            row += "<img src='" + "images/" + menu[i].image + "'>";
            row += "<h1>" + menu[i].name + "</h1>";
            row += "<p>" + model.getDishPrice(menu[i].id) + "<span> SEK</span></p>";
            row += "</div>";
            $('#view_5 #mid').append(row);
        }

        var total = 0;
        for (var j = 0; j < menu.length; j++) {
            total += model.getDishPrice(menu[j].id);
        }

        row = "<div class=col-xs-1><h3>Total</h3>";
        row += "<p><span>" + total + "</span> SEK</p></div>";
        $('#view_5 #mid').append(row);

        container.find("#totalGuests").html(model.getNumberOfGuests());
    }

    this.update();
}