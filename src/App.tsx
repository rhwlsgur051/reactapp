import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import MainComponent from "./views/main/MainComponent";

const loading = () => <div className="animated fadeIn pt-3 text-center" > Loading...</div>;


interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" render={props => <MainComponent {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;