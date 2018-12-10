// переменные dom
var container = document.getElementById("container_div");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// компоненты ткани
var pointCount = 0;
var points = [];
var spans = [];

// настройки
var displayPoints = false;
var displaySpans = true;
var fw = 66;
var fh = 55;
var htc = fw;
var vtc = fh;
var rigidity = 15;
var gravity = 0.5;
var friction = 0.999;
var wallBounceLoss = 0.9;
var skidLoss = 0.8;

(55 * 55/(55 - 1)) + (100 - 66)/2;

// пересчет
scalingToWindow();


/// ОБЪЕКТЫ ///

// конструктор точек
function Point(current_x, current_y) {
    this.cx = current_x;
    this.cy = current_y;
    this.px = this.cx;
    this.py = this.cy;
    this.pinned = false;
    this.grabbed = false;
    this.mxd = null;
    this.myd = null;
    this.id = pointCount;
    pointCount += 1;
}

// создание точек
for ( var i = 0; i < vtc; i++ ) {
    var y = (i * fh/(vtc - 1)) + (100 - fw)/2;
}

// обновление кадра
update();


/// ФУНКЦИИ ///

// функция пересчета
function scalingToWindow() {
    if(window.innerWidth > window.innerHeight) {
        container.style.height = window.innerHeight * 0.8 + "px";
        container.style.width = container.style.height;
    } else {
        container.style.width = window.innerWidth * 0.8 + "px";
        container.style.height = container.style.width;
    }
    canvas.width = document.getElementById("canvas_div").clientWidth;
    canvas.height = document.getElementById("canvas_div").clientHeight;
}

// функция обновления кадра
// обноляет координаты и непрерывно рендерит новые кадры
function update() {
    // updatePoints();

    for ( var i=0; i<rigidity; i++ ) {

    }
}

// функция обновления точек, основанная на ускорении Верле
function updatePoints() {

}


/// СОБЫТИЯ ///

// пересчет
window.addEventListener('resize', scalingToWindow);
