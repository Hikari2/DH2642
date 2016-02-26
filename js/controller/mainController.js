/* 
 * Main controller handling request of other view controllers.
 */


var MainController = function (views, model) {

    var view_1Controller = new View_1Controller(this, views[0], model);
    var view_2Controller = new View_2Controller(this, views[1], model);
    var view_3Controller = new View_3Controller(this, views[2], model);
    var view_4Controller = new View_4Controller(this, views[3], model);
    var view_5Controller = new View_5Controller(this, views[4], model);
    var view_6Controller = new View_6Controller(this, views[5], model);

    view_1Controller.show();
    view_2Controller.hide();
    view_3Controller.hide();
    view_4Controller.hide();
    view_5Controller.hide();
    view_6Controller.hide();

    this.showSelectDish = function () {
        view_1Controller.hide();
        view_2Controller.show();
        view_3Controller.show();    
        view_4Controller.hide();
        view_5Controller.hide();
        view_6Controller.hide();
    }

    this.showDinnerOverview = function () {
        view_2Controller.hide();
        view_3Controller.hide();
        view_4Controller.hide();
        view_5Controller.show();
    }

    this.showDishDetail = function () {
        view_3Controller.hide();
        view_4Controller.show();
    }

    this.dinnerInstruction = function () {
        view_5Controller.hide();
        view_6Controller.show();
    }

    $("#main").on({
        "mouseover": function (e) {
            if ($(e.target).is( ":button" )) {
            $(e.target).css('background-color', '#ffb732');
            }
        },
        "mouseout": function (e) {
            if ($(e.target).is( ":button" )) {
            $(e.target).css('background-color', 'orange');
            }
        }
    });
};