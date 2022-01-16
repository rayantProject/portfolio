// let competences = JSON.parse(skill)
main = document.getElementById("contenueSkill")

function competencesLoad() 
{


    for (let i = 0; i < skills.length; i++) {

        switch (skills[i].type) {
            case 'dev':
                main.innerHTML += ' <div class="card  text-success  my-2 w-100"><div class="card-body">' + skills[i].nom + '</div></div>';
                break;
            case 'electronique':
                main.innerHTML += ' <div class="card text-primary   my-2 w-100"><div class="card-body">' + skills[i].nom + '</div></div>';
                break;
            case 'systeme':
                main.innerHTML += ' <div class="card  text-info my-2 w-100"><div class="card-body">' + skills[i].nom + '</div></div>';
                break;
            case 'marketing':
                main.innerHTML += ' <div class="card  text-warning my-2 w-100"><div class="card-body">' + skills[i].nom + '</div></div>';
                break;
            default:
                main.innerHTML += ' <div class="card  my-2 w-100"><div class="card-body">' + skills[i].nom + '</div></div>';
                break;
        }
    
       
        
    }
}


