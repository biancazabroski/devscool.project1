class Link {
    constructor(title, url, author){
        let correctUrl = url;
        
        if (
            !correctUrl.startsWith("http://") && 
            !correctUrl.startsWith("https://")
        ) {
            correctUrl = `http://${correctUrl}`;
        }   

        this.title = title;
        this.url = correctUrl;
        this.author = author;
    }  

    linkString() {
        return `${this.title} (${this.url}). Author: ${this.author}`
    }
}
//links iniciais
const links = [];
links.push(new Link("GitHub", "https://github.com/", "Bianca"));
links.push(new Link("Gather", "https://app.gather.town/app/", "Bianca"));
links.push(new Link("Spotify", "https://open.spotify.com/", "Bianca"));
//janela de escolhas
let choice;
while(choice !== "0") {
    let choices = "\n1 : Show the list of links.";
    choices += "\n2 : Add a new link.";
    choices += "\n3 : Remove an existing link.";
    choices += "\n0 : Quit";
    choice = prompt(`Choose an option: ${choices}`);

//escolha 1: mostrar os links registrados.
if(choice === '1' && links.length > 0){ 
    for(let i = 0; i < links.length; i++) {
        alert(`${i + 1}): ${links[i].linkString()}`)
    } 
//escolha 2: adicionar um link.
} else if(choice === '2'){ //escolha 2: adicionar um link.
    const title = prompt("Enter the link title:");
    const url = prompt("Enter the link url:");
    const author = prompt("Enter the link author:");

    links.push(new Link(title, url, author));
//escolha 3: remover um link.
} else if(choice === '3' && links.length > 0) {
    let index = -1;
    const maxIndex = links.length;
    while(index < 1 || index > links.length) {
        index = Number(
            prompt(`Enter the index of the link to be removed (between 1 and ${maxIndex}):`)
        );
    }
    links.splice(index -1, 1);
//escolha 0: sair.
} else if(choice === '0'){
    alert("See you later! Bye bye.")
} else {
    alert("Sorry, there are no links here! Type 2, if you want to add one.")
}
}
