(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();let i=JSON.parse(localStorage.getItem("todos"))||[];const d=e=>{i=e(i),localStorage.setItem("todos",JSON.stringify(i))},p=document.querySelector("#todo-form"),u=document.querySelector("#todo-input"),c=document.querySelector("#todo-list"),m=document.querySelector("#reset-btn"),f=e=>`
    <li data-id="${e.id}" class="list-group-item d-flex justify-content-between align-items-start">
      <span class="text-todo">${e.value}</span>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger edit">Edit</button>
        <button type="button" class="btn btn-warning delete">Delete</button>
      </div>
    </li>
  `,l=e=>{const o=e.map(s=>f(s)).join("");c.innerHTML=o};l(i);p.addEventListener("submit",e=>{e.preventDefault();const o={id:Date.now().toString(),value:u.value};d(s=>[...s,o]),c.insertAdjacentHTML("beforeend",f(o)),u.value=""});c.addEventListener("click",e=>{const o=e.target.closest(".list-group-item");if(e.target.classList.contains("delete")&&confirm("Are you sure you want to delete this todo?")&&(d(r=>r.filter(t=>t.id!==o.dataset.id)),o.remove()),e.target.classList.contains("edit")){const s=i.find(r=>r.id===o.dataset.id);o.innerHTML=`
      <div id="update-form" class="input-group mb-3">
        <input type="text" class="form-control" id="update-input" value="${s.value}" />
        <button class="btn btn-outline-secondary update">Update</button>
      </div>
    `}if(e.target.classList.contains("update")){const s=e.target.previousElementSibling;d(r=>{const t=r.find(n=>n.id===o.dataset.id);return t.value=s.value,r}),l()}});m.addEventListener("click",()=>{d(()=>[]),l(i)});
