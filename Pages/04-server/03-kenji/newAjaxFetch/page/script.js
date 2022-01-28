const registerListner = document.getElementById("registerBtn");
registerListner.addEventListener("click", registerFunction);
const deleteListner = document.getElementById("deleteBtn");
deleteListner.addEventListener("click", deleteFunction);
const searchListner = document.getElementById("searchBtn");
searchListner.addEventListener("click", searchFunction);
const changeListener = document.getElementById("changeBtn");
changeListener.addEventListener("click", changeFunction);

const defaultServerLink = 'http://localhost:8080'

function printFunction(){
    const content = document.getElementById('content');
    fetch(`${defaultServerLink}/produto/all`)
    .then(response => response.json())
    .then(found => {
        content.innerHTML = '';
        found.forEach(element => {
            document.getElementById('content').innerHTML += '<tr><td>' + element.id + '</td><td>' + element.item + '</td></tr>';
        });
    })
}

function registerFunction() {
    const name = document.getElementById("insertProduct").value;
    fetch(`${defaultServerLink}/produto`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ "item": name })
    }).then(printFunction());
}

function deleteFunction() {
    const id = document.getElementById("searchOrDeleteProduct").value;
    fetch(`${defaultServerLink}/produto/${id}`, {
        method: `DELETE`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },

    }).then(printFunction());
}

function searchFunction() {
    const id = document.getElementById("searchOrDeleteProduct").value;
    fetch(`${defaultServerLink}/produto/${id}`)
        .then(response => response.json())
        .then(found => {
            document.getElementById('content').innerHTML = '';
            if (found[0]?.id) {
                document.getElementById('content').innerHTML += '<tr><td>' + found[0].id + '</td><td>' + found[0].item + '</td></tr>';
            }
        })
}

function changeFunction() {
    const id = document.getElementById("changeProductId").value;
    const name = document.getElementById("changeProductItem").value;
    fetch(`${defaultServerLink}/produto/${id}`, {
        method: `PUT`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ "item": name })
    }).then(printFunction());
}
