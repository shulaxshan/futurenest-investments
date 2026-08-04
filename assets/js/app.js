console.log("FutureNest Investments Loaded");

// Learn More buttons

document.querySelectorAll(".learn-more-btn").forEach(button => {

    button.addEventListener("click", function () {

        const fundName = this.dataset.fund;

        console.log("User clicked:", fundName);

        alert("Opening details for: " + fundName);

    });

});