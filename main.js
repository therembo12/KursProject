let url = "https://swapi.dev/api/";

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
let person_img = [
  "https://i.pinimg.com/originals/70/62/f8/7062f8ace037f344cad1d568ea72cbbe.jpg",
  "https://i.pinimg.com/474x/af/08/1a/af081ad11d348a316aef79ffac9bab2e.jpg",
  "https://upload.wikimedia.org/wikipedia/ru/3/39/R2-D2_Droid.png",
  "https://i1.wp.com/figurehouse.ru/wp-content/uploads/2019/12/1-3-37-2.jpg?fit=600%2C600&ssl=1",
  "https://s3.amazonaws.com/libapps/accounts/81381/images/leia.jpg",
  "https://lh3.googleusercontent.com/proxy/kiRJEVa1J7bDoT3XxRFPShigGk2hOm8AV2JBjbZEPrsbJcrzAO-43a14GsETrnbx-CVQhK224plcNzLtQ-d5hc7BLQ_uiA1rCrdN0BrZ3dmLJnSWM-sSpyF0UeXDYg",
  "https://lumiere-a.akamaihd.net/v1/images/databank_shmiskywalkerlars_01_169_7449f0a8.jpeg?region=341%2C0%2C878%2C878",
  "http://ru.myanimeshelf.com//upload/dynamic/2015-08/28/R51.png",
  "https://comicvine1.cbsistatic.com/uploads/scale_medium/14/145984/4902632-8136336329-biggs.jpg",
  "https://gritdaily.com/wp-content/uploads/2021/01/Obi-Wan.png",
];
let planet_img = [
  "https://upload.wikimedia.org/wikipedia/uk/f/f8/Tatooine_bf1.jpg",
  "https://i.pinimg.com/originals/73/2b/df/732bdf9f1c83d007ce8ccc7d732eee1e.jpg",
  "https://pbs.twimg.com/media/ESilZ_OWsAM-Hpn.jpg",
  "https://kanka-user-assets.s3.eu-central-1.amazonaws.com/locations/3J5vwtqAqeapW5YkZVU6vV8Ki48iVl5sRtc0u6fG.png",
  "http://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/68/Dagobah_2.jpg",
  "https://i.pinimg.com/originals/bb/03/ff/bb03ffb68e21b8a7b880c6fbdb32a7bb.jpg",
  "http://pm1.narvii.com/7621/264bea9e7763c6a6288b9b6fd7f6304621e9f34fr1-512-512v2_00.jpg",
  "http://custom.swcombine.com/static/8/4/34-13715-1558966795-large.png",
  "https://pbs.twimg.com/profile_images/1177177736/Coruscant-AoTCW.jpg",
  "https://upload.wikimedia.org/wikipedia/uk/1/16/Kamino_bf1.jpg",
];
let species_img = [
  "https://rpggamer.org/uploaded_images/star_wars_jedi_fallen_order_cal_kestis_png_by_metropolis_hero1125_dd4jw7n-fullview%20copy.jpg",
  "https://vignette2.wikia.nocookie.net/starwars/images/3/3f/IG-88_Sideshow.png/revision/latest?cb=20160805010310",
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/SWC4_-_Costume_Pageant-_Chewbacca_%28518145361%29.jpg",
  "https://i.pinimg.com/originals/14/8d/95/148d950cd7f52f10d936f8449609eb76.png",
  "https://upload.wikimedia.org/wikipedia/en/7/77/JabbaTheHutt.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=768,574",
  "https://i.pinimg.com/736x/83/95/95/8395957cd42485f477df0eb894d5a19c.jpg",
  "https://vignette.wikia.nocookie.net/starwars/images/4/4e/Mon_Calamari_by_Chris_Scalf.jpg/revision/latest?cb=20141218071637",
  "https://upload.wikimedia.org/wikipedia/en/e/ee/Wicket_W_Warrick.png",
  "https://rpggamer.org/uploaded_images/DFLVW8qWAAAejk0.jpg",
];
let starships_img = [
  "https://i.pinimg.com/originals/c8/e1/03/c8e10396f9f375a8ea8995d4a69a74ee.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71h1Vn-LQyL._AC_SL1500_.jpg",
  "https://cdna.artstation.com/p/assets/images/images/019/160/250/medium/alexander-ivanov-sent-7.jpg?1562265020",
  "https://cdnb.artstation.com/p/assets/covers/images/023/314/909/large/derk-elshof-deathstar-thumb.jpg?1578821384",
  "https://m.media-amazon.com/images/I/91U9XhiYEHL.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C24%2C1536%2C768",
  "https://i.pinimg.com/originals/db/57/43/db5743bb3287da32c5f9047b8c3088ca.jpg",
  "https://cdnb.artstation.com/p/assets/images/images/008/509/579/large/roman-pelipenko-tie-front-side-1-5.jpg?1513214025",
  "https://cdn.toypro.com/media/cache/my_image_big_detail_set/uploads/images/news/141.jpg",
  "https://static.turbosquid.com/Preview/001218/677/E1/ready-gr-75-transport-rebel-3D-model_600.jpg",
];
let vehicles_img = [
  "https://cdnb.artstation.com/p/assets/covers/images/001/612/661/medium/adrian-cornea-2015-12-05-jawa-sandcrawler.jpg?1449507246",
  "https://monster.partyhat.co/article/1-144th-scale-t-16-skyhopper-kit/photos/full/P1270156.jpg",
  "https://assets.pinshape.com/uploads/image/file/146678/container_x-34-landspeeder-3d-printing-146678.png",
  "https://live.staticflickr.com/8072/8295981593_daa4c35238_b.jpg",
  "https://static.turbosquid.com/Preview/2020/09/29__04_33_47/snowspeeder.jpg525DE68B-5124-46A9-B9F7-FD5DF7A83296Large.jpg",
  "https://static.turbosquid.com/Preview/2019/10/20__11_36_20/tiebomber_sig.png2819A2D6-5ACB-4BD8-A1EC-9D56003F4B04Large.jpg",
  "https://static.turbosquid.com/Preview/2015/12/14__13_18_24/top_front_newLighting.jpgd34cc665-a0fc-45f9-8807-af04dc25dc2cLarge.jpg",
  "https://static.turbosquid.com/Preview/2014/07/12__04_00_01/AT_ST_render_0001.jpg316ce264-88d2-41b3-9782-0718208e0ba2Original.jpg",
  "https://cdna.artstation.com/p/assets/images/images/009/354/520/large/jay-machado-cloudcar-0003.jpg?1518502674",
  "https://media.comicbook.com/2018/03/star-wars-hasbro-jabbas-sail-barge-haslab-1096980-1280x0.jpeg",
];
console.log(person_img);
// Links
let DataBase = loadData(url);
let persons = loadData(DataBase["people"]),
  planets = loadData(DataBase["planets"]),
  species = loadData(DataBase["species"]),
  starships = loadData(DataBase["starships"]);
vehicles = loadData(DataBase["vehicles"]);

console.log(persons.results);
// Header

let $header = document.querySelector("header");
$header.classList.add("container-fluid");
$header.style.backgroundColor = "grey";

let $header_content = document.createElement("div");
$header_content.classList.add("container");
$header_content.style.height = "100" + "px";
$header_content.style.backgroundColor = "whitesmoke";
let $header_text = document.createElement('h1')
    $header_text.textContent = 'Primitive Swapi Wiki'
    $header_text.style.textAlign = 'center'
    $header_text.classList.add('t')
$header.appendChild($header_content);
$header_content.appendChild($header_text)
// Main
let $main = document.querySelector("main");
$main.classList.add("container", "d-flex", "flex-row");
$main.style.backgroundColor = "white";
$main.style.height = "300" + "px";
let $main_content = document.createElement("div");
$main_content.classList.add(
  "container",
  "d-flex",
  "align-items-center",
  "justify-content-center"
);
let $content_zone = document.createElement("div");
$content_zone.classList.add("container", "d-flex", "flex-column", "col-6");
let $image_zone = document.createElement("div");
$image_zone.classList.add("container", "col-6");
$main_content.insertAdjacentElement("afterend", $content_zone);
$main_content.insertAdjacentElement("afterend", $image_zone);
console.log($main_content);
console.log($main);

$main.insertAdjacentElement("afterend", $main_content);

// Navigation Bar
let $nav_bar = document.createElement("div");
let $ul_ppl = document.createElement("ul"),
  $ul_planet = document.createElement("ul"),
  $ul_species = document.createElement("ul"),
  $ul_starships = document.createElement("ul"),
  $ul_vehicles = document.createElement("ul");

$ul_ppl.textContent = "Star Wars Heroes";
$ul_ppl.classList.add("ul_ppl");
$ul_planet.textContent = "Planets";
$ul_planet.classList.add("ul_planet");

$ul_species.textContent = "Species of Star Wars";
$ul_species.classList.add("ul_species");
$ul_starships.textContent = "Starships";
$ul_starships.classList.add("ul_starships");

$ul_vehicles.textContent = "Vehicle";
$ul_vehicles.classList.add("ul_vehicles");

for (let i = 0; i < persons.results.length; i++) {
  let $ppl_content = document.createElement("li"),
    $planet_content = document.createElement("li"),
    $species_content = document.createElement("li"),
    $starships_content = document.createElement("li"),
    $vehicles_content = document.createElement("li");

  $ul_ppl.appendChild($ppl_content);
  $ul_planet.appendChild($planet_content);
  $ul_species.appendChild($species_content);
  $ul_starships.appendChild($starships_content);
  $ul_vehicles.appendChild($vehicles_content);

  $ppl_content.textContent = `${persons.results[i].name}`;
  $planet_content.textContent = `${planets.results[i].name}`;
  $species_content.textContent = `${species.results[i].name}`;
  $starships_content.textContent = `${starships.results[i].name}`;
  $vehicles_content.textContent = `${vehicles.results[i].name}`;
}

$nav_bar.appendChild($ul_ppl);
$nav_bar.appendChild($ul_planet);
$nav_bar.appendChild($ul_species);
$nav_bar.appendChild($ul_starships);
$nav_bar.appendChild($ul_vehicles);
$nav_bar.classList.add("row", "col-12");
$nav_bar.style.textAlign = "center";
let $nav_bar_ppl = document.createElement("div");
$nav_bar_ppl.style.width = "20" + "%";
let $nav_bar_planet = document.createElement("div");
$nav_bar_planet.style.width = "20" + "%";

let $nav_bar_species = document.createElement("div");
$nav_bar_species.style.width = "20" + "%";

let $nav_bar_starships = document.createElement("div");
$nav_bar_starships.style.width = "20" + "%";

let $nav_bar_vehicles = document.createElement("div");
$nav_bar_vehicles.style.width = "20" + "%";

$ul_ppl.style.listStyleType = "none";
$ul_planet.style.listStyleType = "none";
$ul_species.style.listStyleType = "none";
$ul_starships.style.listStyleType = "none";
$ul_vehicles.style.listStyleType = "none";
$ul_ppl.classList.add("btn", "btn-primary", "col-11");
$ul_planet.classList.add("btn", "btn-primary", "col-11");
$ul_species.classList.add("btn", "btn-primary", "col-11");
$ul_starships.classList.add("btn", "btn-primary", "col-11");
$ul_vehicles.classList.add("btn", "btn-primary", "col-11");
$nav_bar_ppl.appendChild($ul_ppl);
$nav_bar.appendChild($nav_bar_ppl);
$nav_bar_planet.appendChild($ul_planet);
$nav_bar.appendChild($nav_bar_planet);
$nav_bar_species.appendChild($ul_species);
$nav_bar.appendChild($nav_bar_species);
$nav_bar_starships.appendChild($ul_starships);
$nav_bar.appendChild($nav_bar_starships);
$nav_bar_vehicles.appendChild($ul_vehicles);
$nav_bar.appendChild($nav_bar_vehicles);

$main.insertAdjacentElement("afterbegin", $nav_bar);

$ul_ppl.addEventListener("click", () => {
  for (let i = 0; i < persons.results.length; i++) {
    let $ppl_content = document.querySelectorAll(".ul_ppl li");
    $ppl_content[i].classList.toggle("hide");
  }
});
$ul_planet.addEventListener("click", () => {
  for (let i = 0; i < planets.results.length; i++) {
    let $planet_content = document.querySelectorAll(".ul_planet li");
    $planet_content[i].classList.toggle("hide");
  }
});
$ul_species.addEventListener("click", () => {
  for (let i = 0; i < species.results.length; i++) {
    let $species_content = document.querySelectorAll(".ul_species li");
    $species_content[i].classList.toggle("hide");
  }
});
$ul_starships.addEventListener("click", () => {
  for (let i = 0; i < starships.results.length; i++) {
    let $starships_content = document.querySelectorAll(".ul_starships li");
    $starships_content[i].classList.toggle("hide");
  }
});
$ul_vehicles.addEventListener("click", () => {
  for (let i = 0; i < vehicles.results.length; i++) {
    let $vehicles_content = document.querySelectorAll(".ul_vehicles li");
    $vehicles_content[i].classList.toggle("hide");
  }
});

let $person_content = document.querySelectorAll(".ul_ppl li");
for (let i = 0; i < persons.results.length; i++) {
  $person_content[i].addEventListener("click", (event) => {
    event.stopPropagation();
    $content_zone.innerHTML = "";
    $image_zone.innerHTML = "";
    $main_content.innerHTML = "";
    let image = document.createElement("img");
    image.setAttribute("src", `${person_img[i]}`);
    $image_zone.appendChild(image);
    $main_content.appendChild($image_zone);
    $main_content.appendChild($content_zone);
    showData(persons.results[i], $content_zone);
  });
}
let $planet_content = document.querySelectorAll(".ul_planet li");
for (let i = 0; i < planets.results.length; i++) {
  $planet_content[i].addEventListener("click", (event) => {
    event.stopPropagation();
    $content_zone.innerHTML = "";
    $image_zone.innerHTML = "";
    $main_content.innerHTML = "";
    let image = document.createElement("img");
    image.setAttribute("src", `${planet_img[i]}`);
    $image_zone.appendChild(image);
    $main_content.appendChild($image_zone);
    $main_content.appendChild($content_zone);
    showData(planets.results[i], $content_zone);
  });
}
let $species_content = document.querySelectorAll(".ul_species li");
for (let i = 0; i < species.results.length; i++) {
  $species_content[i].addEventListener("click", (event) => {
    event.stopPropagation();
    $content_zone.innerHTML = "";
    $image_zone.innerHTML = "";
    $main_content.innerHTML = "";
    let image = document.createElement("img");
    image.setAttribute("src", `${species_img[i]}`);
    $image_zone.appendChild(image);
    $main_content.appendChild($image_zone);
    $main_content.appendChild($content_zone);
    showData(species.results[i], $content_zone);
  });
}
let $starships_content = document.querySelectorAll(".ul_starships li");
for (let i = 0; i < starships.results.length; i++) {
  $starships_content[i].addEventListener("click", (event) => {
    event.stopPropagation();
    $content_zone.innerHTML = "";
    $image_zone.innerHTML = "";
    $main_content.innerHTML = "";
    let image = document.createElement("img");
    image.setAttribute("src", `${starships_img[i]}`);
    $image_zone.appendChild(image);
    $main_content.appendChild($image_zone);
    $main_content.appendChild($content_zone);
    showData(starships.results[i], $content_zone);
  });
}
let $vehicles_content = document.querySelectorAll(".ul_vehicles li");
for (let i = 0; i < vehicles.results.length; i++) {
  $vehicles_content[i].addEventListener("click", (event) => {
    event.stopPropagation();
    $content_zone.innerHTML = "";
    $image_zone.innerHTML = "";
    $main_content.innerHTML = "";
    let image = document.createElement("img");
    image.setAttribute("src", `${vehicles_img[i]}`);
    $image_zone.appendChild(image);
    $main_content.appendChild($image_zone);
    $main_content.appendChild($content_zone);
    showData(vehicles.results[i], $content_zone);
  });
}
// Footer
let $footer = document.querySelector("footer");
$footer.classList.add("container-fluid");
$footer.style.backgroundColor = "grey";

let $footer_content = document.createElement("div");
$footer_content.classList.add("container");
$footer_content.style.height = "100" + "px";
$footer_content.style.backgroundColor = "whitesmoke";
$footer.appendChild($footer_content);

function showData(obj, $place) {
  for (key in obj) {
    if (
      !obj[key].includes("2014") &&
      !obj[key].includes("http") &&
      !Array.isArray(obj[key])
    )
      writeData(key, obj[key], $place);
  }
}
function writeData(key, value, place) {
  let html = `</br><b>${key} :</b> <i> ${value}</i>`;
  place.insertAdjacentHTML("beforeend", html);
}

// CSS
// $main_content.style.border = "5px solid grey";
$main_content.style.borderRadius = "3px";
$nav_bar.classList.add("nav_bar");
