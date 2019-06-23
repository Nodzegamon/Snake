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