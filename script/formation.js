//

let f = formations,
    main = document.getElementById("main");
for (let i = 0; i < f.length; i++) {

    main.innerHTML += '<div class="card text-center mb-2"><div class="card text-center"><div class="card-header">' + f[i].date + '</div><div class="card-body"><h5 class="card-title">' + f[i].nom + '</h5><p class="card-text">' + f[i].description + '</p></div><div class="card-footer text-muted">' + f[i].ecole + '</div></div></div>'

}