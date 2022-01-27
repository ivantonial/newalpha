// Titulo
document.querySelector(".headerTitle").innerHTML = "About my favorite band!";

// Minha imagem
let eu = document.querySelector(".ivanTonial");
eu.src = "./assets/images/IvanRamalhoTonial.jpeg";


// Nome - idade - estado
document.querySelector(".name").innerHTML = "Name: Ivan Ramalho Tonial";
document.querySelector(".age").innerHTML = "Age: 32 years old";
document.querySelector(".place").innerHTML = "State: Rio de Janeiro";

// images
let img01 = document.querySelector(".img01");
img01.src = "assets/images/01-ThePiperAtTheGatesOfDawn-1967.webp"
let img02 = document.querySelector(".img02");
img02.src = "assets/images/02-ASaucerfulOfSecrets1968.webp"
let img03 = document.querySelector(".img03");
img03.src = "assets/images/03-More1969.webp"
let img04 = document.querySelector(".img04");
img04.src = "assets/images/04-Ummagumma1969.webp"
let img05 = document.querySelector(".img05");
img05.src = "assets/images/05-AtomHeartMother1970.webp"
let img06 = document.querySelector(".img06");
img06.src = "assets/images/06-Meddle1971.webp"
let img07 = document.querySelector(".img07");
img07.src = "assets/images/07-ObscuredByClouds1972.webp"
let img08 = document.querySelector(".img08");
img08.src = "assets/images/08-TheDarkSideOfTheMoon1973.webp"
let img09 = document.querySelector(".img09");
img09.src = "assets/images/09-WishYouWereHere1975.webp"
let img10 = document.querySelector(".img10");
img10.src = "assets/images/10-Animals1977.webp"
let img11 = document.querySelector(".img11");
img11.src = "assets/images/11-TheWall1979.webp"
let img12 = document.querySelector(".img12");
img12.src = "assets/images/12-TheFinalCut1983.webp"
let img13 = document.querySelector(".img13");
img13.src = "assets/images/13-AMomentaryLapseOfReason1987.webp"
let img14 = document.querySelector(".img14");
img14.src = "assets/images/14-TheDivisionBell1994.webp"
let img15 = document.querySelector(".img15");
img15.src = "assets/images/15-TheEndlessRiver.webp"


// main
document.querySelector(".favoriteBand").innerHTML = "Pink Floyd";
document.querySelector(".descriptionP").innerHTML = "Description:&nbsp;&nbsp;&nbsp;";
document.querySelector(".pinkFloydDiscriptionP1").innerHTML = "Pink Floyd were an English rock band formed in London in 1964. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.";
document.querySelector(".pinkFloydDiscriptionP2").innerHTML = "Pink Floyd were founded in 1964 by Syd Barrett (guitar, lead vocals), Nick Mason (drums), Roger Waters (bass guitar, vocals), Richard Wright (keyboards, vocals) and Bob Klose (guitars); Klose quit in 1965. Under Barrett's leadership, they released two charting singles and the successful debut album The Piper at the Gates of Dawn (1967). Guitarist and vocalist David Gilmour joined in December 1967; Barrett left in April 1968 due to deteriorating mental health. Waters became the primary lyricist and thematic leader, devising the concepts behind the band's peak success with the albums The Dark Side of the Moon (1973), Wish You Were Here (1975), Animals (1977) and The Wall (1979). The musical film based on The Wall, Pink Floyd – The Wall (1982), won two BAFTA Awards.";
document.querySelector(".pinkFloydDiscriptionP3").innerHTML = "Following personal tensions, Wright left Pink Floyd in 1979, followed by Waters in 1985. Gilmour and Mason continued as Pink Floyd, rejoined later by Wright. The band produced two more albums—A Momentary Lapse of Reason (1987) and The Division Bell (1994)—and toured in support of both albums before entering a long period of inactivity. In 2005, all but Barrett reunited for a one-off performance at the global awareness event Live 8. Barrett died in 2006, and Wright in 2008. The last Pink Floyd studio album, The Endless River (2014), was based on unreleased material from the Division Bell recording sessions.";
document.querySelector(".pinkFloydDiscriptionP4").innerHTML = "By 2013, Pink Floyd had sold more than 250 million records worldwide, making them one of the best-selling music artists of all time. Wish You Were Here, The Dark Side of the Moon, and The Wall are among the best-selling albums of all time, and the latter two have been inducted into the Grammy Hall of Fame. Four of the band's albums topped the US Billboard 200, and five of their albums topped the UK Album Chart. Hit singles include 'See Emily Play' (1967), 'Money' (1973), 'Another Brick in the Wall, Part 2' (1979), 'Not Now John' (1983), 'On the Turning Away' (1987) and 'High Hopes' (1994). The band also composed several film scores. They were inducted into the US Rock and Roll Hall of Fame in 1996 and the UK Music Hall of Fame in 2005. In 2008, King Carl XVI Gustaf of Sweden presented Pink Floyd with the Polar Music Prize for their contribution to modern music.";

// footer
let know = document.querySelector(".toKnowMore");
know.href = "https://www.pinkfloyd.com/home.php";
know.innerHTML = "Para saber mais, acesse o site oficial clicando aqui!";
know.target = "_blank";
let officialSite = document.querySelector(".officialSite");
officialSite.href = "https://www.pinkfloyd.com/home.php";
officialSite.target = "_blank";



let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 15){
        counter = 1;
    }
}, 5000);


