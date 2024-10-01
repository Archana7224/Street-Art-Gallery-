import { gsap } from 'gsap';

gsap.registerPlugin();

let featuredArtistsSection = document.querySelector('.featured-artists');
let artistCards = document.querySelectorAll('.artist-card');
let genresList = document.querySelector('.genres-list');

// Animation for artist cards
gsap.from(artistCards, {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: 'power2.inOut',
  stagger: 0.2
});

// Animation for genres list
gsap.from(genresList.children, {
  duration: 1,
  opacity: 0,
  x: 50,
  ease: 'power2.inOut',
  stagger: 0.1
});

// Adding event listener to genres list items
genresList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    // Adding animation to genres list item on click
    gsap.to(e.target, {
      duration: 0.5,
      scale: 1.1,
      ease: 'power2.inOut'
    });
  }
});