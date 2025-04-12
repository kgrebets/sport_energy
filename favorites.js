import{f as u,i as v}from"./assets/init-footer-B8xpovtY.js";import"./assets/vendor-BAoYjrW1.js";function p(e){return`
<li class="exercises-category-tile-item" data-id="${e._id}">
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
    `}function d(){return window.innerWidth>=1024}function m(){return window.innerWidth>=768&&window.innerWidth<1024}function g(e,r){if(!e||e.length===0){r.innerHTML=`
        <p class="no-favorites">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      `;return}let o=8,c=1,t,n=1;if(d())t=e;else{m()&&(o=10),n=Math.ceil(e.length/o);const i=(c-1)*o,a=i+o;t=e.slice(i,a)}const s=t.map(p).join("");if(d()?r.innerHTML=`
            <div class="exercises-scroll-container">
                <ul class="exercises-list">${s}</ul>
            </div>
        `:r.innerHTML=`<ul class="exercises-list">${s}</ul>`,!d()){const i=document.createElement("div");i.classList.add("pagination");for(let a=1;a<=n;a++){const l=document.createElement("button");l.classList.add("pagination-btn"),a===c&&l.classList.add("active"),l.textContent=a.toString(),l.dataset.page=a.toString(),i.appendChild(l)}r.appendChild(i)}}function f(){const e=document.querySelector(".exercises-content");function r(){try{return JSON.parse(localStorage.getItem("favorites")||"[]")}catch{return[]}}function o(t){const s=JSON.parse(localStorage.getItem("favorites")||"[]").filter(i=>i._id!==t);localStorage.setItem("favorites",JSON.stringify(s)),g(s,e),c()}function c(){e.querySelectorAll(".exercises-category-tile-button-delete").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.id;s&&o(s)})})}g(r(),e),c()}u();f();v();
//# sourceMappingURL=favorites.js.map
