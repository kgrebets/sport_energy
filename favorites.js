import{f as g,i as v}from"./assets/init-footer-Sr1Fd7IC.js";import"./assets/vendor-BAoYjrW1.js";function p(e){return`
<li class="exercises-category-tile-item">
                  <div class="exercises-category-tile-top">
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-badge">WORKOUT</span>
                    <button class="exercises-category-tile-button-delete" aria-label="Remove from favorites" data-id="${e._id}">
                      <svg class="icon" width="20" height="20">
                        <use href="./img/sprite.svg#trash"></use>
                      </svg>
                    </button>
                    </div>
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-start">Start</span>
                    <button class="" aria-label="Start workout">
                      <svg class="icon" width="20" height="20">
                        <use href="./img/sprite.svg#arrow-right"></use>
                      </svg>
                    </button>
                    </div>

                  </div>
            
                  <div class="exercises-category-tile-middle">
                    <div class="exercises-category-tile-man-icon-container">
                      <svg class="exercises-category-tile-man-icon" width="24" height="24">
                        <use href="./img/sprite.svg#running"></use>
                      </svg>
                    </div>
                    <h3 class="exercise-name">${e.name}</h3>
                  </div>
            
                  <div class="exercises-category-tile-bottom">
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Burned calories:</span>
                      <span class="exercises-category-tile-bottom-value">${e.burnedCalories} / ${e.time} min</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Body part:</span>
                      <span class="exercises-category-tile-bottom-value">${e.bodyPart}</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Target:</span>
                      <span class="exercises-category-tile-bottom-value">${e.target}</span>
                    </div>
                  </div>
                </li>
    `}function u(e,t){if(!e||e.length===0){t.innerHTML=`
        <p class="no-favorites">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      `;return}const s=8;let o=1;const n=Math.ceil(e.length/s),c=(o-1)*s,l=c+s,d=e.slice(c,l).map(p).join("");t.innerHTML=`<ul class="exercises-list">${d}</ul>`;const r=document.createElement("div");r.classList.add("pagination");for(let a=1;a<=n;a++){const i=document.createElement("button");i.classList.add("pagination-btn"),a===o&&i.classList.add("active"),i.textContent=a.toString(),i.dataset.page=a.toString(),r.appendChild(i)}t.appendChild(r)}function m(){const e=document.querySelector(".exercises-content");function t(){try{return JSON.parse(localStorage.getItem("favorites")||"[]")}catch{return[]}}u(t(),e)}g();m();v();
//# sourceMappingURL=favorites.js.map
