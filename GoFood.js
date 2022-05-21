let deliveryButton = document.querySelector(".delivery_button");

let buttonPopularA = document.querySelector(".image_3");

let buttonDairyA = document.querySelector(".image_12");

deliveryButton.onclick = function()
{
    prompt('Куда доставить?');
};

buttonPopularA.onclick = function()
{
    alert("Нажата категория 'Здоровый образ жизни'");
};

buttonDairyA.onclick = function()
{
    alert("Нажата категория 'Сыры'");
};