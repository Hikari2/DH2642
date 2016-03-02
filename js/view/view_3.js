/* 
 * Java script for view 3 i.e. the page listing all the dishes
 */

var View_3 = function (container, model) {

    model.addObserver(this);
    this.container = container;
    this.typeSelector = container.find("#typeSelector");
    this.searchField = container.find("#searchField");
    this.searchButton = container.find("#searchButton");

    this.dishTable = container.find("#dishTable");
    this.loadingLogo = container.find("#loadingLogo");

    this.update = function (obj) {

        if (obj == "error") {
            this.dishTable.html("Something went wrong");
            this.dishTable.show();
            this.loadingLogo.hide();
        }

        else if (obj != undefined && (dishes = obj.Results) != undefined) {

            var i = 0;
            var row;

            this.dishTable.html(" ");

            while (true) {
                row = "<tr>";
                for (var j = 0; j < 4; j++) {
                    if (dishes[i * 4 + j] == undefined) {
                        row += "</tr>";
                        this.dishTable.append(row);
                        this.dishTable.show();
                        this.loadingLogo.hide();
                        return;
                    }
                    //else if (dishes[i * 4 + j].Category != "Main Dish" && dishes[i * 4 + j].Category != "Appetizers" && dishes[i * 4 + j].Category != "Desserts")
                    //  continue;

                    row += "<td><div class='col'><img  id='" + dishes[i * 4 + j].RecipeID + "' class='dishImage' src = " + dishes[i * 4 + j].ImageURL + ">";
                    row += "<p>" + dishes[i * 4 + j].Title + "</p>";
                }
                row += "</tr>";
                this.dishTable.append(row);
                i++;
            }
        }
    };
}
