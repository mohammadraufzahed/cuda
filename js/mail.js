function sendMail(){
    let name = document.getElementById('contact-name').value;
    let email = document.getElementById('contact-email').value;
    let body = document.getElementById('contact-body-msg').value;
    window.open(`mailto:${email}?subject=${name}&body=${body}`);
}