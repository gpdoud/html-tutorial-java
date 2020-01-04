$().ready(() => {

    console.log("jQuery ready!");

    let url = "http://localhost:8080";

    let user = {
        id: 3,
        username: "us",
        password: "us",
        firstname: "Us",
        lastname: "Er",
        phoneNumber: "555-555-5555",
        email: "us@sr.com",
        isReviewer: false,
        isAdmin: false
    };

    $("button#get").click(() => {
        $.getJSON(`${url}/users`)
            .done((res) => console.log(res));
    });

    $("button#ajax").click(() => {
        $.ajax({
            method: "PUT",
            url: `${url}/users/${user.id}`,
            data: JSON.stringify(user),
            dataType: "json",
            contentType: "application/json"
        })
            .done((res) => console.log(res));
    });

    $("button#attr").click(() => {
        console.log( $("#div1").attr("data-test"));
    });

    $("button#fade").click(() => {
        $("#div1").slideToggle();
    });

    $("button#dialog").click(() => {
        $("#div1").dialog();
    });


});
