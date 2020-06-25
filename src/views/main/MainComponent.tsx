import React, { useState, useEffect } from "react";
import "./MainComponent.scss";
import { get } from '../../server/axios';

import { Button } from '@material-ui/core';

interface IMainProps { }

const MainComponent: React.FunctionComponent<IMainProps> = (props) => {
    const [data, setData] = useState({});

    const getData = async () => {
        const res = await get('/');
        console.log('res==>', res.data);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, [])

    let [mainState, setMainContent] = useState<number>(0);

    return (
        <div className="MainContainer">
            <div>
                <h1>Main Page.</h1>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={event => setMainContent(mainState + 1)}>
                    {mainState}
                </Button>
                {data['1']}
            </div>
        </div >
    );
}

export default MainComponent;