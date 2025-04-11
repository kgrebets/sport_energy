/* empty css                      */import{i as q,a as $}from"./assets/vendor-BAoYjrW1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const F="https://your-energy.b.goit.study/api/",p=({title:e,message:t,position:r,...o}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{q.error({title:e,message:t,position:r,...o})},N=({title:e,message:t,position:r,...o}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{q.success({title:e,message:t,position:r,...o})},I=({title:e,message:t,position:r,...o})=>{q.info({title:e,message:t,position:r,...o})},S=async(e,t)=>{try{const{data:r}=await $.get(`${F}${e}`,{params:t});return r}catch(r){console.error(r),p()}},Q=async(e,t)=>{try{const{data:r}=await $.post(`${F}${e}`,t);return r}catch(r){console.error(r),p()}};async function k(e){const t=await S("filters",e);if(!t)throw new Error("Cant' get filters");return t}function H(e){return e.map(t=>`
          <li class="filter-card" data-filter-type="${t.filter}" data-filter-name="${t.name}">
            <img src="${t.imgURL}" alt="${t.name}" />
            <div class="filter-info">
              <div class="filter-name">${t.name}</div>
              <div class="filter-type">${t.filter}</div>
            </div>
          </li>
        `).join("")}function P(e,t){const r=[];let s=Math.max(1,t-1),i=Math.min(e,s+3-1);i-s+1<3&&(s=Math.max(1,i-3+1));for(let a=s;a<=i;a++)r.push(a);return r.map(a=>`
    <li class="pagination-page${a===t?" active":""}" data-page="${a}">${a}</li>
  `).join("")}function _(e,t,r,o,s,i){const a=o.toLowerCase()==="cardio"?"running":"fluent-food";return`
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
        <use href="./../img/sprite.svg#${a}"></use>
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
        <span class="exercises-category-tile-bottom-value">${o}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${s}</span>
      </li>
  </ul>
</li>`}async function B(e){const t=await S("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}function U(){var L;const e=document.querySelector(".filters-output"),t=document.querySelector(".filter-tabs"),r=document.querySelector(".filter-pagination"),o=document.querySelector(".exercises-list"),s=document.querySelector(".exercises-pagination"),i=document.querySelector(".exercises-filters-form");if(!e)throw new Error("Can't find .filters-output");if(!t)throw new Error("Can't find .filter-tabs");if(!r)throw new Error("Can't find .filter-pagination");if(!i)throw new Error("Can't find .exercises-filters-form");let a=(L=t.querySelector(".active"))==null?void 0:L.dataset.filter,l=1,y="",C,h;i.addEventListener("submit",d=>{d.preventDefault(),y=new FormData(i).get("keyword"),x(C,h,l)});function w(d,n){k({filter:d,page:n,limit:12}).then(u=>{e.innerHTML=H(u.results),r.innerHTML=P(u.totalPages,n),e.style.display="flex",r.style.display="flex",o.style.display="none",s.style.display="none",i.hidden=!0,i.reset(),y="",R()}).catch(u=>p({title:"Error",message:u.message,position:"topRight"}))}async function x(d,n,c){if(!o||!s)return;const u=10,f={[d]:n,page:c,limit:u,keyword:y};try{const g=await B(f),A=g.results.map(m=>_(m.rating,m.name,`${m.burnedCalories} kcal`,m.bodyPart,m.target,m._id)).join("");o.innerHTML=A,s.innerHTML=P(g.totalPages,g.page),i.hidden=!1,o.style.display="flex",s.style.display="flex",M(d,n),g.results.length===0&&I({title:"",message:" No excersies found",position:"topRight"})}catch(g){p({title:"Error",message:(g==null?void 0:g.message)||"Failed to load exercises",position:"topRight"})}}function R(){e.querySelectorAll(".filter-card").forEach(n=>{n.addEventListener("click",()=>{const c=n.getAttribute("data-filter-type"),u=n.getAttribute("data-filter-name");if(!c||!u)return;l=1;let f;if(c==="Muscles")f="muscles";else if(c==="Body parts")f="bodypart";else if(c==="Equipment")f="equipment";else return;e&&r&&(e.innerHTML="",e.style.display="none",r.innerHTML="",r.style.display="none"),C=f,h=u.toLowerCase(),x(f,h,l)})})}function M(d,n){s.querySelectorAll(".pagination-page").forEach(u=>{u.addEventListener("click",()=>{const f=Number(u.getAttribute("data-page"));!f||f===l||(l=f,x(d,n,l))})})}t.addEventListener("click",d=>{const n=d.target;if(n.tagName.toLowerCase()!=="li")return;const c=n.dataset.filter;!c||c===a||(t.querySelectorAll("li").forEach(u=>u.classList.remove("active")),n.classList.add("active"),a=c,l=1,w(a,l))}),r.addEventListener("click",d=>{const n=d.target;if(n.tagName.toLowerCase()!=="li")return;const c=Number(n.dataset.page);!c||c===l||(l=c,w(a,l))}),w(a,l)}async function Y(){const e=await S("quote");if(!e)throw new Error("Cant' get quote");return e}const v=document.getElementById("quote-text"),b=document.getElementById("quote-author"),T="quote",D="quoteDate";function O(){return new Date().toISOString().split("T")[0]}function K(){const e=localStorage.getItem(T),t=localStorage.getItem(D),r=O();if(e&&t===r)try{return JSON.parse(e)}catch(o){return console.error("Error parsing stored quote:",o),null}return null}function E(e,t){if(!v||!b)throw new Error("Can't find quote elements");v.textContent=e,b.textContent=t}function G(e,t){const r=JSON.stringify({quote:e,author:t}),o=O();localStorage.setItem(T,r),localStorage.setItem(D,o)}async function V(){try{const e=await Y();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function j(){if(!v||!b)throw new Error("Can't find quote elements");const e=K();if(e){E(e.quote,e.author);return}const t=await V();t?(G(t.quote,t.author),E(t.quote,t.author)):E("Failed to fetch quote.","")}function z(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",r);async function r(s){s.preventDefault();const a=new FormData(e).get("email");if(!a||!o(a)){p({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await Q("subscription",{email:a})===void 0)throw new Error("Subscription failed");e.reset(),N({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch{p({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function o(s){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s)}}U();j();z();
//# sourceMappingURL=index.js.map
