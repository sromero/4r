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