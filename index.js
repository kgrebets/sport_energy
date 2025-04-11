import"./assets/header-BUeNvp-B.js";import{i as S,a as P}from"./assets/vendor-BAoYjrW1.js";const D="https://your-energy.b.goit.study/api/",y=({title:e,message:t,position:r,...s}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{S.error({title:e,message:t,position:r,...s})},I=({title:e,message:t,position:r,...s}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{S.success({title:e,message:t,position:r,...s})},N=({title:e,message:t,position:r,...s})=>{S.info({title:e,message:t,position:r,...s})},C=async(e,t)=>{try{const{data:r}=await P.get(`${D}${e}`,{params:t});return r}catch(r){console.error(r),y()}},Q=async(e,t)=>{try{const{data:r}=await P.post(`${D}${e}`,t);return r}catch(r){console.error(r),y()}};async function _(e){const t=await C("filters",e);if(!t)throw new Error("Cant' get filters");return t}function B(e){return e.map(t=>`
          <li class="filter-card" data-filter-type="${t.filter}" data-filter-name="${t.name}">
            <img src="${t.imgURL}" alt="${t.name}" />
            <div class="filter-info">
              <div class="filter-name">${t.name}</div>
              <div class="filter-type">${t.filter}</div>
            </div>
          </li>
        `).join("")}function F(e,t){const r=[];let a=Math.max(1,t-1),u=Math.min(e,a+3-1);u-a+1<3&&(a=Math.max(1,u-3+1));for(let o=a;o<=u;o++)r.push(o);return r.map(o=>`
    <li class="pagination-page${o===t?" active":""}" data-page="${o}">${o}</li>
  `).join("")}function U(e,t,r,s,a,u){const o=s.toLowerCase()==="cardio"?"running":"fluent-food";return`
<li class="exercises-category-tile-item" data-id="${u}">
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
        <span class="exercises-category-tile-bottom-value">${r}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        <span class="exercises-category-tile-bottom-value">${s}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${a}</span>
      </li>
  </ul>
</li>`}async function Y(e){const t=await C("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}function G(){var T;const e=document.querySelector(".filters-output"),t=document.querySelector(".filter-tabs"),r=document.querySelector(".filter-pagination"),s=document.querySelector(".exercises-list"),a=document.querySelector(".exercises-pagination"),u=document.querySelector(".exercises-filters-form"),o=document.querySelector(".exercises-subheader-container");if(!e)throw new Error("Can't find .filters-output");if(!t)throw new Error("Can't find .filter-tabs");if(!r)throw new Error("Can't find .filter-pagination");if(!u)throw new Error("Can't find .exercises-filters-form");if(!o)throw new Error("Can't find .exercises-subheader-container");let m=(T=t.querySelector(".active"))==null?void 0:T.dataset.filter,g=1,h="",$,w;u.addEventListener("submit",n=>{n.preventDefault(),h=new FormData(u).get("keyword"),E($,w,g)});function x(n,i){_({filter:n,page:i,limit:12}).then(l=>{e.innerHTML=B(l.results),r.innerHTML=F(l.totalPages,i),e.style.display="flex",r.style.display="flex",L(null),s.style.display="none",a.style.display="none",u.hidden=!0,u.reset(),h="",A()}).catch(l=>y({title:"Error",message:l.message,position:"topRight"}))}async function E(n,i,c){if(!s||!a)return;const l=10,d={[n]:i,page:c,limit:l,keyword:h};try{const f=await Y(d),O=f.results.map(p=>U(p.rating,p.name,`${p.burnedCalories} kcal`,p.bodyPart,p.target,p._id)).join("");s.innerHTML=O,a.innerHTML=F(f.totalPages,f.page),u.hidden=!1,s.style.display="flex",a.style.display="flex",H(n,i),f.results.length===0&&N({title:"",message:" No excersies found",position:"topRight"})}catch(f){y({title:"Error",message:(f==null?void 0:f.message)||"Failed to load exercises",position:"topRight"})}}function A(){e.querySelectorAll(".filter-card").forEach(i=>{i.addEventListener("click",()=>{const c=i.getAttribute("data-filter-type"),l=i.getAttribute("data-filter-name");if(!c||!l)return;g=1;let d;if(c==="Muscles")d="muscles";else if(c==="Body parts")d="bodypart";else if(c==="Equipment")d="equipment";else return;e&&r&&(e.innerHTML="",e.style.display="none",r.innerHTML="",r.style.display="none"),L(l),$=d,w=l.toLowerCase(),E(d,w,g)})})}function L(n){o.innerHTML=n?` / <span class="exercises-subheader">${n}</span>`:""}function H(n,i){a.querySelectorAll(".pagination-page").forEach(l=>{l.addEventListener("click",()=>{const d=Number(l.getAttribute("data-page"));!d||d===g||(g=d,E(n,i,g))})})}t.addEventListener("click",n=>{const i=n.target;if(i.tagName.toLowerCase()!=="button")return;const c=i.dataset.filter;!c||c===m||(t.querySelectorAll("button").forEach(l=>l.classList.remove("active")),i.classList.add("active"),m=c,g=1,x(m,g))}),r.addEventListener("click",n=>{const i=n.target;if(i.tagName.toLowerCase()!=="li")return;const c=Number(i.dataset.page);!c||c===g||(g=c,x(m,g))}),x(m,g)}async function K(){const e=await C("quote");if(!e)throw new Error("Cant' get quote");return e}const v=document.getElementById("quote-text"),q=document.getElementById("quote-author"),R="quote",k="quoteDate";function M(){return new Date().toISOString().split("T")[0]}function V(){const e=localStorage.getItem(R),t=localStorage.getItem(k),r=M();if(e&&t===r)try{return JSON.parse(e)}catch(s){return console.error("Error parsing stored quote:",s),null}return null}function b(e,t){if(!v||!q)throw new Error("Can't find quote elements");v.textContent=e,q.textContent=t}function j(e,t){const r=JSON.stringify({quote:e,author:t}),s=M();localStorage.setItem(R,r),localStorage.setItem(k,s)}async function z(){try{const e=await K();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function J(){if(!v||!q)throw new Error("Can't find quote elements");const e=V();if(e){b(e.quote,e.author);return}const t=await z();t?(j(t.quote,t.author),b(t.quote,t.author)):b("Failed to fetch quote.","")}function Z(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",r);async function r(a){a.preventDefault();const o=new FormData(e).get("email");if(!o||!s(o)){y({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await Q("subscription",{email:o})===void 0)throw new Error("Subscription failed");e.reset(),I({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch{y({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function s(a){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)}}G();J();Z();
//# sourceMappingURL=index.js.map
