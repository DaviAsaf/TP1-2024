//Primeiro Exercicio
        var vetor = []
        var tamanho = 10
        for(i=0;i<tamanho;i++){
            vetor[i] = prompt(`Escreva 10 números e eu indicarei o menor valor`)
        }  
        for(i=0;i<tamanho;i++){
            if(vetor[0] > vetor[i]){
                vetor[0] = vetor[i]
            }
        }
        alert(`${vetor[0]}`)
//Segundo Exercicio
        var vetor = []
        var pares = []
        var tamanho = 10
        for (i = 0; i < tamanho; i++) {
            vetor[i] = prompt(`Escreva 10 números e eu os números pares`)
        }
        for (i = 0; i < tamanho; i++) {
            if (vetor[i] % 2 == 0) {
                pares[i] = vetor[i]
            }
        }
        alert(`Os números pares são ${pares}`)
        alert("Os números pares são: "+ pares)
//Terceiro Exercicio
        estudante = []
        total = parseInt(prompt("Quantos estudantes vão ser cadastrados? "))
        for(i=0;i<total;i++){
            estudante[i] = prompt(`Estudantes ${i+1}: `)
        }
        for(i=0;i<total;i++){
            estudante[i] = " " + estudante[i]
        }
        estudante.sort()
        alert(estudante)
//Quarto Exercicio
        var numeroaleatorio = parseInt(Math.random()*100)
        var respostausuario = prompt("Tente adivinhar um número (Entre 1 a 100)")
        while(numeroaleatorio != respostausuario){
            let dica_maior = respostausuario > numeroaleatorio
            if(dica_maior){
                respostausuario = prompt(`${respostausuario} é maior que o número sorteado`)
            }
            else{
                respostausuario = prompt(`${respostausuario} é menor que o número sorteado`)
            }
        }
        alert("Parabens, você encontrou o número sorteado: "+ numeroaleatorio)
