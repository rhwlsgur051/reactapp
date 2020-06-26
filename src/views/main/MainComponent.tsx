import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import "./MainComponent.scss";

interface IAppProps {
}

const MainComponent: React.FunctionComponent<IAppProps> = (props) => {
    const [data, setData] = useState({});
    
    let [mainState, setMainContent] = useState<number>(0);

    return (
        <div className="container">
            <div>
                Main
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={event => setMainContent(mainState + 1)}>
                    {mainState}
                </Button>
                {data.toString()}
            </div>
        </div >
    );
}

export default MainComponent;