
var greska = document.getElementById("greska");
var dogadjaji = [];
var dogadjaj = {}
var lokacije = {
    "film": ["", "Дворана Културног Центра", "Cineplexx - Delta City",
        "Академија 28", "Биоскоп Фонтана", "Кинотека"],
    "predstave": ["", "Народно Позориште", "Београдско Драмско Позориште",
        "Југословенско Драмско Позориште", "Позориште на Теразијама",
        "Звездара Театар", "Позориште Бошко Буха", "Позориштанце Пуж"],
    "muzej": ["", "Народни музеј", "Музеј примењене уметности", "Природњачки музеј",
        "Историјски музеј Србије", "Музеј града Београда"],
    "koncert": ["", "Београдска Арена", "Сава Центар", "Дом Синдиката", "Коларац",
        "Студентски Културни Центар"]
};

document.getElementById("vrsta").addEventListener("change", obavestenje);
function obavestenje() {
    document.getElementById("za_lok").style.visibility = "visible";
}
document.getElementById("dugme").addEventListener("click", obavestenje2);
function obavestenje2() {
    document.getElementById("za_lok").style.visibility = "hidden";
}

//ponuda lokacije na osnovu odabira vrste dogadjaja

function lokacija() {
    var sel_dogadjaj = document.getElementById("vrsta");
    var popuni = document.getElementById("lok");
    var izabrano = sel_dogadjaj.options[sel_dogadjaj.selectedIndex].getAttribute("class");
    // console.log(lokacije[izabrano]);
    popuni.style.display = "inline-block";
    popuni.innerHTML = "";
    for (i in lokacije[izabrano]) {
        //console.log(lokacije[izabrano][i]);
        var opcija = document.createElement("option");
        opcija.innerHTML = lokacije[izabrano][i];
        popuni.appendChild(opcija);
    }
}

function odabran_dogadjaj() {
    var dog = document.getElementById("vrsta");

    if (dog.selectedIndex == 0) {
        greska.innerHTML = "Није одабран догађај";
        return false;
    }
    dogadjaj.klasa = dog.options[dog.selectedIndex].getAttribute("class");
    dogadjaj.vrsta = dog.options[dog.selectedIndex].text;

    return true;
}

function odabrana_lokacija() {
    var lok = document.getElementById("lok");

    if (lok.selectedIndex == 0) {
        greska.innerHTML = "Није одабрана локација";
        return false;
    }
    dogadjaj.lokacija = lok.options[lok.selectedIndex].value;
    return true;
}

function unet_naziv() {
    var naziv = document.getElementById("naziv_dogadjaja").value;

    if (naziv.trim().length == 0) {
        greska.innerHTML = "Није унет назив догађаја";
        return false;
    }
    dogadjaj.naziv = naziv;
    return true;
}

function dohvati() {
    var za_dohvatanje = localStorage.getItem("dogadjaji");
    var p = JSON.parse(za_dohvatanje);
    console.log(p);
    return p;
}

function smesti_dogadjaj(dogadjaj) {
    dohvaceni = false;
    var p = dohvati();
    if (p != null) {
        p.push(dogadjaj);
        za_smestanje = JSON.stringify(p);
    } else {
        dogadjaji.push(dogadjaj);
        za_smestanje = JSON.stringify(dogadjaji);
    }
    localStorage.setItem("dogadjaji", za_smestanje);
    return;
}

function cifra(str) {
    if (str >= '0' && str <= '9')
        return true;

    return false;
}

function ispravan_broj_posetilaca() {
    var posetilaca = document.getElementById("broj_posetilaca").value;

    if (posetilaca.trim().length == 0) {
        greska.innerHTML = "Није унет број посетилаца";
        return false;
    }
    for (i = 0; i < posetilaca.length; i++) {
        if (!cifra(posetilaca.charAt(i))) {
            greska.innerHTML = "Неисправан број посетилаца";
            return false;
        }
    }
    dogadjaj.posetilaca = posetilaca;
    return true;
}

function odabran_datum() {
    var datums = document.getElementById('datum').value;
    if (datums == 0) {
        greska.innerHTML = "Није унет датум";
        return false;
    }
    dogadjaj.datum = datums;
    return true;
}

function odabrano_vreme() {
    var vreme = document.getElementById('pocetak').value;
    if (vreme == 0) {
        greska.innerHTML = "Није унето време почетка догађаја";
        return false;
    }
    dogadjaj.vreme = vreme;
    return true;
}

function ispravan_organizator() {
    var organizat = document.getElementById("organizator").value;

    if (organizat.trim().length == 0) {
        greska.innerHTML = "Није унет организатор";
        return false;
    }
    dogadjaj.organizator = organizat;
    return true;
}

function unet_opis() {
    var opis = document.getElementById("opis").value;

    if (opis.trim().length == 0) {
        greska.innerHTML = "Унесите опис догађаја";
        return false;
    }
    dogadjaj.opis = opis;
    return true;
}

function validacija() {
    if (odabran_dogadjaj() && odabrana_lokacija() && unet_naziv() && ispravan_broj_posetilaca() &&
        odabran_datum() && odabrano_vreme() && ispravan_organizator() && unet_opis()) {
        console.log(dogadjaj);
        console.log(dogadjaji);
        smesti_dogadjaj(dogadjaj);
        get.getElementById("dugme_flajer").style.display = "inline-block";
        greska.innerHTML = "Унесите опис догађаја";

        return true;
    }
    return false;
}
                                    // ..img/kreiraj/back/fback${Math.ceil(Math.random() * 16)}.jpg")`
function otvori_flajer() {
    var f = document.getElementById("flajer");  
    f.style.display = "inline-block";
    f.style.backgroundImage = `url("img/kreiraj/back/fback${Math.ceil(Math.random() * 16)}.jpg")`

    //popunjavanje tabele flajera!

    var dr = document.getElementById("dugme_raniji");
    dr.style.display = "block";
    var dr1 = document.getElementById("dugme_svi_raniji");
    dr1.style.display = "block";
    var dr2 = document.getElementById("dugme_pocetna");
    dr2.style.display = "block";
    var dr3 = document.getElementById("dugme_ponovo");
    dr3.style.display = "block";

    document.getElementById("forma").style.display = "none";
    var dohvati_dogadjaj = localStorage.getItem("dogadjaji");
    var dd = JSON.parse(dohvati_dogadjaj);
    console.log(dd);
    console.log((dd.length - 1));
    console.log(dd[(dd.length - 1)].vrsta);

    if (dd[(dd.length - 1)].klasa == "film") {
        document.getElementById("tvrsta").innerHTML = "Филм жанра:" + " " + dd[(dd.length - 1)].vrsta;
    }
    else if (dd[(dd.length - 1)].klasa == "koncert") {
        document.getElementById("tvrsta").innerHTML = "Концерт:" + " " + dd[(dd.length - 1)].vrsta;
    }
    else
        document.getElementById("tvrsta").innerHTML = dd[(dd.length - 1)].vrsta;

    document.getElementById("tnaziv").innerHTML = '"' + dd[(dd.length - 1)].naziv + '"';
    document.getElementById("tlokacija").innerHTML = dd[(dd.length - 1)].lokacija;
    document.getElementById("tposetilaca").innerHTML = dd[(dd.length - 1)].posetilaca;
    document.getElementById("tdatumivreme").innerHTML = dd[(dd.length - 1)].datum +
        " " + "у" + " " + dd[(dd.length - 1)].vreme + " " + "сати";
    document.getElementById("torganizator").innerHTML = dd[(dd.length - 1)].organizator;
    document.getElementById("topis").innerHTML = dd[(dd.length - 1)].opis;

    //ubacivanje slike u flajer

    var za_sliku = dd[(dd.length - 1)].vrsta;

    var s_f = document.getElementById("slika_flajer");

    s_f.src = `img/kreiraj/${za_sliku}.jpg`




}
function prethodni_dogadjaji() {
    var n = prompt("Унестите редни број догађаја:");

    var fn = document.getElementById("flajer_n");
    fn.style.display = "inline-block";
    fn.style.backgroundImage = `url("img/kreiraj/back/fback${Math.ceil(Math.random() * 16)}.jpg")`;
    var dohvati_dogadjaj = localStorage.getItem("dogadjaji");
    var dd = JSON.parse(dohvati_dogadjaj);

    document.getElementById("tvrsta_n").innerHTML = "";
    setTimeout(function () {
        if (dd[(n - 1)].klasa == "koncert") {
            document.getElementById("tvrsta_n").innerHTML = "Концерт" + " " + dd[(n - 1)].vrsta;
        }
        else if (dd[(n - 1)].klasa == "film") {
            document.getElementById("tvrsta_n").innerHTML = "Филм жанра:" + " " + dd[(n - 1)].vrsta;
        }
        else
            document.getElementById("tvrsta_n").innerHTML = dd[(n - 1)].vrsta;
    }, 1000);
    document.getElementById("tnaziv_n").innerHTML = "";
    setTimeout(function () { document.getElementById("tnaziv_n").innerHTML = '"' + dd[(n - 1)].naziv + '"'; }, 2000);
    document.getElementById("tlokacija_n").innerHTML = "";
    setTimeout(function () { document.getElementById("tlokacija_n").innerHTML = dd[(n - 1)].lokacija; }, 3000);
    document.getElementById("tposetilaca_n").innerHTML = "";
    setTimeout(function () { document.getElementById("tposetilaca_n").innerHTML = dd[(n - 1)].posetilaca; }, 4000);
    document.getElementById("tdatumivreme_n").innerHTML = "";
    setTimeout(function () {
        document.getElementById("tdatumivreme_n").innerHTML = dd[(n - 1)].datum +
            " " + "у" + " " + dd[(n - 1)].vreme + " " + "сати";
    }, 5000);
    document.getElementById("torganizator_n").innerHTML = "";
    setTimeout(function () { document.getElementById("torganizator_n").innerHTML = dd[(n - 1)].organizator; }, 6000);
    document.getElementById("topis_n").innerHTML = ""
    setTimeout(function () { document.getElementById("topis_n").innerHTML = dd[(n - 1)].opis; }, 7000);

    //ubacivanje slike u flajer

    var za_sliku = dd[(n - 1)].vrsta;
    console.log(za_sliku);
    var s_f = document.getElementById("slika_flajer_n");

    s_f.src = `img/kreiraj/${za_sliku}.jpg`;
}

//dugme setanje!
var mousePosition;
var offset = [-90, -40];

var isDown = false;
var drag = document.getElementById("dugme_raniji");
drag.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        drag.offsetLeft - e.clientX,
        drag.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x: event.clientX,
            y: event.clientY

        };
        drag.style.left = (mousePosition.x + offset[0]) + 'px';
        drag.style.top = (mousePosition.y + offset[1]) + 'px';
    }
}, true);