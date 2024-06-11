
function miFuncion() {
   
    const keyframes = document.createElement('style');
    keyframes.innerHTML = `
      @keyframes container {
        0% {
          transform: translateY(-50px);
        }
        30% {
          transform: translateY(0) rotate(5deg);
        }
        50% {
          transform: rotate(-5deg);
        }
        75% {
          transform: rotate(5deg);
        }
        100% {
          transform: translateY(0) translateX(-50px);
        }
      }
    `;
    document.head.appendChild(keyframes);

    // COLA
const exampleOne = document.getElementById("moverCola");

moverCola.animate([
    {
        transform: "translateX(0)",
        opacity: 1,
    },
    {
        transform: "translateX(100px)",
        opacity: 0.25,
    },
],{
    duration: 2000,
    
});

// BRAZOS
const moverBrazos = document.getElementById("moverBrazos");

moverBrazos.animate([
    {
        transform: "translateX(0)",
        opacity: 1,
    },
    {
        transform: "translateX(100px)",
        opacity: 0.25,
    },
],{
    duration: 2000,
    
});

   
  }

 
  const boton = document.getElementById("action-boton");

  
  boton.addEventListener("click", miFuncion);


