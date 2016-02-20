/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var View_3 = function (container, model) {

    var dishes = model.getAllDishes("main dish");

    var i = 0;
    var row;

    while (true) {
        row = "<tr>";
        for (var j = 0; j < 5; j++) {
            if (dishes[i*5+j] == undefined) {
                row += "</tr>";
                $('#view_3 #dishTable').append(row);
                return;
            }
            row += "<td><img src = images/" + dishes[i*5+j].image + ">";
            row += "<p>" + dishes[i*5+j].name + "</p>";

        }
        row += "</tr>";
        $('#view_3 #dishTable').append(row);
        i++;
    }
}
