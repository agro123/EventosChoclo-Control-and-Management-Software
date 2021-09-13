import { shallow, mount } from 'enzyme';
import EventoCard from '../../components/listareventos/eventocard';
import { useDate } from '../../hooks/usedate';
import { eventosTest } from './data';

let wrapper = shallow(
    <EventoCard info={eventosTest[0]} />
);

const fechas = (pos, className) => wrapper.find(className).at(pos).text();

describe(('Probando renderizado fechas diferentes'), () => {

    //El componente cardEvento renderiza dos fechas  si son diferentes
    test('Debe existir el día de la fecha inical ', () => {
        expect(fechas(0, '.dia')).toMatch('29');
    })
    test('Debe existir el mes de la fecha inical', () => {
        expect(fechas(0, '.mes')).toMatch('Feb');
    })
    test('Debe existir el día de la fecha final', () => {
        expect(fechas(1, '.dia')).toMatch('5');
    })
    test('Debe existir el mes de la fecha final', () => {
        expect(fechas(1, '.mes')).toMatch('Mar');
    })
})

describe('Probando renderizado fechas iguales', () => {
    //Cuando el componente recibe dos fechas iguales se muestra solo la fecha inicial
    const changeDates = () => {
        wrapper.setProps({
            info: {
                ...eventosTest[0],
                fecha_inicial: '2000-02-29',
                fecha_final: '2000-02-29'
            }
        })
    }
    test('Debe existir el día de la fecha inical', () => {
        changeDates();
        expect(fechas(0, '.dia')).toMatch('29');
    })
    test('Debe  existir el mes de la fecha inical', () => {
        changeDates();
        expect(fechas(0, '.mes')).toMatch('Feb');
    })
    test('No debe existir otra fecha', () => {
        changeDates();
        expect(wrapper.find('.dia').at(1).exists()).toBe(false);
    })
})

describe('Probando renderizado de card', () => {
    test('Debe de retornar el año', () => {
        const { year } = useDate(['2000-02-29']);
        expect(year(0)).toMatch('2000')
    })
    test('Debe de retornar el nombre del día', () => {
        const { dayName } = useDate(['2000-02-29']);
        expect(dayName(0)).toMatch('Martes')
    })

    test('Probando titulo de la Card', () => {
        expect(wrapper.find('.titleCard').text()).toMatch('TomorrowLand');
    })

    test('Probando imagen de la card', () => {
        expect(wrapper.find('[src="/defaultImg.jpg"]').exists()).toBe(true);
    })
})