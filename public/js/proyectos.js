function openModal(projectId) {
    const modalCard = document.getElementById('modal-card');
    const title = document.getElementById('modal-title');
    const descriptionText = document.getElementById('modal-description-text');
    const languagesContainer = document.getElementById('languages-container');
    
    
    languagesContainer.innerHTML = '';

    switch (projectId) {
        case 1: // SHOPYTEST
            title.textContent = "SHOPYTEST";
            descriptionText.textContent = "SHOPYTEST es una aplicacion programada con Android Studio, diseñada con una idea de negocio relacionada con Shopify, venta de plantillas para pequeños emprendedores que quieran empezar su negocio de menra rapida y segura, vendiendo y gestionando sus productos .";     
            createProgressBar('Java', 'java', 100);
            break;
        case 2: // PISCIFACTORIA
            title.textContent = "PISCIFACTORIA";
            descriptionText.textContent = "PISCIFACTORIA es un sistema de gestión de piscifactorías que optimiza los procesos de cultivo y distribución. Programado con JAVA, y usando JSON para guardado y carga de partida. Tambien implementa base de datos para pedidos y recompensas XML";
            createProgressBar('Java', 'java', 100);
            break;
        case 3: // WEB PERSONAL
            title.textContent = "WEB PERSONAL";
            descriptionText.textContent = "Aprovechando mis estudios de desarrollo web, decidi crear esta pequeña pagina a nivel personal como portafolio para incluir toda la informacion relevante.";
            createProgressBar('HTML', 'html5', 40);
            createProgressBar('CSS', 'css3-alt', 40);
            createProgressBar('JavaScript', 'js', 20)
            break;
        case 4: // DOCKER BACK + FRONT
            title.textContent = "DOCKER BACK + FRONT";
            descriptionText.textContent = "Dockerizado con tecnologías modernas, este proyecto cubre el desarrollo de backend y frontend con contenedores. Es una pequeña prueba para aprender a gestionar un contenedor para cada parte de una pagina web. Utilizando PHP y HTML";
            createProgressBar('PHP', 'php', 59.4);
            createProgressBar('HTML', 'html5', 33.8);
            createProgressBar('Dockerfile', 'docker', 6.8);
            break;
        case 5: // PASSWORD GENERATOR
            title.textContent = "PASSWORD GENERATOR";
            descriptionText.textContent = "Generador de contraseñas seguro y eficiente. Implementado utilizando Python para garantizar aleatoriedad y seguridad. Programa basico en el que puedes escoger la cantidad de caracteres que quieras generar";
            createProgressBar('Python', 'python', 100);
            break;
        default:
            title.textContent = "Lenguajes Usados";
            descriptionText.textContent = "Este es un proyecto de ejemplo que usa varias tecnologías modernas para demostrar mis habilidades en desarrollo web.";
    }

    modalCard.style.display = 'flex';
    setTimeout(() => {
        modalCard.style.opacity = 1; 
    }, 10); 

    document.body.classList.add('modal-open'); 
}

// Función para crear las barras de progreso dinámicamente
function createProgressBar(language, iconClass, percentage) {
    const languagesContainer = document.getElementById('languages-container');
    
    
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    
    const progressText = document.createElement('p');
    const icon = document.createElement('i');
    icon.classList.add('fab', `fa-${iconClass}`); 
    icon.style.color = getIconColor(iconClass);
    progressText.appendChild(icon);
    progressText.appendChild(document.createTextNode(` ${language}`));

    // Crear la barra de progreso
    const progress = document.createElement('div');
    progress.classList.add('progress');

    const progressBarFill = document.createElement('div');
    progressBarFill.classList.add('progress-bar-fill');
    progressBarFill.style.width = `${percentage}%`;

    const languageColor = getLanguageColor(iconClass);
    progressBarFill.style.backgroundColor = languageColor; 

    progress.appendChild(progressBarFill);
    progressBar.appendChild(progressText);
    progressBar.appendChild(progress);

    languagesContainer.appendChild(progressBar);
}

// Función que devuelve el color según el lenguaje (para la barra de progreso)
function getLanguageColor(iconClass) {
    const languageColors = {
        js: '#f7df1e',      
        html5: '#e34f26',    
        php: '#4f5b93',     
        json: '#0074cc',    
        python: '#306998',     
        docker: '#2496ed', 
        java: '#007396'   
    };
    
    return languageColors[iconClass] || '#4caf50';
}

// Función que devuelve el color para el icono
function getIconColor(iconClass) {
    const iconColors = {
        js: '#f7df1e',     
        html5: '#e34f26',   
        php: '#4f5b93',    
        json: '#0074cc',  
        python: '#306998',     
        docker: '#2496ed', 
        java: '#007396' 
    };
    
    return iconColors[iconClass] || '#4caf50';
}

// Función para cerrar la modal
function closeModal() {
    const modalCard = document.getElementById('modal-card');
    
    modalCard.style.opacity = 0; 

    
    setTimeout(() => {
        modalCard.style.display = 'none'; 
    }, 300); 

    document.body.classList.remove('modal-open');
}
