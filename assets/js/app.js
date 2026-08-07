console.log("FutureNest Investments Loaded");

// Learn More buttons

document.querySelectorAll(".learn-more-btn").forEach(button => {

    button.addEventListener("click", function () {

        const fundName = this.dataset.fund;

        console.log("User clicked:", fundName);

        alert("Opening details for: " + fundName);

    });

});


// Newsletter

const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
        document.getElementById("newsletter-email").value;

    console.log(email);

    alert("Thank you for subscribing!");

});


// Mission / Vision / Values

document.querySelectorAll(".mvv-card button").forEach(button=>{

    button.addEventListener("click",function(){

        alert(this.parentElement.querySelector("h4").innerText);

    });

});