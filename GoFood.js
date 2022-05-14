let deliveryButton = document.querySelector(".delivery_button");

let buttonPopularA = document.querySelector(".image_3");

let buttonShopA = document.querySelector(".shopA");

let buttonDairyA = document.querySelector(".image_12");

deliveryButton.onclick = function()
{
    alert("Нажата кнопка выбора адреса");
};

buttonPopularA.onclick = function()
{
    alert("Нажата категория 'Здоровый образ жизни'");
};

buttonShopA.onclick = function()
{
    alert("Нажата кнопка магазина 'A'");
};

buttonDairyA.onclick = function()
{
    alert("Нажата категория 'Сыры'");
};