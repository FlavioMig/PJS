const notas =[8.5, 9.9, 7.5, 8.5, 5.9,6.9, 10.0]

//Sem calback

let notasBaixas1 =[]
for (let i in notas){
    if(notas[i]< 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com calback

notasBaixas2 = notas.filter(function (nota){
    return nota < 9
    
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota=> nota < 8)
console.log(notasBaixas3)