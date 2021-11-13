import React, { Suspense, useMemo } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { NavbarRouteItem } from './components/Navbar/NavbarItem'
import Footer from './components/Footer/Footer'
import styles from './styles/App.module.scss';
import { routes } from './data/routes';

function App() {
    const flattenedRoutes = useMemo(() => {
        const l: NavbarRouteItem[] = [];
        for (const route of routes) {
            if (!!route.href && !!route.component) {
                l.push(route);
            }

            if (route.subs) {
                for (const sub of route.subs) {
                    if (sub.component) {
                        l.push(sub);
                    }
                }
            }
        }

        return l;
    }, []);

    return (
        <BrowserRouter>
            <Navbar items={routes} />

            <section className={styles.page}>
                <Suspense fallback={<></>}>
                    <Switch>
                        { flattenedRoutes.map(route => {
                            const Component = route.component;
                            if (!Component) return <React.Fragment key={route.label}/>;

                            return <Route
                                key={route.label}
                                path={route.href}
                                exact
                            >
                                <Component
                                    source={route.source}
                                    briefingPaper={route.briefingPaper}
                                    committee={route.committee && {
                                        ...route.committee,
                                        name: route.label,
                                    }}
                                />
                            </Route>
                        })}
                    </Switch>
                </Suspense>
            </section>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;
