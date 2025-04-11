import"./assets/header-BMC0lOc1.js";import{i as q,a as F}from"./assets/vendor-BAoYjrW1.js";const P="https://your-energy.b.goit.study/api/",p=({title:e,message:t,position:r,...s}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{q.error({title:e,message:t,position:r,...s})},O=({title:e,message:t,position:r,...s}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{q.success({title:e,message:t,position:r,...s})},I=({title:e,message:t,position:r,...s})=>{q.info({title:e,message:t,position:r,...s})},S=async(e,t)=>{try{const{data:r}=await F.get(`${P}${e}`,{params:t});return r}catch(r){console.error(r),p()}},N=async(e,t)=>{try{const{data:r}=await F.post(`${P}${e}`,t);return r}catch(r){console.error(r),p()}};async function Q(e){const t=await S("filters",e);if(!t)throw new Error("Cant' get filters");return t}function H(e){return e.map(t=>`
          <li class="filter-card" data-filter-type="${t.filter}" data-filter-name="${t.name}">
            <img src="${t.imgURL}" alt="${t.name}" />
            <div class="filter-info">
              <div class="filter-name">${t.name}</div>
              <div class="filter-type">${t.filter}</div>
            </div>
          </li>
        `).join("")}function L(e,t){const r=[];let o=Math.max(1,t-1),c=Math.min(e,o+3-1);c-o+1<3&&(o=Math.max(1,c-3+1));for(let i=o;i<=c;i++)r.push(i);return r.map(i=>`
    <li class="pagination-page${i===t?" active":""}" data-page="${i}">${i}</li>
  `).join("")}function _(e,t,r,s,o,c){const i=s.toLowerCase()==="cardio"?"running":"fluent-food";return`
<li class="exercises-category-tile-item" data-id="${c}">
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
        <use href="./../img/sprite.svg#${i}"></use>
      </svg>
    </div>
    <h3 class="exercises-category-tile-name">${t}</h3>
  </div>
  <ul class="exercises-category-tile-bottom">
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        <span class="exercises-category-tile-bottom-value">${r}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        <span class="exercises-category-tile-bottom-value">${s}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${o}</span>
      </li>
  </ul>
</li>`}async function B(e){const t=await S("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}function U(){var $;const e=document.querySelector(".filters-output"),t=document.querySelector(".filter-tabs"),r=document.querySelector(".filter-pagination"),s=document.querySelector(".exercises-list"),o=document.querySelector(".exercises-pagination"),c=document.querySelector(".exercises-filters-form");if(!e)throw new Error("Can't find .filters-output");if(!t)throw new Error("Can't find .filter-tabs");if(!r)throw new Error("Can't find .filter-pagination");if(!c)throw new Error("Can't find .exercises-filters-form");let i=($=t.querySelector(".active"))==null?void 0:$.dataset.filter,l=1,y="",C,h;c.addEventListener("submit",g=>{g.preventDefault(),y=new FormData(c).get("keyword"),x(C,h,l)});function w(g,a){Q({filter:g,page:a,limit:12}).then(u=>{e.innerHTML=H(u.results),r.innerHTML=L(u.totalPages,a),e.style.display="flex",r.style.display="flex",s.style.display="none",o.style.display="none",c.hidden=!0,c.reset(),y="",k()}).catch(u=>p({title:"Error",message:u.message,position:"topRight"}))}async function x(g,a,n){if(!s||!o)return;const u=10,d={[g]:a,page:n,limit:u,keyword:y};try{const f=await B(d),A=f.results.map(m=>_(m.rating,m.name,`${m.burnedCalories} kcal`,m.bodyPart,m.target,m._id)).join("");s.innerHTML=A,o.innerHTML=L(f.totalPages,f.page),c.hidden=!1,s.style.display="flex",o.style.display="flex",M(g,a),f.results.length===0&&I({title:"",message:" No excersies found",position:"topRight"})}catch(f){p({title:"Error",message:(f==null?void 0:f.message)||"Failed to load exercises",position:"topRight"})}}function k(){e.querySelectorAll(".filter-card").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-filter-type"),u=a.getAttribute("data-filter-name");if(!n||!u)return;l=1;let d;if(n==="Muscles")d="muscles";else if(n==="Body parts")d="bodypart";else if(n==="Equipment")d="equipment";else return;e&&r&&(e.innerHTML="",e.style.display="none",r.innerHTML="",r.style.display="none"),C=d,h=u.toLowerCase(),x(d,h,l)})})}function M(g,a){o.querySelectorAll(".pagination-page").forEach(u=>{u.addEventListener("click",()=>{const d=Number(u.getAttribute("data-page"));!d||d===l||(l=d,x(g,a,l))})})}t.addEventListener("click",g=>{const a=g.target;if(a.tagName.toLowerCase()!=="li")return;const n=a.dataset.filter;!n||n===i||(t.querySelectorAll("li").forEach(u=>u.classList.remove("active")),a.classList.add("active"),i=n,l=1,w(i,l))}),r.addEventListener("click",g=>{const a=g.target;if(a.tagName.toLowerCase()!=="li")return;const n=Number(a.dataset.page);!n||n===l||(l=n,w(i,l))}),w(i,l)}async function Y(){const e=await S("quote");if(!e)throw new Error("Cant' get quote");return e}const v=document.getElementById("quote-text"),b=document.getElementById("quote-author"),T="quote",D="quoteDate";function R(){return new Date().toISOString().split("T")[0]}function G(){const e=localStorage.getItem(T),t=localStorage.getItem(D),r=R();if(e&&t===r)try{return JSON.parse(e)}catch(s){return console.error("Error parsing stored quote:",s),null}return null}function E(e,t){if(!v||!b)throw new Error("Can't find quote elements");v.textContent=e,b.textContent=t}function K(e,t){const r=JSON.stringify({quote:e,author:t}),s=R();localStorage.setItem(T,r),localStorage.setItem(D,s)}async function V(){try{const e=await Y();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function j(){if(!v||!b)throw new Error("Can't find quote elements");const e=G();if(e){E(e.quote,e.author);return}const t=await V();t?(K(t.quote,t.author),E(t.quote,t.author)):E("Failed to fetch quote.","")}function z(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",r);async function r(o){o.preventDefault();const i=new FormData(e).get("email");if(!i||!s(i)){p({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await N("subscription",{email:i})===void 0)throw new Error("Subscription failed");e.reset(),O({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch{p({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function s(o){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o)}}U();j();z();
//# sourceMappingURL=index.js.map
