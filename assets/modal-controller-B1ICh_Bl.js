import{i as g,a as b}from"./vendor-BAoYjrW1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".mobile-menu"),o=document.querySelector(".mobile-menu__close"),a=document.querySelector(".mobile-menu__overlay");if(!e||!t||!o||!a)return;const n=()=>{t.classList.add("mobile-menu--open")},r=()=>{t.classList.remove("mobile-menu--open")};e.addEventListener("click",n),o.addEventListener("click",r),a.addEventListener("click",r);const s=document.querySelector(".main-nav .home-link"),i=document.querySelector(".main-nav .favorites-link"),E=()=>{const d=window.location.pathname;s&&i&&(s.classList.remove("active-oval"),i.classList.remove("active-oval"),d==="/index.html"||d==="/"?s.classList.add("active-oval"):d==="/favorites.html"&&i.classList.add("active-oval"))};E(),window.addEventListener("popstate",E)});const h="https://your-energy.b.goit.study/api/",l=({title:e,message:t,position:o,...a}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{g.error({title:e,message:t,position:o,...a})},x=({title:e,message:t,position:o,...a}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{g.success({title:e,message:t,position:o,...a})},Y=({title:e,message:t,position:o,...a})=>{g.info({title:e,message:t,position:o,...a})};function w(){const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function S(){const e=document.getElementById("loader");e&&e.classList.add("hidden")}const p=async(e,t)=>{try{w();const{data:o}=await b.get(`${h}${e}`,{params:t});return o}catch(o){console.error(o),l()}finally{S()}},I=async(e,t)=>{try{w();const{data:o}=await b.post(`${h}${e}`,t);return o}catch(o){console.error(o),l()}finally{S()}};function $(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}async function z(e){const t=await p("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}async function O(e){const t=await p(`exercises/${e}`);if(!t)throw new Error("Cannot get exercise by id");return t}async function A(){const e=await p("quote");if(!e)throw new Error("Cant' get quote");return e}const f=document.getElementById("quote-text"),v=document.getElementById("quote-author"),L="quote",q="quoteDate";function F(){return new Date().toISOString().split("T")[0]}function D(){const e=localStorage.getItem(L),t=localStorage.getItem(q),o=F();if(e&&t===o)try{return JSON.parse(e)}catch(a){return console.error("Error parsing stored quote:",a),null}return null}function u(e,t){if(!f||!v)throw new Error("Can't find quote elements");f.textContent=e,v.textContent=t}function T(e,t){const o=JSON.stringify({quote:e,author:t}),a=F();localStorage.setItem(L,o),localStorage.setItem(q,a)}async function _(){try{const e=await A();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function J(){if(!f||!v)throw new Error("Can't find quote elements");const e=D();if(e){u(e.quote,e.author);return}const t=await _();t?(T(t.quote,t.author),u(t.quote,t.author)):u("Failed to fetch quote.","")}function j(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",o);async function o(n){n.preventDefault();const s=new FormData(e).get("email");if(!s||!a(s)){l({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await I("subscription",{email:s})===void 0)throw new Error("Subscription failed");e.reset(),x({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch{l({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function a(n){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)}}const m="favorites",M="favorites-updated",k={getFavoriteIds(){return JSON.parse(localStorage.getItem(m)||"[]")},isFavorite(e){return this.getFavoriteIds().includes(e)},addFavorite(e){const t=this.getFavoriteIds();t.includes(e)||(t.push(e),localStorage.setItem(m,JSON.stringify(t)),this.notifyFavoritesUpdated())},removeFavorite(e){const t=this.getFavoriteIds(),o=t.indexOf(e);o!==-1&&(t.splice(o,1),localStorage.setItem(m,JSON.stringify(t)),this.notifyFavoritesUpdated())},toggleFavorite(e){return this.isFavorite(e)?(this.removeFavorite(e),!1):(this.addFavorite(e),!0)},notifyFavoritesUpdated(){const e=new CustomEvent(M,{detail:{favorites:this.getFavoriteIds()}});document.dispatchEvent(e)}};function R(e){const t=$(e.name);return`
    <div class="modal-backdrop" id="exercise-modal-backdrop">
      <div class="modal exercise-modal" id="exercise-modal">
        <button class="modal-close" data-modal-close>✕</button>
        <div class="modal-layout">
          <div class="modal-image">
            <img src="${e.gifUrl}" alt="${e.name}" />
          </div>
          <div class="modal-info">
            <h2 class="modal-title">${t}</h2>

            <div class="modal-rating">
              <span class="rating-value">${e.rating.toFixed(1)}</span>
              <div class="stars">
                ${[1,2,3,4,5].map(o=>`<span class="star ${o<=e.rating?"active":""}">★</span>`).join("")}
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
              <button id="fav-btn" class="btn-white">${k.isFavorite(e._id)?"Remove from favorites ♡":"Add to favorites ♡"}</button>
              <button id="rate-btn" class="btn-black">Give a rating</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function P(){return`
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
    `}function C(){const e=document.querySelectorAll(".star"),t=document.querySelector(".rating-value");e.forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-value");t.textContent=`${parseFloat(a).toFixed(1)}`,e.forEach(n=>{n.classList.toggle("active",n.getAttribute("data-value")<=a)})})})}function B(e){const t=document.getElementById("rating-form");t.addEventListener("submit",async o=>{var s;o.preventDefault();const a=new FormData(t),n=parseFloat(document.querySelector(".rating-value").textContent),r={email:a.get("email"),comment:a.get("comment"),rating:n,exerciseId:e};try{if(!(await fetch("/api/rating",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to send rating");(s=t.closest(".modal-backdrop"))==null||s.remove()}catch(i){alert(i.message||"Unknown error")}})}function G(e){e.addEventListener("click",async t=>{const o=t.target;if(o.closest("a, input, select, textarea, [data-modal-ignore]"))return;const n=o.closest(".exercises-category-tile-item");if(!n)return;const r=n.getAttribute("data-id");if(!r)return;const s=await O(r);s&&N(s)})}function N(e){var o,a,n,r;const t=R(e);document.body.insertAdjacentHTML("beforeend",t),(o=document.querySelector("[data-modal-close]"))==null||o.addEventListener("click",c),(a=document.getElementById("exercise-modal-backdrop"))==null||a.addEventListener("click",s=>{s.target.id==="exercise-modal-backdrop"&&c()}),document.addEventListener("keydown",y),(n=document.getElementById("fav-btn"))==null||n.addEventListener("click",()=>{k.toggleFavorite(e._id),c()}),(r=document.getElementById("rate-btn"))==null||r.addEventListener("click",()=>{c(),Q(e._id)})}function Q(e){var o,a;const t=P();document.body.insertAdjacentHTML("beforeend",t),(o=document.querySelector("[data-modal-close]"))==null||o.addEventListener("click",c),(a=document.getElementById("rating-modal-backdrop"))==null||a.addEventListener("click",n=>{n.target.id==="rating-modal-backdrop"&&c()}),document.addEventListener("keydown",y),C(),B(e)}function y(e){e.key==="Escape"&&c()}function c(){var e;(e=document.querySelector(".modal-backdrop"))==null||e.remove(),document.removeEventListener("keydown",y)}export{M as F,h as Y,l as a,G as b,$ as c,k as d,J as f,z as g,j as i,p as m,Y as s};
//# sourceMappingURL=modal-controller-B1ICh_Bl.js.map
