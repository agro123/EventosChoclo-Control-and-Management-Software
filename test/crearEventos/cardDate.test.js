import { shallow } from "enzyme";
import CardDate from "../../components/Dates/cardDate";
import { date } from "./data";

let wrapper = shallow(<CardDate {...date} />);

describe("Comprueba si los se estan pasando bien los datos", () => {
  test("Debe coincidir la prop semana", () => {
    const semana = wrapper.find("p").at(0).text();
    expect(semana).toBe("Domingo");
  });
  test("Debe coincidir la prop semana", () => {
    const dia = wrapper.find("p").at(1).text();
    expect(dia).toBe("18");
  });
  test("Debe coincidir la prop semana", () => {
    const mesAño = wrapper.find("p").at(2).text();
    expect(mesAño).toBe("Abril 2021");
  });

  test("Debe coincidir la prop semana", () => {
    const hora = wrapper.find("p").at(3).text();
    expect(hora).toBe("12:39");
  });
});
