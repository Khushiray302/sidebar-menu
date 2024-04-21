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

// const dropIcon = document.getElementById('dropdownIcon');
// const navd = document.querySelector('.nav_dropdown-collapse');
// dropIcon.addEventListener('click', () => {
//     navd.classList.toggle('close');
// });
// ------------------------dropdown--------------------
// $(document).ready(function(){
//     $('.dropdown').click(function(){
//         $(this).next('.dropdownContent').slideToggle();
//         $(this).find('.dropdownIcon').toggleClass('rotate');
//     });
// });

// 


// document.addEventListener("DOMContentLoaded", function() {
//     // Profile dropdown
//     var profileDropdownIcon = document.getElementById('profileDropdownIcon');
//     var profileDropdownContent = document.getElementById('profileDropdownContent');

//     profileDropdownIcon.addEventListener('click', function() {
//         toggleDropdown(profileDropdownContent);
//     });

//     // Data dropdown
//     var dataDropdownIcon = document.getElementById('dataDropdownIcon');
//     var dataDropdownContent = document.getElementById('dataDropdownContent');

//     dataDropdownIcon.addEventListener('click', function() {
//         toggleDropdown(dataDropdownContent);
//     });

//     // Notifications dropdown
//     var notificationsDropdownIcon = document.getElementById('notificationsDropdownIcon');
//     var notificationsDropdownContent = document.getElementById('notificationsDropdownContent');

//     notificationsDropdownIcon.addEventListener('click', function() {
//         toggleDropdown(notificationsDropdownContent);
//     });

//     // Function to toggle dropdown content
//     function toggleDropdown(dropdownContent, icon) {
//         dropdownContent.classList.toggle('active');
//         if (dropdownContent.classList.contains('active')) {
//             dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
//             icon.style.transform = "rotate(-180deg)";
//         } else {
//             dropdownContent.style.maxHeight = "0";
//             icon.style.transform = "rotate(0deg)";
//         }
//     }
// });



document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle dropdown content
    function toggleDropdown(dropdownContent, icon) {
        dropdownContent.classList.toggle('active');
        if (dropdownContent.classList.contains('active')) {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            icon.style.transform = "rotate(180deg)";
        } else {
            dropdownContent.style.maxHeight = "0";
            icon.style.transform = "rotate(0deg)";
        }
    }

    // Add event listeners for each dropdown
    var dropdowns = document.querySelectorAll('.nav__dropdown');
    dropdowns.forEach(function(dropdown) {
        var dropdownIcon = dropdown.querySelector('.nav__dropdown-icon');
        var dropdownContent = dropdown.querySelector('.nav__dropdown-collapse');

        dropdownIcon.addEventListener('click', function() {
            // Close all dropdowns
            dropdowns.forEach(function(dropdown) {
                var otherDropdownIcon = dropdown.querySelector('.nav__dropdown-icon');
                var otherDropdownContent = dropdown.querySelector('.nav__dropdown-collapse');
                if (otherDropdownIcon !== dropdownIcon) {
                    otherDropdownContent.classList.remove('active');
                    otherDropdownContent.style.maxHeight = "0";
                    otherDropdownIcon.style.transform = "rotate(0deg)";
                }
            });
            // Toggle the clicked dropdown
            toggleDropdown(dropdownContent, dropdownIcon);
        });
    });
});
