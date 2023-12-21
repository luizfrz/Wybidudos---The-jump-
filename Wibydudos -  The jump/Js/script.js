//explicação código javascript

// vai selecionar elementos no html como 'bigodinho' e 'maleta
const bigodinho = document.querySelector('.bigodinho');
const maleta = document.querySelector('.maleta');
// vai definir uma função chamada 'jump' que adiciona uma classe e remove uma classe no CSS 'jump com intervalo de 500 ms 
const jump = () => {
     bigodinho.classList.add('jump');
     
     setTimeout(() => {
        bigodinho.classList.remove('jump');
     } , 500);
}
const loop = setInterval (() =>{

   const maletaPosition = maleta.offsetLeft;
   const bigodinhoPosition = +window.getComputedStyle(bigodinho).bottom.replace('px', '');
// vai fazer verificação se maleta ou bigodinho estão colidindo
   if (maletaPosition < 80 && maletaPosition > 0 && bigodinhoPosition < 80){
      
      // vai fazer animação 'maleta' e define uma posição horizontal
      maleta.style.animation = 'none';
      maleta.style.left = `${maletaPosition}px`;

      
      maleta.style.animation = 'none';
      maleta.style.bottom = `${bigodinhoPosition}px`;

      // vai alterar a imagem 'bigodinho' e ajusta  a largura e a margem da esquerda
      bigodinho.src = 'sprite/jubydudos.png';
      bigodinho.style.width = '130px'
      bigodinho.marginLeft = '30px'
      // limpa o intervalo para interromper a execução e continuar o loop 
      clearInterval(loop);

   }
} ,10);

// clicando na tela vai fazer personagem pular 
document.addEventListener('click',jump);
// apertando em qualquer tecla vai fazer personagem pular 
document.addEventListener('keydown', jump); 