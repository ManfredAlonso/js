let num = [5,4,6]
num[3]=2
num.push(7)
num.length
num.sort()
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`esses são os seus numeros ${num}`)
/*for(let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)       
}

let pos=num.indexOf(7)
console.log(`o valor 7 está na posição ${pos}`)