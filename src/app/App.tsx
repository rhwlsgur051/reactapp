import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/App.scss';
import './scss/Button.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center" > Loading...</div>;

interface IAppProps { }

// MainPage
const DefaultLayout = React.lazy(() => import('../components/DefaultLayout'));

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" render={props => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;