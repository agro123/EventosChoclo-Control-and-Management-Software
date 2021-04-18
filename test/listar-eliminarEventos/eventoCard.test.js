import { shallow } from 'enzyme';
import EventoCard from '../../components/listarEventos/eventoCard';
import { eventosTest } from './data';
import { useDate } from '../../hooks/useDate';

let wrapper = shallow(
    <EventoCard info={eventosTest[0]} />
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
    const changeDates = () => {
        wrapper.setProps({
            info: {
                ...eventosTest[0],
                fecha_inicial: '27/8/2021',
                fecha_final: '27/8/2021'
            }
        })
    }
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

describe('Probando metodo year de useDates', () => {
    test('Debe de retornar el año', () => {
        const { year } = useDate(['29/2/2000']);
        expect(year(0)).toMatch('2000')
    })
})

