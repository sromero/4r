emailjs.init('hb8EKPFvRVQ4TVStL');

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Enviando...";

    emailjs.sendForm("service_6g5vs5r", "template_7kt1j7z", this)
        .then(function(response) {
            submitButton.textContent = "Enviar Mensaje";
            document.getElementById('contactForm').reset();
            alert("Mensaje enviado con éxito!");
        }, function(error) {
            submitButton.textContent = "Enviar Mensaje";
            alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
            console.log(error);
        });
});

document.getElementById("submitButtonBak").addEventListener("click", function() {
    alert("Esta funcionalidad no está disponible en fase de prueba.");
});

var map = L.map('map', {
    center: [-34.6037, -58.3816],
    zoom: 4,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    boxZoom: false,
    keyboard: false,
    zoomControl: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

var locations = [
    { lat: -34.6037, lng: -58.3816, name: "Buenos Aires", count: 10 },
    { lat: -31.4201, lng: -64.1888, name: "Córdoba", count: 8 },
    { lat: -32.9468, lng: -60.6393, name: "Rosario", count: 7 },
    { lat: -24.7821, lng: -65.4232, name: "Salta", count: 5 },
    { lat: -25.2637, lng: -57.5759, name: "Asunción, Paraguay", count: 6 },
    { lat: -34.9011, lng: -56.1645, name: "Montevideo, Uruguay", count: 4 },
    { lat: -31.5375, lng: -68.5364, name: "San Juan", count: 5 },
    { lat: -29.4131, lng: -66.8558, name: "La Rioja", count: 3 },
    { lat: -33.3017, lng: -66.3378, name: "San Luis", count: 4 }
];

locations.forEach(loc => {
    L.marker([loc.lat, loc.lng]).addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>Presencia confirmada<br>Clientes asesorados: ${loc.count}`);
});
