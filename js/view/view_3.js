/* 
 * Java script for view 3 i.e. the page listing all the dishes
 */

var View_3 = function (container, model) {
    
    model.addObserver(this);
    this.container = container;
    this.typeSelector = container.find("#typeSelector");
    this.searchField = container.find("#searchField");
    this.searchButton = container.find("#searchButton");

    this.update = function () {
        var dishes = model.getAllDishes(this.typeSelector.val(), this.searchField.val());
        var i = 0;
        var row;
        $("#view_3 #dishTable").html("<tr></tr>");
        while (true) {
            row = "<tr>";
            for (var j = 0; j < 3; j++) {
                if (dishes[i * 3 + j] == undefined) {
                    row += "</tr>";
                    $("#view_3 #dishTable").append(row);
                    return;
                }
                row += "<td><div class='col'><img  class='dishImage' src = images/" + dishes[i * 3 + j].image + ">";
                row += "<p>" + dishes[i * 3 + j].name + "</p>";
            }
            row += "</tr>";
            $("#view_3 #dishTable").append(row);
            i++;
        }
    };

    this.update();

    this.hide = function () {
        $("#view_3").hide();
    };
}
