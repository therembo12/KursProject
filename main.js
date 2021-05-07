let url = 'https://swapi.dev/api/'

function loadData(url) {
    if (url.length == 0) {
      return;
    }
    let req = new XMLHttpRequest();
    let person;
    req.open("GET", url, false);
    req.send();
    if (req.status !== 200) {
      console.log(`REQ error code ${req.status}. ${req.statusText}`);
    } else {
      person = JSON.parse(req.response);
    }
    return person;
  }
let DataBase = loadData(url)
let persons = loadData(DataBase['people'])
// Header

let $header = document.querySelector('header')
$header.classList.add('container-fluid')
$header.style.backgroundColor = 'grey'

let $header_content = document.createElement('div')
    $header_content.classList.add('container')
    $header_content.style.height = '100' + 'px'
    $header_content.style.backgroundColor = 'whitesmoke'
$header.appendChild($header_content)


// Main
let $main = document.querySelector('main')
$main.classList.add('container')
$main.style.backgroundColor = 'white'
$main.style.height = '800' + 'px'

let $nav_bar = document.createElement('div')
let $ul_ppl = document.createElement('ul')
$ul_ppl.textContent = 'Star Wars Heroes'

for (let i = 0; i < persons.results.length; i++){
  let $ppl_content = document.createElement('li')
    $ul_ppl.appendChild($ppl_content)
    $ppl_content.textContent = `${persons.results[i].name}`
}
$ul_ppl.addEventListener('click',()=>{
  for(let i = 0;i < 10;i++){
    let $ppl_content = document.querySelectorAll('ul li')
    $ppl_content[i].classList.toggle('hide')
  }

  
})

$nav_bar.appendChild($ul_ppl)
$main.appendChild($nav_bar)



// Footer
let $footer = document.querySelector('footer')
$footer.classList.add('container-fluid')
$footer.style.backgroundColor = 'grey'

let $footer_content = document.createElement('div')
    $footer_content.classList.add('container')
    $footer_content.style.height = '100' + 'px'
    $footer_content.style.backgroundColor = 'whitesmoke'
$footer.appendChild($footer_content)



