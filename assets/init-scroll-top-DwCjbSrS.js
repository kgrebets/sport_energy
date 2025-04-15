import{i as y,a as m}from"./vendor-BAoYjrW1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".mobile-menu"),s=document.querySelector(".mobile-menu__close"),o=document.querySelector(".mobile-menu__overlay");if(!e||!t||!s||!o)return;const n=()=>{t.classList.add("mobile-menu--open")},a=()=>{t.classList.remove("mobile-menu--open")};e.addEventListener("click",n),s.addEventListener("click",a),o.addEventListener("click",a);const r=document.querySelector(".main-nav .home-link"),i=document.querySelector(".main-nav .favorites-link"),c=()=>{r&&i&&(r.classList.remove("active-oval"),i.classList.remove("active-oval"),window.location.pathname.lastIndexOf("favorites.html")!==-1?i.classList.add("active-oval"):r.classList.add("active-oval"))};c(),window.addEventListener("popstate",c)});const h="https://your-energy.b.goit.study/api/",l=({title:e,message:t,position:s,...o}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{y.error({title:e,message:t,position:s,...o})},b=({title:e,message:t,position:s,...o}={title:"Success",message:"Operation completed successfully.",position:"topRight"})=>{y.success({title:e,message:t,position:s,...o})},V=({title:e,message:t,position:s,...o})=>{y.info({title:e,message:t,position:s,...o})};function E(){const e=document.getElementById("loader");e&&e.classList.remove("hidden")}function w(){const e=document.getElementById("loader");e&&e.classList.add("hidden")}const L=async(e,t)=>{try{E();const{data:s}=await m.get(`${h}${e}`,{params:t});return s}catch(s){console.error(s),l()}finally{w()}},T=async(e,t,s=!0)=>{try{E();const{data:o}=await m.post(`${h}${e}`,t);return o}catch(o){if(console.error(o),s)l();else throw o}finally{w()}},A=async(e,t)=>{var s;try{E();const{data:o}=await m.patch(`${h}${e}`,t);return o}catch(o){console.error(o),m.isAxiosError(o)&&((s=o.response)!=null&&s.data)?l({title:"Error",message:o.response.data.message,position:"topRight"}):l()}finally{w()}};function R(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}async function j(e){const t=await L("exercises",e);if(!t)throw new Error("Cannot get exercises");return t}async function D(e){const t=await L(`exercises/${e}`);if(!t)throw new Error("Cannot get exercise by id");return t}async function O(){const e=await L("quote");if(!e)throw new Error("Cant' get quote");return e}const v=document.getElementById("quote-text"),p=document.getElementById("quote-author"),k="quote",x="quoteDate";function I(){return new Date().toISOString().split("T")[0]}function _(){const e=localStorage.getItem(k),t=localStorage.getItem(x),s=I();if(e&&t===s)try{return JSON.parse(e)}catch(o){return console.error("Error parsing stored quote:",o),null}return null}function f(e,t){if(!v||!p)throw new Error("Can't find quote elements");v.textContent=e,p.textContent=t}function B(e,t){const s=JSON.stringify({quote:e,author:t}),o=I();localStorage.setItem(k,s),localStorage.setItem(x,o)}async function M(){try{const e=await O();return e&&e.quote?{quote:e.quote,author:e.author}:null}catch(e){return console.error("Error fetching quote:",e),null}}async function G(){if(!v||!p)throw new Error("Can't find quote elements");const e=_();if(e){f(e.quote,e.author);return}const t=await M();t?(B(t.quote,t.author),f(t.quote,t.author)):f("Failed to fetch quote.","")}function J(){const e=document.getElementById("subscription-form"),t=document.querySelector(".footer-year p");if(t&&(t.textContent=`©${new Date().getFullYear()}`),s(),!e)return;e.addEventListener("submit",n);function s(){document.querySelectorAll(".footer-social-item a").forEach(i=>{i instanceof HTMLAnchorElement&&(i.setAttribute("target","_blank"),i.setAttribute("rel","noopener noreferrer"),i.addEventListener("click",c=>{o(i.href)||(c.preventDefault(),l({title:"Security Warning",message:"This link appears to be suspicious and has been blocked.",position:"topRight"}))}))})}function o(r){try{const i=new URL(r),d=["facebook.com","www.facebook.com","instagram.com","www.instagram.com","youtube.com","www.youtube.com","youtu.be"].some(q=>i.hostname===q||i.hostname.endsWith(`.${q}`)),$=i.protocol==="https:";return d&&$}catch{return!1}}async function n(r){r.preventDefault();const c=new FormData(e).get("email");if(!c||!a(c)){l({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}try{if(await T("subscription",{email:c},!1)===void 0)throw new Error("Subscription failed");e.reset(),b({title:"Success",message:"Thank you for subscribing!",position:"topRight"})}catch(d){d&&"status"in d&&d.status===409?l({title:"Error",message:"You are already subscribed to our newsletter.",position:"topRight"}):l({title:"Error",message:"Failed to subscribe. Please try again later.",position:"topRight"})}}function a(r){return/^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)}}const g="favorites",P="favorites-updated",F={getFavoriteIds(){return JSON.parse(localStorage.getItem(g)||"[]")},isFavorite(e){return this.getFavoriteIds().includes(e)},addFavorite(e){const t=this.getFavoriteIds();t.includes(e)||(t.push(e),localStorage.setItem(g,JSON.stringify(t)),this.notifyFavoritesUpdated())},removeFavorite(e){const t=this.getFavoriteIds(),s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem(g,JSON.stringify(t)),this.notifyFavoritesUpdated())},toggleFavorite(e){return this.isFavorite(e)?(this.removeFavorite(e),!1):(this.addFavorite(e),!0)},notifyFavoritesUpdated(){const e=new CustomEvent(P,{detail:{favorites:this.getFavoriteIds()}});document.dispatchEvent(e)}};function C(e){const t=R(e.name);return`
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
              <button id="fav-btn" class="btn-white">${F.isFavorite(e._id)?"Remove from favorites":"Add to favorites"}
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
  `}function N(){return`
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
    `}function U(){const e=document.querySelectorAll(".star"),t=document.querySelector(".rating-value");e.forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-value");t.textContent=`${parseFloat(o).toFixed(1)}`,e.forEach(n=>{n.classList.toggle("active",n.getAttribute("data-value")<=o)})})})}function Q(e){const t=document.getElementById("rating-form");t.addEventListener("submit",async s=>{var r;s.preventDefault();const o=new FormData(t),a={rate:parseFloat(document.querySelector(".rating-value").textContent),email:o.get("email"),review:o.get("comment")};try{await A(`exercises/${e}/rating`,a)&&b({title:"Success",message:"Rating sent successfully",position:"topRight"}),(r=t.closest(".modal-backdrop"))==null||r.remove()}catch(i){console.error(i)}})}function K(e){e.addEventListener("click",async t=>{const s=t.target;if(s.closest("a, input, select, textarea, [data-modal-ignore]"))return;const n=s.closest(".exercises-category-tile-button, .exercises-category-tile-button-start");if(!n)return;const a=n.getAttribute("data-id");if(!a)return;const r=await D(a);r&&Y(r)})}function Y(e){var s,o,n,a;const t=C(e);document.body.insertAdjacentHTML("beforeend",t),(s=document.querySelector("[data-modal-close]"))==null||s.addEventListener("click",u),(o=document.getElementById("exercise-modal-backdrop"))==null||o.addEventListener("click",r=>{r.target.id==="exercise-modal-backdrop"&&u()}),document.addEventListener("keydown",S),(n=document.getElementById("fav-btn"))==null||n.addEventListener("click",()=>{const r=F.toggleFavorite(e._id);b({title:r?"Successfully added":"Successfully removed",message:r?"The exercise was added to favorites!":"The exercise was removed from favorites!",position:"topRight"})}),(a=document.getElementById("rate-btn"))==null||a.addEventListener("click",()=>{z(e._id)})}function z(e){var s,o;const t=N();document.body.insertAdjacentHTML("beforeend",t),(s=document.querySelector("[data-modal-close]"))==null||s.addEventListener("click",u),(o=document.getElementById("rating-modal-backdrop"))==null||o.addEventListener("click",n=>{n.target.id==="rating-modal-backdrop"&&u()}),document.addEventListener("keydown",S),U(),Q(e)}function S(e){e.key==="Escape"&&u()}function u(){var e;(e=document.querySelector(".modal-backdrop"))==null||e.remove(),document.removeEventListener("keydown",S)}function Z(){var e;window.addEventListener("scroll",()=>{const t=document.getElementById("scrollToTopBtn");t&&(window.scrollY>200?t.classList.add("show"):t.classList.remove("show"))}),(e=document.getElementById("scrollToTopBtn"))==null||e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}export{P as F,h as Y,l as a,K as b,R as c,Z as d,F as e,G as f,j as g,J as i,L as m,V as s};
//# sourceMappingURL=init-scroll-top-DwCjbSrS.js.map
