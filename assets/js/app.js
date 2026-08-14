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

// =================================
// FUND DETAILS MODAL
// =================================

document
.querySelectorAll(".btn-view-details")
.forEach(button => {

    button.addEventListener("click", function(){

        const fundName =
            this.dataset.fund;

        const modalFactsheet =
            document.getElementById("modal-factsheet");

        modalFactsheet.dataset.file = this
            .closest(".fund-card")
            .querySelector(".btn-download")
            .dataset.file;

        document
        .getElementById("modal-fund-name")
        .textContent = fundName;


        // Fund information

        let description = "";
        let risk = "";
        let minimum = "";
        let returnValue = "";


        if (
            fundName ===
            "FutureNest Global Equity Fund"
        ){

            description =
                "Long-term capital appreciation through global equity investments.";

            risk = "High";
            minimum = "LKR 100,000";
            returnValue = "13.4%";

        }


        else if (
            fundName ===
            "Income Shield Bond Fund"
        ){

            description =
                "Stable income through carefully selected government and corporate bonds.";

            risk = "Low";
            minimum = "LKR 50,000";
            returnValue = "8.2%";

        }


        else if (
            fundName ===
            "Retirement Growth Fund"
        ){

            description =
                "Diversified portfolio designed for long-term retirement planning.";

            risk = "Medium";
            minimum = "LKR 75,000";
            returnValue = "10.8%";

        }


        document
        .getElementById("modal-fund-description")
        .textContent = description;


        document
        .getElementById("modal-risk")
        .textContent = risk;


        document
        .getElementById("modal-minimum")
        .textContent = minimum;


        document
        .getElementById("modal-return")
        .textContent = returnValue;


        // Show Bootstrap modal

        const modalElement =
            document.getElementById(
                "fundDetailsModal"
            );


        const modal =
            new bootstrap.Modal(modalElement);


        modal.show();

    });

});

// =================================
// FACTSHEET DOWNLOAD
// =================================

document
.querySelectorAll(".btn-download")
.forEach(button => {

    button.addEventListener("click", function(){

        const file =
            this.dataset.file;

        const link =
            document.createElement("a");

        link.href = file;

        link.download = "";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    });

});


// =================================
// MODAL FACTSHEET DOWNLOAD
// =================================

document
.getElementById("modal-factsheet")
?.addEventListener("click", function(){

    const file = this.dataset.file;

    if (!file) {
        return;
    }

    const link = document.createElement("a");

    link.href = file;

    link.download = "";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});

/* =========================
   EXPLORE INSIGHTS BUTTON
========================= */

const exploreInsightsButton =
    document.getElementById("explore-insights-btn");

if (exploreInsightsButton) {

    exploreInsightsButton.addEventListener("click", function () {

        const articlesSection =
            document.getElementById("insights-articles");

        if (articlesSection) {

            articlesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}