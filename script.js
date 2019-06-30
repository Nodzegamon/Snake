//создаем поле

let field= document.createElement("div"); //создали элемент div
document.body.appendChild(field);// добавляем этот div в body
field.classList.add("field");//создали класс field

//создаем 100 блоков-ячеек

for (let i=1; i<101; i++){
    let exel=document.createElement("div");
    field.appendChild(exel);
    exel.classList.add("exel");
}

//присваиваем координаты x и y ячейки, чтобы змея могла передвигаться

let exel=document.getElementsByClassName("exel");
let x=1;
let y=10;

for (let i=0; i<exel.length; i++){ /*при переборе i элемент exel будет получать новый атрибут posX со значением x и атрибут posY со значением y */
    if(x>10){
        x=1;
        y--;
    }
    exel[i].setAttribute("posX",x);
    exel[i].setAttribute("posY",y);
    x++;
}
 
// функция создания змеи. выдает два рандомных значения от 0 до 10, одно значение - координата по оси X, второе - по Y 

function generateSnake (){
    let posX=Math.round(Math.random() * (10-3)+3);
    let posY=Math.round(Math.random() * (10-1)+1);
    return [posX,posY];
}

let coordinates=generateSnake();

//создаем змею, массив из 3х соседних элементов-ячейки

let snakeBody=[document.querySelector('[posX="' + coordinates[0] + '"][posY="' + coordinates[1] + '"]'), 
document.querySelector('[posX="' + (coordinates[0] -1) + '"][posY="' + coordinates[1] + '"]'),
document.querySelector('[posX="' + (coordinates[0]- 2) + '"][posY="' + coordinates[1] + '"]')];

// добавляем всем элементам массива класс snakeBady, а первому элементу добавить класс head(голова)

for(let i=0; i<snakeBody.length; i++){
    snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('head');

//создаем мышь

let mouse;
function createMouse(){
    function generateMouse(){
        let posX=Math.round(Math.random() * (10-3)+3);
        let posY=Math.round(Math.random() * (10-1)+1);
        return [posX,posY];
    }
    let mouseCoordinates=generateMouse();
    mouse=document.querySelector('[posX="' + mouseCoordinates[0] + '"][posY="' + mouseCoordinates[1] + '"]');
    
//пишем цикл, чтобы мышь не отображалась поверх змеи
 
while(mouse.classList.contains('snakeBody')){
    let mouseCoordinates=generateMouse();
    mouse=document.querySelector('[posX="' + mouseCoordinates[0] + '"][posY="' + mouseCoordinates[1] + '"]');
}


    mouse.classList.add('mouse');//добавляем класс для мыши
}
createMouse();

//для того, чтобы змея двигалась 

let direction = 'right';
let steps = false;

let input = document.createElement('input');
document.body.appendChild(input);
input.style.cssText=`
margin: auto;
margin-top: 40px;
font-size: 30px;
display: block;
`;

let score=0;
input.value='Ваши очки: ${score}';

function move(){
    let snakeCoordinates=[snakeBody[0].getAttribute('posX'),snakeBody[0].getAttribute('posY')];//получили координаты головы
    snakeBody[0].classList.remove('head');
    snakeBody[snakeBody.length-1].classList.remove('snakeBody');
    snakeBody.pop();//удаляем последний элемент

if (direction=='right'){

    if(snakeCoordinates[0]<10){
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + '"]
        [posY ="' + snakeCoordinates[1] + '"]));
    } else {
        snakeBody.unshift (document.querySelector('[posX="1"[posY="' + snakeCoordinates[1] + '"]'))//помешаем в соседню ячейку
    }
}
else if (direction=='left'){

    if(snakeCoordinates[0] > 1){
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"]
        [posY ="' + snakeCoordinates[1] + '"]));
    } else {
        snakeBody.unshift (document.querySelector('[posX="10"[posY="' + snakeCoordinates[1] + '"]'))//помешаем в соседню ячейку
    }
}

f (direction=='up'){

    if(snakeCoordinates[1] < 10){
        snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0]  + '"]
        [posY ="' + snakeCoordinates[1] + '"]));
    } else {
        snakeBody.unshift (document.querySelector('[posX="' + snakeCoordinates[0] + '"]
        [posY ="1"]));
             
        ))//помешаем в соседню ячейку
    }
}
else if (direction=='down'){
    if(snakeCoordinates[1] > 1){
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + '"]
        [posY ="' + (snakeCoordinates[1] - 1)+ '"]));
    } else {
        snakeBody.unshift (document.querySelector('[posX="' + snakeCoordinates[0] + '"]
        [posY ="10"]));//помешаем в соседню ячейку
    }
}

//поедание мышей
if(snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && 
        snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY'){
            mouse.classList.remove('mouse');
            let a=snakeBody[snakeBody.length-1].getAttribute['posX'];
            let b=snakeBody[snakeBody.length-1].getAttribute['posY'];
            snakeBody.push(document.querySelector('[posX = "' + a + '"][posX = "' + a + '"][posY = "' + b + '"]'));
            createMouse();
            score++;
            input.value='Ваши очки: ${score}';
        }
)

if(snakeBody[0].classList.contains('snakeBody')){
        setTimeout( () => {
            alert ('Game Over');
          },200);
    clearInterval(interval);
    snakeBody[0].style.background= 'url(2.jpg) center no-repeat';
    snakeBody[0].style.backgroundSize= "cover";
}

    snakeBody[0].classList.add('head');
    for (let i=0; i< snakeBody.length;i++){
        snakeBody[i].classList.add('snakeBody');
    }

    step=true;
}

//чтобы заработала каждые 300мс функция mov
let iterval=setInterval(move,300);

//зададим управление со стрелок

window.addEventListener('keydown', function (e){
        if (steps == true){
            if(e.keyCode==37 && direction!='right') {
                direction='left';
                steps=false;
            }
            if(e.keyCode==38 && direction!='down') {
                direction='up';
                steps=false;
            }
            if(e.keyCode==39 && direction!='left') {
                direction='right';
                steps=false;
            }
            if(e.keyCode==40 && direction!='up') {
                direction='down';
                steps=false;
        }     
    }
});
