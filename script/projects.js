class project 
{

    constructor(id, begin, type, status, description, link, img) 
    {
        this.id = id;
        this.begin = begin;
        this.type = type;
        this.status = status;
        this.description = description;
        this.link = link;
        this.img = img;
    }
    
}


let projects = 
        [
            new project("Serveur Minecraft sur Raspberry Pi","09-2021","linux, Servuer WEB","fini","redirection de port sur une box pour avoir un serveur minecaft sur le raspberry PI","", "img/tech.jpg"),

            new project( "site meteo RT","08-2021","WEB, API","fini(version 1)","un site de qui vous affiche la météo en fonctionde votre ville",'<a href="http://datarayan.6te.net/" class="btn btn-outline-dark">tester</a>', "img/web.jpg"),

            new project( "meteo avec synthese vocal","08-2021","python, API","fini","une meteo avec fonction vocal","" , "img/dev.jpg"),

            new project( "Calculatrice pour Polynomes","06-2021","JavaScript, nodeJS","en cours","calculatrice pour calculer les dérivée, les primitives ...","" , "img/dev.jpg"),

            new project( "site WEB musical - ARIA","04-2021","en cours","WEB , front-end, backend","site web d'achat de music...","" , "img/web.jpg")
        ]



let p = document.getElementById("pro")

let prjs = projects
function onLoadProject() 
{
    for (let i = 0; i < prjs.length; i++) 
    {
        p.innerHTML += '<div class="card my-3" ><img src="'+prjs[i].img+'" class="card-img-top" alt="..."><div class="card-body"><div class="d-flex justify-content-between"><h5 class="card-title">'+prjs[i].id+'</h5> <i class="bi bi-three-dots-vertical" data-bs-toggle="collapse" data-bs-target="#collapseCard" aria-expanded="false" aria-controls="collapseCard"></i></div><div class="collapse" id="collapseCard"><p class="card-text">'+prjs[i].description+'</p><p class="card-text">'+prjs[i].begin+'</p><div class="d-flex">'+prjs[i].link+'</div></div></div></div>';
    
    }
}


