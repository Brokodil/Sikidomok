function oldal(event) {
    console.log("active");

    const targetId = event.currentTarget.id;

    if (targetId === "negyzet") {
        console.log("negyzet");
        localStorage.setItem('forma', 'negyzet');
        window.location.href = "kalk.html";
    } else if (targetId === "teglalap") {
        console.log("teglalap");
        localStorage.setItem('forma', 'teglalap');
        window.location.href = "kalk.html";
        document.getElementById("teglalap").style.display = "grid";
    } else if (targetId === "haromszög") {
        console.log("haromszög");
        localStorage.setItem('forma', 'haromszög');
        window.location.href = "kalk.html";
        document.getElementById("haromszög").style.display = "grid";
    } else if (targetId === "deltoid") {
        console.log("deltoid");
        localStorage.setItem('forma', 'deltoid');
        window.location.href = "kalk.html";
        document.getElementById("deltoid").style.display = "grid";
    } else if (targetId === "rombusz") {
        console.log("rombusz");
        localStorage.setItem('forma', 'rombusz');
        window.location.href = "kalk.html";
        document.getElementById("rombusz").style.display = "grid";
    } else if (targetId === "kör") {
        console.log("kör");
        localStorage.setItem('forma', 'kör');
        window.location.href = "kalk.html";
        document.getElementById("kör").style.display = "grid";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const form = localStorage.getItem('forma');
    if (form) {
        document.getElementById(form).style.display = "grid";
    }
});

function vissza() {
    window.location.href = "index.html"
}

function fnegyzet() {
    let a = Number(document.forms["negyzet"]["a"].value);
    let me = document.forms["negyzet"]["me"].value;
    let k = (a * a).toFixed(2);
    let t = (a * 4).toFixed(2);
    console.log(k, t);
    console.log(a);
    document.getElementById("negyzetv").innerHTML = "A négyzet kerülete " + k + "" + me + "<br>" + "A négyzet területe " + t + "" + me + "²"
}

function fteglalap() {
    let a = Number(document.forms["teglalap"]["a"].value);
    let b = Number(document.forms["teglalap"]["b"].value);
    let me = document.forms["teglalap"]["me"].value;
    let k = ((a + b) * 2).toFixed(2)
    let t = (a * b).toFixed(2);
    console.log(k, t);
    console.log(a, b);
    document.getElementById("teglalapv").innerHTML = "A téglalap kerülete " + k + "" + me + "<br>" + "A téglalap területe " + t + "" + me + "²"

}

function fharomszög() {
    let a = Number(document.forms["haromszög"]["a"].value);
    let b = Number(document.forms["haromszög"]["b"].value);
    let c = Number(document.forms["haromszög"]["c"].value);
    let me = document.forms["haromszög"]["me"].value;
    let s = (a + b + c) / 2
    let k = (a + b + c).toFixed(2)
    let t = (Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);
    console.log(k, t);
    console.log(a, b, c, s);
    document.getElementById("haromszögv").innerHTML = "A háromszög kerülete " + k + "" + me + "<br>" + "A háromszög területe " + t + "" + me + "²"

}

function fdeltoid() {
    let a = Number(document.forms["deltoid"]["a"].value);
    let b = Number(document.forms["deltoid"]["b"].value);
    let e = Number(document.forms["deltoid"]["e"].value);
    let f = Number(document.forms["deltoid"]["f"].value);
    let me = document.forms["deltoid"]["me"].value;
    let k = (2 * (a + b)).toFixed(2);
    let t = ((e * f) / 2).toFixed(2)
    console.log(k, t);
    console.log(a, b, e, f);
    document.getElementById("deltoidv").innerHTML = "A deltoid kerülete " + k + "" + me + "<br>" + "A deltoid területe " + t + "" + me + "²"

}

function frombusz() {
    let a = Number(document.forms["rombusz"]["a"].value);
    let e = Number(document.forms["rombusz"]["e"].value);
    let f = Number(document.forms["rombusz"]["f"].value);
    let me = document.forms["rombusz"]["me"].value;
    let k = (a * 4).toFixed(2)
    let t = ((e * f) / 2).toFixed(2)
    console.log(k, t);
    console.log(a, e, f);
    document.getElementById("rombuszv").innerHTML = "A rombusz kerülete " + k + "" + me + "<br>" + "A rombusz területe " + t + "" + me + "²"

}

function fkör() {
    let r = Number(document.forms["kör"]["r"].value);
    let me = document.forms["kör"]["me"].value;
    let k = (2 * r * 3.14).toFixed(2)
    let t = ((r * r) * 3.14).toFixed(2)
    console.log(k, t);
    console.log(r);
    document.getElementById("körv").innerHTML = "A kör kerülete " + k + "" + me + "<br>" + "A kör területe " + t + "" + me + "²"

}

