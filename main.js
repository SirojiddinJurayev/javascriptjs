const root = document.querySelector('#root');
const btn = document.querySelector('#addBox');
const resetBtn = document.querySelector('#resetRoot');

btn.addEventListener('click',(e) => {
  console.log('bosildi');
  const box = `<div class='box'>Box</div>`;
  root.innerHTML += box;
});
resetBtn.addEventListener('click', (e) => {
  root.innerHTML = " ";
});








const colorInput = document.querySelector("#body__color");
const changedColorBox = document.querySelector(".changed__color");
const body = document.querySelector("body");

const changedColor = localStorage.getItem("changedColorForBody");
if ("changedColorForBody"){
    body.style.backgroundColor = localStorage.getItem("changedColorForBody");
    changedColorBox.textContent = localStorage.getItem("changedColorForBody");
    colorInput.value = localStorage.getItem("changedColorForBody");
}

colorInput.addEventListener('input', (e) => {
    console.log(colorInput.value);
    changedColorBox.textContent = colorInput.value;
    body.style.backgroundColor = colorInput.value;
    localStorage.setItem('changedColorForBody', colorInput.value);
});

const boxWidth = document.querySelector("#box__width");
const boxHeight = document.querySelector("#box__height");
const changeSizeBtn = document.querySelector("#change__size");
const box = document.querySelector(".big__box");

changeSizeBtn.addEventListener("click", () => {
    console.log("bosildi");
    console.log(boxWidth.value,"- width");
    console.log(boxHeight.value,"- height");
    box.style.width = boxWidth.value+"px";
    box.style.height = boxHeight.value+"px";
});

boxHeight.addEventListener("keypress", (e) => {
  if (e.key === "Enter"){
    box.style.width = boxWidth.value+"px";
    box.style.height = boxHeight.value+"px";
  }
})
const titleOfTab = document.getElementsByClassName("table__title");
const tabContents = document.getElementsByClassName("tab__inner");
console.log(tabContents);
Array.from(titleOfTab).forEach((item, index) =>{
    // console.log(item, "- item");
    // console.log(index, "- index");
    item.addEventListener('click', (e) => {
        Array.from(titleOfTab).forEach((tab, index) => {
            // console.log(tab.classList);
            tab.classList.remove("active__tab");
        });
        console.log(e.target.dataset.id);
        titleOfTab[e.target.dataset.id].classList.add("active__tab");
        Array.from(tabContents).forEach((tab, index) => {
            // console.log(tab.classList);
            tab.classList.remove("active__content");
        });
        tabContents[e.target.dataset.id].classList.add("active__content");
    });
    
});
const newBox = document.querySelector(".box-4");
newBox.style.width = "500px";
newBox.style.height = "250px";
newBox.style.backgroundColor = "red";
newBox.textContent = 'Box';
newBox.innerHTML ='<h1>Hello world</h1>';
newBox.style.fontSize = '45px';
newBox.style.color = 'brown';
newBox.style.borderRadius = '35px';
newBox.style.padding = '15px 25px';
newBox.innerHTML = "<h1 style='color:yellow'>Hello world</h1>";
function onMouseOver (e) {
    console.log(e);
    e.innerHTML = "Mouse know in this box";
}
function onMouseOut(e) {
    e.innerHTML = "Mouse is git out";
}
function clickHandler (e) {
    e.innerHTML ="You are pressed this box";
}
function dubleclickHandler (e) {
    e.innerHTML ="Duble click";
}
window.addEventListener('resize', ()=>{
    body.style.backgroundColor = 'yellow';
});


const parentSection = document.querySelector("#box-5");
const newSection = document.createElement("div");
const newText = document.createTextNode("New section");

newSection.appendChild(newText);
parentSection.appendChild(newSection);

const items = document.forms.form1.fav_language;
const showResult = document.querySelector("#result");
console.log(items);
Array.from(items).forEach(input => {
    input.addEventListener("change", (e) => {
        // console.log(e);
        const newWord = e.target.value;
        showResult.innerHTML = newWord;
        console.log(newWord);
    });
});
const rowAdd = document.querySelector("#box-6");
const selectColor = document.querySelector("#color");
selectColor.addEventListener("change", (e) => {
    console.log(e);
    const selectedolor = e.target.value;
    rowAdd.style.backgroundColor = selectedolor;
});




var countries = Object();


countries['Uzbekistan'] = 'Andijon viloyati|Buxoro viloyati|Sirdaryo viloyati|Samarqand viloyati |Toshkent viloyati|Surhandaryo viloyati|Qashqadaryo viloyati|Urganch viloyati|Xorazm viloyati |';


////////////////////////////////////////////////////////////////////////////

var city_states = Object();

city_states['Sirdaryo viloyati'] = 'Oqoltin tumani|Sardoba tumani|Guliston tumani |Boyovut tumani|Sirdaryo tumani|Sayhunobod tumani|Mirzaobod tumani';
city

html = "";
for (region in countries)
  html += '<option value="' + region + '">' + region + '</option>';

document.getElementById("region").innerHTML = document.getElementById("region").innerHTML + html;

function set_country(oRegionSel, oCountrySel, oCity_StateSel) {
  var countryArr;
  oCountrySel.length = 0;
  oCity_StateSel.length = 0;
  var region = oRegionSel.options[oRegionSel.selectedIndex].text;
  if (countries[region]) {
    oCountrySel.disabled = false;
    oCity_StateSel.disabled = true;
    oCountrySel.options[0] = new Option('SELECT REGION', '');
    countryArr = countries[region].split('|');
    for (var i = 0; i < countryArr.length; i++)
      oCountrySel.options[i + 1] = new Option(countryArr[i], countryArr[i]);
    document.getElementById('txtregion').innerHTML = region;
    document.getElementById('txtplacename').innerHTML = '';
  } else oCountrySel.disabled = true;
}

function set_city_state(oCountrySel, oCity_StateSel) {
  var city_stateArr;
  oCity_StateSel.length = 0;
  var country = oCountrySel.options[oCountrySel.selectedIndex].text;
  if (city_states[country]) {
    oCity_StateSel.disabled = false;
    oCity_StateSel.options[0] = new Option('SELECT DISTRICT ', '');
    city_stateArr = city_states[country].split('|');
    for (var i = 0; i < city_stateArr.length; i++)
      oCity_StateSel.options[i + 1] = new Option(city_stateArr[i], city_stateArr[i]);
 
  } else oCity_StateSel.disabled = true;
}

function print_city_state(oCountrySel, oCity_StateSel) {
  var country = oCountrySel.options[oCountrySel.selectedIndex].text;
  var city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;

}


const image = document.querySelector("#img");
image.setAttribute("width", "1000px");
console.log(image.attributes);