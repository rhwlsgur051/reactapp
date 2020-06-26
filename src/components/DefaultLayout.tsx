import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";

import { AppSidebar, AppSidebarNav } from "@coreui/react";
import navigation from "../_nav";
import routes from "../routes";
import DefaultHeader from "./DefaultHeader";

interface IAppProps { }

const DefaultLayout: React.FunctionComponent<IAppProps> = props => {

    return (
        <div className="app">
            <div className="app-header">
                <Suspense fallback={null}>
                    <DefaultHeader />
                </Suspense>
            </div>
            <div className="app-body">
                <div className="sidebar">
                    <AppSidebar fixed display="lg">
                        <Suspense fallback={null}>
                            <AppSidebarNav className="side-menu" navConfig={navigation} {...props} router={router} />
                        </Suspense>
                    </AppSidebar>
                </div>
                <main className="body-layout">
                    <Suspense fallback={null}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        // name={route.name}
                                        render={props => (
                                            <route.component {...props} />
                                        )}
                                    />
                                ) : (null);
                            })}
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </div>
    );
}

export default DefaultLayout;