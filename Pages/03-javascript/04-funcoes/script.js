const header = document.querySelector("header");
const main = document.querySelector("main");

const title = "Horses";

const sectionsMain = [
    "habitatDescription",
    "links"
];

const descriptionHabitat = [
    "habitat",
    "description"
];

const divTags = [
    "h2",
    "p"
];

const textHabitat = [
    "Habitat: ",
    "Horses have roamed free across the pastures of North America, South America, Europe and Africa. Today, all over the world, almost all horses are tamed, or tamed. The only breed of horse that has never been tamed is the Przewalski horse, which lives mainly in zoos."
];

const textDescription = [
    "Description: ",
    "The horse (Equus ferus caballus) is a domesticated one-toed hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today. Humans began domesticating horses around 4000 BC, and their domestication is believed to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used to describe horses that have never been domesticated. There is an extensive, specialized vocabulary used to describe equine-related concepts, covering everything from anatomy to life stages, size, colors, markings, breeds, locomotion, and behavior."
];

const sectionTags = [
    "h2",
    "a",
    "a"
];

const linksTitles = [
    "Links",
    "About Horses [EN]",
    "Sobre Cavalos [pt-BR]"
];

const linksAdress = [
    "https://en.wikipedia.org/wiki/Horse",
    "https://escola.britannica.com.br/artigo/cavalo/481527#toc-293521"
];


fillHeader();
fillMain();


function fillHeader() {
    let h1 = document.createElement("h1");
    h1.id = "titleHorse";
    h1.innerText = title;
    header.appendChild(h1);
    let div = document.createElement("div");
    div.id = "images";
    header.appendChild(div);
    let photo = document.querySelector("#images");
    for (i = 0; i < 6; i++) {
        let img = document.createElement("img");
        let horses = "assets/images/" + i + ".jpg";
        img.className = "image";
        img.src = horses;
        photo.appendChild(img);
    }
}


function fillMain() {
    sectionsMain.forEach(function (element, index) {
        let section = document.createElement("section");
        section.id = sectionsMain[index];
        main.appendChild(section);
    });
    descriptionHabitat.forEach(function (element, index) {
        let section = document.getElementById("habitatDescription");
        let div = document.createElement("div");
        div.className = descriptionHabitat[index];
        section.appendChild(div);
    });
    for (i = 0; i < 2; i++) {
        let div = document.querySelector("." + descriptionHabitat[i]);
        let tag;
        for (j = 0; j < 2; j++) {
            tag = document.createElement(divTags[j]);
            if (i == 0) {
                tag.innerText = textHabitat[j];
            } else {
                tag.innerText = textDescription[j];

            }
            div.appendChild(tag);
        }
    }
    sectionTags.forEach(function (element, index) {
        let section = document.getElementById("links");
        let sectionTags = document.createElement(element);
        sectionTags.innerText = linksTitles[index];
        if (index > 0){
            sectionTags.href = linksAdress[index - 1];
        }
        section.appendChild(sectionTags);
    });
}