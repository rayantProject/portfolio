class skill 
{
    constructor(nom, type)
    {
        this.nom = nom;

        this.type = type;

    }

    static new(nom , type) 
    {
        return new skill(nom, type);
    }
} 


let skills = [
    skill.new("Programmation(C++, java, java Script, python, swift )", 'dev'),
    skill.new("Developpement", 'dev'),
    skill.new("git & gitHUB", 'systeme'),
    skill.new( "Linux", 'systeme'),
    skill.new("Microsoft 365", 'autre'),
    skill.new("Google Workplace", 'autre'),
    skill.new("Google Analytics", 'marketing'),
    skill.new("Marketing/SEO/SEA", 'marketing'),
    skill.new("Electronique(Arduino Raspberry)", 'electronique'),
]