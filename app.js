// https://www.omnicalculator.com/conversion/density-converter

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kgm3Radio = document.getElementById('kgm3Radio');
const kgdm3Radio = document.getElementById('kgdm3Radio');

let kgm3;
let kgdm3 = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

kgm3Radio.addEventListener('click', function() {
  variable1.textContent = 'kg/dm³';
  kgdm3 = v1;
  result.textContent = '';
});

kgdm3Radio.addEventListener('click', function() {
  variable1.textContent = 'kg/m³';
  kgm3 = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kgm3Radio.checked)
    result.textContent = `kg/m³ = ${computekgm3().toFixed(5)}`;

  else if(kgdm3Radio.checked)
    result.textContent = `kg/dm³ = ${computekgdm3().toFixed(5)}`;
})

// calculation

function computekgm3() {
  return Number(kgdm3.value) / 1000;
}

function computekgdm3() {
  return Number(kgm3.value) * 1000;
}