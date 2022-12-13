import express from 'express';
const app = express();
app.use(express.json());

import router from './routes.js'
app.use(router);

//import {openDb} from './configDB.js'
//import { createTable, insertPessoa, updatePessoa, selectPessoa, selectPessoas, deletePessoa } from './controler/pessoa.js'

//createTable();

/*app.get('/', function(req, res){
    res.send("Olá mundo");
})

app.get('/pessoa', async function(req, res){
    let pessoa = await selectPessoa(req.body.id);
    res.json(pessoa);
})

app.get('/pessoa', async function(req, res){
    let pessoas = await selectPessoas();
    res.json(pessoas);
})

app.post('/pessoa', function(req, res){
    insertPessoa(req.body)
    res.json({
        "statuscode": 200
    })
});

app.put('/pessoa', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um id"
        })
    }
    else{
        updatePessoa(req.body)
        res.json({
        "statuscode": 200
    })
    }
});

app.delete('/pessoa', async function(req, res){
    let pessoa = await deletePessoa(req.body.id);
    res.json(pessoa);
})*/

app.listen(3000, ()=>console.log("Api rodando."))