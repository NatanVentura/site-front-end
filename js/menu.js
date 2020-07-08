function Menu(config){
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    
    this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;
    
    this.maxWidth = config.widthEnabled || false;
    
    var _this = this;
    this.btn.addEventListener('click', openOrClose);
    
    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > this.maxWidth){
                _this.nav.removeAttribute('style');
            } else if(!_this.nav.getAttribute('style')){
                closeMenu(_this);
                _this._opened = false;
            }
        })
        if(window.innerWidth <= _this.maxWidth){
            closeMenu(_this);
            _this._opened = false;
        }
    }
    
    
    function openOrClose() {
        if(_this._opened){
            closeMenu(_this);
        } else{
            openMenu(_this);
        }
        _this._opened = !_this._opened;
    }
}
function applyStyletoNav(_menu,_style){
            Object.keys(_style).forEach( stl => {
                _menu.nav.style[stl] = _style[stl];
            })
        }
function openMenu(menu){
        var _menu = menu;
        var _top = menu.nav.getBoundingClientRect().top + 'px';
        var _style = {
            maxHeight: 'calc(100vh - ' + _top + ')',
            overflow: 'hidden'

        }

        applyStyletoNav(_menu ,_style);
    }
    function closeMenu(menu){
        var _menu = menu;
        var _style = {
            maxHeight: '0px',
            overflow: 'hidden'

        }
        applyStyletoNav(_menu,_style);
    }