function loadTheme() {
	if (localStorage.getItem('dark-theme')) {
		if (localStorage.getItem('dark-theme') === "dark") {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.add("light")
		}
	} else {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add("dark")
			localStorage.setItem("dark-theme", "dark")
		} else {
			document.documentElement.classList.add("light")
			localStorage.setItem("dark-theme", "light")
		}
	}

	if (localStorage.getItem('reader-mode')) {
		document.documentElement.classList.add("reader")
	}

	if (localStorage.getItem('serif-mode')) {
		document.documentElement.classList.add("serif")
	}

	document.addEventListener("DOMContentLoaded", function () {
		document.getElementById("banner-id").insertAdjacentHTML("beforeend", "<button onclick=\"toggleTheme()\" name=\"Toggle dark mode\" title=\"Toggle between light and dark theme\" class=\"banner-button dark-button\"></button>");
		document.getElementById("banner-id").insertAdjacentHTML("beforeend", "<button onclick=\"toggleReader()\" name=\"Toggle high contrast mode\" title=\"Toggle high contrast mode\" class=\"banner-button reader-button\"></button>");
		document.getElementById("banner-id").insertAdjacentHTML("beforeend", "<button onclick=\"toggleSerif()\" name=\"Toggle serif font mode\" title=\"Toggle serif font mode\" class=\"banner-button serif-button\"></button>");
	});
}

function toggleTheme() {
	if (localStorage.getItem('dark-theme') === "dark") {
		document.documentElement.classList.remove("dark")
		document.documentElement.classList.add("light")
		localStorage.setItem("dark-theme", "light")
	} else {
		document.documentElement.classList.remove("light")
		document.documentElement.classList.add("dark")
		localStorage.setItem("dark-theme", "dark")
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

function toggleSerif() {
	if (!localStorage.getItem('serif-mode')) {
		document.documentElement.classList.add("serif")
		localStorage.setItem("serif-mode", "true")
	} else {
		localStorage.removeItem("serif-mode")
		document.documentElement.classList.remove("serif")
	}
}
