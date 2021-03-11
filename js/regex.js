export class Validation {


    constructor(inputdat) {
        this.inputdat = inputdat;
        

    }


    checkEmail() {
        let emailRegex = /^[\w,.,_,-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let val=$('#email').val()

        if (emailRegex.test(val) != true) {
            $('#email').next().css({display:'block'})


        }if(emailRegex.test(val) == true){
            $('#email').next().css({display:'none'})
        }
    }

    checkPassword(elementId) {
        var passwordRegex=/^[A-Za-z0-9]{6,}$/;
        let val=$(elementId).val()

        if (passwordRegex.test(val) != true) {
            $(elementId).next().css({display:'block'})


        }if(passwordRegex.test(val) == true){
            $(elementId).next().css({display:'none'})
        }
    }



    checkPhone(elementId) {
        var phoneRegex=/^(002)?(01)[0-9]{9}$/;
        let val=$(elementId).val()

        if (phoneRegex.test(val) != true) {
            $(elementId).next().css({display:'block'})


        }
        if(phoneRegex.test(val) == true){
            $(elementId).next().css({display:'none'})
        }
    }

    checkage(elementId) {
        var ageRegex=/^[0-9]{2}$/;
        let val=$(elementId).val()

        if (ageRegex.test(val) != true) {
            $(elementId).next().css({display:'block'})


        }
        if(ageRegex.test(val) == true){
            $(elementId).next().css({display:'none'})
        }
    }


    checkName(elementId) {
        var nameRegex=/^[a-z A-Z]{3,15}\s[a-z A-Z]{3,15}$/;
        let val=$(elementId).val()

        if (nameRegex.test(val) != true) {
            $(elementId).next().css({display:'block'})


        }
        if(nameRegex.test(val) == true){
            $(elementId).next().css({display:'none'})
        }
    }



   


    }