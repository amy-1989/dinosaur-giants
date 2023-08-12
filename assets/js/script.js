/* for toggling between displaying and hiding the nav links when the burger menu is clicked */
function myFunction() { 
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
