(function () {
    'use strict';
    
    loadJS();
    
    var menu = new Menu({
        container: '.menu',
        toggleBtn: '.btnMenu',
        widthEnabled: 1024
    })
    var carousel = new Carousel({
        container: '.quotes',
        elements: '.quotes_quote',
        prev: '.prev',
        next: '.next'
    })
    var btnNav = new BtnNav({
        btn: '.btn_nav',
        menu: menu
    })
    /*
    var btnWho = new BtnNav({
        btn: '.btn_who',
        fixedMenu: '.header',
        menu: menu
    })
    var btnUs = new BtnNav({
        btn: '.btn_us',
        fixedMenu: '.header',
        menu: menu
    })
    var btnServices = new BtnNav({
        btn: '.btn_services',
        fixedMenu: '.header',
        menu: menu
    })
    
    var btnQuotes = new BtnNav({
        btn: '.btn_quotes',
        fixedMenu: '.header',
        menu: menu
    })
    var btnContact = new BtnNav({
        btn: '.btn_contact',
        fixedMenu: '.header',
        menu: menu
    })*/
 })()