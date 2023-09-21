function abreEquipe(div){
   
    const aberto = document.getElementById(div).style.display == 'block';

    if(aberto)
        document.getElementById(div).style.display = 'none';
    else	
        document.getElementById(div).style.display = 'block'
}

let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-slideIndex * 25}vw)`;
  });
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

// Mostra o primeiro slide ao carregar a página
showSlide(slideIndex);