const nav = document.getElementsByTagName('nav')[0];
const about = nav.getElementsByTagName('a')[0];
const projects = nav.getElementsByTagName('a')[1];
const contact = nav.getElementsByTagName('a')[2];

about.addEventListener('click', display);
projects.addEventListener('click', display);
contact.addEventListener('click', display);

function display(event) {    
    const clicked = event.target.textContent; 
    const mains = document.getElementsByTagName('main');
    
    for(let item of mains) {
        if(item.className == clicked) {
            item.style.display = 'block';
        } else {
        item.style.display = 'none';
     }
    }

}
