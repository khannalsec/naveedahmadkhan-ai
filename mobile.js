document.addEventListener('DOMContentLoaded',()=>{
 const header=document.querySelector('header');const nav=header?.querySelector('nav');if(!header||!nav)return;
 nav.id='site-mobile-navigation';
 const toggle=document.createElement('button');toggle.type='button';toggle.className='mobile-menu-toggle';toggle.setAttribute('aria-label','Open navigation menu');toggle.setAttribute('aria-controls',nav.id);toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';header.insertBefore(toggle,nav);
 function close(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation menu');toggle.textContent='☰'}
 toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');toggle.textContent=open?'✕':'☰'});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!header.contains(e.target))close()});
 window.addEventListener('resize',()=>{if(window.innerWidth>900)close()});
});
