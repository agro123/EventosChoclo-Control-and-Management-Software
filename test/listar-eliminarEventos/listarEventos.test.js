import React, { useContext, useEffect } from 'react';
import { mount } from 'enzyme';
import { CardProvider, CardContext } from '../../context/cardContext';
import { eventosTest } from './data';

const TestComponent = () => {
    const { eventos, changeData } = useContext(CardContext);
    useEffect(() => {
        changeData(eventosTest);  
    },[])
    return (<div>{eventos}</div>)
}

let wrapper = mount(
    <CardProvider >
        <TestComponent />
    </CardProvider>
)

describe('Probando CardContext', () => {
    test('Debe existir la cardEventos', () => {
        expect(wrapper.find('EventoCard').exists()).toBe(true);
        wrapper.unmount();
    })
})

