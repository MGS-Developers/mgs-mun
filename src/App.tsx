import React, { FunctionComponent, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { NavbarItemProps } from './components/Navbar/NavbarItem'

const Home = lazy(() => import('./pages/Home/Home'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));

interface RouteProps extends NavbarItemProps {
    component?: FunctionComponent;
}

const routes: RouteProps[] = [
    {
        label: 'Home',
        href: '/',
        component: Home,
    },
    {
        label: 'Gallery',
        href: '/gallery',
        component: Gallery,
    },
    {
        label: 'Committees',
        subs: [
            {
                label: 'Security Council',
                href: '/committees/security',
            },
            {
                label: 'Historical Council',
                href: '/committees/historical',
            },
            {
                label: 'Political + Disarmament',
                href: '/committees/political',
            },
            {
                label: 'Human Rights',
                href: '/committees/human-rights',
            },
            {
                label: 'Health',
                href: '/committees/health',
            },
            {
                label: 'Youth',
                href: '/committees/youth',
            },
            {
                label: 'Science, Technology, Media',
                href: '/committees/stm',
            }
        ],
    },
    {
        label: 'Crisis',
        href: '/crisis',
    }
];

function App() {
    return (
        <BrowserRouter>
            <Navbar items={routes} />

            <Suspense fallback={<></>}>
                <Switch>
                    { routes.filter(e => !!e.href && !!e.component).map(route => <Route
                        key={route.label}
                        path={route.href}
                        component={route.component}
                        exact
                    />) }
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
