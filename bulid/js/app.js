const links = document.querySelectorAll('.links');
const fondoMenu = document.querySelector('.fondoMenu');
const header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', function(){
    ScrollNav();
})  

// funcion para cambiar fondos de imagenes en el home

links.forEach(element => {
    element.addEventListener('mouseover', function(e){
        let linkSel  = e.target.attributes.dataText.value;
        // console.log(linkSel)
        switch (linkSel) {
            case 'home':
                header.classList.add('bg-home');
                break;
            case 'About Me':
                header.classList.add('bg-home-about');
                 console.log(header)
                break;
            case 'My Experience':
                header.classList.add('bg-home-experience');
                    console.log(header)
                break;
            default:
                break;
        }
        // header.classList.add('bg-home-about');
        console.log (header)
        fondoMenu.textContent = e.target.attributes.dataText.value;
    })
    element.addEventListener('mouseout', function(e){
        let linkSel  = e.target.attributes.dataText.value;
        switch (linkSel) {
            case 'home':
                header.classList.remove('bg-home');
                break;
            case 'About Me':
                header.classList.remove('bg-home-about');
                break;
            case 'My Experience':
                header.classList.remove('bg-home-experience');
                console.log(header)
                break;
        
            default:
                break;
        }
        
        console.log (header)
        
    })
});


function  ScrollNav(){
    const enlaces = document.querySelectorAll('.links');
    
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior : 'smooth',
            });
        })
    })
}
