$(function () {
    //We instantiate our model
    var model = new DinnerModel();
    model.addDishToMenu(2);
    model.addDishToMenu(100);
    model.addDishToMenu(200);

    var view_1 = new View_1($("#view_1"), model);
    var view_2 = new View_2($("#view_2"), model);
    var view_3 = new View_3($("#view_3"), model);
    var view_4 = new View_4($("#view_4"), model);
    var view_5 = new View_5($("#view_5"), model);
    var view_6 = new View_6($("#view_6"), model);

    $("#view_1").show();
    $("#view_2").hide();
    $("#view_3").hide();
    $("#view_4").hide();
    $("#view_5").hide();
    $("#view_6").hide();

    var view_1Controller = new View_1Controller(view_1, model);
    var view_2Controller = new View_2Controller(view_2, model);
    var view_3Controller = new View_3Controller(view_3, model);
    var view_4Controller = new View_4Controller(view_4, model);
    var view_5Controller = new View_5Controller(view_5, model);
    var view_6Controller = new View_6Controller(view_6, model);
});
