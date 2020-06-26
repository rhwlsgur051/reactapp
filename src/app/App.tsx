import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/App.scss';
import './scss/Button.scss';

interface IAppProps { }

// MainPage
const DefaultLayout = React.lazy(() => import('../components/DefaultLayout'));

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <HashRouter>
      <React.Suspense fallback={null}>
        <Switch>
          <Route path="/" render={props => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;