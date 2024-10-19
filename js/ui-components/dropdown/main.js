// function toggleDropdown(event) {
//     var dropdownContent = event.target.nextElementSibling;
//     dropdownContent.classList.toggle('show');
//     console.log('clicked');
// }

function toggleDropdown(event, dropdownId) {
    event.stopPropagation();
    var dropdownContent = document.getElementById(dropdownId);
    dropdownContent.classList.toggle('show');
    console.log('clicked');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName('dropdown-body');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

