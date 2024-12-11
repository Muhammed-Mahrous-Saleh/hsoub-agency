let counted = false;

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparent")
    } else {
        document.getElementById("navbar").classList.remove("noTransparent")
    }
}

function countUpStatistics() {
    if (document.documentElement.scrollTop > 1855 && !counted) {
        let website = new CountUp('website-count', 0, 250, 0, 2.5);
        let app = new CountUp('app-count', 0, 100, 0, 2.5);
        let user = new CountUp('user-count', 0, 10000, 0, 2.2);
        let video = new CountUp('video-count', 0, 30, 0, 2.5);
        website.start()
        app.start()
        user.start()
        video.start()
        counted = true;
    }
}



window.onscroll = function () {
    scrollFunction()
    countUpStatistics()
}

// check if the current position of the scrollbar 
// should be change when window is reloaded
if (window.scrollY >= 450) {
    scrollFunction()
}

if (window.scrollY >= 1860) {
    countUpStatistics()
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})

document.getElementById('fullYear').innerText = new Date().getFullYear()


