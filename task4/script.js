/* =====================================================
   TO-DO LIST WITH LOCAL STORAGE
===================================================== */

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearCompleted = document.getElementById("clearCompleted");


let tasks =
    JSON.parse(localStorage.getItem("myTasks")) || [];


/* Save tasks */

function saveTasks() {

    localStorage.setItem(
        "myTasks",
        JSON.stringify(tasks)
    );
}


/* Display tasks */

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const li = document.createElement("li");

        li.className = "task";

        if (task.completed) {

            li.classList.add("completed");

        }

        li.innerHTML = `

            <div class="task-left">

                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                >

                <span class="task-text">
                    ${task.text}
                </span>

            </div>

            <button class="delete-task">
                Delete
            </button>
        `;


        /* Complete task */

        const checkbox =
            li.querySelector("input");

        checkbox.addEventListener(
            "change",
            function() {

                task.completed =
                    checkbox.checked;

                saveTasks();

                displayTasks();
            }
        );


        /* Delete task */

        const deleteButton =
            li.querySelector(".delete-task");

        deleteButton.addEventListener(
            "click",
            function() {

                tasks =
                    tasks.filter(function(item) {

                        return item.id !== task.id;

                    });

                saveTasks();

                displayTasks();
            }
        );


        taskList.appendChild(li);

    });


    taskCount.textContent =
        `${tasks.length} task(s)`;
}


/* Add task */

function addTask() {

    const text =
        taskInput.value.trim();

    if (text === "") {

        alert("Please enter a task.");

        return;
    }


    const newTask = {

        id: Date.now(),

        text: text,

        completed: false

    };


    tasks.push(newTask);

    saveTasks();

    displayTasks();

    taskInput.value = "";

    taskInput.focus();
}


addTaskBtn.addEventListener(
    "click",
    addTask
);


/* Enter key */

taskInput.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            addTask();

        }

    }
);


/* Clear completed */

clearCompleted.addEventListener(
    "click",
    function() {

        tasks =
            tasks.filter(function(task) {

                return !task.completed;

            });

        saveTasks();

        displayTasks();

    }
);


/* Initial display */

displayTasks();



/* =====================================================
   PRODUCT LISTING
===================================================== */


const products = [

    {
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        rating: 4.7,
        icon: "💻"
    },

    {
        name: "Smartphone",
        category: "Electronics",
        price: 25000,
        rating: 4.5,
        icon: "📱"
    },

    {
        name: "Headphones",
        category: "Electronics",
        price: 2500,
        rating: 4.2,
        icon: "🎧"
    },

    {
        name: "Smart Watch",
        category: "Electronics",
        price: 4500,
        rating: 4.4,
        icon: "⌚"
    },

    {
        name: "T-Shirt",
        category: "Fashion",
        price: 799,
        rating: 4.1,
        icon: "👕"
    },

    {
        name: "Running Shoes",
        category: "Fashion",
        price: 3500,
        rating: 4.6,
        icon: "👟"
    },

    {
        name: "Jeans",
        category: "Fashion",
        price: 2200,
        rating: 4.3,
        icon: "👖"
    },

    {
        name: "Java Programming",
        category: "Books",
        price: 650,
        rating: 4.8,
        icon: "📚"
    },

    {
        name: "Web Development",
        category: "Books",
        price: 1200,
        rating: 4.4,
        icon: "📖"
    },

    {
        name: "Data Structures",
        category: "Books",
        price: 950,
        rating: 4.6,
        icon: "📘"
    }

];


const categoryFilter =
    document.getElementById(
        "categoryFilter"
    );


const priceFilter =
    document.getElementById(
        "priceFilter"
    );


const sortFilter =
    document.getElementById(
        "sortFilter"
    );


const productContainer =
    document.getElementById(
        "productContainer"
    );


const productCount =
    document.getElementById(
        "productCount"
    );



/* Display products */

function displayProducts() {

    let filteredProducts =
        [...products];


    /* Category */

    const category =
        categoryFilter.value;


    if (category !== "all") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return product.category ===
                           category;

                }
            );
    }


    /* Price */

    const price =
        priceFilter.value;


    if (price === "under1000") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return product.price < 1000;

                }
            );

    }

    else if (price === "1000to5000") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return (
                        product.price >= 1000 &&
                        product.price <= 5000
                    );

                }
            );

    }

    else if (price === "5000to20000") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return (
                        product.price > 5000 &&
                        product.price <= 20000
                    );

                }
            );

    }

    else if (price === "above20000") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return product.price > 20000;

                }
            );

    }


    /* Sorting */

    const sort =
        sortFilter.value;


    if (sort === "priceLow") {

        filteredProducts.sort(
            function(a, b) {

                return a.price - b.price;

            }
        );

    }

    else if (sort === "priceHigh") {

        filteredProducts.sort(
            function(a, b) {

                return b.price - a.price;

            }
        );

    }

    else if (sort === "rating") {

        filteredProducts.sort(
            function(a, b) {

                return b.rating - a.rating;

            }
        );

    }

    else if (sort === "name") {

        filteredProducts.sort(
            function(a, b) {

                return a.name.localeCompare(
                    b.name
                );

            }
        );

    }


    /* Clear container */

    productContainer.innerHTML = "";


    /* Product count */

    productCount.textContent =
        `${filteredProducts.length} product(s) found`;


    /* No products */

    if (filteredProducts.length === 0) {

        productContainer.innerHTML = `

            <div class="project-card">

                <h3>No Products Found</h3>

                <p>
                    Try changing your filter options.
                </p>

            </div>
        `;

        return;
    }


    /* Create cards */

    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement("div");


            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-image">
                    ${product.icon}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-category">
                    ${product.category}
                </p>

                <p class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <p class="product-rating">
                    ⭐ ${product.rating}
                </p>

            `;


            productContainer.appendChild(card);

        }
    );
}


/* Filters */

categoryFilter.addEventListener(
    "change",
    displayProducts
);


priceFilter.addEventListener(
    "change",
    displayProducts
);


sortFilter.addEventListener(
    "change",
    displayProducts
);


/* Initial products */

displayProducts();



/* =====================================================
   CONTACT FORM
===================================================== */


const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        formMessage.textContent =
            `Thank you, ${name}! Your message has been received.`;


        contactForm.reset();

    }
);