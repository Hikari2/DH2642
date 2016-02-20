/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var View_3 = function (container, model) {

    var dishes = model.getAllDishes("main dish");
    var grid = document.getElementById("grid");

    if (grid == undefined)
        return;

    for (i = 0; i < dishes.length; i++) {
        var column = document.createElement("div");
        column.className = "col-md-4";

        var image = document.createElement("IMG");
        image.src = "images/" + dishes[i].image;
        column.appendChild(image);

        var name = document.createElement("p");
        name.innerHTML = dishes[i].name;
        column.appendChild(name);

        var description = document.createElement("span");
        description.innerHTML = "Lorem ipsum dolor sit omet, consectetur odipiscing elit, sed do siusmod tempor incididunt ut labore et dolore";
        column.appendChild(description);

        grid.appendChild(column);
    }
}
