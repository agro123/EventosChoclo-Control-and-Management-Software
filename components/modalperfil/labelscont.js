import {useState} from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Popover } from 'antd';
import EditInput from './editinput';

const LabelsCont = ({ label, value, setUser, user }) => {
    const [visible,setVisible] = useState(false)
    return (
        <div className='cont-label'>
            <label className='labelP'>
                <h4>{`${label}: `}</h4>
                <div className='label-p'>
                    <p>{value}</p>
                    <button className='editButton'>
                        <Popover
                            content={<EditInput value={value} setUser={setUser} 
                                label={label} visible={visible} 
                                setVisible = {setVisible} user={user} />}
                            title={`Editar ${label}`}
                            trigger="click"
                            visible={visible}
                            onVisibleChange={() => setVisible(!visible)}
                        >
                            <EditOutlined />
                        </Popover>
                        
                    </button>
                </div>
            </label>
        </div>
    )
}

export default LabelsCont
