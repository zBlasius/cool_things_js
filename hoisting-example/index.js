
// Conceito: é um comportamento onde a função pode ser usada antes de ser declarada
example01_b();

function example01(){
    console.log('Nome: ', name); // undefined
    let name = 'Gustavo';
    console.log('Name02:', name); // Gustavo
    // o código acima é a mesma coisa da example01_a
}



function example01_a(){
    var name;
    console.log('Nome: ', name);
    name = 'Gustavo';
    console.log('Name02:', name);
}

function example01_b(){
    name = 5;
    console.log('Nome: ', name);
    var name
}

// Vale ressaltar que a variável funciona como hoisting apenas no topo da função em que está sendo chamada.
// O nome disso é hoisting, e apenas o var é permitido aplicar o hoisting. const e let não funcionam dessa forma: 

function example02(){
    console.log('name', name); // error
    const name = 'Gustavo';
}

// funções também sofrem alterações de hoisting, conforme vemos na linha 03
// porém, expressões regulares não seguem a regra de hoisting

// teste(); // error
var teste = ()=> {
    console.log('tete')
    return 'opa'
}


// dito isso, procurem o problema no seguinte código: 
function definirFuncoes() {
    // Objetivo - cada função deve retornar o valor do loop atual  (valor de i)

    let funcoes = [];  
    for (var i = 0; i < 3; i++) {
      funcoes.push(()=> {
        console.log("Valor de i:", i);
      });

    }
  
    return funcoes;
  }
  
// const listaDeFuncoes = definirFuncoes();
// listaDeFuncoes[0]() // retorno esperado: 0
// listaDeFuncoes[1]() // retorno esperado: 1
// listaDeFuncoes[2]() // retorno esperado: 2

// Resumindo, o hoisting funciona apenas para var e funções não regulares
