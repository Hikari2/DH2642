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
            $("#view_3 #dishTable").html("Something went wrong");
        }

        else if ((dishes = obj.Results) != undefined) {

            var i = 0;
            var row;

            $("#view_3 #dishTable").html(" ");

            while (true) {
                row = "<tr>";
                for (var j = 0; j < 4; j++) {
                    if (dishes[i * 4 + j] == undefined) {
                        row += "</tr>";
                        $("#view_3 #dishTable").append(row);
                        this.dishTable.show();
                        this.loadingLogo.hide();
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
