let p = document.getElementById("pro")

let prjs = projects
function onLoadProject() 
{
    for (let i = 0; i < prjs.length; i++) 
    {
        p.innerHTML += '<div class="card my-3" ><img src="'+prjs[i].img+'" class="card-img-top" alt="..."><div class="card-body"><div class="d-flex justify-content-between"><h5 class="card-title">'+prjs[i].id+'</h5> <i class="bi bi-three-dots-vertical" data-bs-toggle="collapse" data-bs-target="#collapseCard" aria-expanded="false" aria-controls="collapseCard"></i></div><div class="collapse" id="collapseCard"><p class="card-text">'+prjs[i].description+'</p><p class="card-text">'+prjs[i].begin+'</p><div class="d-flex">'+prjs[i].link+'</div></div></div></div>';
    
    }
}


