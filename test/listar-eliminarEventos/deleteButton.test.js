import React, { useContext, useEffect } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import DeleteButton from '../../components/listareventos/deletebutton';
import { ReloadProvider } from '../../context/reloadcontext';

/* const TestComponent = () => {
    const { changeData } = useContext(CardContext);
    useEffect(async () => {
        const data = await getEventos();
        if (data) {
            changeData(data);
        }
    }, [])
    return (<><DeleteButton id={123} /></>)
} */

const wrapper = mount(
    <ReloadProvider >
        <DeleteButton id={123} />
    </ReloadProvider>

)

describe('Probando DeleteButton', () => {
    /* const clickDelete = () => wrapper.find('AntdIcon').simulate('click');
    //pos puede ser 0 para cancelar o 1 para confirmar
    const clickConfirm = (pos) => wrapper.find('button').at(pos).simulate('click') */

    test('Boton confirmar', async () => {
        /*  clickDelete(); */
        expect(wrapper.find('DeleteButton')).toMatchSnapshot()
        /*         clickConfirm(1);
                const found = await getEventoById(123); */
    })
    /* test('Boton cancelar', async () => {
        expect(wrapper.find('DeleteButton')).toMatchSnapshot()
        clickDelete();
        clickConfirm(0);
        const found = await getEventoById(123);
        expect(found).toMatch({})
    })  */
})