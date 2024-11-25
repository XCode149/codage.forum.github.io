document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Navigation entre les pages
    function navigate(page) {
        if (page === 'home') {
            renderHome();
        } else if (page === 'profile') {
            renderProfile();
        } else if (page === 'settings') {
            renderSettings();
        }
    }

    // Page d'accueil (topics)
    function renderHome() {
        app.innerHTML = `
            <h1>Accueil des Topics</h1>
            <div class="card">Topic 1 : Introduction à Swift</div>
            <div class="card">Topic 2 : Firebase et bases de données</div>
            <div class="card">Topic 3 : Debugging efficace</div>
        `;
    }

    // Page du profil
    function renderProfile() {
        app.innerHTML = `
            <h1>Profil Utilisateur</h1>
            <div class="card">
                <img src="https://via.placeholder.com/100" alt="Profile" style="border-radius: 50%;">
                <h2>Nom : Utilisateur1</h2>
                <h3>Badges :</h3>
                <div class="profile-badges">
                    <span>🎖</span>
                    <span>🌟</span>
                    <span>🏅</span>
                </div>
            </div>
        `;
    }

    // Page des réglages
    function renderSettings() {
        app.innerHTML = `
            <h1>Réglages</h1>
            <div class="card">
                <label>Nom d'utilisateur :</label>
                <input type="text" id="username" value="Utilisateur1" />
                <button onclick="saveSettings()">Sauvegarder</button>
            </div>
        `;
    }

    // Sauvegarder les réglages
    window.saveSettings = function () {
        const username = document.getElementById('username').value;
        alert(`Nom d'utilisateur mis à jour : ${username}`);
    };

    // Initialisation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('href').replace('#', '');
            navigate(page);
        });
    });

    // Charge la page d'accueil par défaut
    navigate('home');
});
