var dohvati_dogadjaj = localStorage.getItem("dogadjaji");
var dd = JSON.parse(dohvati_dogadjaj);
console.log(dd);
console.log((dd.length - 1));
var kont = document.getElementById("container");

function pravi_tabelu() {
    var kont = document.getElementById("container");
    var flajer = document.createElement("div");
    flajer.setAttribute("class", "flajer");
    kont.appendChild(flajer);

    var tabela = document.createElement("table");
    tabela.setAttribute("class", "tabela");
    flajer.appendChild(tabela);

    var tr1 = document.createElement("tr");
    tabela.appendChild(tr1);
    var td1 = document.createElement("td");
    td1.innerHTML = "Догађај:";
    tr1.appendChild(td1);
    var td1a = document.createElement("td");
    td1a.setAttribute("class", "tvrsta");
    tr1.appendChild(td1a);

    var tr2 = document.createElement("tr");
    tabela.appendChild(tr2);
    var td2 = document.createElement("td");
    tr2.appendChild(td2);
    var td2a = document.createElement("td");
    td2a.setAttribute("class", "tnaziv");
    tr2.appendChild(td2a);

    var tr3 = document.createElement("tr");
    tabela.appendChild(tr3);
    var td3 = document.createElement("td");
    td3.innerHTML = "Локација:";
    tr3.appendChild(td3);
    var td3a = document.createElement("td");
    td3a.setAttribute("class", "tlokacija");
    tr3.appendChild(td3a);

    var tr4 = document.createElement("tr");
    tabela.appendChild(tr4);
    var td4 = document.createElement("td");
    td4.innerHTML = "Број посетилаца:";
    tr4.appendChild(td4);
    var td4a = document.createElement("td");
    td4a.setAttribute("class", "tposetilaca");
    tr4.appendChild(td4a);

    var tr5 = document.createElement("tr");
    tabela.appendChild(tr5);
    var td5 = document.createElement("td");
    td5.innerHTML = "Датум и време:";
    tr5.appendChild(td5);
    var td5a = document.createElement("td");
    td5a.setAttribute("class", "tdatumivreme");
    tr5.appendChild(td5a);

    var tr6 = document.createElement("tr");
    tabela.appendChild(tr6);
    var td6 = document.createElement("td");
    td6.innerHTML = "Организатор:";
    tr6.appendChild(td6);
    var td6a = document.createElement("td");
    td6a.setAttribute("class", "torganizator");
    tr6.appendChild(td6a);

    var tr7 = document.createElement("tr");
    tabela.appendChild(tr7);
    var td7 = document.createElement("td");
    td7.innerHTML = "Опис:";
    tr7.appendChild(td7);
    var td7a = document.createElement("td");
    td7a.setAttribute("class", "topis");
    tr7.appendChild(td7a);

    var flajer_img = document.createElement("div");
    flajer_img.setAttribute("id", "container_img");
    flajer.appendChild(flajer_img);
    var slika_flajer = document.createElement("img");
    slika_flajer.setAttribute("class", "slika_flajer");
    slika_flajer.setAttribute("src", "img/kreiraj/Акциони.jpg");
    flajer_img.appendChild(slika_flajer);
    return;

}

for (i = 0; i < (dd.length); i++) {
    pravi_tabelu();
    console.log(kont);

    var f = document.getElementsByClassName("flajer");
    f[i].style.backgroundImage = `url("img/kreiraj/back/fback${Math.ceil(Math.random() * 16)}.jpg")`;

    var tvrsta = document.getElementsByClassName("tvrsta");
    if (dd[i].klasa == "film") {
        tvrsta[i].innerHTML = "Филм жанра:" + " " + dd[i].vrsta;
    }
    else if (dd[i].klasa == "koncert") {
        tvrsta[i].innerHTML = "Концерт:" + " " + dd[i].vrsta;
    }
    else
        tvrsta[i].innerHTML = dd[i].vrsta;

    var tnaziv = document.getElementsByClassName("tnaziv");

    tnaziv[i].innerHTML = '"' + dd[i].naziv + '"';
    var tlokacija = document.getElementsByClassName("tlokacija");
    tlokacija[i].innerHTML = dd[i].lokacija;
    var tposetilaca = document.getElementsByClassName("tposetilaca")
    tposetilaca[i].innerHTML = dd[i].posetilaca;
    var tdatumivreme = document.getElementsByClassName("tdatumivreme");
    tdatumivreme[i].innerHTML = dd[i].datum +
        " " + "у" + " " + dd[i].vreme + " " + "сати";
    var torganizator = document.getElementsByClassName("torganizator");
    torganizator[i].innerHTML = dd[i].organizator;
    var topis = document.getElementsByClassName("topis");
    topis[i].innerHTML = dd[i].opis;

    //ubacivanje slike u flajer

    var za_sliku = dd[i].vrsta;
    console.log("slika:" + " " + za_sliku);
    var s_f = document.getElementsByClassName("slika_flajer");
    s_f[i].src = `img/kreiraj/${za_sliku}.jpg`;
}
