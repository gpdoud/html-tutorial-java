const baseUrl = "http://localhost:8080";
let users = null;

$().ready(() => {

    refresh();

    $("#refresh").click(() => {
        refresh();
    });
    
    
});

const refresh = () => {
    $.getJSON(`${baseUrl}/users`)
    .done((res) => {
        console.log("Users:", res.data);
        users = res.data;
        display();
    });
}

const display = () => {
    let tbody = $("#tbody");
    tbody.html('');
    for(let user of users) {
        let tr = $("<tr></tr>");
        tr.append($(`<td>${user.id}</td>`));
        tr.append($(`<td>${user.username}</td>`));
        tr.append($(`<td>${user.lastname}, ${user.firstname}</td>`));
        tr.append($(`<td>${user.phoneNumber}</td>`));
        tr.append($(`<td>${user.email}</td>`));
        tr.append($(`<td>${user.isReviewer ? "Yes" : "No"}</td>`));
        tr.append($(`<td>${user.isAdmin ? "Yes" : "No"}</td>`));
        tbody.append(tr);
    }
}
