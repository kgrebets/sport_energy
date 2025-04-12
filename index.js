import{m as S,c as H,g as T,s as k,a as L,f as P,i as N,b as A}from"./assets/modal-controller-DxepiLtK.js";import"./assets/vendor-BAoYjrW1.js";async function R(s){const e=await S("filters",s);if(!e)throw new Error("Cant' get filters");return e}function B(s){return s.map(e=>`
          <li class="filter-card" data-filter-type="${e.filter}" data-filter-name="${e.name}">
            <img src="${e.imgURL}" alt="${e.name}" />
            <div class="filter-info">
              <div class="filter-name">${e.name}</div>
              <div class="filter-type">${e.filter}</div>
            </div>
          </li>
        `).join("")}function C(s,e){const o=[];let l=Math.max(1,e-1),c=Math.min(s,l+3-1);c-l+1<3&&(l=Math.max(1,c-3+1));for(let u=l;u<=c;u++)o.push(u);return o.map(u=>`
    <li class="pagination-page${u===e?" active":""}" data-page="${u}">${u}</li>
  `).join("")}function D(s,e,o,g,l,c){const u=H(e),p=g.toLowerCase()==="cardio"?"running":"fluent-food",i="/sport_energy/img/sprite.svg";return`
<li class="exercises-category-tile-item">
  <div class="exercises-category-tile-top">
    <div class="exercises-category-tile-workout-wrapper">
      <span class="exercises-category-tile-badge">
        WORKOUT
      </span>
      <div class="exercises-category-tile-rating-wrapper">
        <span class="exercises-category-tile-rating">${s.toFixed(1)}</span>
        <svg class="exercises-category-tile-star-icon" width="16" height="16">
          <use href="${i}#Star"></use>
        </svg>
      </div>
    </div>
    <button class="exercises-category-tile-button" data-id="${c}">
      Start
      <svg class="exercises-category-tile-arrow-icon" width="16" height="16">
        <use href="${i}#arrow-right"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-category-tile-middle">
    <div class="exercises-category-tile-man-icon-container">
      <svg class="exercises-category-tile-man-icon" width="16" height="16">
        <use href="${i}#${p}"></use>
      </svg>
    </div>
    <h3 class="exercises-category-tile-name">${u}</h3>
  </div>
  <ul class="exercises-category-tile-bottom">
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        <span class="exercises-category-tile-bottom-value">${o}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        <span class="exercises-category-tile-bottom-value">${g}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${l}</span>
      </li>
  </ul>
</li>`}function j(){var E;const s=document.querySelector(".filters-output"),e=document.querySelector(".filter-tabs"),o=document.querySelector(".filter-pagination"),g=document.querySelector(".exercises-list"),l=document.querySelector(".exercises-pagination"),c=document.querySelector(".exercises-filters-form"),u=document.querySelector(".exercises-subheader-container");if(!s)throw new Error("Can't find .filters-output");if(!e)throw new Error("Can't find .filter-tabs");if(!o)throw new Error("Can't find .filter-pagination");if(!c)throw new Error("Can't find .exercises-filters-form");if(!u)throw new Error("Can't find .exercises-subheader-container");let p=(E=e.querySelector(".active"))==null?void 0:E.dataset.filter,i=1,y="",b,x;c.addEventListener("submit",r=>{r.preventDefault(),y=new FormData(c).get("keyword"),v(b,x,i)});function h(r,t){s.innerHTML="",o.innerHTML="",R({filter:r,page:t,limit:12}).then(n=>{s.innerHTML=B(n.results),o.innerHTML=C(n.totalPages,t),s.style.display="flex",o.style.display="flex",w(null),g.style.display="none",l.style.display="none",c.style.display="none",c.reset(),y="",M()}).catch(n=>L({title:"Error",message:n.message,position:"topRight"}))}async function v(r,t,a){if(!g||!l)return;const n=10,d={[r]:t,page:a,limit:n,keyword:y};try{const f=await T(d),F=f.results.map(m=>D(m.rating,m.name,`${m.burnedCalories} kcal`,m.bodyPart,m.target,m._id)).join("");g.innerHTML=F,l.innerHTML=C(f.totalPages,f.page),c.style.display="flex",g.style.display="flex",l.style.display="flex",q(r,t),f.results.length===0&&k({title:"",message:" No excersies found",position:"topRight"})}catch(f){L({title:"Error",message:(f==null?void 0:f.message)||"Failed to load exercises",position:"topRight"})}}function M(){s.querySelectorAll(".filter-card").forEach(t=>{t.addEventListener("click",()=>{const a=t.getAttribute("data-filter-type"),n=t.getAttribute("data-filter-name");if(!a||!n)return;i=1;let d;if(a==="Muscles")d="muscles";else if(a==="Body parts")d="bodypart";else if(a==="Equipment")d="equipment";else return;s&&o&&(s.innerHTML="",s.style.display="none",o.innerHTML="",o.style.display="none"),w(n),b=d,x=n.toLowerCase(),v(d,x,i)})})}function w(r){u.innerHTML=r?` / <span class="exercises-subheader">${r}</span>`:""}function q(r,t){l.querySelectorAll(".pagination-page").forEach(n=>{n.addEventListener("click",()=>{const d=Number(n.getAttribute("data-page"));!d||d===i||(i=d,v(r,t,i))})})}e.addEventListener("click",r=>{const t=r.target;if(t.tagName.toLowerCase()!=="button")return;const a=t.dataset.filter;!a||a===p||(e.querySelectorAll("button").forEach(n=>n.classList.remove("active")),t.classList.add("active"),p=a,i=1,h(p,i))}),o.addEventListener("click",r=>{const t=r.target;if(t.tagName.toLowerCase()!=="li")return;const a=Number(t.dataset.page);!a||a===i||(i=a,h(p,i))}),h(p,i)}j();P();N();const $=document.querySelector(".exercises-content");$ instanceof HTMLElement&&A($);
//# sourceMappingURL=index.js.map
