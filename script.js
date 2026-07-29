const btn = document.getElementById("darkModeBtn");
if (localStorage.getItem("theme") === "dark") { document.body.classList.add("dark-mode") }
btn.onclick = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}
function sendWhatsApp() {
    const n = name.value, e = email.value, m = message.value;
    window.open(`https://wa.me/22674990037?text=Bonjour Bakary%0ANom:${n}%0AEmail:${e}%0AMessage:${m}`, "_blank");
}