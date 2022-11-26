const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferred;
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferred = event;
    butInstall.classList.toggle('hidden', false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    if (!deferred) {
        return;
    }
    window.deferredPrompt.prompt();
    deferred = null;
    butInstall.classList.toggle('hidden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    alert("Thank you for downloading JATE");
});
