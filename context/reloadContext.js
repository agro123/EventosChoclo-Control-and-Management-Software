import { createContext, useState } from 'react';

export const ReloadContext = createContext();

export const ReloadProvider = ({ children }) => {
    const [reload, setReload] = useState(true);

    const onChange = () => {
        setReload(!reload);
    }


    return (
        <ReloadContext.Provider value={
            {
                reload,
                onChange
            }
        }>
            {children}
        </ReloadContext.Provider>
    )
}
