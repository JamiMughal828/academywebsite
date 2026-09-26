/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* Remember theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =====================================================
   COURSE FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const courseCards =
    document.querySelectorAll(".course-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        courseCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }

    const stats =
        document.querySelector(".hero-stats");

    const statsTop =
        stats.getBoundingClientRect().top;


    if (statsTop < window.innerHeight) {

        countersStarted = true;


        counters.forEach(counter => {

            const target =
                Number(
                    counter.getAttribute("data-target")
                );

            let current = 0;

            const increment =
                Math.ceil(target / 70);


            function updateCounter() {

                current += increment;


                if (current >= target) {

                    counter.textContent = target;

                } else {

                    counter.textContent = current;

                    requestAnimationFrame(
                        updateCounter
                    );

                }

            }


            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

window.addEventListener(
    "load",
    startCounters
);


/* =====================================================
   REGISTRATION MODAL
===================================================== */

const modal =
    document.getElementById(
        "registrationModal"
    );

const heroRegister =
    document.getElementById(
        "heroRegister"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );


/* Open Modal */

heroRegister.addEventListener(
    "click",
    () => {

        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }
);


/* Close Modal */

closeModal.addEventListener(
    "click",
    closeRegistrationModal
);


function closeRegistrationModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "auto";

}


/* Close by clicking outside */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeRegistrationModal();

        }

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeRegistrationModal();

        }

    }
);


/* =====================================================
   REGISTRATION FORM VALIDATION
===================================================== */

const registrationForm =
    document.getElementById(
        "registrationForm"
    );

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const courseInput =
    document.getElementById("course");

const successMessage =
    document.getElementById(
        "successMessage"
    );


registrationForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        /* Clear errors */

        document.getElementById(
            "nameError"
        ).textContent = "";

        document.getElementById(
            "emailError"
        ).textContent = "";

        document.getElementById(
            "phoneError"
        ).textContent = "";

        document.getElementById(
            "courseError"
        ).textContent = "";


        successMessage.classList.remove(
            "show"
        );


        let valid = true;


        /* Name */

        if (
            nameInput.value.trim().length < 3
        ) {

            document.getElementById(
                "nameError"
            ).textContent =
                "Please enter your full name.";

            valid = false;

        }


        /* Email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                emailInput.value.trim()
            )
        ) {

            document.getElementById(
                "emailError"
            ).textContent =
                "Please enter a valid email.";

            valid = false;

        }


        /* Phone */

        const phonePattern =
            /^[0-9+\-\s]{10,15}$/;


        if (
            !phonePattern.test(
                phoneInput.value.trim()
            )
        ) {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Please enter a valid phone.";

            valid = false;

        }


        /* Course */

        if (
            courseInput.value === ""
        ) {

            document.getElementById(
                "courseError"
            ).textContent =
                "Please select a course.";

            valid = false;

        }


        /* Success */

        if (valid) {

            successMessage.classList.add(
                "show"
            );


            registrationForm.reset();


            setTimeout(() => {

                successMessage.classList.remove(
                    "show"
                );

                closeRegistrationModal();

            }, 2500);

        }

    }
);


/* =====================================================
   LEARN MORE BUTTONS
===================================================== */

const learnButtons =
    document.querySelectorAll(
        ".learn-btn"
    );


learnButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            modal.classList.add("show");

            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =====================================================
   PRICING BUTTONS
===================================================== */

const priceButtons =
    document.querySelectorAll(
        ".price-btn"
    );


priceButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            modal.classList.add("show");

            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =====================================================
   CERTIFICATE BUTTON
===================================================== */

const certificateBtn =
    document.getElementById(
        "certificateBtn"
    );


certificateBtn.addEventListener(
    "click",
    () => {

        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }
);


/* =====================================================
   HEADER SHADOW
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const header =
            document.querySelector(
                ".header"
            );


        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.12)";

        } else {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.06)";

        }

    }
);
