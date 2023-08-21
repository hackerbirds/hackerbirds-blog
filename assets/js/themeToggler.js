function loadTheme() {
	if (localStorage.getItem('reader-mode')) {
		document.documentElement.classList.add("reader")
	}
	
	if (localStorage.getItem('serif-mode')) {
		document.documentElement.classList.add("serif")
	}

	// load the buttons dynamically no that a no-JS user will not see the buttons 
	// (they'd be useless to them)
	document.getElementById("banner-id").insertAdjacentHTML("beforeend", "<button onclick=\"toggleReader()\" name=\"Reader mode toggle button\" title=\"Toggle reader mode (increases contrast)\" class=\"banner-button reader-button\"></button>");
	document.getElementById("banner-id").insertAdjacentHTML("beforeend", "<button onclick=\"toggleSerif()\" name=\"Seif mode toggle button\" title=\"Toggle serif mode (changes font)\" class=\"banner-button serif-button\"></button>");
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
