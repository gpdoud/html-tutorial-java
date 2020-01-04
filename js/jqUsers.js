let users = [
    { id: 1, name: "Greg", favColor: 'green', favNumber: 8 },
    { id: 2, name: "Ann", favColor: 'orange', favNumber: 7 },
    { id: 3, name: "Bill", favColor: 'yellow', favNumber: 9 },
    { id: 4, name: "Chris", favColor: 'purple', favNumber: 6 },
    { id: 5, name: "Doug", favColor: 'blue', favNumber: 2 }
];

$().ready(() => {

    console.log("Ready!");

    display();

    $("#add").click(() => {
        let id = $("#pid").val();
        let name = $("#name").val();
        let color = $("#color").val();
        let nbr = $("#nbr").val();
        let user = {
            id: id, name: name, favColor: color, favNumber: nbr
        }
        users.push(user);
        display();
    });
    
});

const sort = () => {
    let sortByFavNumber = (a, b) => {
        return a.favNumber - b.favNumber;
    }
    users.sort(sortByFavNumber);
}

const display = () => {
    let tbody = $("#tbody");
    tbody.html('');
    sort();
    for(let user of users) {
        let id = $(`<td>${user.id}</td>`);
        let name = $(`<td>${user.name}</td>`);
        let color = $(`<td>${user.favColor}</td>`);
        let nbr = $(`<td>${user.favNumber}</td>`);
        let tr = $("<tr></tr>");
        tr.append(id);
        tr.append(name);
        tr.append(color);
        tr.append(nbr);
        tbody.append(tr);
    }
    $("#pid").val('');
    $("#name").val('');
    $("#color").val('');
    $("#nbr").val('');
}