import { Router } from "express";
import { PessoaController } from './Controler/Pessoa.js';

const router = Router();

const pessoaController = new PessoaController();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/pessoas/list', pessoaController.list);
router.get('/pessoa/get', pessoaController.get);
router.post('/pessoa/create', pessoaController.create);
router.put('/pessoa/update', pessoaController.update);
router.delete('/pessoa/delete', pessoaController.delete);

export default router;