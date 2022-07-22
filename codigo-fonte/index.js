
const Express = require('express')

const Aplicativo = new Express()

Aplicativo.get('/', (RequisicaoCliente, RespostaServidor) => RespostaServidor.send("Hellow word"))

