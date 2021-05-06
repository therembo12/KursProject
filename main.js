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
let person1 = loadData(url)


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
$btn_ppl = document.createElement('button')
$btn_ppl.classList.add('btn-primary','btn')
$btn_ppl.textContent = 'Star Wars Heroes'
$main.appendChild($btn_ppl)





// Footer
let $footer = document.querySelector('footer')
$footer.classList.add('container-fluid')
$footer.style.backgroundColor = 'grey'

let $footer_content = document.createElement('div')
    $footer_content.classList.add('container')
    $footer_content.style.height = '100' + 'px'
    $footer_content.style.backgroundColor = 'whitesmoke'
$footer.appendChild($footer_content)



