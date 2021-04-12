import { configure, shallow } from 'enzyme';
import adapter from 'enzyme-adapter-react-17-updated';
import EventoCard from '../components/listarEventos/eventoCard';
//Cristian Medina 1824150
configure({
    adapter: new adapter()
})

//componente

let wrapper = shallow(
    <EventoCard
        imagen={'https://upload.wikimedia.org/wikipedia/commons/8/8f/Tomorrowland2015.jpg'}
        titulo={'TomorrowLand'}
        fecha_inicial={'27/8/2021'}
        fecha_final={'5/9/2021'}
        descripcion={"Tomorrowland es un festival de y música electrónica"}
        lugar={'Boom, Amberes'}
        id={123}
    />
);

const fechas = (pos, className) => wrapper.find(className).at(pos).text();

describe(('Probando renderizado fechas diferentes'), () => {

    //El componente cardEvento renderiza dos fechas  si son diferentes
    test('Debe existir el día de la fecha inical ', () => {
        expect(fechas(0, '.dia')).toMatch('27');
    })
    test('Debe existir el mes de la fecha inical', () => {
        expect(fechas(0, '.mes')).toMatch('Agosto');
    })
    test('Debe existir el día de la fecha final', () => {
        expect(fechas(1, '.dia')).toMatch('5');
    })
    test('Debe existir el mes de la fecha final', () => {
        expect(fechas(1, '.mes')).toMatch('Septiembre');
    })
})

describe('Probando renderizado fechas iguales', () => {
    //Cuando el componente recibe dos fechas iguales se muestra solo la fecha inicial
    const changeDates = () => {wrapper.setProps({
        fecha_inicial: '27/8/2021',
        fecha_final: '27/8/2021'
    })}
    test('Debe existir el día de la fecha inical', () => {
        changeDates();
        expect(fechas(0, '.dia')).toMatch('27');
    })
    test('Debe  existir el mes de la fecha inical', () => {
        changeDates();
        expect(fechas(0, '.mes')).toMatch('Agosto');
    })
    test('No debe existir otra fecha', () => {
        changeDates();
        expect(wrapper.find('.dia').at(1).exists()).toBe(false);
    })
})

