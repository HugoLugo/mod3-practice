/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/

function fibonacci(n) {
    if (n < 0) {
      return "El número de Fibonacci no está definido para valores negativos.";
    }
  
    if (n === 0) {
      return "El primer número de la serie de Fibonacci es 0.";
    }
  
    if (n === 1) {
      return "El segundo número de la serie de Fibonacci es 1.";
    }
  
    let fib1 = 0;
    let fib2 = 1;
    let fibN = 0;
  
    for (let i = 2; i <= n; i++) {
      fibN = fib1 + fib2;
      fib1 = fib2;
      fib2 = fibN;
  
      if (fibN > 10000) {
        return "El número de Fibonacci es demasiado grande para mostrar.";
      }
    }
  
    return `El ${n}${n === 3 ? "er" : "°"} número de la serie de Fibonacci es ${fibN}`;
  }
  
  const n = 20;
  const resultado = fibonacci(n);
  console.log(resultado);
  