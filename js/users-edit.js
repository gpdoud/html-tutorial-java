const baseUrl = "http://localhost:8080";
let user = null;

$().ready(() => {

    get(2);

    $("#save").click(() => {
        update();
    });  
});

const update = () => {
    user.username = $("#pusername").val();
    user.password = $("#ppassword").val();
    user.firstname = $("#pfirstname").val();
    user.lastname = $("#plastname").val();
    user.phoneNumber = $("#pphone").val();
    user.email = $("#pemail").val();
    user.isReviewer = $("#previewer").prop("checked");
    user.isAdmin = $("#padmin").prop("checked");
    put();
}

const put = () => {
    $.ajax({
        method: "PUT",
        url: `${baseUrl}/users/${user.id}`,
        data: JSON.stringify(user),
        dataType: "json",
        contentType: "application/json"
    }).done(() => {
        get(user.id);
    });
}

const get = (id) => {
    $.getJSON(`${baseUrl}/users/${id}`)
        .done((res) => {
            console.log("User:", res.data);
            user = res.data;
            display();
    });
}

const display = () => {
    $("#pid").val(user.id);
    $("#pusername").val(user.username);
    $("#ppassword").val(user.password);
    $("#pfirstname").val(user.firstname);
    $("#plastname").val(user.lastname);
    $("#pphone").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.isReviewer);
    $("#padmin").prop("checked", user.isAdmin);

}
