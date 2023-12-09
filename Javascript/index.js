
document.querySelector('.thanks_main').style.display = 'none';
var email_validation = document.getElementById('email_span');

if (window.innerWidth >= 1440){
function validateEmail() {
    const emailValue = document.getElementById('emailInput').value;
    email_validation.innerHTML = emailValue;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailValue)) {

    var subscribe_btn = document.getElementById('subscribe');
    console.log(subscribe_btn)
    subscribe_btn.addEventListener('click', () =>{
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.thanks_main').style.display = 'flex';
    })

    var Dismiss_Btn = document.getElementById('dismiss_btn');

    Dismiss_Btn.addEventListener('click', () =>{
        document.querySelector('.thanks_main').style.display = 'none';
        document.querySelector('.main').style.display = 'flex';
    });

        document.getElementById('emailInput').style.color = '';
        document.getElementById('emailInput').style.borderColor = '';
        document.getElementById('emailInput').style.backgroundColor = '';
        document.getElementById('validationResult').innerHTML = '';
        document.getElementById('validationResult').style.color = '';
    } else {
        document.getElementById('emailInput').style.color = 'red';
        document.getElementById('emailInput').style.borderColor = 'red';
        document.getElementById('emailInput').style.backgroundColor = 'rgb(255, 232, 230)';
        document.getElementById('validationResult').innerHTML = 'Valid email required';
        document.getElementById('validationResult').style.color = 'red';
    }
}
};

if (window.innerWidth >= 375){
    
    document.querySelector('.thanks_mobile').style.display = 'none';

    function validateEmailm() {
    const emailValuem = document.getElementById('text').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailValuem)) {
        document.getElementById('text').style.color = '';
        document.getElementById('text').style.borderColor = '';
        document.getElementById('text').style.backgroundColor = '';
        document.getElementById('validation').innerHTML = '';
        document.getElementById('validation').style.color = '';

        var subscribe_btnM = document.getElementById('subscribem');
        console.log(subscribe_btnM)
        subscribe_btnM.addEventListener('click', () =>{
            document.querySelector('.mobile').style.display = 'none';
            document.querySelector('.thanks_mobile').style.display = 'block';
        });

        var Dismiss_BtnM = document.getElementById('dismiss_btnm');

        Dismiss_BtnM.addEventListener('click', () =>{
            document.querySelector('.mobile').style.display = 'block';
            document.querySelector('.thanks_mobile').style.display = 'none';
        });

        document.getElementById('email_spanm').innerHTML = emailValuem;

    } else {
        document.getElementById('text').style.color = 'red';
        document.getElementById('text').style.borderColor = 'red';
        document.getElementById('text').style.backgroundColor = 'rgb(255, 232, 230)';
        document.getElementById('validation').innerHTML = 'Valid email required';
        document.getElementById('validation').style.color = 'red';
    }
}
};


