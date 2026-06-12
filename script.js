const screens = Array.from({length:29},(_,i)=>`assets/screens/screen_${String(i+1).padStart(2,'0')}.jpg`);
let current = 0;

const img = document.getElementById('screen');
const nav = document.getElementById('screenNav');

function show(i){
  current = (i + screens.length) % screens.length;
  img.src = screens[current];
  [...nav.children].forEach((b,n)=>b.classList.toggle('active', n===current));
}

screens.forEach((_,i)=>{
  const b=document.createElement('button');
  b.type='button';
  b.addEventListener('click',()=>show(i));
  nav.appendChild(b);
});

document.getElementById('prev').addEventListener('click',()=>show(current-1));
document.getElementById('next').addEventListener('click',()=>show(current+1));

show(0);