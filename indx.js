


var barUsers = document.querySelector(".js-barUsers");
var barGb = document.querySelector(".js-barGb");
var barRepos = document.querySelector(".js-barRepos");
var rookie = document.querySelector(".js-rookie");
var pro = document.querySelector(".js-pro");
var vip = document.querySelector(".js-vip");




rookie.onmouseover = function hover1() {
    barUsers.style.width="5%"
    barGb.style.width="5%"
    barRepos.style.width="5%"
}
rookie.onmouseout = function hover() {
    barUsers.style.width="0"
    barGb.style.width="0"
    barRepos.style.width="0"
}


pro.onmouseover = function hover2() {
    barUsers.style.width="20%"
    barGb.style.width="70%"
    barRepos.style.width="50%"
}
pro.onmouseout = function hover() {
    barUsers.style.width="0"
    barGb.style.width="0"
    barRepos.style.width="0"
}


vip.onmouseover = function hover() {
    barUsers.style.width="100%"
    barGb.style.width="100%"
    barRepos.style.width="100%"
}
vip.onmouseout = function hover() {
    barUsers.style.width="0"
    barGb.style.width="0"
    barRepos.style.width="0"
}