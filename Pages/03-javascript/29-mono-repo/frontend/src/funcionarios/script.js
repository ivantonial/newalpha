const searchBtnListener = document.getElementById("searchBtn");
const registerBtnListener = document.getElementById("registerBtn");
const defaultServerLink = 'http://localhost:3000';

searchBtnListener.addEventListener("click", newSearch);
registerBtnListener.addEventListener("click", newRegister);

function placeholderChanger() {
    const option = document.getElementById('selectType').value;

    if (option == 'extension') {
        document.getElementById('searchSpace').placeholder = "ex: 1748";
        document.getElementById('searchSpace').size = "10";
        document.getElementById('searchSpace').value = "";
        document.getElementById('selector').innerHTML = '';
        document.getElementById('searchSpace').style.visibility = 'hidden';
        document.getElementById('searchSpace').disabled;
    } else if (option == 'sector') {
        document.getElementById('searchSpace').placeholder = "ex: Designer";
        document.getElementById('searchSpace').size = "35";
        document.getElementById('searchSpace').value = "";
        document.getElementById('selector').innerHTML = '';
        document.getElementById('searchSpace').style.visibility = 'visible';
        document.getElementById('searchSpace').enabled;
    }
    else if (option == 'birthday') {
        document.getElementById('searchSpace').placeholder = "ex: 08";
        document.getElementById('searchSpace').size = "10";
        document.getElementById('searchSpace').value = "";
        document.getElementById('selector').innerHTML = '';
        document.getElementById('searchSpace').style.visibility = 'visible';
        document.getElementById('searchSpace').enabled;
    }
}


function newSearch() {
    const option = document.getElementById('selectType').value;
    const inputOption = document.getElementById('searchSpace').value;

    

    if (option === "extension") {
        fetch(`${defaultServerLink}/extension`)
            .then(resposta => resposta.json())
            .then(found => {
                console.log(found)
                document.getElementById('theadContent').innerHTML = '';
                document.getElementById('theadContent').innerHTML += '<th>Nome</th><th>Ramal</th>';
                document.getElementById('content').innerHTML = '';
                found.forEach(element => {
                    document.getElementById('content').innerHTML += '<tr><td>' + element.name + '</td><td>' + element.extension + '</td></tr>';
                });
                // console.log(texto)
            })
    }
    else {
        fetch(`${defaultServerLink}/${option}/?${option}=${inputOption}`)
            .then(resposta => resposta.json())
            .then(found => {
                console.log(found)
                document.getElementById('theadContent').innerHTML = '';
                document.getElementById('theadContent').innerHTML += '<th>Id</th><th>Nome</th><th>Ramal</th><th>E-mail</th><th>Setor</th><th>Nascimento</th>';
                document.getElementById('content').innerHTML = '';
                found.forEach(element => {
                    document.getElementById('content').innerHTML += '<tr><td>' + element.id + '</td><td>' + element.name + '</td><td>' + element.extension + '</td><td>' + element.email + '</td><td>' + element.sector + '</td><td>' + element.birthday.split('-').reverse().join('/'); + '</td></tr>';
                });
                // console.log(texto)
            })
    }
}

function newRegister() {
    const newName = document.getElementById("inputName").value;
    const newExtension = document.getElementById("inputExtension").value;
    const newEmail = document.getElementById("inputEmail").value;
    const newSector = document.getElementById("inputSector").value;
    const newBirthday = document.getElementById("inputBirthday").value;


    fetch(`${defaultServerLink}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{ "name" : newName, "extension" : newExtension,"email" : newEmail,"sector" : newSector, "birthday" : newBirthday }])
    })

    
}
