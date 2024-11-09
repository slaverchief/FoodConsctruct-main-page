let soup_sum = 0;
let main_dish_sum = 0;
let drink_sum = 0;
let dessert_sum = 0;
let salad_sum = 0;  
let sum = 0;

load_all_blocks()

function trigger_notification(text){
    document.getElementById('notification').getElementsByTagName('p')[0].innerHTML = text;
    document.getElementById('notification').classList.remove('hidden');
}

function close_notification(){
    document.getElementById('notification').classList.add('hidden')
}

function pre_submit(){
    if (sum == 0){trigger_notification('Выберите что-нибудь для заказа')}
    else if (drink_sum == 0){trigger_notification('Выберите напиток')}
    else if (soup_sum != 0 && main_dish_sum == 0 && salad_sum == 0){trigger_notification('Выберите главное блюдо и салат')}
    else if (soup_sum == 0 || main_dish_sum == 0){trigger_notification('Выберите суп или главное блюдо')}
    else if (main_dish_sum == 0){trigger_notification('Выберите главное блюдо')}
    else{document.getElementsByTagName('form')[0].submit();}
        
}

function select_dish(name, id, price){
    let arr = null;
    if (name == 'soup') {arr = soup_array}
    else if (name == 'main_dish') {arr = dishes_array}
    else if (name == 'drink') {arr = drinks_array}
    else if (name == 'salad') {arr = salads_array}
    else if (name == 'dessert') {arr = desserts_array}

    arr.forEach(el => {
        document.querySelector(`select[name='${el.category}'] option[value='${el.select_id}']`).removeAttribute('selected')
    });
    option = document.querySelector(`select[name='${name}'] option[value='${id}']`);
    option.setAttribute('selected', true);
    if (name == 'soup'){
        soup_sum = price;
    }
    else if (name == 'main_dish'){
        main_dish_sum = price;
    }
    else if (name == 'drink'){
        drink_sum = price;
    }

    else if (name == 'dessert'){
        dessert_sum = price
    }
    else if (name = 'salad'){
        salad_sum = price
    }
    sum = soup_sum + main_dish_sum + drink_sum + dessert_sum + salad_sum
    document.getElementById('order_h2').innerHTML = `Ваш заказ стоит ${sum} рублей`
}