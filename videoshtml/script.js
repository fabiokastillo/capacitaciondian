// Función para alternar el acordeón
function toggleAccordion(title) {
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Función para cambiar y reproducir el video
function playVideo1(videoFile) {
    const videoPlayer = document.getElementById('mainVideo');
    const videoSource = videoPlayer.querySelector('source');

    videoSource.src = videoFile; // Cambia la fuente del video con la ruta completa
    videoPlayer.load(); // Carga el nuevo video
    videoPlayer.play(); // Reproduce el video
}

function playVideo(videoFile) {


    if (videoFile.endsWith('.mp4')) {
		const videoPlayer = document.getElementById('mainVideo');
		const videoSource = videoPlayer.querySelector('source');

		videoSource.src = videoFile; // Cambia la fuente del video con la ruta completa
		videoPlayer.load(); // Carga el nuevo video
		videoPlayer.play(); // Reproduce el video
	}
	else if (videoFile.includes('youtube.com') || videoFile.includes('youtu.be')) {
        // Es un enlace de YouTube
        const videoId = videoFile.includes('youtu.be') 
            ? videoFile.split('/').pop() 
            : new URL(videoFile).searchParams.get('v'); // Obtiene el ID del video
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        iframePlayer.style.display = 'block'; // Muestra el iframe
        videoPlayer.style.display = 'none'; // Oculta el reproductor local
        iframePlayer.src = embedUrl; // Configura la URL del iframe
      } else {
		
        // Otros enlaces (como Vimeo)
        iframePlayer.style.display = 'block'; // Muestra el iframe
        videoPlayer.style.display = 'none'; // Oculta el reproductor de video
        iframePlayer.src = videoFile; // Configura la URL del iframe
    }
}

// Evento para manejar todos los enlaces con la clase "info-link"
document.querySelectorAll('.info-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        const videoFile = link.getAttribute('data-video'); // Obtiene el archivo de video desde data-video con la ruta completa
        playVideo(videoFile); // Llama a playVideo con la ruta completa del archivo
    });
});

// JavaScript para el primer nivel del acordeón



document.querySelectorAll('.accordion-title').forEach((title) => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const isOpen = content.style.display === 'block';
        // Cerrar otros contenidos
        document.querySelectorAll('.accordion-content').forEach((c) => {
            c.style.display = 'none';
        });
        // Alternar el contenido del acordeón
        content.style.display = isOpen ? 'none' : 'block';
    });
});

// JavaScript para el segundo nivel del acordeón
document.querySelectorAll('.sub-accordion-title').forEach((title) => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const isOpen = content.style.display === 'block';
        // Cerrar otros contenidos
        document.querySelectorAll('.sub-accordion-content').forEach((c) => {
            c.style.display = 'none';
        });
        // Alternar el contenido del sub-acordeón
        content.style.display = isOpen ? 'none' : 'block';
    });
});

// JavaScript para mostrar el video al hacer clic
document.getElementById('infoLink1').addEventListener('click', () => {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block'; // Mostrar el contenedor del video
    const videoIframe = document.getElementById('videoIframe');
    videoIframe.src = "https://www.youtube.com/embed/tgbNymZ7vqY"; // Establecer la URL del video
});

