/* empty css                      */import{i as p}from"./assets/vendor-DVYrn7a6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();class m{constructor(t,r,i){this.name=t,this.filter=r,this.imgUrl=i}static fromJson(t){return new m(t.name,t.filter,t.imgURL)}}class d{constructor(t,r,i,e){this.page=t,this.perPage=r,this.totalPages=i,this.results=e}static fromJson(t){const r=t.results.map(i=>m.fromJson(i));return new d(t.page,t.perPage,t.totalPages,r)}}const g=class g{};g.ApiBaseUrl="https://your-energy.b.goit.study/api";let u=g;async function h(o){const t=`${u.ApiBaseUrl}/filters?filter=${encodeURIComponent(o.filter)}&page=${o.page}&limit=${o.limit}`,r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch filters: ${r.status}`);const i=await r.json();return d.fromJson(i)}function w(o){return o.map(t=>`
          <div class="filter-card">
            <img src="${t.imgUrl}" alt="${t.name}" />
            <div class="filter-info">
              <div class="filter-name">${t.name}</div>
              <div class="filter-type">${t.filter}</div>
            </div>
          </div>
        `).join("")}function y(o,t){const r=[];let e=Math.max(1,t-1),s=Math.min(o,e+3-1);s-e+1<3&&(e=Math.max(1,s-3+1));for(let a=e;a<=s;a++)r.push(a);return r.map(a=>`
    <span class="pagination-page${a===t?" active":""}" data-page="${a}">${a}</span>
  `).join("")}const v=({title:o,message:t,position:r,...i}={title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})=>{p.error({title:o,message:t,position:r,...i})};function L(){var a;const o=document.querySelector(".filters-output"),t=document.querySelector(".filter-tabs"),r=document.querySelector(".filter-pagination");if(!o)throw new Error("Can't find .filters-output");if(!t)throw new Error("Can't find .filter-tabs");if(!r)throw new Error("Can't find .filter-pagination");let i=(a=t.querySelector(".active"))==null?void 0:a.dataset.filter,e=1;function s(f,n){h({filter:f,page:n,limit:12}).then(c=>{o.innerHTML=w(c.results),r.innerHTML=y(c.totalPages,n)}).catch(c=>v({title:"Error",message:c.message,position:"topRight",timeout:5e3}))}t.addEventListener("click",f=>{const n=f.target;if(n.tagName.toLowerCase()!=="li")return;const l=n.dataset.filter;!l||l===i||(t.querySelectorAll("li").forEach(c=>c.classList.remove("active")),n.classList.add("active"),i=l,e=1,s(i,e))}),r.addEventListener("click",f=>{const n=f.target;if(n.tagName.toLowerCase()!=="span")return;const l=Number(n.dataset.page);!l||l===e||(e=l,s(i,e))}),s(i,e)}L();
//# sourceMappingURL=index.js.map
