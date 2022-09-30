function dobro(numero) {
    /* operações matematicas
    * "*" -> multiplicação
    * "/" -> divisão
    * "+" -> adição
    * "-" -> subtração*/

    return numero * 2;
};


function calcular() {
    let valorInput = document.querySelector('#inputNumero').value;
    let resultado = dobro(valorInput);

    document.querySelector('#resultado').setHTML(resultado);
}

/*

X > X || X < X || X >= X || X <= X || X === X || X == X || X <> X

>  MAIOR
<  MENOR
>= MAIOR OU IGUAL
<= MENOR OU IGUAL

=== IGUAL A (RESTRITO)
==  IGUAL A (MENOS RESTRITO)
<> DIFERENTE

*/
