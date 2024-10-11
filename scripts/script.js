let soup_sum = 0;
let main_dish_sum = 0;
let drink_sum = 0;
let sum = 0;
dishes_array.sort((a, b) => a.name.localeCompare(b.name));

function select_dish(name, id, price){
    option1 = document.querySelector(`select[name='${name}'] option[value='1']`);
    option2 = document.querySelector(`select[name='${name}'] option[value='2']`);
    option3 = document.querySelector(`select[name='${name}'] option[value='3']`);
    option1.removeAttribute('selected');
    option2.removeAttribute('selected');
    option3.removeAttribute('selected');
    option = document.querySelector(`select[name='${name}'] option[value='${id}']`);
    option.setAttribute('selected', true);
    if (name == 'soup-choice'){
        soup_sum = price;
    }
    else if (name == 'main-dish-choice'){
        main_dish_sum = price;
    }
    else{
        drink_sum = price;
    }
    sum = soup_sum + main_dish_sum + drink_sum
    document.getElementById('order_h2').innerHTML = `Ваш заказ стоит ${sum} рублей`
}


dishes_array.forEach(dish => {

    dish_block = document.querySelectorAll(`[data-dish="${dish.keyword}"]`)[0];
    dish_block.innerHTML += `
                    <p class="price">${dish.price} рублей</p>
                    <p class="name">${dish.name}</p>
                    <p class="mass">${dish.count}</p>
                    <button>Добавить</button>
    `
});