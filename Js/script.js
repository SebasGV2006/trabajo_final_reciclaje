const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Oscuro";
    } else {
        this.textContent = "Claro";
    }

    console.log('current class name: ' + className);
});


function mostrarFormAgregarEmpresa(){
    var mostrarFormulario = document.getElementById("agregarFormularioEmpresa");
    mostrarFormulario.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        if (link.id !== 'link') { // Reemplaza con el ID del enlace que quieres excluir
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuste para la barra de navegación fija
                    behavior: 'smooth'
                });
            });
        }
    }
});


const scrollTop = document.getElementById('scrollTop');

window.onscroll = function() {
    toggleScrollTop();
};

function toggleScrollTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
}

scrollTop.addEventListener('click', function() {
    scrollToTop();
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}


