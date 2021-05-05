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
for(key in person1) {
    console.log(person1[key])
}
// personAll = loadData(person1)



// LEsson 13 github