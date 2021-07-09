document.addEventListener('DOMContentLoaded', function(){
    menuFijo();
})

const menu = document.querySelector('.navbar');
const logoMenu = document.querySelector('.fondo-image');
const enlaces_Menu = document.querySelectorAll('.navbar li');
const btn_menu_res = document.querySelector('.navbar-responsive');
const enlaces_menu_res = document.querySelectorAll('.navbar-responsive .contenido-nav ul li');


console.log (btn_menu_res);
console.log (enlaces_menu_res);


let visible = 1;
btn_menu_res.addEventListener("click", function(){
    
    console.log ("primer" + visible);
    if(visible == 1){
        for (let i = 0; i < enlaces_menu_res.length; i++) {
            const element = enlaces_menu_res[i];
            element.style.display = "block";
        }
        visible = 0;
        console.log ("visibles");
        console.log ("segundo" + visible);
    }else{
        for (let i = 0; i < enlaces_menu_res.length; i++) {
            const element = enlaces_menu_res[i];
            element.style.display = "none";
        }
        visible = 1;
        console.log ("Invisibles");
    }
});


for (let i = 0; i < enlaces_menu_res.length; i++) {
    const element = enlaces_menu_res[i];
    element.style.display = "none";
}

// Aplicar estilos al boton activo

for (let i = 0; i < enlaces_Menu.length; i++) {
    const element = enlaces_Menu[i];
    element.addEventListener("click", function(){
        enlaces_Menu.forEach(element => {
            element.classList.remove('active')
        });
        this.classList.add('active');
        console.log(element);
    })
}



function menuFijo(){
    
    const opciones = {
        rootMargin : '200px'
    }
    const observer = new IntersectionObserver(function(entries){
        rootMargin: '-30px'
        if (entries[0].isIntersecting){
            console.log("APARECIO");
            menu.classList.remove('fijo');
            logoMenu.style.display = 'none';  
        }else{
            console.log("DESAAPARECIO");
            menu.classList.add('fijo'); 
            logoMenu.style.display = 'inline-block'; 
        }
    })

    observer.observe(document.querySelector('.parrafo-home'));

}


