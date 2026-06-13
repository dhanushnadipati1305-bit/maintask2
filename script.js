document.getElementById("contactForm")
.addEventListener("submit", function(event){

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        event.preventDefault();
        return;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Enter a valid email address.");
        event.preventDefault();
        return;
    }

    alert("Form Submitted Successfully!");
});