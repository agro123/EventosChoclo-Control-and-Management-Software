import React from 'react'
import PropTypes from 'prop-types'
import FechasEvento from '../Dates/fechasEvento'
import DateDisplay from './dateDisplay'

function SliderEventos(props) {
    return (
        <div className="sliderEventos">
            <div className="background-slider">
                <div className="background-img"
                    style={{ backgroundImage: "url(https://valledelpacifico.co/wp-content/uploads/2019/12/cevp-home2.jpg)" }}
                ></div>
                <div className="slider-card">
                    <div 
                        className="slider-img"
                        style={{ backgroundImage: "url(https://valledelpacifico.co/wp-content/uploads/2019/12/cevp-home2.jpg)" }}
                    ></div>
                    <div className="slider-text">
                        <h2 >Titulo del Evento</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    <DateDisplay key="1" />
                    <DateDisplay key="2" />
                </div>
            </div>
        </div>
    )
}

SliderEventos.propTypes = {

}

export default SliderEventos

