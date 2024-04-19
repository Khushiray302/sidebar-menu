/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')



/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))



function toggleMode() {
    var moonIcon = document.getElementById("moonIcon");
    var sunIcon = document.getElementById("sunIcon");
    var modeSwitch = document.getElementById("modeSwitch");

    // Toggle between displaying the moon and sun icons
    moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
    sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";

    // Toggle between dark mode and light mode styles
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Toggle the text of the mode
    var modeText = document.querySelector(".mode-text");
    modeText.innerText = modeText.innerText === "Dark Mode" ? "Light Mode" : "Dark Mode";

    // Toggle the position of the switch
    modeSwitch.classList.toggle("on");
}

//  const searchBtn = body.querySelector(".header__search");

// nav expand
// const expandIcon = document.getElementById('expand-icon');
// const nav = document.querySelector('.nav');

// expandIcon.addEventListener('click', () => {
//     nav.classList.toggle('expanded');
// });


const expandIcon = document.getElementById('expand-icon');
const nav = document.querySelector('.nav');
const main = document.getElementById('main');
// const header = document.getElementById('header');

expandIcon.addEventListener('click', () => {
    nav.classList.toggle('expanded');
    main.classList.toggle('shifted');
    // header.classList.toggle('shifted');
});


