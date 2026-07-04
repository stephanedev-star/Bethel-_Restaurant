document.getElementById("res-btn").addEventListener("click", function() {
    let name = document.getElementById("res-name").value;
    let date = document.getElementById("res-date").value;
    let time = document.getElementById("res-time").value;
    let guests = document.getElementById("res-guests").value;

    if (name === "" || date === "" || time === "" || guests === "") {
        document.getElementById("res-message").textContent = "Please fill in all fields.";
        document.getElementById("res-message").style.color = "red";
    } else {
        document.getElementById("res-message").textContent = "Thank you " + name + "! Your table for " + guests + " guest(s) on " + date + " at " + time + " has been reserved.";
        document.getElementById("res-message").style.color = "green";
    }
});

// Show home section by default on page load
document.getElementById("home").classList.add("active");

// Nav link click handler
let navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Hide all sections
        let sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
            section.classList.remove("active");
        });

        // Show the clicked section
        let targetId = this.getAttribute("href").replace("#", "");
        document.getElementById(targetId).classList.add("active");
    });
});