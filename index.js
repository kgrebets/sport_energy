import{m as C,s as H,a as $,f as P,i as A}from"./assets/init-footer-82zN2L3w.js";import"./assets/vendor-BAoYjrW1.js";async function B(e){const t=await C("filters",e);if(!t)throw new Error("Cant' get filters");return t}function I(e){return e.map(t=>`
          <li class="filter-card" data-filter-type="${t.filter}" data-filter-name="${t.name}">
            <img src="${t.imgURL}" alt="${t.name}" />
            <div class="filter-info">
              <div class="filter-name">${t.name}</div>
              <div class="filter-type">${t.filter}</div>
            </div>
          </li>
        `).join("")}function S(e,t){const a=[];let s=Math.max(1,t-1),n=Math.min(e,s+3-1);n-s+1<3&&(s=Math.max(1,n-3+1));for(let o=s;o<=n;o++)a.push(o);return a.map(o=>`
    <li class="pagination-page${o===t?" active":""}" data-page="${o}">${o}</li>
  `).join("")}function N(e,t,a,i,s,n){const o=i.toLowerCase()==="cardio"?"running":"fluent-food";return`
<li class="exercises-category-tile-item" data-id="${n}">
  <div class="exercises-category-tile-top">
    <div class="exercises-category-tile-workout-wrapper">
      <span class="exercises-category-tile-badge">
        WORKOUT
      </span>
      <div class="exercises-category-tile-rating-wrapper">
        <span class="exercises-category-tile-rating">${e.toFixed(1)}</span>
        <svg class="exercises-category-tile-star-icon" width="16" height="16">
          <use href="./../img/sprite.svg#Star"></use>
        </svg>
      </div>
    </div>
    <button class="exercises-category-tile-button">
      Start
      <svg class="exercises-category-tile-arrow-icon" width="16" height="16">
        <use href="./../img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-category-tile-middle">
    <div class="exercises-category-tile-man-icon-container">
      <svg class="exercises-category-tile-man-icon" width="16" height="16">
        <use href="./../img/sprite.svg#${o}"></use>
      </svg>
    </div>
    <h3 class="exercises-category-tile-name">${t}</h3>
  </div>
  <ul class="exercises-category-tile-bottom">
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        <span class="exercises-category-tile-bottom-value">${a}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        <span class="exercises-category-tile-bottom-value">${i}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${s}</span>
      </li>
  </ul>
</li>`}async function q(e){const t=await C("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}async function R(e){return(await q({})).results.find(a=>a._id===e)||null}function O(){var L;const e=document.querySelector(".filters-output"),t=document.querySelector(".filter-tabs"),a=document.querySelector(".filter-pagination"),i=document.querySelector(".exercises-list"),s=document.querySelector(".exercises-pagination"),n=document.querySelector(".exercises-filters-form"),o=document.querySelector(".exercises-subheader-container");if(!e)throw new Error("Can't find .filters-output");if(!t)throw new Error("Can't find .filter-tabs");if(!a)throw new Error("Can't find .filter-pagination");if(!n)throw new Error("Can't find .exercises-filters-form");if(!o)throw new Error("Can't find .exercises-subheader-container");let g=(L=t.querySelector(".active"))==null?void 0:L.dataset.filter,m=1,y="",E,b;n.addEventListener("submit",l=>{l.preventDefault(),y=new FormData(n).get("keyword"),h(E,b,m)});function x(l,r){B({filter:l,page:r,limit:12}).then(d=>{e.innerHTML=I(d.results),a.innerHTML=S(d.totalPages,r),e.style.display="flex",a.style.display="flex",k(null),i.style.display="none",s.style.display="none",n.hidden=!0,n.reset(),y="",F()}).catch(d=>$({title:"Error",message:d.message,position:"topRight"}))}async function h(l,r,c){if(!i||!s)return;const d=10,u={[l]:r,page:c,limit:d,keyword:y};try{const p=await q(u),T=p.results.map(v=>N(v.rating,v.name,`${v.burnedCalories} kcal`,v.bodyPart,v.target,v._id)).join("");i.innerHTML=T,s.innerHTML=S(p.totalPages,p.page),n.hidden=!1,i.style.display="flex",s.style.display="flex",M(l,r),p.results.length===0&&H({title:"",message:" No excersies found",position:"topRight"})}catch(p){$({title:"Error",message:(p==null?void 0:p.message)||"Failed to load exercises",position:"topRight"})}}function F(){e.querySelectorAll(".filter-card").forEach(r=>{r.addEventListener("click",()=>{const c=r.getAttribute("data-filter-type"),d=r.getAttribute("data-filter-name");if(!c||!d)return;m=1;let u;if(c==="Muscles")u="muscles";else if(c==="Body parts")u="bodypart";else if(c==="Equipment")u="equipment";else return;e&&a&&(e.innerHTML="",e.style.display="none",a.innerHTML="",a.style.display="none"),k(d),E=u,b=d.toLowerCase(),h(u,b,m)})})}function k(l){o.innerHTML=l?` / <span class="exercises-subheader">${l}</span>`:""}function M(l,r){s.querySelectorAll(".pagination-page").forEach(d=>{d.addEventListener("click",()=>{const u=Number(d.getAttribute("data-page"));!u||u===m||(m=u,h(l,r,m))})})}t.addEventListener("click",l=>{const r=l.target;if(r.tagName.toLowerCase()!=="button")return;const c=r.dataset.filter;!c||c===g||(t.querySelectorAll("button").forEach(d=>d.classList.remove("active")),r.classList.add("active"),g=c,m=1,x(g,m))}),a.addEventListener("click",l=>{const r=l.target;if(r.tagName.toLowerCase()!=="li")return;const c=Number(r.dataset.page);!c||c===m||(m=c,x(g,m))}),x(g,m)}function j(e){return`
    <div class="modal-backdrop" id="exercise-modal-backdrop">
      <div class="modal exercise-modal" id="exercise-modal">
        <button class="modal-close" data-modal-close>✕</button>
        <div class="modal-layout">
          <div class="modal-image">
            <img src="${e.gifUrl}" alt="${e.name}" />
          </div>
          <div class="modal-info">
            <h2 class="modal-title">${e.name}</h2>

            <div class="modal-rating">
              <span class="rating-value">${e.rating.toFixed(1)}</span>
              <div class="stars">
                ${[1,2,3,4,5].map(t=>`<span class="star ${t<=e.rating?"active":""}">★</span>`).join("")}
              </div>
            </div>

            <div class="modal-line"></div>

            <div class="modal-meta">
              <div>
                <span class="meta-label">Target</span>
                <strong>${e.target}</strong>
              </div>
              <div>
                <span class="meta-label">Body Part</span>
                <strong>${e.bodyPart}</strong>
              </div>
              <div>
                <span class="meta-label">Equipment</span>
                <strong>${e.equipment}</strong>
              </div>
              <div>
                <span class="meta-label">Popular</span>
                <strong>${e.popularity}</strong>
              </div>
            </div>

            <div class="modal-calories">
              <span class="meta-label">Burned calories</span>
              <strong>${e.burnedCalories}/${e.time} min</strong>
            </div>

            <div class="modal-line"></div>

            <p class="modal-description">${e.description}</p>

            <div class="modal-buttons">
              <button id="fav-btn" class="btn-white">${_(e._id)?"Remove from favorites ♡":"Add to favorites ♡"}</button>
              <button id="rate-btn" class="btn-black">Give a rating</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function D(){return`
      <div class="modal-backdrop" id="rating-modal-backdrop">
        <div class="rating-modal">
          <button class="modal-close" data-modal-close>✕</button>
          <form id="rating-form">
            <div class="rating-row">
              <label class="rating-label">Rating</label>
              <div class="rating-stars">
                <span class="rating-value">0.0</span>
                <div class="stars" id="stars">
                  ${[1,2,3,4,5].map(e=>`<span class="star" data-value="${e}">★</span>`).join("")}
                </div>
              </div>
            </div>
  
            <input type="email" name="email" placeholder="Email" required pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"/>
            <textarea name="comment" placeholder="Your comment" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    `}function _(e){return JSON.parse(localStorage.getItem("favorites")||"[]").includes(e)}function J(){const e=document.querySelectorAll(".star"),t=document.querySelector(".rating-value");e.forEach(a=>{a.addEventListener("click",()=>{const i=a.getAttribute("data-value");t.textContent=`${parseFloat(i).toFixed(1)}`,e.forEach(s=>{s.classList.toggle("active",s.getAttribute("data-value")<=i)})})})}function U(e){const t=document.getElementById("rating-form");t.addEventListener("submit",async a=>{var o;a.preventDefault();const i=new FormData(t),s=parseFloat(document.querySelector(".rating-value").textContent),n={email:i.get("email"),comment:i.get("comment"),rating:s,exerciseId:e};try{if(!(await fetch("/api/rating",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to send rating");(o=t.closest(".modal-backdrop"))==null||o.remove()}catch(g){alert(g.message||"Unknown error")}})}function V(e){var a,i,s,n;const t=j(e);document.body.insertAdjacentHTML("beforeend",t),(a=document.querySelector("[data-modal-close]"))==null||a.addEventListener("click",f),(i=document.getElementById("exercise-modal-backdrop"))==null||i.addEventListener("click",o=>{o.target.id==="exercise-modal-backdrop"&&f()}),document.addEventListener("keydown",w),(s=document.getElementById("fav-btn"))==null||s.addEventListener("click",()=>G(e._id)),(n=document.getElementById("rate-btn"))==null||n.addEventListener("click",()=>{f(),z(e._id)})}function z(e){var a,i;const t=D();document.body.insertAdjacentHTML("beforeend",t),(a=document.querySelector("[data-modal-close]"))==null||a.addEventListener("click",f),(i=document.getElementById("rating-modal-backdrop"))==null||i.addEventListener("click",s=>{s.target.id==="rating-modal-backdrop"&&f()}),document.addEventListener("keydown",w),J(),U(e)}function w(e){e.key==="Escape"&&f()}function f(){var e;(e=document.querySelector(".modal-backdrop"))==null||e.remove(),document.removeEventListener("keydown",w)}function G(e){const t=JSON.parse(localStorage.getItem("favorites")||"[]"),a=t.indexOf(e);a!==-1?t.splice(a,1):t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),f()}O();P();A();document.addEventListener("click",async e=>{const a=e.target.closest(".exercises-category-tile-item");if(a){const i=a.getAttribute("data-id");if(!i)return;const s=await R(i);s&&V(s)}});
//# sourceMappingURL=index.js.map
