const tr = document.getElementById('tr');
const chislo = document.getElementById('chislo');
const tr3 = document.getElementById('tr3');
const date = document.getElementById('date');
const lName = document.getElementById('l_name');
const lName2 = document.getElementById('l_name2');



const stol = tr.addEventListener('click' ,function (ev) {

  if( ev.target.tagName != 'TH') return;

  const svg2 = `<svg>
     <line x1='0' y1='0' x2="100%" y2="100%" stroke-width="3"
     stroke='black'></line>
     <line x1='0' y1='100%' x2="100%" y2="0" stroke-width="3"
     stroke='black'></line>
</svg>`;
ev.target.insertAdjacentHTML('afterbegin' , svg2);
console.log(tr);
})

const stol2 = chislo.addEventListener('click' ,function (el) {
  if(el.target.tagName != 'TD') return;
  el.target.style.background = 'rgba(255,0,0,0.8)';
  console.log(chislo);
})

const stol3 = tr3.addEventListener('click' ,function (ev) {

  if( ev.target.tagName != 'TH') return;

  const svg2 = `<svg>
     <line x1='0' y1='0' x2="100%" y2="100%" stroke-width="3"
     stroke='black'></line>
     <line x1='0' y1='100%' x2="100%" y2="0" stroke-width="3"
     stroke='black'></line>
</svg>`;
ev.target.insertAdjacentHTML('afterbegin' , svg2);
console.log(tr3);
})

const table = date.addEventListener('click' ,function (el) {
  if(el.target.tagName != 'TD') return;
  el.target.style.background = 'rgba(255,0,0,0.8)';
  console.log(date);
})

const table2 = lName.addEventListener('click' ,function (ev) {

  if( ev.target.tagName != 'TH') return;

  const svg3 = `<svg>
     <line x1='0' y1='0' x2="100%" y2="100%" stroke-width="3"
     stroke='black'></line>
     <line x1='0' y1='100%' x2="100%" y2="0" stroke-width="3"
     stroke='black'></line>
</svg>`;
ev.target.insertAdjacentHTML('afterbegin' , svg3);
})

const table3 = lName2.addEventListener('click' ,function (ev) {

  if( ev.target.tagName != 'TH') return;

  const svg4 = `<svg>
     <line x1='0' y1='0' x2="100%" y2="100%" stroke-width="3"
     stroke='black'></line>
     <line x1='0' y1='100%' x2="100%" y2="0" stroke-width="3"
     stroke='black'></line>
</svg>`;
ev.target.insertAdjacentHTML('afterbegin' , svg4);
})
