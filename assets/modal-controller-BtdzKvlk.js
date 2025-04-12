import{i as p,a as d}from"./vendor-BAoYjrW1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".mobile-menu"),o=document.querySelector(".mobile-menu__close"),n=document.querySelector(".mobile-menu__overlay");if(!e||!t||!o||!n)return;const a=()=>{t.classList.add("mobile-menu--open")},s=()=>{t.classList.remove("mobile-menu--open")};e.addEventListener("click",a),o.addEventListener("click",s),n.addEventListener("click",s);const r=document.querySelector(".main-nav .home-link"),i=document.querySelector(".main-nav .favorites-link"),S=()=>{const u=window.location.pathname;r&&i&&(r.classList.remove("active-oval"),i.classList.remove("active-oval"),u==="/index.html"||u==="/"?r.classList.add("active-oval"):u==="/favorites.html"&&i.classList.add("active-oval"))};S(),window.addEventListener("popstate",S)});const y="https://your-energy.b.goit.study/api/",l=({title:e,message:t,position:o,...n}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{p.error({title:e,message:t,position:o,...n})},L=({title:e,message:t,position:o,...n}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{p.success({title:e,message:t,position:o,...n})},z=({title:e,message:t,position:o,...n})=>{p.info({title:e,message:t,position:o,...n})};function E(){const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function h(){const e=document.getElementById("loader");e&&e.classList.add("hidden")}const b=async(e,t)=>{try{E();const{data:o}=await d.get(`${y}${e}`,{params:t});return o}catch(o){console.error(o),l()}finally{h()}},I=async(e,t)=>{try{E();const{data:o}=await d.post(`${y}${e}`,t);return o}catch(o){console.error(o),l()}finally{h()}},$=async(e,t)=>{var o;try{E();const{data:n}=await d.patch(`${y}${e}`,t);return n}catch(n){console.error(n),d.isAxiosError(n)&&((o=n.response)!=null&&o.data)?l({title:"Error",message:n.response.data.message,position:"topRight"}):l()}finally{h()}};function A(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}async function G(e){const t=await b("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}async function R(e){const t=await b(`exercises/${e}`);if(!t)throw new Error("Cannot get exercise by id");return t}async function D(){const e=await b("quote");if(!e)throw new Error("Cant' get quote");return e}const v=document.getElementById("quote-text"),g=document.getElementById("quote-author"),q="quote",x="quoteDate";function F(){return new Date().toISOString().split("T")[0]}function O(){const e=localStorage.getItem(q),t=localStorage.getItem(x),o=F();if(e&&t===o)try{return JSON.parse(e)}catch(n){return console.error("Error parsing stored quote:",n),null}return null}function m(e,t){if(!v||!g)throw new Error("Can't find quote elements");v.textContent=e,g.textContent=t}function _(e,t){const o=JSON.stringify({quote:e,author:t}),n=F();localStorage.setItem(q,o),localStorage.setItem(x,n)}async function M(){try{const e=await D();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function H(){if(!v||!g)throw new Error("Can't find quote elements");const e=O();if(e){m(e.quote,e.author);return}const t=await M();t?(_(t.quote,t.author),m(t.quote,t.author)):m("Failed to fetch quote.","")}function J(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",o);async function o(a){a.preventDefault();const r=new FormData(e).get("email");if(!r||!n(r)){l({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await I("subscription",{email:r})===void 0)throw new Error("Subscription failed");e.reset(),L({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch{l({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function n(a){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)}}const f="favorites",T="favorites-updated",k={getFavoriteIds(){return JSON.parse(localStorage.getItem(f)||"[]")},isFavorite(e){return this.getFavoriteIds().includes(e)},addFavorite(e){const t=this.getFavoriteIds();t.includes(e)||(t.push(e),localStorage.setItem(f,JSON.stringify(t)),this.notifyFavoritesUpdated())},removeFavorite(e){const t=this.getFavoriteIds(),o=t.indexOf(e);o!==-1&&(t.splice(o,1),localStorage.setItem(f,JSON.stringify(t)),this.notifyFavoritesUpdated())},toggleFavorite(e){return this.isFavorite(e)?(this.removeFavorite(e),!1):(this.addFavorite(e),!0)},notifyFavoritesUpdated(){const e=new CustomEvent(T,{detail:{favorites:this.getFavoriteIds()}});document.dispatchEvent(e)}};function P(e){const t=A(e.name);return`
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
  `}function B(){return`
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
    `}function C(){const e=document.querySelectorAll(".star"),t=document.querySelector(".rating-value");e.forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("data-value");t.textContent=`${parseFloat(n).toFixed(1)}`,e.forEach(a=>{a.classList.toggle("active",a.getAttribute("data-value")<=n)})})})}function N(e){const t=document.getElementById("rating-form");t.addEventListener("submit",async o=>{var r;o.preventDefault();const n=new FormData(t),s={rate:parseFloat(document.querySelector(".rating-value").textContent),email:n.get("email"),review:n.get("comment")};try{await $(`exercises/${e}/rating`,s)&&L({title:"Success",message:"Rating sent successfully",position:"topRight"}),(r=t.closest(".modal-backdrop"))==null||r.remove()}catch(i){console.error(i)}})}function V(e){e.addEventListener("click",async t=>{const o=t.target;if(o.closest("a, input, select, textarea, [data-modal-ignore]"))return;const a=o.closest(".exercises-category-tile-item");if(!a)return;const s=a.getAttribute("data-id");if(!s)return;const r=await R(s);r&&Q(r)})}function Q(e){var o,n,a,s;const t=P(e);document.body.insertAdjacentHTML("beforeend",t),(o=document.querySelector("[data-modal-close]"))==null||o.addEventListener("click",c),(n=document.getElementById("exercise-modal-backdrop"))==null||n.addEventListener("click",r=>{r.target.id==="exercise-modal-backdrop"&&c()}),document.addEventListener("keydown",w),(a=document.getElementById("fav-btn"))==null||a.addEventListener("click",()=>{k.toggleFavorite(e._id),c()}),(s=document.getElementById("rate-btn"))==null||s.addEventListener("click",()=>{c(),U(e._id)})}function U(e){var o,n;const t=B();document.body.insertAdjacentHTML("beforeend",t),(o=document.querySelector("[data-modal-close]"))==null||o.addEventListener("click",c),(n=document.getElementById("rating-modal-backdrop"))==null||n.addEventListener("click",a=>{a.target.id==="rating-modal-backdrop"&&c()}),document.addEventListener("keydown",w),C(),N(e)}function w(e){e.key==="Escape"&&c()}function c(){var e;(e=document.querySelector(".modal-backdrop"))==null||e.remove(),document.removeEventListener("keydown",w)}export{T as F,y as Y,l as a,V as b,A as c,k as d,H as f,G as g,J as i,b as m,z as s};
//# sourceMappingURL=modal-controller-BtdzKvlk.js.map
