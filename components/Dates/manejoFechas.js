const inicio = {
  semana: "Lunes",
  dia: 24,
  mes: "Marzo",
  año: "2021",
  hora: "12:31:34",
};
const cierre = {
  semana: "Jueves",
  dia: 27,
  mes: "Marzo",
  año: "2021",
  hora: "14:31:27",
};

const convertirSemana = (semana) => {
  switch (semana) {
    case "Mon":
      return "Lunes";
    case "Tue":
      return "Martes";
    case "Wed":
      return "Miercoles";
    case "Thu":
      return "Jueves";
    case "Fri":
      return "Viernes";
    case "Sat":
      return "Sabado";
    case "Sun":
      return "Domingo";
  }
};

const convertirMes = (mes) => {
  switch (mes) {
    case "Jan":
      return "Enero";
    case "Feb":
      return "Febrero";
    case "Mar":
      return "Marzo";
    case "Apr":
      return "Abril";
    case "May":
      return "Mayo";
    case "Jun":
      return "Junio";
    case "Jul":
      return "Julio";
    case "Aug":
      return "Agosto";
    case "Sep":
      return "Septiembre";
    case "Oct":
      return "Octubre";
    case "Nov":
      return "Noviembre";
    case "Dec":
      return "Diciembre";
  }
};

export { convertirSemana, cierre, inicio, convertirMes };
