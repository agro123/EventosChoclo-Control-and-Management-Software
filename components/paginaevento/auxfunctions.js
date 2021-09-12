
import {message} from 'antd';

export const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
export const isValidCvC = cvc => {
    const cvcCode = /^[0-9]{3,4}$/;

    let isValid = false;
    if (cvcCode.test(cvc)) {
        isValid = true;
    }else {
        message.error('El código cvc no es valido')
    }
    return isValid;
}
export const isValidCCNumber = ccNum => {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;

    let isValid = false;
    if (visaRegEx.test(ccNum)) {
        isValid = true;
    } else if (mastercardRegEx.test(ccNum)) {
        isValid = true;
    } else {
        message.error('El número de tarjeta crédito no es valido')
    }
    return isValid;
}
export const isValidEndDate = gtDate => {
    const goodThruDate = /^[0-3][0-9]([/])[2][1-9]$/
    let isValid = false;

    if (goodThruDate.test(gtDate)) {
        isValid = true;
    } else {
        message.error('La fecha de vencimiento de la tarjeta de crédito no es valida')
    }
    return isValid;
}

export const isFormComplete = obj => {
    let isOk = true;//valor por defecto(asume que todo esta bien)
    for (const property in obj) {
        //validar si faltan campos()
        if (obj[property] == '') {
            isOk = false;
            message.error('¡Complete todos los campos!');
            break;
        };
    }
    return isOk;
}