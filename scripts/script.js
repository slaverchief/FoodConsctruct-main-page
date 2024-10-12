let soup_sum = 0;
let main_dish_sum = 0;
let drink_sum = 0;
let sum = 0;


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

let soup_block = document.getElementById('soup')
let div_blocks = ''
soup_array.forEach(dish => {
    div_blocks += `
                    <div data-dish="${dish.keyword}">
                    <img src="${dish.image}" alt="soup">
                    <p class="price">${dish.price} рублей</p>
                    <p class="name">${dish.name}</p>
                    <p class="mass">${dish.count}</p>
                    <button>Добавить</button>
                    </div>
    `
});
soup_block.innerHTML = `
    <h2>Выберите суп</h2>
    <div>
    ${div_blocks}
    </div>
`

let main_dish_block = document.getElementById('main_dish')
div_blocks = ''
dishes_array.forEach(dish => {
    div_blocks += `
                    <div data-dish="${dish.keyword}">
                    <img src="${dish.image}" alt="soup">
                    <p class="price">${dish.price} рублей</p>
                    <p class="name">${dish.name}</p>
                    <p class="mass">${dish.count}</p>
                    <button>Добавить</button>
                    </div>
    `
});
main_dish_block.innerHTML = `
    <h2>Выберите главное блюдо</h2>
    <div>
    ${div_blocks}
    </div>
`

let drink_block = document.getElementById('drinks')
div_blocks = ''
drinks_array.forEach(dish => {
    div_blocks += `
                    <div data-dish="${dish.keyword}">
                    <img src="${dish.image}" alt="soup">
                    <p class="price">${dish.price} рублей</p>
                    <p class="name">${dish.name}</p>
                    <p class="mass">${dish.count}</p>
                    <button>Добавить</button>
                    </div>
    `
});

drink_block.innerHTML = `
    <h2>Выберите напиток</h2>
    <div>
    ${div_blocks}
    </div>
`
