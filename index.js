import{m as S,c as H,g as T,s as k,a as L,f as P,i as N,b as A}from"./assets/modal-controller-BN1Pmi3B.js";import"./assets/vendor-BAoYjrW1.js";async function R(s){const e=await S("filters",s);if(!e)throw new Error("Cant' get filters");return e}function D(s){return s.map(e=>`
          <li class="filter-card" data-filter-type="${e.filter}" data-filter-name="${e.name}">
            <img src="${e.imgURL}" alt="${e.name}" />
            <div class="filter-info">
              <div class="filter-name">${e.name}</div>
              <div class="filter-type">${e.filter}</div>
            </div>
          </li>
        `).join("")}function C(s,e){const n=[];let o=Math.max(1,e-1),l=Math.min(s,o+3-1);l-o+1<3&&(o=Math.max(1,l-3+1));for(let c=o;c<=l;c++)n.push(c);return n.map(c=>`
    <li class="pagination-page${c===e?" active":""}" data-page="${c}">${c}</li>
  `).join("")}function j(s,e,n,d,o,l){const c=H(e),m=d.toLowerCase()==="cardio"?"running":"fluent-food";return`
<li class="exercises-category-tile-item">
  <div class="exercises-category-tile-top">
    <div class="exercises-category-tile-workout-wrapper">
      <span class="exercises-category-tile-badge">
        WORKOUT
      </span>
      <div class="exercises-category-tile-rating-wrapper">
        <span class="exercises-category-tile-rating">${s.toFixed(1)}</span>
        <svg class="exercises-category-tile-star-icon" width="16" height="16">
          <use href="./../img/sprite.svg#Star"></use>
        </svg>
      </div>
    </div>
    <button class="exercises-category-tile-button" data-id="${l}">
      Start
      <svg class="exercises-category-tile-arrow-icon" width="16" height="16">
        <use href="./../img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-category-tile-middle">
    <div class="exercises-category-tile-man-icon-container">
      <svg class="exercises-category-tile-man-icon" width="16" height="16">
        <use href="./../img/sprite.svg#${m}"></use>
      </svg>
    </div>
    <h3 class="exercises-category-tile-name">${c}</h3>
  </div>
  <ul class="exercises-category-tile-bottom">
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        <span class="exercises-category-tile-bottom-value">${n}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        <span class="exercises-category-tile-bottom-value">${d}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${o}</span>
      </li>
  </ul>
</li>`}function B(){var E;const s=document.querySelector(".filters-output"),e=document.querySelector(".filter-tabs"),n=document.querySelector(".filter-pagination"),d=document.querySelector(".exercises-list"),o=document.querySelector(".exercises-pagination"),l=document.querySelector(".exercises-filters-form"),c=document.querySelector(".exercises-subheader-container");if(!s)throw new Error("Can't find .filters-output");if(!e)throw new Error("Can't find .filter-tabs");if(!n)throw new Error("Can't find .filter-pagination");if(!l)throw new Error("Can't find .exercises-filters-form");if(!c)throw new Error("Can't find .exercises-subheader-container");let m=(E=e.querySelector(".active"))==null?void 0:E.dataset.filter,g=1,y="",b,x;l.addEventListener("submit",i=>{i.preventDefault(),y=new FormData(l).get("keyword"),v(b,x,g)});function h(i,t){s.innerHTML="",n.innerHTML="",R({filter:i,page:t,limit:12}).then(a=>{s.innerHTML=D(a.results),n.innerHTML=C(a.totalPages,t),s.style.display="flex",n.style.display="flex",w(null),d.style.display="none",o.style.display="none",l.style.display="none",l.reset(),y="",M()}).catch(a=>L({title:"Error",message:a.message,position:"topRight"}))}async function v(i,t,r){if(!d||!o)return;const a=10,u={[i]:t,page:r,limit:a,keyword:y};try{const f=await T(u),F=f.results.map(p=>j(p.rating,p.name,`${p.burnedCalories} kcal`,p.bodyPart,p.target,p._id)).join("");d.innerHTML=F,o.innerHTML=C(f.totalPages,f.page),l.style.display="flex",d.style.display="flex",o.style.display="flex",q(i,t),f.results.length===0&&k({title:"",message:" No excersies found",position:"topRight"})}catch(f){L({title:"Error",message:(f==null?void 0:f.message)||"Failed to load exercises",position:"topRight"})}}function M(){s.querySelectorAll(".filter-card").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-filter-type"),a=t.getAttribute("data-filter-name");if(!r||!a)return;g=1;let u;if(r==="Muscles")u="muscles";else if(r==="Body parts")u="bodypart";else if(r==="Equipment")u="equipment";else return;s&&n&&(s.innerHTML="",s.style.display="none",n.innerHTML="",n.style.display="none"),w(a),b=u,x=a.toLowerCase(),v(u,x,g)})})}function w(i){c.innerHTML=i?` / <span class="exercises-subheader">${i}</span>`:""}function q(i,t){o.querySelectorAll(".pagination-page").forEach(a=>{a.addEventListener("click",()=>{const u=Number(a.getAttribute("data-page"));!u||u===g||(g=u,v(i,t,g))})})}e.addEventListener("click",i=>{const t=i.target;if(t.tagName.toLowerCase()!=="button")return;const r=t.dataset.filter;!r||r===m||(e.querySelectorAll("button").forEach(a=>a.classList.remove("active")),t.classList.add("active"),m=r,g=1,h(m,g))}),n.addEventListener("click",i=>{const t=i.target;if(t.tagName.toLowerCase()!=="li")return;const r=Number(t.dataset.page);!r||r===g||(g=r,h(m,g))}),h(m,g)}B();P();N();const $=document.querySelector(".exercises-content");$ instanceof HTMLElement&&A($);
//# sourceMappingURL=index.js.map
