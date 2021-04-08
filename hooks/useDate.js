export const useDate = (date) => { //recibe un arreglo strings que contienen fechas en formato dd/mm/aa y retorna un dato especifico de las fechas
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const cut = (num) => date[num].split('/');
    
    const day = (num) => cut(num)[0]; //num: es la posicion de la fecha que se desea usar

    const month = (num) => meses[cut(num)[1]];

    const year = (num) => cut(num)[2];

    const sameDates = () => {
        let fi = false;
        date.map((v,i)=>{
            fi = date[0] === v? true : false; 
        })
        return fi;
    }

    return {
        month,
        day,
        year,
        sameDates
    }
}
