$(function () {
    //We instantiate our model
    var model = new DinnerModel();
    //model.addDishToMenu("167511");

    var view_1 = new View_1($("#view_1"), model);
    var view_2 = new View_2($("#view_2"), model);
    var view_3 = new View_3($("#view_3"), model);
    var view_4 = new View_4($("#view_4"), model);
    var view_5 = new View_5($("#view_5"), model);
    var view_6 = new View_6($("#view_6"), model);

    var views = [];
    views.push(view_1);
    views.push(view_2);
    views.push(view_3);
    views.push(view_4);
    views.push(view_5);
    views.push(view_6);

    var mainController = new MainController(views, model);
});
