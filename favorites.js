import{c as L,d as v,Y as P,f as $,i as T,b as F,F as I}from"./assets/modal-controller-DhIMdvhu.js";import"./assets/vendor-BAoYjrW1.js";function S(e){const l=L(e.name);return`
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
                    <h3 class="exercise-name">${l}</h3>
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
    `}function p(){function e(){return window.innerWidth>=1024}function l(){return window.innerWidth>=768&&window.innerWidth<1024}function f(){return l()?10:8}const n=document.querySelector(".exercises-content");if(!n)return;async function h(s){try{const t=await fetch(`${P}exercises/${s}`);if(!t.ok)throw new Error("Exercise not found");return await t.json()}catch(t){return console.error(`Failed to fetch exercise with id ${s}:`,t),null}}function y(s){v.removeFavorite(s)}function x(){n.querySelectorAll(".exercises-category-tile-button-delete").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.id;o&&y(o)})})}function b(s,t,o){const r=document.createElement("div");r.classList.add("pagination");for(let i=1;i<=s;i++){const a=document.createElement("button");a.classList.add("pagination-btn"),i===t&&a.classList.add("active"),a.textContent=i.toString(),a.dataset.page=i.toString(),a.addEventListener("click",()=>o(i)),r.appendChild(a)}return r}async function E(){const s=v.getFavoriteIds();console.log(s);const t=s.map(c=>h(c)),r=(await Promise.all(t)).filter(c=>c!==null);if(r.length===0){n.innerHTML=`
        <p class="no-favorites">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>`;return}let i=1;const a=f(),w=e()?1:Math.ceil(r.length/a),d=c=>{i=c;const u=(c-1)*a,g=(e()?r:r.slice(u,u+a)).map(S).join("");e()?n.innerHTML=`
          <div class="exercises-scroll-container">
            <ul class="exercises-list">${g}</ul>
          </div>
        `:(n.innerHTML=`<ul class="exercises-list">${g}</ul>`,n.appendChild(b(w,i,d))),x()};d(i)}E()}$();p();T();const m=document.querySelector(".favorites-list");m instanceof HTMLElement&&F(m);document.addEventListener(I,()=>{p()});
//# sourceMappingURL=favorites.js.map
