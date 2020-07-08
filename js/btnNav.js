function BtnNav (config) {  
    this.btn = (typeof config.btn === 'string') ? document.querySelectorAll(config.btn) : config.btn;
    
    this.menu = (typeof config.menu === 'string') ? document.querySelectorAll(config.menu) : config.menu;
    
    var _this = this;
    
    
    Array.prototype.forEach.call(this.btn, function(btn){
        btn.addEventListener('click', closeMenuAfterScroll);
    })
    
    function closeMenuAfterScroll(){
        /*
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if(page !== "index.html"){
            window.location="index.html";
        }*/
        if(_this.menu){
            if(_this.menu._opened){
                closeMenu(_this.menu);
                _this.menu._opened = false;
            }
        }
        } 
    } 