function gettingName(name) {
    console.log('Bem-vindo: ' + name);
  }
  
  function nameInput(callback) {
    const name = prompt('Entre com o seu nome: ');
    callback(name);
  }
  
nameInput(gettingName);