let deliveryButton = document.querySelector(".delivery_button");

let buttonA = document.querySelector(".image_2");
let buttonB = document.querySelector(".image_1");
let buttonC = document.querySelector(".image_3");
let buttonD = document.querySelector(".image_5");

deliveryButton.onclick = function()
{
    alert("Нажата кнопка выбора адреса");
};

buttonA.onclick = function()
{
    alert("Нажата категория 'Блины'");
};

buttonB.onclick = function()
{
    alert("Нажата категория 'Готовая еда'");
};
buttonC.onclick = function()
{
    alert("Нажата категория 'Здоровый образ жизни'");
};

buttonD.onclick = function()
{
    alert("Нажата категория 'Постная еда'");
};

