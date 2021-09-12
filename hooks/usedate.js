const meses = ["no", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago",
    "Sep", "Oct", "Nov", "Dic"];
const DAYS_OF_WEEK = 
[
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]
export const useDate = (date) => { //recibe un arreglo strings que contienen fechas en formato aa-mm-dd y retorna un dato especifico de las fechas

    const cut = num => date[num].split('-');

    const day = num => cut(num)[2]; //num: es la posicion de la fecha que se desea usar

    const month = num => meses[parseInt(cut(num)[1])];

    const monthNumber = num => parseInt(cut(num)[1]);

    const year = (num) => cut(num)[0];
    
    const dayName = num => {
        const d = new Date (year(num), monthNumber(num)-1,day(num)).getDay();
        const name = DAYS_OF_WEEK[d];
        return name;
    }

    let isSameDates = () => {
        let f = false;
        date.map((v, i) => {
            f = (date[0] === v ? true : false)
        })
        return f;
    };

    const sameDates = () => {
        let f = (
            <div className="fecha">
                <div className="dia">{day(0) || "31"}</div>
                <div className="mes">{month(0) || "Sept"}</div>
            </div>
        )
        let u = ""
        if (!isSameDates()) {
            u =
                (
                    <>
                        {f}
                        al
                        <div className="fecha">
                            <div className="dia">{day(1) || "31"}</div>
                            <div className="mes">{month(1) || "Sept"}</div>
                        </div>
                    </>
                )
        } else u = f
        return u;
    }

    return {
        month,
        day,
        year,
        sameDates,
        isSameDates,
        dayName
    }
}
