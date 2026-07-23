function validateBirthday(birthday) {
    const date = new Date(birthday);
    const today = new Date();
    const yearDif = today.getFullYear() - date.getFullYear();
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