function whatsapp(){
    let number = "+77059005654";

    var Name = document.getElementById('name').value;
    var Phone = document.getElementById('phone').value;
    var Topic = document.getElementById('topics').value;

    var url = "https://wa.me/" + number + "?text="
    + "Здравсвуйте! Меня зовут " + Name + "! %0a"
    + "Пишу по поводу газовых котлов вот детали: " + Topic + "%0a" 
    + "Номер для связи: " + Phone + "%0a";

    window.open(url, "_blank").focus();

}

function message() {
    var Name = document.getElementById('name');
    var Phone = document.getElementById('phone');
    var Topic = document.getElementById('topics');
    var Time = document.getElementById('submissionDateTime');
    var success = document.getElementById('success');
    var danger = document.getElementById('danger');

    if (Name.value === '' || Phone.value === '' || Topic.value === '') {
        danger.style.display = 'block';
    } else {
        var now = new window.Date();
        var datetime = now.toLocaleString();
        
        Time.value = datetime;

        danger.style.display = 'none';
        success.style.display = 'block';
        var button = document.getElementById('my-button');
        button.disabled = true;
        
        // Add the disabled class to visually indicate that the button is disabled
        button.classList.add('disabled-button');

        // Set a timeout to remove the disabled class after 3 seconds
        setTimeout(function() {
            button.disabled = false;
            button.classList.remove('disabled-button');
        }, 3000);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzHKquHru4MV54Ft-0ekrLanHjtff4_TPZln2YQI5IzJO5HOKRMemNAPAzMBdN_HF5K/exec';
        const form = document.forms['contact-form'];

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log("Thank you! your form is submitted successfully."))
            .then(() => { /* Remove the page reload */ })
            .catch(error => console.error('Error!', error.message));
    }
    
    // Prevent default form submission behavior
    event.preventDefault();
}



$('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))