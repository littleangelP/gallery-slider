/* ==========================================
   Little Angel's Public School
   Academics Page
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // Scroll Reveal Animation
    // ============================

    const elements = document.querySelectorAll(
        ".card, .highlight-box, .subject-card, .method-card, .lab-card, .activity-card, .assessment, .why-grid div, .cta"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition =
                    "all 0.8s ease";

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        observer.observe(el);

    });




    // ============================
    // Counter Animation
    // ============================

    const counters = document.querySelectorAll(".highlight-box h3");

    counters.forEach(counter => {

        const target = counter.innerText;

        const number = parseInt(target);

        if (isNaN(number)) return;

        let count = 0;

        const speed = Math.ceil(number / 60);

        const update = () => {

            count += speed;

            if (count >= number) {

                counter.innerText = target;

            } else {

                counter.innerText = count + (target.includes("%") ? "%" : "+");

                requestAnimationFrame(update);

            }

        };

        update();

    });




    // ============================
    // Button Hover Effect
    // ============================

    const btn = document.querySelector(".btn");

    if(btn){

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="scale(1.05)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="scale(1)";

        });

    }




    // ============================
    // Smooth Scroll
    // ============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

});
