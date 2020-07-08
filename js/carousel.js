function Carousel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    
    this.element = (typeof config.elements === 'string') ? document.querySelectorAll(config.elements) : config.elements;
    
    this.prevBtn = (typeof config.prev === 'string') ? document.querySelector(config.prev) : config.prev;
    
    this.nextBtn = (typeof config.next === 'string') ? document.querySelector(config.next) : config.next;
    
    var _this = this;
    var elmNumber = 0
    init();
function init(){
    removeShow();
    _this.element[0].classList.add('show');
    
    _this.prevBtn.addEventListener('click', prev);
    _this.nextBtn.addEventListener('click', next);
}
function prev(){
    elmNumber--;
    show();
}
function next(){
    elmNumber++;
    show();
}
function removeShow(){
    var _show = document.querySelectorAll('.show');
    Array.prototype.forEach.call(_show, function(sh){
        sh.classList.remove('show');
    });
}
function show(){
    removeShow();
    if(elmNumber >= _this.element.length){
        elmNumber = 0;
    } else if(elmNumber < 0){
        elmNumber = _this.element.length -1;
    }
    _this.element[elmNumber].classList.add('show');
}
}