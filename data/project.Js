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






// let projects = [{

//     id: "Serveur Minecraft sur Raspberry Pi",
//     begin: "09-2021",
//     theme: "linux, Servuer WEB",
//     status: "fini",
//     description: "redirection de port sur une box pour avoir un serveur minecaft sur le raspberry PI",
//     link: ""
// },
// {
//     id: "site meteo RT",
//     begin: "08-2021",
//     theme: "WEB, API",
//     status: "fini(version 1)",
//     description: "un site de qui vous affiche la météo en fonctionde votre ville",
//     link: '<a href="http://datarayan.6te.net/" class="btn btn-primary">tester</a>'
// },
// {

//     id: "meteo avec synthese vocal",
//     begin: "08-2021",
//     theme: "python, API",
//     status: "fini",
//     description: "une meteo avec fonction vocal",
//     link: ""
// },
// {
//     id: "Calculatrice pour Polynomes",
//     begin: "06-2021",
//     theme: "JavaScript, nodeJS",
//     status: "en cours",
//     description: "calculatrice pour calculer les dérivée, les primitives ...",
//     link: ""
// },
// {
//     id: "site WEB musical - ARIA",
//     begin: "04-2021",
//     status: "en cours",
//     theme: "WEB , front-end, backend",
//     description: "site web d'achat de music...",
//     link: ""
// }
// ]