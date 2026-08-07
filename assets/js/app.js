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

// Leadership Team

document.querySelectorAll(".btn-read-bio").forEach(button => {

    button.addEventListener("click", function () {

        const person = this.dataset.person;

        alert("Biography of " + person);

    });

});


// Timeline

document.querySelectorAll(".timeline-item").forEach(item=>{

    item.addEventListener("click",()=>{

        const year = item.querySelector(".timeline-year").innerText;

        alert("Timeline: " + year);

    });

});


// About CTA

document.getElementById("btn-book-consultation")
?.addEventListener("click", function(){

    alert("Consultation booking coming soon!");

});

document.getElementById("btn-contact-us")
?.addEventListener("click", function(){

    console.log("Navigate to Contact Page");

});


// Search

document
.getElementById("fund-search")
?.addEventListener("keyup",function(){

    console.log("Searching:",this.value);

});

// Risk

document
.getElementById("risk-filter")
?.addEventListener("change",function(){

    console.log("Risk:",this.value);

});

// Category

document
.getElementById("category-filter")
?.addEventListener("change",function(){

    console.log("Category:",this.value);

});


// Fund Cards

document.querySelectorAll(".btn-view-details").forEach(button => {

    button.addEventListener("click", function(){

        alert(this.dataset.fund);

    });

});

document.querySelectorAll(".btn-download").forEach(button => {

    button.addEventListener("click", function(){

        alert("Download: " + this.dataset.file);

    });

});