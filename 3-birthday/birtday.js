// Сделать функцию валидации возраста. На вход передаётся строка даты рождения пользователя вида “2022-01-01”.
// Необходимо вывести true, если ему больше 14 лет и false, если меньше

function validateBirthday(birthday) {
    const date = new Date(birthday);
    const today = new Date();
    //console.log((today-date) / (1000 * 60 * 60 * 24 * 30 * 12))
    const yearDif = today.getYear() - date.getYear();
    if (yearDif > 14) {
        return true
    } else if (yearDif == 14) {
         if (today.getMonth() > date.getMonth()) {
            return true
         } else if (today.getMonth() == date.getMonth()) {
            if (today.getDate() > date.getDate()) {
                return true
            }
         }
    }
    return false
}