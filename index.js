import"./assets/header-xb7k3F2k.js";import{i as $,a as P}from"./assets/vendor-BAoYjrW1.js";const A="https://your-energy.b.goit.study/api/",v=({title:e,message:t,position:a,...s}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{$.error({title:e,message:t,position:a,...s})},B=({title:e,message:t,position:a,...s}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{$.success({title:e,message:t,position:a,...s})},Q=({title:e,message:t,position:a,...s})=>{$.info({title:e,message:t,position:a,...s})},k=async(e,t)=>{try{const{data:a}=await P.get(`${A}${e}`,{params:t});return a}catch(a){console.error(a),v()}},j=async(e,t)=>{try{const{data:a}=await P.post(`${A}${e}`,t);return a}catch(a){console.error(a),v()}};async function U(e){const t=await k("filters",e);if(!t)throw new Error("Cant' get filters");return t}function Y(e){return e.map(t=>`
          <li class="filter-card" data-filter-type="${t.filter}" data-filter-name="${t.name}">
            <img src="${t.imgURL}" alt="${t.name}" />
            <div class="filter-info">
              <div class="filter-name">${t.name}</div>
              <div class="filter-type">${t.filter}</div>
            </div>
          </li>
        `).join("")}function M(e,t){const a=[];let r=Math.max(1,t-1),i=Math.min(e,r+3-1);i-r+1<3&&(r=Math.max(1,i-3+1));for(let n=r;n<=i;n++)a.push(n);return a.map(n=>`
    <li class="pagination-page${n===t?" active":""}" data-page="${n}">${n}</li>
  `).join("")}function J(e,t,a,s,r,i){const n=s.toLowerCase()==="cardio"?"running":"fluent-food";return`
<li class="exercises-category-tile-item" data-id="${i}">
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
        <use href="./../img/sprite.svg#${n}"></use>
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
        <span class="exercises-category-tile-bottom-value">${s}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${r}</span>
      </li>
  </ul>
</li>`}async function R(e){const t=await k("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}async function z(e){return(await R({})).results.find(a=>a._id===e)||null}function G(){var T;const e=document.querySelector(".filters-output"),t=document.querySelector(".filter-tabs"),a=document.querySelector(".filter-pagination"),s=document.querySelector(".exercises-list"),r=document.querySelector(".exercises-pagination"),i=document.querySelector(".exercises-filters-form"),n=document.querySelector(".exercises-subheader-container");if(!e)throw new Error("Can't find .filters-output");if(!t)throw new Error("Can't find .filter-tabs");if(!a)throw new Error("Can't find .filter-pagination");if(!i)throw new Error("Can't find .exercises-filters-form");if(!n)throw new Error("Can't find .exercises-subheader-container");let g=(T=t.querySelector(".active"))==null?void 0:T.dataset.filter,u=1,b="",C,h;i.addEventListener("submit",c=>{c.preventDefault(),b=new FormData(i).get("keyword"),E(C,h,u)});function w(c,o){U({filter:c,page:o,limit:12}).then(d=>{e.innerHTML=Y(d.results),a.innerHTML=M(d.totalPages,o),e.style.display="flex",a.style.display="flex",F(null),s.style.display="none",r.style.display="none",i.hidden=!0,i.reset(),b="",H()}).catch(d=>v({title:"Error",message:d.message,position:"topRight"}))}async function E(c,o,l){if(!s||!r)return;const d=10,m={[c]:o,page:l,limit:d,keyword:b};try{const f=await R(m),_=f.results.map(y=>J(y.rating,y.name,`${y.burnedCalories} kcal`,y.bodyPart,y.target,y._id)).join("");s.innerHTML=_,r.innerHTML=M(f.totalPages,f.page),i.hidden=!1,s.style.display="flex",r.style.display="flex",N(c,o),f.results.length===0&&Q({title:"",message:" No excersies found",position:"topRight"})}catch(f){v({title:"Error",message:(f==null?void 0:f.message)||"Failed to load exercises",position:"topRight"})}}function H(){e.querySelectorAll(".filter-card").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-filter-type"),d=o.getAttribute("data-filter-name");if(!l||!d)return;u=1;let m;if(l==="Muscles")m="muscles";else if(l==="Body parts")m="bodypart";else if(l==="Equipment")m="equipment";else return;e&&a&&(e.innerHTML="",e.style.display="none",a.innerHTML="",a.style.display="none"),F(d),C=m,h=d.toLowerCase(),E(m,h,u)})})}function F(c){n.innerHTML=c?` / <span class="exercises-subheader">${c}</span>`:""}function N(c,o){r.querySelectorAll(".pagination-page").forEach(d=>{d.addEventListener("click",()=>{const m=Number(d.getAttribute("data-page"));!m||m===u||(u=m,E(c,o,u))})})}t.addEventListener("click",c=>{const o=c.target;if(o.tagName.toLowerCase()!=="button")return;const l=o.dataset.filter;!l||l===g||(t.querySelectorAll("button").forEach(d=>d.classList.remove("active")),o.classList.add("active"),g=l,u=1,w(g,u))}),a.addEventListener("click",c=>{const o=c.target;if(o.tagName.toLowerCase()!=="li")return;const l=Number(o.dataset.page);!l||l===u||(u=l,w(g,u))}),w(g,u)}async function V(){const e=await k("quote");if(!e)throw new Error("Cant' get quote");return e}const S=document.getElementById("quote-text"),q=document.getElementById("quote-author"),D="quote",I="quoteDate";function O(){return new Date().toISOString().split("T")[0]}function K(){const e=localStorage.getItem(D),t=localStorage.getItem(I),a=O();if(e&&t===a)try{return JSON.parse(e)}catch(s){return console.error("Error parsing stored quote:",s),null}return null}function x(e,t){if(!S||!q)throw new Error("Can't find quote elements");S.textContent=e,q.textContent=t}function Z(e,t){const a=JSON.stringify({quote:e,author:t}),s=O();localStorage.setItem(D,a),localStorage.setItem(I,s)}async function W(){try{const e=await V();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function X(){if(!S||!q)throw new Error("Can't find quote elements");const e=K();if(e){x(e.quote,e.author);return}const t=await W();t?(Z(t.quote,t.author),x(t.quote,t.author)):x("Failed to fetch quote.","")}function ee(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",a);async function a(r){r.preventDefault();const n=new FormData(e).get("email");if(!n||!s(n)){v({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await j("subscription",{email:n})===void 0)throw new Error("Subscription failed");e.reset(),B({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch{v({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function s(r){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)}}function te(e){return`
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
              <button id="fav-btn" class="btn-white">${se(e._id)?"Remove from favorites ♡":"Add to favorites ♡"}</button>
              <button id="rate-btn" class="btn-black">Give a rating</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function ae(){return`
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
    `}function se(e){return JSON.parse(localStorage.getItem("favorites")||"[]").includes(e)}function re(){const e=document.querySelectorAll(".star"),t=document.querySelector(".rating-value");e.forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-value");t.textContent=`${parseFloat(s).toFixed(1)}`,e.forEach(r=>{r.classList.toggle("active",r.getAttribute("data-value")<=s)})})})}function ne(e){const t=document.getElementById("rating-form");t.addEventListener("submit",async a=>{var n;a.preventDefault();const s=new FormData(t),r=parseFloat(document.querySelector(".rating-value").textContent),i={email:s.get("email"),comment:s.get("comment"),rating:r,exerciseId:e};try{if(!(await fetch("/api/rating",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to send rating");(n=t.closest(".modal-backdrop"))==null||n.remove()}catch(g){alert(g.message||"Unknown error")}})}function ie(e){var a,s,r,i;const t=te(e);document.body.insertAdjacentHTML("beforeend",t),(a=document.querySelector("[data-modal-close]"))==null||a.addEventListener("click",p),(s=document.getElementById("exercise-modal-backdrop"))==null||s.addEventListener("click",n=>{n.target.id==="exercise-modal-backdrop"&&p()}),document.addEventListener("keydown",L),(r=document.getElementById("fav-btn"))==null||r.addEventListener("click",()=>ce(e._id)),(i=document.getElementById("rate-btn"))==null||i.addEventListener("click",()=>{p(),oe(e._id)})}function oe(e){var a,s;const t=ae();document.body.insertAdjacentHTML("beforeend",t),(a=document.querySelector("[data-modal-close]"))==null||a.addEventListener("click",p),(s=document.getElementById("rating-modal-backdrop"))==null||s.addEventListener("click",r=>{r.target.id==="rating-modal-backdrop"&&p()}),document.addEventListener("keydown",L),re(),ne(e)}function L(e){e.key==="Escape"&&p()}function p(){var e;(e=document.querySelector(".modal-backdrop"))==null||e.remove(),document.removeEventListener("keydown",L)}function ce(e){const t=JSON.parse(localStorage.getItem("favorites")||"[]"),a=t.indexOf(e);a!==-1?t.splice(a,1):t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),p()}G();X();ee();document.addEventListener("click",async e=>{const a=e.target.closest(".exercises-category-tile-item");if(a){const s=a.getAttribute("data-id");if(!s)return;const r=await z(s);r&&ie(r)}});
//# sourceMappingURL=index.js.map
