import { shallow } from "enzyme";
import CrearEventos from "../../pages/CrearEventos/index";

let wrapper = shallow(<CrearEventos />);

describe("Pruebas sobre el componente CrearEventos", () => {
  test("Validar cantidad de inputs", () => {
    let contador = 0;
    for (let i = 0; i < 8; i++) {
      if (wrapper.find("input").at(i)) {
        contador += 1;
      }
    }
    expect(contador).toEqual(8);
  });
  test("Validar cantidad de Cards", () => {
    let contador = 0;
    for (let i = 0; i < 2; i++) {
      if (wrapper.find("CardDate").at(i)) {
        contador += 1;
      }
    }
    expect(contador).toEqual(2);
  });
});
