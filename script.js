
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    function scrollToServices() {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }

    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    var insightsLink = document.getElementById("insights-link");
    var insightsTemplate = document.getElementById("insights-template"); // Corrected ID
    var closeInsights = document.getElementById("close-insights");

    insightsLink.addEventListener("click", function(event) {
        event.preventDefault();
        insightsTemplate.style.display = "block";
    });

    closeInsights.addEventListener("click", function() {
        insightsTemplate.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === insightsTemplate) {
            insightsTemplate.style.display = "none";
        }
    });
});

async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

window.onload = fetchData;

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            event.target.reset();
        } else {
            alert('Error submitting form.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form.');
    }
});
