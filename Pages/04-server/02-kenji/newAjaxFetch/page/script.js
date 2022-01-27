const deleteListner = document.getElementById("deleteBtn");
deleteListner.addEventListener("click", deleteFunction);
const registerListner = document.getElementById("registerBtn");
registerListner.addEventListener("click", registerFunction);
const defaultServerLink = 'http://localhost:8080'


function placeholderChanger() {
    const option = document.getElementById('selectType').value;

    if (option == 'id') {
        document.getElementById('searchSpace').placeholder = "ex: 17";
        document.getElementById('searchSpace').size = "8";
        document.getElementById('searchSpace').value = "";
        document.getElementById('selector').innerHTML = '';
    } else if (option == 'name') {
        document.getElementById('searchSpace').placeholder = "ex: João Silva";
        document.getElementById('searchSpace').size = "35";
        document.getElementById('searchSpace').value = "";
        document.getElementById('selector').innerHTML = '';
    }
    else if (option == 'email') {
        document.getElementById('searchSpace').placeholder = "ex: joao.silva@email.com";
        document.getElementById('searchSpace').size = "35";
        document.getElementById('searchSpace').value = "";
        document.getElementById('selector').innerHTML = '';
    }
}

function dispararPedido() {

    const option = document.getElementById('selectType').value;
    let idInput = document.getElementById('searchSpace').value;
    let nameInput = "";
    let emailInput = "";
    const found = [];

    if (option == 'id') {
        idInput = document.getElementById('searchSpace').value;
        nameInput = "";
        emailInput = "";
    }
    else if (option == 'name') {
        idInput = "";
        nameInput = document.getElementById('searchSpace').value.toLowerCase();
        emailInput = "";
    }
    else if (option == 'email') {
        idInput = "";
        nameInput = "";
        emailInput = document.getElementById('searchSpace').value.toLowerCase();
    }

    fetch(`/users?id=${idInput}&name=${nameInput}&email=${emailInput}`)
        .then(resposta => resposta.json())
        .then(found => {
            console.log(found)
            document.getElementById('content').innerHTML = '';
            found.forEach(element => {
                document.getElementById('content').innerHTML += '<tr><td>' + element.id + '</td><td>' + element.name + '</td><td>' + element.email + '</td></tr>';
            });
            // console.log(texto)
        })
}

const inputElement = document.getElementById('searchSpace');
let timer = 0;
inputElement.addEventListener('input', function () {

    clearTimeout(timer);

    const option = document.getElementById('selectType').value;
    let idInput;
    let nameInput;
    let emailInput;

    if (option == 'id') {
        idInput = inputElement.value;
        nameInput = "";
        emailInput = "";
    }
    else if (option == 'name') {
        idInput = "";
        nameInput = inputElement.value.toLowerCase();
        emailInput = "";
    }
    else if (option == 'email') {
        idInput = "";
        nameInput = "";
        emailInput = inputElement.value.toLowerCase();
    }

    if (inputElement.value.length < 4) {
        document.getElementById('selector').innerHTML = '';
    }

    timer = setTimeout(() => {

        if (option != 'id' && inputElement.value.length > 3) {
            if (option == 'name') {
                fetch(`/users?id=${idInput}&name=${nameInput}&email=${emailInput}`)
                    .then(resposta => resposta.json())
                    .then(found => {
                        document.getElementById('selector').innerHTML = '';
                        found.forEach((element, index) => {
                            addElement(index, element.name);
                        });
                    })
            }
            else {
                fetch(`/users?id=${idInput}&name=${nameInput}&email=${emailInput}`)
                    .then(resposta => resposta.json())
                    .then(found => {
                        document.getElementById('selector').innerHTML = '';
                        found.forEach((element, index) => {
                            addElement(index, element.email);
                        });
                    })
            }
        }
        else if (option == 'id') {
            fetch(`/users?id=${idInput}&name=${nameInput}&email=${emailInput}`)
                .then(resposta => resposta.json())
                .then(found => {
                    document.getElementById('content').innerHTML = '';
                    found.forEach((element, index) => {
                        addElement(index, element.id);
                        // document.getElementById('content').innerHTML += '<tr><td>' + element.id + '</td><td>' + element.name + '</td><td>' + element.email + '</td></tr>';
                    });
                    // console.log(texto)
                })
        }
        else {
            document.getElementById('selector').innerHTML = '';
        }
    }, 2000);
})

function addElement(count, element) {
    const newBtn = document.createElement("button");
    newBtn.setAttribute("id", "btn" + count);
    newBtn.setAttribute('onclick', 'insertValue("' + element + '")')
    const newElement = document.createTextNode(element);
    newBtn.appendChild(newElement);
    document.getElementById("selector").appendChild(newBtn);
}

function insertValue(text) {
    document.getElementById("searchSpace").value = text;
    document.getElementById('selector').innerHTML = '';
}


function deleteFunction() {

    const option = document.getElementById('selectType').value;
    let idInput = document.getElementById('searchSpace').value;
    let nameInput = "";
    let emailInput = "";
    const found = [];

    if (option == 'id') {
        idInput = document.getElementById('searchSpace').value;
        nameInput = "";
        emailInput = "";
    }
    else if (option == 'name') {
        idInput = "";
        nameInput = document.getElementById('searchSpace').value.toLowerCase();
        emailInput = "";
    }
    else if (option == 'email') {
        idInput = "";
        nameInput = "";
        emailInput = document.getElementById('searchSpace').value.toLowerCase();
    }

    fetch(`/usersDelete?id=${idInput}&name=${nameInput}&email=${emailInput}`)
        .then(resposta => resposta.json())
        .then(found => {
            deleteOrder(found);
        })
    console.log("Deletou");
}

function registerFunction() {
    const newName = document.getElementById("insertName").value;
    const newEmail = document.getElementById("insertEmail").value;
    document.getElementById("insertName").value = "";
    document.getElementById("insertEmail").value = "";


    fetch(`${defaultServerLink}/register`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{ "name": newName, "email": newEmail }])
        // console.log(`Nome: ${newName}\nE-mail ${newEmail}`);
    })
}

function deleteOrder(_found){
    const found = _found;

    if (found.length === 1){
        fetch(`${defaultServerLink}/deleteOrder`, {
            method: `DELETE`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify([{"id": found[0].id}])
            // console.log(`Nome: ${newName}\nE-mail ${newEmail}`);
        })
    }
}