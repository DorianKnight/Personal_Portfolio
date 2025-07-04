// Author: Dorian Knight
// Date: June 3rd 2025
// Description: Handle navbar interactivity effects

// ############# Navigation bar hover effects ############# //
function navButtonEffect(id) {
     // Add blue background and bolded white text
    const navButtonElement = document.getElementById(id)
    navButtonElement.style.backgroundColor = theme_primary;
    navButtonElement.style.boxShadow = `5px 3px 5px ${light_gray}`;
    navButtonElement.style.color = 'white';
    navButtonElement.style.fontWeight = text_bold;
}

function undoNavButtonEffect(id) {
    // Returns nav button to white background and regular black text
    const navButtonElement = document.getElementById(id);
    navButtonElement.style.backgroundColor = 'white';
    navButtonElement.style.boxShadow = 'none';
    navButtonElement.style.color = 'black';
    navButtonElement.style.fontWeight = text_regular;
}

function navDropShadow() {
    navbar = document.getElementsByClassName("navbar")[0];
    if (window.scrollY > 15) {
        navbar.style.boxShadow = `0px 5px 5px ${light_gray}`;
    }

    else {
        navbar.style.boxShadow = "none";
    }
    setTimeout(navDropShadow, 10);
}

function generateNavbarHTML() {
    // Read navbar html file on github and write html structure
    let resourceLocation = "https://raw.githubusercontent.com/DorianKnight/DorianKnight.github.io/refs/heads/main/pages/navbar.html";
    let navbarRequest = new XMLHttpRequest();
    navbarRequest.open("GET", resourceLocation, false); // Synchronous request
    navbarRequest.send();

    htmlString = navbarRequest.responseText;

    // Write navbar html in navbar div
    navbarDiv = document.getElementById("navbar_container");
    navbarDiv.innerHTML = htmlString;
}

generateNavbarHTML();
navDropShadow();