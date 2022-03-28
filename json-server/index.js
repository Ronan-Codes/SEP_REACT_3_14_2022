// const gap = 250;

// const domSelectors = {
//   carousel: document.getElementById("carousel"),
//   content: document.getElementById("content"),
//   next: document.getElementById("next"),
//   prev: document.getElementById("prev")
// }

// let width = domSelectors.carousel.offsetWidth;
// // window.addEventListener("resize", e => (width = domSelectors.carousel.offsetWidth));

// function scrollEvents() {
//     domSelectors.next.addEventListener("click", e => {
//       domSelectors.carousel.scrollBy(width + gap, 0);
//       if (domSelectors.carousel.scrollWidth !== 0) {
//         domSelectors.prev.style.display = "flex";
//       }
//       if (domSelectors.content.scrollWidth - domSelectors.carousel.scrollLeft <= 1000) {
//         domSelectors.next.style.display = "none";
//       }
    
//       console.log("scrollWidth",domSelectors.content.scrollWidth)
//       console.log("scrollLeft",domSelectors.carousel.scrollLeft)
//     });
  

  
//     domSelectors.prev.addEventListener("click", e => {
//       domSelectors.carousel.scrollBy(-(width + gap), 0);
//       if (domSelectors.carousel.scrollLeft - width - gap <= 0) {
//         domSelectors.prev.style.display = "none";
//       }
//       if (!domSelectors.content.scrollWidth - width - gap <= domSelectors.carousel.scrollLeft + width) {
//         domSelectors.next.style.display = "flex";
//       }
//     });
// }

// // 

// function fetchMovies() {
//     return fetch("http://localhost:3000/movies")
//         .then((response) => response.json())
// }

// function createTemplateFromMovieArr(movieArr){
//     return movieArr.map(movie => {
//       return `<div class="item">
//       <img src="${movie.imgUrl}" class="item__img" aria-label="Movie image">
//       <p><em>Movie: ${movie.name}</em></p>
//       <p><em>Info: ${movie.outlineInfo}</em></p>
//     </div>`
//   }).join(" ")
// }

// function renderTemplate(element, template) {
//   element.innerHTML = template
// }

// fetchMovies().then(movies => {
//     renderTemplate(domSelectors.content, createTemplateFromMovieArr(movies))
// })

// scrollEvents()




