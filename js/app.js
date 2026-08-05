const eventGrid = document.getElementById("eventGrid");
function renderEvents(eventList) {
    eventGrid.innerHTML = eventList.map(event => `
        <div class="event-card">

            <img src="${event.image}" alt="${event.title}" class="event-image">

            <div class="event-info">

                <span class="badge">FREE</span>

                <h3>${event.title}</h3>

                <p>${event.date}</p>

                <p>${event.location}</p>

                <small>${event.group}</small>

                <button class="join-btn"
                        onclick="location.href='signup.html'">
                    Join Event
                </button>

            </div>

        </div>
    `).join("");
}


renderEvents(events);
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const search = searchInput.value.toLowerCase();

        const filteredEvents = events.filter(event => {
            return (
                event.title.toLowerCase().includes(search) ||
                event.group.toLowerCase().includes(search) ||
                event.location.toLowerCase().includes(search)
            );
        });

        renderEvents(filteredEvents);

    });
} 
const onlineGrid = document.getElementById("onlineGrid");

if (onlineGrid) {
    onlineGrid.innerHTML = onlineEvents.map(event => `
        <div class="event-card">
            <img src="${event.image}" alt="${event.title}" class="event-image">

            <span class="badge">ONLINE</span>

            <h3>${event.title}</h3>

            <p>${event.date}</p>

            <small>${event.group}</small>
        </div>
    `).join("");
}

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove active class
        categoryCards.forEach(c => c.classList.remove("active"));

        // Highlight selected card
        card.classList.add("active");

        const category = card.dataset.category;

        // Show all events
        if (category === "All") {
            renderEvents(events);
            return;
        }

        // Filter events
        const filteredEvents = events.filter(event =>
            event.category === category
        );

        renderEvents(filteredEvents);

    });

});

const modal = document.getElementById("eventModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const modalGroup = document.getElementById("modalGroup");
const closeModal = document.querySelector(".close-modal");

document.addEventListener("click", function (e) {

    const card = e.target.closest(".event-card");

    if (!card) return;

    const title = card.querySelector("h3").textContent;

    const event = events.find(item => item.title === title);

    if (!event) return;

    modalImage.src = event.image;
    modalTitle.textContent = event.title;
    modalDate.textContent = event.date;
    modalLocation.textContent = event.location;
    modalGroup.textContent = event.group;

    modal.style.display = "flex";
});
if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

const heroLeft = document.getElementById("heroLeft");
const heroRight = document.getElementById("heroRight");

if (heroLeft) {
    heroLeft.src = images.hero;
}

if (heroRight) {
    heroRight.src = images.networking;
}

const cityGrid = document.getElementById("cityGrid");

if (cityGrid) {
    cityGrid.innerHTML = cities.map(city => `
        <div class="city-card">
            <img src="${city.image}" alt="${city.name}">
            <h3>${city.name}</h3>
        </div>
    `).join("");
}
onlineGrid.innerHTML = onlineEvents.map(event => `
    <div class="event-card">
        <img src="${event.image}" alt="${event.title}" class="event-image">

        <span class="badge">ONLINE</span>

        <h3>${event.title}</h3>

        <p>${event.date}</p>

        <small>${event.group}</small>
    </div>
`).join("");
document.addEventListener("click", function (e) {

    console.log("Clicked:", e.target);

    if (e.target.classList.contains("join-btn")) {

        const card = e.target.closest(".event-card");
        const title = card.querySelector("h3").textContent;

        alert(`🎉 You have joined "${title}"!`);

    }

});
     
const storyGrid = document.getElementById("storyGrid");

if (storyGrid) {
    storyGrid.innerHTML = stories.map(story => `
        <div class="story-card">
            <img src="${story.image}" alt="${story.name}" class="story-image">
            <h3>${story.name}</h3>
            <p>${story.text}</p>
            <a href="#">Read Story →</a>
        </div>
    `).join("");
}
const stepsGrid = document.getElementById("stepsGrid");

if (stepsGrid) {
    stepsGrid.innerHTML = steps.map(step => `
        <div class="step-card">
            <div class="step-number">${step.number}</div>

            <h3>${step.title}</h3>

            <p>${step.text}</p>
        </div>
    `).join("");
}
const joinButtons = document.querySelectorAll(".join-kulan-btn");

joinButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("🎉 Welcome to Kulan! Start exploring local events.");
    });
});
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}