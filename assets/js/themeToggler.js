function loadTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.add("light")
    }

    if (localStorage.getItem('reader-mode')) {
        document.documentElement.classList.add("reader")
    }

    // load the buttons dynamically no that a no-JS user will not see the buttons 
    // (they'd be useless to them)
    document.getElementById("banner-id").insertAdjacentHTML("beforeend", "<button onclick=\"toggleTheme()\" class=\"banner-button theme-button\"></button>");
    document.getElementById("banner-id").insertAdjacentHTML("beforeend", "<button onclick=\"toggleReader()\" class=\"banner-button reader-button\"></button>");
}

function toggleTheme() {
    if (localStorage.getItem('color-mode') === "dark") {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        localStorage.setItem("color-mode", "light")
    } else {
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("light")
        localStorage.setItem("color-mode", "dark")
    }
}

function toggleReader() {
    if (!localStorage.getItem('reader-mode')) {
        document.documentElement.classList.add("reader")
        localStorage.setItem("reader-mode", "true")
    } else {
        localStorage.removeItem("reader-mode")
        document.documentElement.classList.remove("reader")
    }
}