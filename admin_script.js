function clearForm() {
    document.getElementById("MainForm").reset();
    console.log("clr form");
}

function scrollToStore(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - 150, // Adjust the scroll position to add extra margin
            behavior: 'smooth'
        });
    }
}