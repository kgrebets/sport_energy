/* empty css                      */import{i as q,a as S}from"./assets/vendor-BAoYjrW1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const C="https://your-energy.b.goit.study/api/",p=({title:e,message:t,position:r,...a}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{q.error({title:e,message:t,position:r,...a})},F=({title:e,message:t,position:r,...a}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{q.success({title:e,message:t,position:r,...a})},x=async(e,t)=>{try{const{data:r}=await S.get(`${C}${e}`,{params:t});return r}catch(r){console.error(r),p()}},A=async(e,t)=>{try{const{data:r}=await S.post(`${C}${e}`,t);return r}catch(r){console.error(r),p()}};async function D(e){const t=await x("filters",e);if(!t)throw new Error("Cant' get filters");return t}function M(e){return e.map(t=>`
          <li class="filter-card" data-filter-type="${t.filter}" data-filter-name="${t.name}">
            <img src="${t.imgURL}" alt="${t.name}" />
            <div class="filter-info">
              <div class="filter-name">${t.name}</div>
              <div class="filter-type">${t.filter}</div>
            </div>
          </li>
        `).join("")}function b(e,t){const r=[];let s=Math.max(1,t-1),o=Math.min(e,s+3-1);o-s+1<3&&(s=Math.max(1,o-3+1));for(let i=s;i<=o;i++)r.push(i);return r.map(i=>`
    <li class="pagination-page${i===t?" active":""}" data-page="${i}">${i}</li>
  `).join("")}function N(e,t,r,a,s,o){const i=a.toLowerCase()==="cardio"?"running":"fluent-food";return`
<li class="exercises-category-tile-item" data-id="${o}">
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
        <span class="exercises-category-tile-bottom-value">${a}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${s}</span>
      </li>
  </ul>
</li>`}async function I(e){const t=await x("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}function Q(){var v;const e=document.querySelector(".filters-output"),t=document.querySelector(".filter-tabs"),r=document.querySelector(".filter-pagination"),a=document.querySelector(".exercises-list"),s=document.querySelector(".exercises-pagination");if(!e)throw new Error("Can't find .filters-output");if(!t)throw new Error("Can't find .filter-tabs");if(!r)throw new Error("Can't find .filter-pagination");let o=(v=t.querySelector(".active"))==null?void 0:v.dataset.filter,i=1;function m(u,n){D({filter:u,page:n,limit:12}).then(l=>{e.innerHTML=M(l.results),r.innerHTML=b(l.totalPages,n),e.style.display="flex",r.style.display="flex",a.style.display="none",s.style.display="none",T()}).catch(l=>p({title:"Error",message:l.message,position:"topRight"}))}async function E(u,n,c){if(!a||!s)return;const l=10,g={[u]:n,page:c,limit:l,keyword:""};try{const d=await I(g),R=d.results.map(f=>N(f.rating,f.name,`${f.burnedCalories} kcal`,f.bodyPart,f.target,f._id)).join("");a.innerHTML=R,s.innerHTML=b(d.totalPages,d.page),a.style.display="flex",s.style.display="flex",O(u,n)}catch(d){p({title:"Error",message:(d==null?void 0:d.message)||"Failed to load exercises",position:"topRight"})}}function T(){e.querySelectorAll(".filter-card").forEach(n=>{n.addEventListener("click",()=>{const c=n.getAttribute("data-filter-type"),l=n.getAttribute("data-filter-name");if(!c||!l)return;i=1;let g;if(c==="Muscles")g="muscles";else if(c==="Body parts")g="bodypart";else if(c==="Equipment")g="equipment";else return;e&&r&&(e.innerHTML="",e.style.display="none",r.innerHTML="",r.style.display="none"),E(g,l.toLowerCase(),i)})})}function O(u,n){s.querySelectorAll(".pagination-page").forEach(l=>{l.addEventListener("click",()=>{const g=Number(l.getAttribute("data-page"));!g||g===i||(i=g,E(u,n,i))})})}t.addEventListener("click",u=>{const n=u.target;if(n.tagName.toLowerCase()!=="li")return;const c=n.dataset.filter;!c||c===o||(t.querySelectorAll("li").forEach(l=>l.classList.remove("active")),n.classList.add("active"),o=c,i=1,m(o,i))}),r.addEventListener("click",u=>{const n=u.target;if(n.tagName.toLowerCase()!=="li")return;const c=Number(n.dataset.page);!c||c===i||(i=c,m(o,i))}),m(o,i)}async function H(){const e=await x("quote");if(!e)throw new Error("Cant' get quote");return e}const h=document.getElementById("quote-text"),w=document.getElementById("quote-author"),L="quote",P="quoteDate";function $(){return new Date().toISOString().split("T")[0]}function _(){const e=localStorage.getItem(L),t=localStorage.getItem(P),r=$();if(e&&t===r)try{return JSON.parse(e)}catch(a){return console.error("Error parsing stored quote:",a),null}return null}function y(e,t){if(!h||!w)throw new Error("Can't find quote elements");h.textContent=e,w.textContent=t}function k(e,t){const r=JSON.stringify({quote:e,author:t}),a=$();localStorage.setItem(L,r),localStorage.setItem(P,a)}async function B(){try{const e=await H();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function U(){if(!h||!w)throw new Error("Can't find quote elements");const e=_();if(e){y(e.quote,e.author);return}const t=await B();t?(k(t.quote,t.author),y(t.quote,t.author)):y("Failed to fetch quote.","")}function Y(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",r);async function r(s){s.preventDefault();const i=new FormData(e).get("email");if(!i||!a(i)){p({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await A("subscription",{email:i})===void 0)throw new Error("Subscription failed");e.reset(),F({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch{p({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function a(s){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s)}}Q();U();Y();
//# sourceMappingURL=index.js.map
