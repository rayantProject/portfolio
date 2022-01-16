let p = document.getElementById("pro")

let prjs = projects

for (let i = 0; i < prjs.length; i++) {

    p.innerHTML += '<div class="card border-dark"><img src="img/code.png" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-header">' + prjs[i].begin + '</h5><h5 class="card-title">' + prjs[i].id + '</h5><span class="badge bg-info text-dark">' + prjs[i].status + '</span><p class="card-text">' + prjs[i].description + '</p>' + prjs[i].link + '</div></div>'

}