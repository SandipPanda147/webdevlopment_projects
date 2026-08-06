// ======================================
// THE DAILY MUG
// Task 1 JavaScript
// ======================================

// Welcome Message

window.onload = function () {

    alert("☕ Welcome to The Daily Mug!\nEnjoy the finest coffee experience.");

};


// ======================================
// Order Button
// ======================================

const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {

    alert("✅ Thank you for choosing The Daily Mug!\n\nYour order request has been received.");

});


// ======================================
// Read More Button
// ======================================

const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", function () {

    alert("The Daily Mug serves freshly brewed coffee made from premium beans with love and passion every day.");

});


// ======================================
// Explore Menu Button
// ======================================

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {

    document.getElementById("menu").scrollIntoView({

        behavior: "smooth"

    });

});


// ======================================
// Coffee Card Hover Effect
// ======================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";

    });

    card.addEventListener("mouseleave", function(){

        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.12)";

    });

});


// ======================================
// Feature Box Hover
// ======================================

const features = document.querySelectorAll(".feature");

features.forEach(function(feature){

    feature.addEventListener("mouseenter", function(){

        feature.style.background = "#6f4e37";

        feature.style.color = "white";

    });

    feature.addEventListener("mouseleave", function(){

        feature.style.background = "white";

        feature.style.color = "#333";

    });

});


// ======================================
// Review Card Animation
// ======================================

const reviews = document.querySelectorAll(".review");

reviews.forEach(function(review){

    review.addEventListener("mouseenter", function(){

        review.style.transform = "scale(1.05)";

    });

    review.addEventListener("mouseleave", function(){

        review.style.transform = "scale(1)";

    });

});


// ======================================
// Footer Year
// ======================================

const footer = document.querySelector("footer p:last-child");

const year = new Date().getFullYear();

footer.innerHTML = "© " + year + " The Daily Mug. All Rights Reserved.";


// ======================================
// Navbar Highlight
// ======================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.forEach(function(item){

            item.style.color = "white";

        });

        this.style.color = "#ffcc80";

    });

});


// ======================================
// Console Message
// ======================================

console.log("The Daily Mug Website Loaded Successfully!");


// ======================================
// End of JavaScript
// ======================================