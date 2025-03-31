document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    function loadStoredCredentials() {
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
            existingButton.style.display = "block";
            existingButton.addEventListener("click", () => {
                alert(`Logged in as ${savedUsername}`);
            });
        }
    }

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        loadStoredCredentials();
    });

    loadStoredCredentials();
});
