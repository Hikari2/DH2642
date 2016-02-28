/* 
 * Java script for view 3 i.e. the page listing all the dishes
 */

var View_3 = function (container, model) {

    model.addObserver(this);
    this.container = container;
    this.typeSelector = container.find("#typeSelector");
    this.searchField = container.find("#searchField");
    this.searchButton = container.find("#searchButton");

    this.update = function (dishes) {
        //http://api.bigoven.com/recipes?pg=1&rpp=50&any_kw=Main Dish&any_kw=&api_key=18f3cT02U9f6yRl3OKDpP8NA537kxYKu
        if (dishes != undefined) {
            var i = 0;
            var row;

            $("#view_3 #dishTable").html(" ");

            while (true) {
                row = "<tr>";
                for (var j = 0; j < 4; j++) {
                    if (dishes[i * 4 + j] == undefined) {
                        row += "</tr>";
                        $("#view_3 #dishTable").append(row);
                        return;
                    }
                    row += "<td><div class='col'><img  id='" + dishes[i * 4 + j].RecipeID + "' class='dishImage' src = " + dishes[i * 4 + j].ImageURL + ">";
                    row += "<p>" + dishes[i * 4 + j].Title + "</p>";
                }
                row += "</tr>";
                $("#view_3 #dishTable").append(row);
                i++;
            }
        }
    };
}
