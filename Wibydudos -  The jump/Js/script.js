const bigodinho = document.querySelector('.bigodinho');
const maleta = document.querySelector('.maleta');
const recorde = document.querySelector('.recorde')
let record = 0;
const jump = () => {
     bigodinho.classList.add('jump');
     
     setTimeout(() => {
        bigodinho.classList.remove('jump');
     } , 500);
}
const loop = setInterval (() =>{

   const maletaPosition = maleta.offsetLeft;
   const bigodinhoPosition = +window.getComputedStyle(bigodinho).bottom.replace('px', '');
   if (maletaPosition < 80 && maletaPosition > 0 && bigodinhoPosition < 80){

      maleta.style.animation = 'none';
      maleta.style.left = `${maletaPosition}px`;
      maleta.style.animation = 'none';
      maleta.style.bottom = `${bigodinhoPosition}px`;

      bigodinho.src = 'sprite/jubydudos.png';
      bigodinho.style.width = '130px'
      bigodinho.marginLeft = '30px'

      clearInterval(loop);
      alert(`Seu recorde foi de: ${record}`);
   }else if(maletaPosition <0){
      record ++;
      recorde.textContent = `seu ponto foi de: ${record}`
   }
} ,10);

document.addEventListener('click',jump);
document.addEventListener('keydown', jump); 
