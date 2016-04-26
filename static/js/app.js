var openMenu = (function(){
    var menuBtn = document.getElementById('menuBtn');
    var menuBtnArrow = document.getElementById('menuBtnArrow');
    var content = document.getElementById('content');
    
    menuBtn.addEventListener('click', function() {
        content.classList.toggle('isOpen');
        menuBtnArrow.classList.toggle('menuBtnRotate');
    });
    
}());

openMenu();