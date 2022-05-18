/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

/* функция получения текущей даты */
function date_time() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth() + 1);
    var year = current_datetime.getFullYear();

    return "Новое пополнение " + day + "." + month + "." + year + "!";
}

/* выводим текущую дату на сайт в блок с id "carrentDate" */
document.getElementById('carrentDate').innerHTML = date_time();

