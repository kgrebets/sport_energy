import{m as k,c as P,g as N,s as A,a as C,f as R,i as B,b as D,d as V}from"./assets/init-scroll-top-MbRvxWhQ.js";import"./assets/vendor-BAoYjrW1.js";async function j(n){const e=await k("filters",n);if(!e)throw new Error("Cant' get filters");return e}function I(n){return n.map(e=>`
          <li class="filter-card" data-filter-type="${e.filter}" data-filter-name="${e.name}">
            <img src="${e.imgURL}" alt="${e.name}" />
            <div class="filter-info">
              <div class="filter-name">${e.name}</div>
              <div class="filter-type">${e.filter}</div>
            </div>
          </li>
        `).join("")}function $(n,e){const g=[];let c=Math.max(1,e-1),u=Math.min(n,c+3-1);u-c+1<3&&(c=Math.max(1,u-3+1));for(let i=c;i<=u;i++)g.push(i);return g.map(i=>`
    <li class="pagination-page${i===e?" active":""}" data-page="${i}">${i}</li>
  `).join("")}function O(n,e,g,o,c,u){const i=P(e),y=o.toLowerCase()==="cardio"?"running":"fluent-food",f="/sport_energy/img/sprite.svg";return`
<li class="exercises-category-tile-item">
  <div class="exercises-category-tile-top">
    <div class="exercises-category-tile-workout-wrapper">
      <span class="exercises-category-tile-badge">
        WORKOUT
      </span>
      <div class="exercises-category-tile-rating-wrapper">
        <span class="exercises-category-tile-rating">${n.toFixed(1)}</span>
        <svg class="exercises-category-tile-star-icon" width="16" height="16">
          <use href="${f}#Star"></use>
        </svg>
      </div>
    </div>
    <button class="exercises-category-tile-button" data-id="${u}">
      Start
      <svg class="exercises-category-tile-arrow-icon" width="16" height="16">
        <use href="${f}#arrow-right"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-category-tile-middle">
    <div class="exercises-category-tile-man-icon-container">
      <svg class="exercises-category-tile-man-icon" width="16" height="16">
        <use href="${f}#${y}"></use>
      </svg>
    </div>
    <h3 class="exercises-category-tile-name">${i}</h3>
  </div>
  <ul class="exercises-category-tile-bottom">
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        <span class="exercises-category-tile-bottom-value">${g}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        <span class="exercises-category-tile-bottom-value">${o}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${c}</span>
      </li>
  </ul>
</li>`}function S(n){const e=document.querySelector(n);e==null||e.scrollIntoView({behavior:"smooth"})}function z(){var L;const n=".exercises-header",e=document.querySelector(".filters-output"),g=document.querySelector(".filter-tabs"),o=document.querySelector(".filter-pagination"),c=document.querySelector(".exercises-list"),u=document.querySelector(".exercises-pagination"),i=document.querySelector(".exercises-filters-form"),y=document.querySelector(".exercises-subheader-container");if(!e)throw new Error("Can't find .filters-output");if(!g)throw new Error("Can't find .filter-tabs");if(!o)throw new Error("Can't find .filter-pagination");if(!i)throw new Error("Can't find .exercises-filters-form");if(!y)throw new Error("Can't find .exercises-subheader-container");let f=(L=g.querySelector(".active"))==null?void 0:L.dataset.filter,l=1,x="",w,h;i.addEventListener("submit",r=>{r.preventDefault(),x=new FormData(i).get("keyword"),b(w,h,l,!1)});function v(r,t,s=!0){e.innerHTML="",o.innerHTML="",j({filter:r,page:t,limit:12}).then(a=>{e.innerHTML=I(a.results),o.innerHTML=$(a.totalPages,t),e.style.display="flex",o.style.display="flex",E(null),c.style.display="none",u.style.display="none",i.style.display="none",i.reset(),x="",M(),s&&S(n)}).catch(a=>C({title:"Error",message:a.message,position:"topRight"}))}async function b(r,t,s,d=!0){if(!c||!u)return;const a=10,F={[r]:t,page:s,limit:a,keyword:x};try{const p=await N(F),H=p.results.map(m=>O(m.rating,m.name,`${m.burnedCalories} kcal`,m.bodyPart,m.target,m._id)).join("");c.innerHTML=H,u.innerHTML=$(p.totalPages,p.page),i.style.display="flex",c.style.display="flex",u.style.display="flex",T(r,t),p.results.length===0&&A({title:"",message:" No excersies found",position:"topRight"}),d&&S(n)}catch(p){C({title:"Error",message:(p==null?void 0:p.message)||"Failed to load exercises",position:"topRight"})}}function M(){e.querySelectorAll(".filter-card").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-filter-type"),d=t.getAttribute("data-filter-name");if(!s||!d)return;l=1;let a;if(s==="Muscles")a="muscles";else if(s==="Body parts")a="bodypart";else if(s==="Equipment")a="equipment";else return;e&&o&&(e.innerHTML="",e.style.display="none",o.innerHTML="",o.style.display="none"),E(d),w=a,h=d.toLowerCase(),b(a,h,l)})})}function E(r){y.innerHTML=r?` / <span class="exercises-subheader">${r}</span>`:""}function T(r,t){u.querySelectorAll(".pagination-page").forEach(d=>{d.addEventListener("click",()=>{const a=Number(d.getAttribute("data-page"));!a||a===l||(l=a,b(r,t,l))})})}g.addEventListener("click",r=>{const t=r.target;if(t.tagName.toLowerCase()!=="button")return;const s=t.dataset.filter;!s||s===f||(g.querySelectorAll("button").forEach(d=>d.classList.remove("active")),t.classList.add("active"),f=s,l=1,v(f,l))}),o.addEventListener("click",r=>{const t=r.target;if(t.tagName.toLowerCase()!=="li")return;const s=Number(t.dataset.page);!s||s===l||(l=s,v(f,l))}),v(f,l,!1)}z();R();B();const q=document.querySelector(".exercises-content");q instanceof HTMLElement&&D(q);V();
//# sourceMappingURL=index.js.map
