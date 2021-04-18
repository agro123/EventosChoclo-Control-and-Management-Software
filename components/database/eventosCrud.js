import data from './data.json';
const { eventos } = data;

export const getEventos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eventos) {
                resolve(eventos)
            } else {
                reject('No hay eventos')
            }
        }, 1000)
    })
}

export const deleteEvento = id => {
    return new Promise((resolve, reject) => {
        let found = false;
        setTimeout(() => {
            eventos.map((v, i) => {
                if (v.id === id) {
                    found = true;
                    eventos.splice(i, 1);
                }
            })
            found?resolve(true): reject(false);
        }, 1500)
    })
}

export const getEventoById = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const evento = eventos.find( evento => evento.id === id );
            evento? resolve(evento) : reject('Not found');
        }, 1000)
    })
}