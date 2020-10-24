var btnTop = document.getElementById("btnTop");
var mediaQuery = window.matchMedia("(min-width: 768px)");

window.onscroll = function() {
    btnBacktoTop();
    SlideDownHeader();
};

function btnBacktoTop() {
    if (mediaQuery.matches) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    } else {
        btnTop.style.display = "none";
    }
};

function SlideDownHeader() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("popDiv").style.top = "0";
    } else {
        document.getElementById("popDiv").style.top = "-50px";
    } 
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
} 