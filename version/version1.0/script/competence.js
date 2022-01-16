// let competences = JSON.parse(skill)
main = document.getElementById("contenueSkill")

for (let i = 0; i < skill.length; i++) {

    main.innerHTML += ' <li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + skill[i] + '</div></div></li>';

}