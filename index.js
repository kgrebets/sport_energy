import{m as M,c as k,g as H,s as P,a as C,f as T,i as N,b as A}from"./assets/modal-controller-B1ICh_Bl.js";import"./assets/vendor-BAoYjrW1.js";async function R(r){const e=await M("filters",r);if(!e)throw new Error("Cant' get filters");return e}function D(r){return r.map(e=>`
          <li class="filter-card" data-filter-type="${e.filter}" data-filter-name="${e.name}">
            <img src="${e.imgURL}" alt="${e.name}" />
            <div class="filter-info">
              <div class="filter-name">${e.name}</div>
              <div class="filter-type">${e.filter}</div>
            </div>
          </li>
        `).join("")}function L(r,e){const n=[];let o=Math.max(1,e-1),l=Math.min(r,o+3-1);l-o+1<3&&(o=Math.max(1,l-3+1));for(let c=o;c<=l;c++)n.push(c);return n.map(c=>`
    <li class="pagination-page${c===e?" active":""}" data-page="${c}">${c}</li>
  `).join("")}function j(r,e,n,d,o,l){const c=k(e),m=d.toLowerCase()==="cardio"?"running":"fluent-food";return`
<li class="exercises-category-tile-item" data-id="${l}">
  <div class="exercises-category-tile-top">
    <div class="exercises-category-tile-workout-wrapper">
      <span class="exercises-category-tile-badge">
        WORKOUT
      </span>
      <div class="exercises-category-tile-rating-wrapper">
        <span class="exercises-category-tile-rating">${r.toFixed(1)}</span>
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
</li>`}function B(){var E;const r=document.querySelector(".filters-output"),e=document.querySelector(".filter-tabs"),n=document.querySelector(".filter-pagination"),d=document.querySelector(".exercises-list"),o=document.querySelector(".exercises-pagination"),l=document.querySelector(".exercises-filters-form"),c=document.querySelector(".exercises-subheader-container");if(!r)throw new Error("Can't find .filters-output");if(!e)throw new Error("Can't find .filter-tabs");if(!n)throw new Error("Can't find .filter-pagination");if(!l)throw new Error("Can't find .exercises-filters-form");if(!c)throw new Error("Can't find .exercises-subheader-container");let m=(E=e.querySelector(".active"))==null?void 0:E.dataset.filter,g=1,y="",b,x;l.addEventListener("submit",s=>{s.preventDefault(),y=new FormData(l).get("keyword"),v(b,x,g)});function h(s,t){R({filter:s,page:t,limit:12}).then(a=>{r.innerHTML=D(a.results),n.innerHTML=L(a.totalPages,t),r.style.display="flex",n.style.display="flex",w(null),d.style.display="none",o.style.display="none",l.style.display="none",l.reset(),y="",q()}).catch(a=>C({title:"Error",message:a.message,position:"topRight"}))}async function v(s,t,i){if(!d||!o)return;const a=10,u={[s]:t,page:i,limit:a,keyword:y};try{const f=await H(u),S=f.results.map(p=>j(p.rating,p.name,`${p.burnedCalories} kcal`,p.bodyPart,p.target,p._id)).join("");d.innerHTML=S,o.innerHTML=L(f.totalPages,f.page),l.style.display="flex",d.style.display="flex",o.style.display="flex",F(s,t),f.results.length===0&&P({title:"",message:" No excersies found",position:"topRight"})}catch(f){C({title:"Error",message:(f==null?void 0:f.message)||"Failed to load exercises",position:"topRight"})}}function q(){r.querySelectorAll(".filter-card").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-filter-type"),a=t.getAttribute("data-filter-name");if(!i||!a)return;g=1;let u;if(i==="Muscles")u="muscles";else if(i==="Body parts")u="bodypart";else if(i==="Equipment")u="equipment";else return;r&&n&&(r.innerHTML="",r.style.display="none",n.innerHTML="",n.style.display="none"),w(a),b=u,x=a.toLowerCase(),v(u,x,g)})})}function w(s){c.innerHTML=s?` / <span class="exercises-subheader">${s}</span>`:""}function F(s,t){o.querySelectorAll(".pagination-page").forEach(a=>{a.addEventListener("click",()=>{const u=Number(a.getAttribute("data-page"));!u||u===g||(g=u,v(s,t,g))})})}e.addEventListener("click",s=>{const t=s.target;if(t.tagName.toLowerCase()!=="button")return;const i=t.dataset.filter;!i||i===m||(e.querySelectorAll("button").forEach(a=>a.classList.remove("active")),t.classList.add("active"),m=i,g=1,h(m,g))}),n.addEventListener("click",s=>{const t=s.target;if(t.tagName.toLowerCase()!=="li")return;const i=Number(t.dataset.page);!i||i===g||(g=i,h(m,g))}),h(m,g)}B();T();N();const $=document.querySelector(".exercises-content");$ instanceof HTMLElement&&A($);
//# sourceMappingURL=index.js.map
