const meses = ["no","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const useDate = (date) => { //recibe un arreglo strings que contienen fechas en formato aa-mm-dd y retorna un dato especifico de las fechas

    const cut = (num) => date[num].split('-');

    
    const day = (num) => cut(num)[2]; //num: es la posicion de la fecha que se desea usar

    const month = (num) => meses[parseInt(cut(num)[1])];

    const year = (num) => cut(num)[0];

    const sameDates = () => {
        let fi = false;
        date.map((v,i)=>{
            fi = (date[0] === v? true : false)
        })
        return fi;
    }

    return {
        month,
        day,
        year,
        sameDates,
    }
}
