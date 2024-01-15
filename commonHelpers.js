import{i as w,S,a as m}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();function a(i){w.show({close:!1,closeOnClick:!0,message:i,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}let I=new S("#gallery a",{overlayOpacity:.5,showCounter:!1});const q="41474300-2fa05bee877be877b8dc1781f",f="https://pixabay.com/api/";m.defaults.baseURL=f;const O=document.querySelector("#form"),P=document.querySelector("#searchInput"),g=document.querySelector("#gallery"),n=document.querySelector("#loadBtn"),l=document.querySelector(".loader");let h=innerHeight,c=1;const y=40;let u;window.scrollBy(0,h);O.addEventListener("submit",A);n.addEventListener("click",M);async function A(i){if(i.preventDefault(),$(),u=P.value.trim(),!u)return l.style.display="none",a("Please enter your search query!");await p()}async function p(){try{const s=(await m.get(f,{params:k()})).data;if(s.hits.length===0)return a("Sorry, no images match your search query. Please try again!");B(s.hits),C(s.totalHits)}catch{E()}finally{l.classList.add("hide")}}function B(i){c+=1;const s=i.reduce((d,{webformatURL:o,largeImageURL:e,tags:t,likes:r,views:v,comments:L,downloads:b})=>d+`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${o}" alt="${t}" />
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${r}</div>
          </div>
          <div class="image-desc-item">
             <div class="image-desc-label">Views</div>
             <div>${v}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${L}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${b}</div>
          </div>
        </div>
      </li>
      `,"");g.insertAdjacentHTML("beforeend",s),h=document.querySelector(".gallery-item").getBoundingClientRect().height,I.refresh()}async function M(){n.classList.add("hide"),l.classList.remove("hide"),await p()}function $(){n.classList.add("hide"),l.classList.remove("hide"),c=1,g.innerHTML=""}function k(){return{key:q,q:u,orientation:"horizontal",image_type:"photo",safesearch:!0,page:c,per_page:y}}function C(i){const s=Math.ceil(i/y);c>s?a("We're sorry, but you've reached the end of search results."):n.classList.remove("hide")}function E(){a("Oops... Something went wrong")}
//# sourceMappingURL=commonHelpers.js.map
