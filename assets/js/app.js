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

newsletterForm?.addEventListener("submit", function(e){

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

// =================================
// FUND SEARCH & FILTERS
// =================================

const fundSearch = document.getElementById("fund-search");
const riskFilter = document.getElementById("risk-filter");
const categoryFilter = document.getElementById("category-filter");

const fundCards = document.querySelectorAll(".fund-card");


function filterFunds() {

    const searchValue =
        fundSearch?.value.toLowerCase().trim() || "";

    const riskValue =
        riskFilter?.value || "All";

    const categoryValue =
        categoryFilter?.value || "All";


    fundCards.forEach(card => {

        const fundName =
            card.dataset.fundName.toLowerCase();

        const fundRisk =
            card.dataset.risk;

        const fundCategory =
            card.dataset.category;


        const matchesSearch =
            fundName.includes(searchValue);

        const matchesRisk =
            riskValue === "All" ||
            fundRisk === riskValue;

        const matchesCategory =
            categoryValue === "All" ||
            fundCategory === categoryValue;


        if (
            matchesSearch &&
            matchesRisk &&
            matchesCategory
        ) {

            card.parentElement.style.display = "";

        } else {

            card.parentElement.style.display = "none";

        }

    });

}


// Search

fundSearch?.addEventListener(
    "input",
    filterFunds
);


// Risk filter

riskFilter?.addEventListener(
    "change",
    filterFunds
);


// Category filter

categoryFilter?.addEventListener(
    "change",
    filterFunds
);



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