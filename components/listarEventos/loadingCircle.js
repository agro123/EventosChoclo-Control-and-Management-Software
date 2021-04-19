import React, { useState } from 'react'
import { Progress, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const LoadingCircle = () => {
    const [percent, setPercent] = useState(0)
    const increase = () => {
        let p = percent + 10;
        if (p > 100) {
            pe = 100;
        }
        setPercent(percent);
    };
    const decline = () => {
        let p = percent - 10;
        if (p < 0) {
            p = 0;
        }
        setPercent(p);
    };
    return (
        <>
            <Progress
                type="circle"
                strokeColor={{
                    "0%": "#9EDE73",
                    "50%": "#F7EA00",
                    "100%": "#E48900"
                }}
                percent={percent}
            />
            <Button.Group>
                <Button onClick={decline} icon={<MinusOutlined />} />
                <Button onClick={increase} icon={<PlusOutlined />} />
            </Button.Group>

        </>
    )
}

export default LoadingCircle;