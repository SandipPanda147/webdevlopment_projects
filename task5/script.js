/* =====================================================
   COSMOS — INTERACTIVE SPACE EXPLORER
   ===================================================== */


/* =====================================================
   SPACE OBJECT DATABASE
   ===================================================== */

const spaceObjects = [

    {
        id: 1,
        name: "Earth",
        category: "planet",
        nasaQuery: "Earth",
        description:
            "Our home planet and the only known world confirmed to support life.",
        distance: "149.6 million km from Sun",
        diameter: "12,742 km",
        temperature: "14°C average",
        moons: "1",
        type: "Terrestrial Planet",
        parent: "Solar System",
        moonInfo:
            "Earth has one natural satellite: the Moon."
    },

    {
        id: 2,
        name: "Mercury",
        category: "planet",
        nasaQuery: "Mercury planet",
        description:
            "The smallest planet in the Solar System and the closest planet to the Sun.",
        distance: "57.9 million km from Sun",
        diameter: "4,879 km",
        temperature: "167°C average",
        moons: "0",
        type: "Terrestrial Planet",
        parent: "Solar System",
        moonInfo:
            "Mercury has no natural moons."
    },

    {
        id: 3,
        name: "Venus",
        category: "planet",
        nasaQuery: "Venus planet",
        description:
            "A rocky world with a dense carbon-dioxide atmosphere and extreme surface temperatures.",
        distance: "108.2 million km from Sun",
        diameter: "12,104 km",
        temperature: "464°C average",
        moons: "0",
        type: "Terrestrial Planet",
        parent: "Solar System",
        moonInfo:
            "Venus has no natural moons."
    },

    {
        id: 4,
        name: "Mars",
        category: "planet",
        nasaQuery: "Mars planet",
        description:
            "The Red Planet is a cold desert world with enormous volcanoes, valleys and polar ice.",
        distance: "227.9 million km from Sun",
        diameter: "6,779 km",
        temperature: "-63°C average",
        moons: "2",
        type: "Terrestrial Planet",
        parent: "Solar System",
        moonInfo:
            "Mars has two small moons: Phobos and Deimos. Phobos orbits Mars in about 7 hours 39 minutes, while Deimos takes about 30 hours."
    },

    {
        id: 5,
        name: "Jupiter",
        category: "planet",
        nasaQuery: "Jupiter planet",
        description:
            "The largest planet in our Solar System, famous for its Great Red Spot and powerful storms.",
        distance: "778.5 million km from Sun",
        diameter: "139,820 km",
        temperature: "-110°C average",
        moons: "95+",
        type: "Gas Giant",
        parent: "Solar System",
        moonInfo:
            "Jupiter has many moons. Four famous large moons are Io, Europa, Ganymede and Callisto."
    },

    {
        id: 6,
        name: "Saturn",
        category: "planet",
        nasaQuery: "Saturn planet rings",
        description:
            "A spectacular gas giant surrounded by an enormous system of icy rings.",
        distance: "1.43 billion km from Sun",
        diameter: "116,460 km",
        temperature: "-140°C average",
        moons: "80+",
        type: "Gas Giant",
        parent: "Solar System",
        moonInfo:
            "Saturn has a huge moon system. Titan is its largest moon, while Enceladus is famous for its icy plumes."
    },

    {
        id: 7,
        name: "Uranus",
        category: "planet",
        nasaQuery: "Uranus planet",
        description:
            "An ice giant that rotates on its side with a dramatic axial tilt.",
        distance: "2.87 billion km from Sun",
        diameter: "50,724 km",
        temperature: "-195°C average",
        moons: "27",
        type: "Ice Giant",
        parent: "Solar System",
        moonInfo:
            "Uranus has 27 known moons, including Titania, Oberon, Ariel, Umbriel and Miranda."
    },

    {
        id: 8,
        name: "Neptune",
        category: "planet",
        nasaQuery: "Neptune planet",
        description:
            "The distant blue ice giant with some of the fastest winds in the Solar System.",
        distance: "4.5 billion km from Sun",
        diameter: "49,244 km",
        temperature: "-200°C average",
        moons: "14",
        type: "Ice Giant",
        parent: "Solar System",
        moonInfo:
            "Neptune has 14 known moons. Triton is its largest moon and orbits Neptune in a retrograde direction."
    },

    {
        id: 9,
        name: "Moon",
        category: "moon",
        nasaQuery: "Earth Moon",
        description:
            "Earth's natural satellite and the first extraterrestrial body visited by humans.",
        distance: "384,400 km from Earth",
        diameter: "3,475 km",
        temperature: "-20°C average",
        moons: "0",
        type: "Natural Satellite",
        parent: "Earth",
        moonInfo:
            "The Moon orbits Earth. It completes one orbit relative to the stars in about 27.3 days."
    },

    {
        id: 10,
        name: "Phobos",
        category: "moon",
        nasaQuery: "Phobos Mars moon",
        description:
            "The larger and closer of Mars's two moons.",
        distance: "About 9,377 km from Mars",
        diameter: "About 22 km",
        temperature: "-40°C approximate",
        moons: "0",
        type: "Mars Moon",
        parent: "Mars",
        moonInfo:
            "Phobos orbits Mars extremely quickly, completing an orbit in roughly 7 hours 39 minutes."
    },

    {
        id: 11,
        name: "Deimos",
        category: "moon",
        nasaQuery: "Deimos Mars moon",
        description:
            "The smaller and more distant of Mars's two natural satellites.",
        distance: "About 23,460 km from Mars",
        diameter: "About 12 km",
        temperature: "Extremely cold",
        moons: "0",
        type: "Mars Moon",
        parent: "Mars",
        moonInfo:
            "Deimos orbits Mars approximately every 30 hours."
    },

    {
        id: 12,
        name: "Europa",
        category: "moon",
        nasaQuery: "Europa Jupiter moon",
        description:
            "An icy moon of Jupiter believed to contain a large ocean beneath its frozen surface.",
        distance: "About 671,000 km from Jupiter",
        diameter: "3,122 km",
        temperature: "-160°C approximate",
        moons: "0",
        type: "Jupiter Moon",
        parent: "Jupiter",
        moonInfo:
            "Europa orbits Jupiter every 3.55 Earth days. Scientists are particularly interested in its subsurface ocean."
    },

    {
        id: 13,
        name: "Ganymede",
        category: "moon",
        nasaQuery: "Ganymede Jupiter moon",
        description:
            "The largest moon in the Solar System and a moon of Jupiter.",
        distance: "About 1.07 million km from Jupiter",
        diameter: "5,268 km",
        temperature: "-160°C approximate",
        moons: "0",
        type: "Jupiter Moon",
        parent: "Jupiter",
        moonInfo:
            "Ganymede completes an orbit around Jupiter in about 7.15 Earth days."
    },

    {
        id: 14,
        name: "Titan",
        category: "moon",
        nasaQuery: "Titan Saturn moon",
        description:
            "Saturn's largest moon and the only moon known to have a dense atmosphere.",
        distance: "About 1.22 million km from Saturn",
        diameter: "5,150 km",
        temperature: "-179°C average",
        moons: "0",
        type: "Saturn Moon",
        parent: "Saturn",
        moonInfo:
            "Titan orbits Saturn about once every 15.9 Earth days. It has lakes and seas of liquid hydrocarbons on its surface."
    },

    {
        id: 15,
        name: "Enceladus",
        category: "moon",
        nasaQuery: "Enceladus Saturn moon",
        description:
            "A small icy Saturnian moon famous for jets of water-rich material erupting from its south pole.",
        distance: "About 238,000 km from Saturn",
        diameter: "504 km",
        temperature: "-201°C approximate",
        moons: "0",
        type: "Saturn Moon",
        parent: "Saturn",
        moonInfo:
            "Enceladus completes an orbit around Saturn in about 1.37 Earth days."
    },

    {
        id: 16,
        name: "Sun",
        category: "star",
        nasaQuery: "Sun NASA",
        description:
            "The star at the center of our Solar System and the main source of energy for Earth.",
        distance: "149.6 million km from Earth",
        diameter: "1.39 million km",
        temperature: "About 5,500°C surface",
        moons: "0",
        type: "G-Type Main Sequence Star",
        parent: "Solar System",
        moonInfo:
            "The Sun is not a planet and therefore does not have moons orbiting it."
    },

    {
        id: 17,
        name: "Sirius",
        category: "star",
        nasaQuery: "Sirius star",
        description:
            "The brightest star in Earth's night sky.",
        distance: "8.6 light-years",
        diameter: "About 2.4 times Sun",
        temperature: "About 9,940°C surface",
        moons: "0",
        type: "Binary Star System",
        parent: "Canis Major",
        moonInfo:
            "Sirius is a binary star system rather than a planetary system."
    },

    {
        id: 18,
        name: "Milky Way",
        category: "galaxy",
        nasaQuery: "Milky Way galaxy",
        description:
            "The galaxy containing our Solar System and hundreds of billions of stars.",
        distance: "Our home galaxy",
        diameter: "About 100,000 light-years",
        temperature: "Varies",
        moons: "N/A",
        type: "Barred Spiral Galaxy",
        parent: "Local Group",
        moonInfo:
            "The Milky Way contains stars, planets, nebulae, gas, dust and a supermassive black hole at its center."
    },

    {
        id: 19,
        name: "Andromeda",
        category: "galaxy",
        nasaQuery: "Andromeda Galaxy",
        description:
            "A large spiral galaxy and the nearest major galaxy to the Milky Way.",
        distance: "About 2.5 million light-years",
        diameter: "About 260,000 light-years",
        temperature: "Varies",
        moons: "N/A",
        type: "Spiral Galaxy",
        parent: "Local Group",
        moonInfo:
            "Andromeda is a galaxy rather than a planetary system. It contains hundreds of billions of stars."
    },

    {
        id: 20,
        name: "Black Hole",
        category: "other",
        nasaQuery: "black hole NASA",
        description:
            "An object with gravity so powerful that beyond its event horizon, light cannot escape.",
        distance: "Depends on the black hole",
        diameter: "Depends on mass",
        temperature: "Accretion disk can be extremely hot",
        moons: "N/A",
        type: "Black Hole",
        parent: "Various Galaxies",
        moonInfo:
            "Black holes can exist at the centers of galaxies or form from the collapse of massive stars."
    },

    {
        id: 21,
        name: "Pluto",
        category: "other",
        nasaQuery: "Pluto New Horizons",
        description:
            "A dwarf planet in the distant Kuiper Belt visited by NASA's New Horizons spacecraft.",
        distance: "About 5.9 billion km average from Sun",
        diameter: "2,377 km",
        temperature: "-229°C average",
        moons: "5",
        type: "Dwarf Planet",
        parent: "Kuiper Belt",
        moonInfo:
            "Pluto has five known moons. Charon is by far the largest."
    },

    {
        id: 22,
        name: "Asteroid Bennu",
        category: "other",
        nasaQuery: "OSIRIS-REx Bennu asteroid",
        description:
            "A near-Earth asteroid visited and sampled by NASA's OSIRIS-REx mission.",
        distance: "Varies with orbit",
        diameter: "About 500 m",
        temperature: "Varies",
        moons: "0",
        type: "Near-Earth Asteroid",
        parent: "Solar System",
        moonInfo:
            "Bennu does not have a known moon."
    }

];


/* =====================================================
   DOM
   ===================================================== */

const spaceGrid =
    document.getElementById("spaceGrid");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const filters =
    document.querySelectorAll(".filter");

const noResults =
    document.getElementById("noResults");

const modal =
    document.getElementById("detailsModal");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

const apiStatus =
    document.getElementById("apiStatus");

const heroEarth =
    document.getElementById("heroEarth");

const nasaFeatureImage =
    document.getElementById("nasaFeatureImage");

const randomNASA =
    document.getElementById("randomNASA");

const featureCredit =
    document.getElementById("featureCredit");

const earthSectionImage =
    document.getElementById("earthSectionImage");

const year =
    document.getElementById("year");


/* =====================================================
   STATE
   ===================================================== */

let currentCategory = "all";

let nasaImageCache =
    new Map();


/* =====================================================
   NASA IMAGE API
   ===================================================== */

async function getNASAImage(query) {

    if (nasaImageCache.has(query)) {

        return nasaImageCache.get(query);

    }


    try {

        const url =
            `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image&page_size=20`;

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error("NASA API error");
        }

        const data =
            await response.json();

        const items =
            data.collection?.items || [];


        const usable =
            items.find(item => {

                const links =
                    item.links || [];

                return links.some(link =>
                    link.href &&
                    link.href.match(
                        /\.(jpg|jpeg|png|webp)$/i
                    )
                );

            });


        if (!usable) {
            return null;
        }


        const imageLink =
            usable.links.find(link =>
                link.href &&
                link.href.match(
                    /\.(jpg|jpeg|png|webp)$/i
                )
            );


        const result = {

            url: imageLink.href,

            title:
                usable.data?.[0]?.title ||
                query,

            description:
                usable.data?.[0]?.description ||
                "",

            date:
                usable.data?.[0]?.date_created ||
                ""

        };


        nasaImageCache.set(
            query,
            result
        );


        return result;

    } catch (error) {

        console.warn(
            "NASA image unavailable:",
            query
        );

        return null;
    }

}


/* =====================================================
   IMAGE PLACEHOLDER
   ===================================================== */

function createImagePlaceholder() {

    return `
        <div class="image-loading">
            Loading NASA image...
        </div>
    `;

}


/* =====================================================
   DISPLAY CARDS
   ===================================================== */

async function displayObjects() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const results =
        spaceObjects.filter(object => {

            const categoryMatch =
                currentCategory === "all" ||
                object.category === currentCategory;


            const textMatch =
                object.name
                    .toLowerCase()
                    .includes(searchTerm) ||

                object.description
                    .toLowerCase()
                    .includes(searchTerm) ||

                object.parent
                    .toLowerCase()
                    .includes(searchTerm);


            return categoryMatch && textMatch;

        });


    spaceGrid.innerHTML = "";


    if (results.length === 0) {

        noResults.style.display =
            "block";

        return;

    }


    noResults.style.display =
        "none";


    results.forEach(object => {

        const card =
            document.createElement("article");

        card.className =
            "space-card";


        card.innerHTML = `

            <div class="card-image"
                 id="image-${object.id}">

                ${createImagePlaceholder()}

            </div>

            <div class="card-content">

                <span class="card-category">
                    ${object.category}
                </span>

                <h3>
                    ${object.name}
                </h3>

                <p>
                    ${object.description}
                </p>

                <div class="card-meta">

                    <span>
                        ${object.type}
                    </span>

                    <span>
                        ${object.parent}
                    </span>

                </div>

                <div class="card-actions">

                    <button
                        class="explore-card-btn"
                        onclick="showDetails(${object.id})">
                        Explore Object
                    </button>

                    <button
                        class="favorite-btn"
                        data-id="${object.id}"
                        onclick="toggleFavorite(${object.id}, this)"
                        aria-label="Favorite ${object.name}">
                        ♡
                    </button>

                </div>

            </div>

        `;


        spaceGrid.appendChild(card);

        loadCardImage(object);

    });


    loadFavorites();

}


/* =====================================================
   LOAD CARD IMAGE
   ===================================================== */

async function loadCardImage(object) {

    const container =
        document.getElementById(
            `image-${object.id}`
        );


    if (!container) return;


    const image =
        await getNASAImage(
            object.nasaQuery
        );


    if (!image) {

        container.innerHTML = `
            <div class="image-loading">
                NASA image unavailable
            </div>
        `;

        return;

    }


    container.innerHTML = `

        <img
            src="${image.url}"
            alt="${object.name} — NASA image"
            loading="lazy"
            decoding="async"
            onerror="this.parentElement.innerHTML='<div class=&quot;image-loading&quot;>Image unavailable</div>'">

    `;

}


/* =====================================================
   SEARCH
   ===================================================== */

searchInput.addEventListener(
    "input",
    displayObjects
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentCategory = "all";

        filters.forEach(button =>
            button.classList.remove("active")
        );

        document
            .querySelector(
                '[data-category="all"]'
            )
            .classList.add("active");

        displayObjects();

    }
);


/* =====================================================
   FILTER
   ===================================================== */

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filters.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            displayObjects();

        }
    );

});


/* =====================================================
   DETAILS MODAL
   ===================================================== */

async function showDetails(id) {

    const object =
        spaceObjects.find(
            item => item.id === id
        );


    if (!object) return;


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";


    modalBody.innerHTML = `

        <div class="modal-image"
             id="modalImage">

            ${createImagePlaceholder()}

        </div>

        <h2>
            ${object.name}
        </h2>

        <p class="modal-description">
            ${object.description}
        </p>

        <div class="modal-details">

            <div class="modal-detail">
                <span>Category</span>
                <strong>
                    ${object.category}
                </strong>
            </div>

            <div class="modal-detail">
                <span>Type</span>
                <strong>
                    ${object.type}
                </strong>
            </div>

            <div class="modal-detail">
                <span>Parent / System</span>
                <strong>
                    ${object.parent}
                </strong>
            </div>

            <div class="modal-detail">
                <span>Distance</span>
                <strong>
                    ${object.distance}
                </strong>
            </div>

            <div class="modal-detail">
                <span>Diameter</span>
                <strong>
                    ${object.diameter}
                </strong>
            </div>

            <div class="modal-detail">
                <span>Temperature</span>
                <strong>
                    ${object.temperature}
                </strong>
            </div>

        </div>

        <div class="moon-info">

            <strong>
                🌙 Moon / Orbit Information
            </strong>

            <p>
                ${object.moonInfo}
            </p>

        </div>

    `;


    const nasaImage =
        await getNASAImage(
            object.nasaQuery
        );


    const modalImage =
        document.getElementById(
            "modalImage"
        );


    if (nasaImage) {

        modalImage.innerHTML = `

            <img
                src="${nasaImage.url}"
                alt="${object.name} NASA image"
                class="modal-image"
                loading="eager">

        `;

    } else {

        modalImage.innerHTML = `
            <div class="image-loading">
                NASA image unavailable
            </div>
        `;

    }

}


/* =====================================================
   CLOSE MODAL
   ===================================================== */

function closeDetails() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeDetails
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeDetails();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeDetails();

        }

    }
);


/* =====================================================
   FAVORITES
   ===================================================== */

function toggleFavorite(id, button) {

    let favorites =
        JSON.parse(
            localStorage.getItem(
                "cosmosFavorites"
            )
        ) || [];


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId =>
                    favoriteId !== id
            );

        button.classList.remove(
            "liked"
        );

        button.textContent = "♡";

    } else {

        favorites.push(id);

        button.classList.add(
            "liked"
        );

        button.textContent = "♥";

    }


    localStorage.setItem(
        "cosmosFavorites",
        JSON.stringify(favorites)
    );

}


function loadFavorites() {

    const favorites =
        JSON.parse(
            localStorage.getItem(
                "cosmosFavorites"
            )
        ) || [];


    document
        .querySelectorAll(
            ".favorite-btn"
        )
        .forEach(button => {

            const id =
                Number(
                    button.dataset.id
                );


            if (
                favorites.includes(id)
            ) {

                button.classList.add(
                    "liked"
                );

                button.textContent =
                    "♥";

            }

        });

}


/* =====================================================
   NASA FEATURE IMAGE
   ===================================================== */

async function loadFeatureImage(
    query = "James Webb Space Telescope"
) {

    const image =
        await getNASAImage(query);


    if (!image) return;


    nasaFeatureImage.src =
        image.url;


    nasaFeatureImage.alt =
        image.title;


    featureCredit.textContent =
        `NASA • ${image.title}`;

}


/* =====================================================
   RANDOM NASA IMAGE
   ===================================================== */

const featureQueries = [

    "James Webb Space Telescope",

    "Hubble Space Telescope",

    "Mars",

    "Jupiter",

    "Saturn",

    "Earth from space",

    "nebula",

    "galaxy",

    "black hole",

    "Moon"

];


randomNASA.addEventListener(
    "click",
    async () => {

        randomNASA.disabled = true;

        randomNASA.textContent =
            "Loading NASA image...";


        const query =
            featureQueries[
                Math.floor(
                    Math.random() *
                    featureQueries.length
                )
            ];


        await loadFeatureImage(query);


        randomNASA.disabled = false;

        randomNASA.textContent =
            "Show Another Image →";

    }
);


/* =====================================================
   HERO + EARTH IMAGE
   ===================================================== */

async function loadEarthImages() {

    const earth =
        await getNASAImage(
            "Earth from space"
        );


    if (!earth) return;


    heroEarth.src =
        earth.url;


    earthSectionImage.src =
        earth.url;

}


loadEarthImages();


/* =====================================================
   MOBILE MENU
   ===================================================== */

menuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "open"
        );

    }
);


navMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "open"
                );

            }
        );

    });


/* =====================================================
   NASA STATUS
   ===================================================== */

async function checkNASAService() {

    try {

        const response =
            await fetch(
                "https://images-api.nasa.gov/search?q=Earth&media_type=image&page_size=1"
            );


        if (!response.ok) {
            throw new Error();
        }


        apiStatus.innerHTML = `

            <span class="status-dot"></span>

            NASA image service connected

        `;

    } catch {

        apiStatus.innerHTML = `

            <span
                class="status-dot"
                style="background:#ff7777;box-shadow:0 0 10px #ff7777">
            </span>

            NASA image service unavailable

        `;

    }

}


/* =====================================================
   YEAR
   ===================================================== */

year.textContent =
    new Date().getFullYear();


/* =====================================================
   START APPLICATION
   ===================================================== */

displayObjects();

loadFeatureImage();

checkNASAService();