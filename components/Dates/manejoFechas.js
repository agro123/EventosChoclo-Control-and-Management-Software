const fechaActual = new Date();

let fechaMas1 = new Date();

fechaMas1.setHours(fechaMas1.getHours() + 1);

const agregar0 = (hora) => {
  let hora0;
  if (String(hora).length == 1) {
    hora0 = "0" + hora;
  } else {
    hora0 = hora;
  }
  return hora0;
};
const horaActual = (tipo) => {
  const horaI = `${agregar0(fechaActual.getHours())}:${agregar0(
    fechaActual.getMinutes()
  )}`;
  const horaF = `${agregar0(fechaMas1.getHours())}:${agregar0(
    fechaMas1.getMinutes()
  )}`;
  return tipo ? horaI : horaF;
};

const semanaAc = (num) => {
  let dia = num;

  if (dia + 1 > 7) {
    dia = 0;
  }
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miercoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sabado";
  }
};

const mesAc = (num) => {
  let mes = num;
  if (mes + 1 > 12) {
    mes = 1;
  }
  switch (mes) {
    case 0:
      return "Enero";
    case 1:
      return "Febrero";
    case 2:
      return "Marzo";
    case 3:
      return "Abril";
    case 4:
      return "Mayo";
    case 5:
      return "Junio";
    case 6:
      return "Julio";
    case 7:
      return "Agosto";
    case 8:
      return "Septiembre";
    case 9:
      return "Octubre";
    case 10:
      return "Noviembre";
    case 11:
      return "Diciembre";
  }
};

const inicio = {
  semana: semanaAc(fechaActual.getDay()),
  dia: fechaActual.getDate(),
  mes: mesAc(fechaActual.getMonth()),
  año: fechaActual.getFullYear(),
  hora: horaActual(true),
};
const cierre = {
  semana: semanaAc(fechaMas1.getDay()),
  dia: fechaMas1.getDate(),
  mes: mesAc(fechaMas1.getMonth()),
  año: fechaMas1.getFullYear(),
  hora: horaActual(false),
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

const convertirMesNum = (mes) => {
  switch (mes) {
    case "Enero":
      return 1;
    case "Febrero":
      return 2;
    case "Marzo":
      return 3;
    case "Abril":
      return 4;
    case "Mayo":
      return 5;
    case "Junio":
      return 6;
    case "Julio":
      return 7;
    case "Agosto":
      return 8;
    case "Septiembre":
      return 9;
    case "Octubre":
      return 10;
    case "Noviembre":
      return 11;
    case "Diciembre":
      return 12;
  }
};

const convertDate = (date) => {
  const convertDate = String({ ...date }._d).split(" ");
  const dates = {
    semana: convertirSemana(convertDate[0]),
    mes: convertirMes(convertDate[1]),
    dia: parseInt(convertDate[2]),
    año: parseInt(convertDate[3]),
    hora: convertDate[4],
  };
  return dates;
};

const convertirImagen = (file) => {
  const formdata = new FormData();
  formdata.append("image", file);
  return formdata;
};

const validarFecha = (fechaI, fechaF) => {
  if (parseInt(fechaF.año) > parseInt(fechaI.año)) {
    return true;
  } else if (convertirMesNum(fechaF.mes) > convertirMesNum(fechaI.mes)) {
    return true;
  } else if (parseInt(fechaF.dia) > parseInt(fechaI.dia)) {
    return true;
  } else if (
    parseInt(fechaF.hora.substr(0, 2)) > parseInt(fechaI.hora.substr(0, 2))
  ) {
    return true;
  } else if (
    parseInt(fechaF.hora.substr(3, 2)) > parseInt(fechaI.hora.substr(3, 2))
  ) {
    return true;
  } else {
    return false;
  }
};

export {
  agregar0,
  semanaAc,
  convertirMes,
  cierre,
  inicio,
  convertDate,
  convertirImagen,
  fechaActual,
  fechaMas1,
  validarFecha,
};
