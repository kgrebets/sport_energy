import{c as m,d as c,Y as p,f as y,i as f,b as h,F as x}from"./assets/modal-controller-BtdzKvlk.js";import"./assets/vendor-BAoYjrW1.js";function b(e){const a=m(e.name);return`
<li class="exercises-category-tile-item" data-id="${e._id}">
                  <div class="exercises-category-tile-top">
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-badge">WORKOUT</span>
                    <button class="exercises-category-tile-button-delete" aria-label="Remove from favorites" data-id="${e._id}" data-modal-ignore>
                      <svg class="icon" width="20" height="20">
                        <use href="./img/sprite.svg#trash"></use>
                      </svg>
                    </button>
                    </div>
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-start">Start</span>
                    <button class="exercises-category-tile-button-start" aria-label="Start workout">
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
                    <h3 class="exercise-name">${a}</h3>
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
    `}function l(){const e=document.querySelector(".exercises-content");if(!e)return;async function a(s){try{const t=await fetch(`${p}exercises/${s}`);if(!t.ok)throw new Error("Exercise not found");return await t.json()}catch(t){return console.error(`Failed to fetch exercise with id ${s}:`,t),null}}function d(s){c.removeFavorite(s)}function u(){e.querySelectorAll(".exercises-category-tile-button-delete").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.id;i&&d(i)})})}async function v(){const s=c.getFavoriteIds();console.log(s);const t=s.map(r=>a(r)),o=(await Promise.all(t)).filter(r=>r!==null);if(o.length===0){e.innerHTML=`
        <p class="no-favorites">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>`;return}const g=o.map(b).join("");e.innerHTML=`<ul class="exercises-list">${g}</ul>`,u()}v()}y();l();f();const n=document.querySelector(".favorites-list");n instanceof HTMLElement&&h(n);document.addEventListener(x,()=>{l()});
//# sourceMappingURL=favorites.js.map
