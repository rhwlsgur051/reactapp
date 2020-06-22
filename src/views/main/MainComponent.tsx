import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./MainComponent.scss";

interface IMainProps { }

const MainComponent: React.FunctionComponent<IMainProps> = (props) => {
    return (
        <div className="MainContainer">
            Main Page.
        </div>
    );
}

export default MainComponent;