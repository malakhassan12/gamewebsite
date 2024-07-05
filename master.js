
let navbar=document.querySelector('.home header nav');
let menubtn=document.querySelector('#menu_btn');
let header=document.querySelector('.home header');


menubtn.onclick=()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menubtn.classList.remove('fa-times');

    if (window.scrollY > 0) {
        header.classList.add('.home header active');
    } else {
        header.classList.remove('.home header active');
    }

}







document.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) { // You can adjust the scroll value
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});




document.querySelectorAll('.faq .box').forEach(box => {
    box.onclick = () => {
        let content = box.querySelector('.content');
        let icon = box.querySelector('i');

        if (content.classList.contains('active')) {
            // Hide the current active content and switch icon to plus
            content.classList.remove('active');
            icon.classList.replace('fa-minus', 'fa-plus');
        } else {
            // Show the clicked content and switch icon to minus
            content.classList.add('active');
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    }
});
