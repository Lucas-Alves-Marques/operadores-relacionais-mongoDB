// TESTE DE CONEXÃO DO BANCO 

use('BD3-Aula')

// db['Livraria'].find() 

/*

SELECIONA UM LIVRO EM UM INTERVALO DE VALORES: ENTRE 100 E 150
USO DOS OPERADORES RELACIONAIS $gte E $lte - { gte = maaior ou igual } , { lte = menor ou igual}

*/

/*

db['Livraria'].find({

    valor : {$gte: 100, $lte: 200}

}) 

*/

/*

SELECIONA APENAS LIVRO DA CATEGORIA "Fantasia Heroica" E COM VALORES MENOR OU IGUAL A 100

OPERADOR LOGICO:$and
OPERADOR RELACIONAL:$eq  { eq = igual }
OPERADOR RELACIONAL:$lte 

*/

/*

db['Livraria'].find({
    $and : [
        {categoria : {$eq : 'Fantasia Heroica'}},
        {valor: {$lte: 100}}
    ]
}) 

/*

/*

SELECIONA APENAS LIVRO DA CATEGORIA "Fantasia Heroica" OU COM VALORES MENOR OU IGUAL A 100

OPERADOR LOGICO:$or
OPERADOR RELACIONAL:$eq  { eq = igual }
OPERADOR RELACIONAL:$lte 

*/

/*

db['Livraria'].find({
    $or : [
        {categoria : {$eq : 'Fantasia Heroica'}},
        {valor: {$lte: 100}}
    ]
}) 

*/

/*

SELECIONA LIVROS COM VALORES MAIOR QUE 150 OU CUJO NOME DO AUTOR POSSUA A PALAVRA TOLKIEN SEM
DIFERENCIAR MAIUSCULAS DAS MINUSCULAS

OPERADOR LOGICO:$or
OPERADOR RELACIONAL:$gt
E USO DO REGEX INSENTIVO DO MONGODB 

*/

/*

db['Livraria'].find({
    $or : [
        {valor: {$gt: 150}},
        {autor: /TOLKIEN/i}
    ]
}) 

*/

/*

SELECIONA TODOS OS LIVRO DO AUTOR TOLKIEN E ORDENA DE FORMA ASCENDENTE E DESCENDENTE

USO DA FUNÇÃO sort:

1- PARA ASCENDENTE - { do menor para o maior }
(-1) - PARA DESCENDENTE - { do maior para o menor }

*/

/*

// ASCENDENTE

db['Livraria'].find({

    autor: 'J.R.R Tolkien'

}).sort({valor: 1});


*/

/*

// DESCENDENTE

db['Livraria'].find({

    autor: 'J.R.R Tolkien'

}).sort({valor: -1});

*/

/*

SELECIONA O LIVRO QUE CONTENHA O NOME DO AUTOR DE Isaac Asimov

OPERADOR RELACIONA: $in

*/

db['Livraria'].find({

  autor: {

    $in:['Isaac Asimov']

  }  

},{_id: 0, codigo: 0 }).sort({valor: 1});
