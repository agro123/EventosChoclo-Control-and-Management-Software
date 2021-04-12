import { configure, mount } from 'enzyme';
import adapter from 'enzyme-adapter-react-17-updated';
import Carrusel from '../components/listarEventos/carrusel';
import { CardProvider } from '../context/cardContext';
/* import ListarEventos from '../pages/eventosAdmin/listarEventos'; */

//Cristian Medina 1824150
configure({
    adapter: new adapter()
})

let wrapper = mount(
    <CardProvider>
        <Carrusel />
    </CardProvider>
)

describe('Probando Renderizado de cardEventos', () => {
    test('Deben aparecer todas las cardEventos ', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
})
