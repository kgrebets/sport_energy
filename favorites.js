import{Y as w,f as I,i as E}from"./assets/init-footer-CioJlKFE.js";import"./assets/vendor-BAoYjrW1.js";function P(s){return`
<li class="exercises-category-tile-item" data-id="${s._id}">
                  <div class="exercises-category-tile-top">
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-badge">WORKOUT</span>
                    <button class="exercises-category-tile-button-delete" aria-label="Remove from favorites" data-id="${s._id}">
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
                    <h3 class="exercise-name">${s.name}</h3>
                  </div>
            
                  <div class="exercises-category-tile-bottom">
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Burned calories:</span>
                      <span class="exercises-category-tile-bottom-value">${s.burnedCalories} / ${s.time} min</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Body part:</span>
                      <span class="exercises-category-tile-bottom-value">${s.bodyPart}</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Target:</span>
                      <span class="exercises-category-tile-bottom-value">${s.target}</span>
                    </div>
                  </div>
                </li>
    `}function S(){function s(){return window.innerWidth>=1024}function f(){return window.innerWidth>=768&&window.innerWidth<1024}function m(){return f()?10:8}const n=document.querySelector(".exercises-content");if(!n)return;function l(){try{const t=localStorage.getItem("favorites");if(!t)return[];const e=JSON.parse(t);if(!Array.isArray(e)||!e.every(i=>typeof i=="string"))throw new Error("Invalid format in favorites");return e}catch(t){return console.error("Failed to load favorites from localStorage:",t),localStorage.removeItem("favorites"),[]}}async function p(t){try{const e=await fetch(`${w}exercises/${t}`);if(!e.ok)throw new Error("Exercise not found");return await e.json()}catch(e){return console.error(`Failed to fetch exercise with id ${t}:`,e),null}}function y(t){const i=l().filter(r=>r!==t);localStorage.setItem("favorites",JSON.stringify(i)),d()}function h(){n.querySelectorAll(".exercises-category-tile-button-delete").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.id;i&&y(i)})})}function x(t,e,i){const r=document.createElement("div");r.classList.add("pagination");for(let a=1;a<=t;a++){const o=document.createElement("button");o.classList.add("pagination-btn"),a===e&&o.classList.add("active"),o.textContent=a.toString(),o.dataset.page=a.toString(),o.addEventListener("click",()=>i(a)),r.appendChild(o)}return r}async function d(){const t=l();console.log(t);const e=t.map(c=>p(c)),r=(await Promise.all(e)).filter(c=>c!==null);if(r.length===0){n.innerHTML=`
        <p class="no-favorites">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>`;return}let a=1;const o=m(),b=s()?1:Math.ceil(r.length/o),u=c=>{a=c;const g=(c-1)*o,v=(s()?r:r.slice(g,g+o)).map(P).join("");s()?n.innerHTML=`
          <div class="exercises-scroll-container">
            <ul class="exercises-list">${v}</ul>
          </div>
        `:(n.innerHTML=`<ul class="exercises-list">${v}</ul>`,n.appendChild(x(b,a,u))),h()};u(a)}d()}I();S();E();
//# sourceMappingURL=favorites.js.map
