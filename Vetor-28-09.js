Primeiro Exercicio
<script>
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
    </script>
Segundo Exercicio
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
