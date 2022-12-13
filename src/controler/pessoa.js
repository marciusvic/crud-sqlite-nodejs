import {openDb} from '../configDB.js'

class PessoaController{
    async list(req,res){
        openDb().then(db=>{
            db.all('SELECT * FROM Pessoa')
            .then(pessoas=>  res.status(202).json(pessoas))
        });
    }
    async get(req,res){
        let id = req.body.id;
        openDb().then(db=>{
            db.get('SELECT * FROM Pessoa WHERE id=?', [id])
            .then(pessoa=> res.json(pessoa));
        });
    }
    async create(req,res){
        let pessoa = req.body;
        openDb().then(db=>{
            db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
        });
        res.status(201).json({
            "nome":pessoa.nome,
            "idade":pessoa.idade
        });
    }
    async update(req,res){
        let pessoa = req.body;
        openDb().then(db=>{
            db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
        });
        res.json({
            "statusCode": 200
        })
    }
    async delete(req,res){
        let id = req.body.id;
        openDb().then(db=>{
            db.get('DELETE FROM Pessoa WHERE id=?', [id])
            .then(res=>res)
        });
        res.json({
            "statusCode": 200
        })
    }
}

export async function createTable(){
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa(id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export {PessoaController};
/*export async function insertPessoa(pessoa){
    openDb().then(db =>{
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
    })
}

export async function updatePessoa(pessoa){
    openDb().then(db =>{
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
    })
}

export async function selectPessoas(){
    return openDb().then(db =>{
        return db.all('SELECT * FROM Pessoa').then(res=>res)
    });
}



export async function selectPessoa(id){
    return openDb().then(db =>{
        return db.all('SELECT * FROM Pessoa WHERE id=?', [id])
        .then(res=>res)
    });
}

export async function deletePessoa(id){
    return openDb().then(db =>{
        return db.all('DELETE FROM Pessoa WHERE id=?', [id])
        .then(res=>res)
    });
}
try catch*/