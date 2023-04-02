let button = document.querySelector(`#button`);

button.addEventListener(`click`, function() {
    console.log(`diste click`);
    Notification.requestPermission()
        .then(answer => console.log(`Se han ${answer} las notificaciones`) )
});

if (Notification.permission == `granted`) {
    new Notification(`This is a notificacion`, {
        icon: `Avinsmake_developer.png`,
        body: `Welcome to Cyber City`
    })
}
