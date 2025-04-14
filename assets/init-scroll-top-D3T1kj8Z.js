import{i as v,a as d}from"./vendor-BAoYjrW1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".mobile-menu"),s=document.querySelector(".mobile-menu__close"),o=document.querySelector(".mobile-menu__overlay");if(!e||!t||!s||!o)return;const n=()=>{t.classList.add("mobile-menu--open")},a=()=>{t.classList.remove("mobile-menu--open")};e.addEventListener("click",n),s.addEventListener("click",a),o.addEventListener("click",a);const r=document.querySelector(".main-nav .home-link"),i=document.querySelector(".main-nav .favorites-link"),w=()=>{r&&i&&(r.classList.remove("active-oval"),i.classList.remove("active-oval"),window.location.pathname.lastIndexOf("favorites.html")!==-1?i.classList.add("active-oval"):r.classList.add("active-oval"))};w(),window.addEventListener("popstate",w)});const p="https://your-energy.b.goit.study/api/",l=({title:e,message:t,position:s,...o}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{v.error({title:e,message:t,position:s,...o})},L=({title:e,message:t,position:s,...o}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{v.success({title:e,message:t,position:s,...o})},U=({title:e,message:t,position:s,...o})=>{v.info({title:e,message:t,position:s,...o})};function y(){const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function h(){const e=document.getElementById("loader");e&&e.classList.add("hidden")}const E=async(e,t)=>{try{y();const{data:s}=await d.get(`${p}${e}`,{params:t});return s}catch(s){console.error(s),l()}finally{h()}},k=async(e,t,s=!0)=>{try{y();const{data:o}=await d.post(`${p}${e}`,t);return o}catch(o){if(console.error(o),s)l();else throw o}finally{h()}},F=async(e,t)=>{var s;try{y();const{data:o}=await d.patch(`${p}${e}`,t);return o}catch(o){console.error(o),d.isAxiosError(o)&&((s=o.response)!=null&&s.data)?l({title:"Error",message:o.response.data.message,position:"topRight"}):l()}finally{h()}};function $(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}async function z(e){const t=await E("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}async function R(e){const t=await E(`exercises/${e}`);if(!t)throw new Error("Cannot get exercise by id");return t}async function T(){const e=await E("quote");if(!e)throw new Error("Cant' get quote");return e}const f=document.getElementById("quote-text"),g=document.getElementById("quote-author"),S="quote",q="quoteDate";function x(){return new Date().toISOString().split("T")[0]}function A(){const e=localStorage.getItem(S),t=localStorage.getItem(q),s=x();if(e&&t===s)try{return JSON.parse(e)}catch(o){return console.error("Error parsing stored quote:",o),null}return null}function u(e,t){if(!f||!g)throw new Error("Can't find quote elements");f.textContent=e,g.textContent=t}function O(e,t){const s=JSON.stringify({quote:e,author:t}),o=x();localStorage.setItem(S,s),localStorage.setItem(q,o)}async function D(){try{const e=await T();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function G(){if(!f||!g)throw new Error("Can't find quote elements");const e=A();if(e){u(e.quote,e.author);return}const t=await D();t?(O(t.quote,t.author),u(t.quote,t.author)):u("Failed to fetch quote.","")}function H(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),!e)return;e.addEventListener("submit",s);async function s(n){n.preventDefault();const r=new FormData(e).get("email");if(!r||!o(r)){l({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await k("subscription",{email:r},!1)===void 0)throw new Error("Subscription failed");e.reset(),L({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch(i){i&&"status"in i&&i.status===409?l({title:"Error",message:"You are already subscribed to our newsletter.",position:"topRight"}):l({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function o(n){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)}}const m="favorites",B="favorites-updated",I={getFavoriteIds(){return JSON.parse(localStorage.getItem(m)||"[]")},isFavorite(e){return this.getFavoriteIds().includes(e)},addFavorite(e){const t=this.getFavoriteIds();t.includes(e)||(t.push(e),localStorage.setItem(m,JSON.stringify(t)),this.notifyFavoritesUpdated())},removeFavorite(e){const t=this.getFavoriteIds(),s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem(m,JSON.stringify(t)),this.notifyFavoritesUpdated())},toggleFavorite(e){return this.isFavorite(e)?(this.removeFavorite(e),!1):(this.addFavorite(e),!0)},notifyFavoritesUpdated(){const e=new CustomEvent(B,{detail:{favorites:this.getFavoriteIds()}});document.dispatchEvent(e)}};function _(e){const t=$(e.name);return`
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
              <button id="fav-btn" class="btn-white">${I.isFavorite(e._id)?"Remove from favorites":"Add to favorites"}
               <svg class="icon heart-icon" width="20" height="20">
                  <use href="/sport_energy/img/sprite.svg#heart"></use>
              </svg>
              </button>
              <button id="rate-btn" class="btn-black">Give a rating</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function M(){return`
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
    `}function P(){const e=document.querySelectorAll(".star"),t=document.querySelector(".rating-value");e.forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-value");t.textContent=`${parseFloat(o).toFixed(1)}`,e.forEach(n=>{n.classList.toggle("active",n.getAttribute("data-value")<=o)})})})}function C(e){const t=document.getElementById("rating-form");t.addEventListener("submit",async s=>{var r;s.preventDefault();const o=new FormData(t),a={rate:parseFloat(document.querySelector(".rating-value").textContent),email:o.get("email"),review:o.get("comment")};try{await F(`exercises/${e}/rating`,a)&&L({title:"Success",message:"Rating sent successfully",position:"topRight"}),(r=t.closest(".modal-backdrop"))==null||r.remove()}catch(i){console.error(i)}})}function J(e){e.addEventListener("click",async t=>{const s=t.target;if(s.closest("a, input, select, textarea, [data-modal-ignore]"))return;const n=s.closest(".exercises-category-tile-button, .exercises-category-tile-button-start");if(!n)return;const a=n.getAttribute("data-id");if(!a)return;const r=await R(a);r&&N(r)})}function N(e){var s,o,n,a;const t=_(e);document.body.insertAdjacentHTML("beforeend",t),(s=document.querySelector("[data-modal-close]"))==null||s.addEventListener("click",c),(o=document.getElementById("exercise-modal-backdrop"))==null||o.addEventListener("click",r=>{r.target.id==="exercise-modal-backdrop"&&c()}),document.addEventListener("keydown",b),(n=document.getElementById("fav-btn"))==null||n.addEventListener("click",()=>{I.toggleFavorite(e._id),c()}),(a=document.getElementById("rate-btn"))==null||a.addEventListener("click",()=>{c(),Q(e._id)})}function Q(e){var s,o;const t=M();document.body.insertAdjacentHTML("beforeend",t),(s=document.querySelector("[data-modal-close]"))==null||s.addEventListener("click",c),(o=document.getElementById("rating-modal-backdrop"))==null||o.addEventListener("click",n=>{n.target.id==="rating-modal-backdrop"&&c()}),document.addEventListener("keydown",b),P(),C(e)}function b(e){e.key==="Escape"&&c()}function c(){var e;(e=document.querySelector(".modal-backdrop"))==null||e.remove(),document.removeEventListener("keydown",b)}function V(){var e;window.addEventListener("scroll",()=>{const t=document.getElementById("scrollToTopBtn");t&&(window.scrollY>200?t.classList.add("show"):t.classList.remove("show"))}),(e=document.getElementById("scrollToTopBtn"))==null||e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}export{B as F,p as Y,l as a,J as b,$ as c,V as d,I as e,G as f,z as g,H as i,E as m,U as s};
//# sourceMappingURL=init-scroll-top-D3T1kj8Z.js.map
