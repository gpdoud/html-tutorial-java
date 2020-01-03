$().ready(() => {

    console.log("jQuery ready!");
    $("#abc").val("Java PT BC");

    $("button#clk").click(() => {
        let msg = $("#abc").val();
        console.log(msg);
    });

    $("button#sty").click(() => {
        $("#abc").css("color", "red").css("fontWeight", "bold");
    });

});
