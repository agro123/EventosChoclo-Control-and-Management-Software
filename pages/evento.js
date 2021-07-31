import React from 'react'

export default function Evento() {
    return (
        <>
            <div className="background-evento">
                <div className="background-img"
                    style={{ backgroundImage: "url(https://valledelpacifico.co/wp-content/uploads/2019/12/cevp-home2.jpg)" }}
                ></div>
                <img alt="example"
                    className="image"
                    src={
                        "https://valledelpacifico.co/wp-content/uploads/2019/12/cevp-home2.jpg"}
                />
                <h1>Titulo del Evento</h1>
            </div>
            <div className="eventos">
                <div className="descripcion-evento">
                    <div className="descripcion-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div>
                        aqui van las fechas
                    </div>
                    <div className="informacion">
                        aqui va el resto de cosas
                    </div>  
                </div>
                <div>
                    Aca van los botones    
                </div>
            </div>
        </>
    )
}
