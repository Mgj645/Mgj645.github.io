function addBlur() {
    document.getElementById("bodycontents").style.filter = "blur(5px)";
    document.getElementById("bodycontents").style.WebkitFilter = "blur(5px)";
}

function removeBlur() {
    document.getElementById("bodycontents").style.filter = "blur(0px)";
    document.getElementById("bodycontents").style.WebkitFilter = "blur(0px)";
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    addBlur();
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    removeBlur();
}

function showHome() {
    $("#contents").load("resources/html/home.html", fixFooterOverlap());
    document.getElementById("sidebar").style.width = "0";
    removeBlur();
}

function showLabs() {
    $("#contents").load("resources/html/labs.html", fixFooterOverlap());
    document.getElementById("sidebar").style.width = "0";
    removeBlur();
}

function showLab(index) {
    $("#contents").load("resources/html/lab" + index + ".html", fixFooterOverlap());
    document.getElementById("sidebar").style.width = "0";
    removeBlur();
}

function showProject() {
    $("#contents").load("resources/html/project.html", fixFooterOverlap());
    document.getElementById("sidebar").style.width = "0";
    removeBlur();
}

function showMembers() {
    document.getElementById("sidebar").style.width = "0";
    removeBlur();
    $("#contents").load("resources/html/members.html", fixFooterOverlap());
}

function loadPDF(url) {
    document.getElementById("contents").innerHTML = '<object data="' + url + '" type="application/pdf"> < /object>'
    fixFooterOverlap();
}

$(document).mouseup(function (e) {
    var container = $("#sidebar");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.width(0);
        removeBlur();
    }
});

function showLabsDropdown() {
    var displayed = $('#labs').css('display');
    $('#labs').slideToggle();
    if (displayed === 'none')
        document.getElementById("labsDDBtn").style.transform = "rotate(90deg)";
    else
        document.getElementById("labsDDBtn").style.transform = "rotate(-90deg)";
}

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

function fixFooterOverlap() {
    var contents = $("#bodycontents");
    var footer = $("#indexFooter");

    console.log(contents.height())
    console.log(collision(contents, footer));

}