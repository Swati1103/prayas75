const logoutButton = document.getElementById("logout");
auth0.createAuth0Client({
    domain: "clandestine.us.auth0.com",
    clientId: "ftwnafwHKiZbGK6WcglDJOoC08eltsYW",
    authorizationParams: {
        redirect_uri: 'https://mainprayas.netlify.app/',
    },
}).then(async (auth0Client) => {
    // Assumes a button with id "login" in the DOM
    const loginButton = document.getElementById("login");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        auth0Client.loginWithRedirect();
    });

    
    logoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        auth0Client.logout();
    });

    if (location.search.includes("state=") &&
        (location.search.includes("code=") ||
            location.search.includes("error="))) {
        await auth0Client.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
    }

});
logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.open("index.html","_self")
})