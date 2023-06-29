const Pessoa = require('../../models/pessoa')


function cadastrarPessoa(req, res){
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        saldo: req.body.saldo,
        data_abertura: req.body.data_abertura
    }
    
    Pessoa.create(pessoa).then((result)=>{
        res.json({result});
    }).catch((err) => {
        console.log(err)
        res.json({err});
    })
}

module.exports =  {
    cadastrarPessoa,
};