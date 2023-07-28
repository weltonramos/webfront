const titulo = document.getElementById("titulo")
console.log(titulo.textContent)
titulo.textContent = "Senai Cotia 2023"

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")

const resposta1 = document.getElementById("resposta1")
const resposta2 = document.getElementById("resposta2")
const resposta3 = document.getElementById("resposta3")

function salvar() {

    resposta1.textContent = nome.value
    resposta2.textContent = email.value
    resposta3.textContent = telefone.value

}

















/* var nome = "Samuel L. Jackson"
let idade = 45
const anoNascimento = 1977
let idadeEsposa = "45"

console.log(idade == idadeEsposa)

= atribuição
== compara se é igual
=== compara se é exatamente igual

let listaCompras = ["Maçã", "Manga", "Maracujá", 12, 17, 19.59]

console.log(listaCompras)

listaCompras.forEach(item => console.log(item))

const titulo = document.getElementById("h1")

console.log(titulo)

for (let i = 0; i < listaCompras.length; i++) {
    let element = listaCompras[i]
    console.log(element)
} */