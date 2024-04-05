/* let mensagem:String = "Opa"

//console.log(AddNumero(80,80))

function AddNumero(num1: number, num2: number){

    return num1 + num2
}

AddNumero(80,80)


let nomeCompleto: string = 'Pedro Almeida'
console.log(nomeCompleto)

let teste: String = `Seja bem vindo ${nomeCompleto}!`;
console.log(teste)

let frutas: string[] = ['Abacaxi','maçã','Laranja','Pera']

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
} */

//let idiomas: Array<string> = ['Portugues', 'Ingles', 'Frances','Japones']
//idiomas.push('Mandarim',frutas[0]);
//console.log(idiomas)

let nome: String = "Pedro";
let idade: number = 23;

console.log( nome, idade)
//array objeto
let idiomas: Array<string> = ['Portugues', 'Ingles', 'Frances','Japones']
//array normal
let frutas: string[]= ['Maçã','Abacaxi','Laranja','Pera'];

//experimentando laço
//let idiomasLength: number = idiomas.length;
//for (let i = 0; i < frutas.length; i++) {
//    console.log(idiomas[i % idiomasLength]); 
//    console.log(idiomas);
//}

//array com spread operator, experimentando
/* let listaNumeros = [0,1,2,3,4];
listaNumeros = [...listaNumeros, 5,6,7,8]
console.log(listaNumeros) */


//tuplas
//é basicamente array com tipos fixos
let pessoa: [string,string,number];

pessoa = ['Pedro','Dev', 22];
console.log(pessoa[0])

//spread operator com tuplas
//não preciso repetir os tipos primitivos se usar o spread operator(...) com o tipo que quero na tupla
let listaFrutas: [string,...string[]] = ['Maçã','Abacaxi','Laranja','Pera'];
//console.log(...listaFrutas)

//tupla com tipos primitivos diferentes
//digo o nome da variavel, o tipo, digo quais tipos terei nela, digo que terá um spread operator do tipo string e faço a atribuição desses valores
let listaTeste: [number,boolean,...string[]]= [5,true,...listaFrutas];
console.log(listaTeste)
//sinceramente o conceito da tupla tá de boa de entender, o que me pega é que é basicamente um array, então pq não declarar só como array? terei de pesquisar
//p identificar a tupla é só ver a variavel seguida de um dado primitvo + colchete
