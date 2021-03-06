// script for the "pop-out" navigation bar
const navbar = document.getElementById("navbar")
let lastScrollY = window.scrollY

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY && window.scrollY > 100) {
        navbar.classList.add("navHidden")
    } else {
        navbar.classList.remove("navHidden")
    }

    lastScrollY = window.scrollY
})


//script for the navigation buttons
const aboutBtn = document.getElementById("aboutBtn")
const projectBtn = document.getElementById("projectBtn")
const contactBtn = document.getElementById("contactBtn")
const ctaBtn = document.getElementById("ctaBtn")

const pageSections = [...document.getElementsByTagName("section")]
const scrollIntoViewOptions = {
    "behavior": "smooth"
}
const gotoAbout = () => {
    pageSections[1].scrollIntoView(scrollIntoViewOptions)
}
const gotoProjects = () => {
    pageSections[2].scrollIntoView(scrollIntoViewOptions)
}
const gotoContact = () => {
    pageSections[3].scrollIntoView(scrollIntoViewOptions)
}

aboutBtn.addEventListener("click", gotoAbout)
projectBtn.addEventListener("click", gotoProjects)
contactBtn.addEventListener("click", gotoContact)
ctaBtn.addEventListener("click", gotoProjects)

// script for the dark mode toggle button
const themeSwitch = document.getElementById("themeToggle")
const toggleTheme = () => {
    if (document.body.classList.contains("lightTheme")) {
        document.body.classList.add("darkTheme")
        document.body.classList.remove("lightTheme")
    } else {
        document.body.classList.add("lightTheme")
        document.body.classList.remove("darkTheme")
    }
}
themeSwitch.addEventListener("click", toggleTheme)