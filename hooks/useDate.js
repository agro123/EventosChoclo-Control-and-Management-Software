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
        let f = (
            <div className="fecha">
                <div className="dia">{day(0) || "31"}</div>
                <div className="mes">{month(0) || "Septiembre"}</div>
            </div>
        )
        let u = ""
        if (!fi) {
            u =
                (
                    <>
                    Del
                    {f}
                    al
                    <div className="fecha">
                        <div className="dia">{day(1) || "31"}</div>
                        <div className="mes">{month(1) || "Septiembre"}</div>
                    </div>
                    </>
                )
        }else u=f
        return u;
    }

    return {
        month,
        day,
        year,
        sameDates,
    }
}
