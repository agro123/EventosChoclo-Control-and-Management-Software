import {
  agregar0,
  semanaAc,
  convertirMes,
  validarFecha,
} from "../../components/dates/manejofechas";
import { dateF, dateI } from "./data";

describe("Test Funciones manejo de fechas", () => {
  test("agreagar un 0 al numero si es menor a 10", () => {
    const num = agregar0(5);
    expect(num).toBe("05");
  });
  test("Por medio de un numero dado, devolver el dia de la semana", () => {
    const semana = semanaAc(6);
    expect(semana).toBe("Sabado");
  });
  test("Convertir del mes en ingles a español", () => {
    const mes = convertirMes("Jan");
    expect(mes).toBe("Enero");
  });
  test("Valida que una fecha sea menor que otra", () => {
    const validar = validarFecha(dateI, dateF);
    expect(validar).toBe(true);
  });
});
