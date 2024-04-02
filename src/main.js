function message(){
    var Name = document.getElementById('name');
    var Phone = document.getElementById('phone');
    var Topic = document.getElementById('topics');
    var Time = document.getElementById('submissionDateTime')

    if(Name.value === '' || Phone.value === '' || Topic.value === ''){
        danger.style.display = 'block';
    }

    else{
        // var now = new window.Date()
        // var datetime = now.toLocaleString();
        
        // Time.value = datetime;

        // danger.style.display = 'none';
        // success.style.display = 'block';
        
        var callback = function() {
            button.disabled = true;
        };
        setTimeout(callback, 3000);
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzyd9Dfu3HZx6Fl__PTV5bM-zY39HLmTmZ1FWMZ9WO9Yf6lAqeD8X-wNA5bUbNk9dP7Xw/exec'

        const form = document.forms['contact-form']

        form.addEventListener('submit', e => {
            console.log('pressed')
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log("Thank you! your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
        })
    }
}


