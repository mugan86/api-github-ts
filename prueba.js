const apiGithub = require('./dist').getUsuario;

apiGithub('mugan86').then(
    data => console.log(data)
);