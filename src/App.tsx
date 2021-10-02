import React, { FunctionComponent, lazy, Suspense, useMemo } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { NavbarRouteItem } from './components/Navbar/NavbarItem'

const Home = lazy(() => import('./pages/Home/Home'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const MarkdownPage = lazy(() => import('./pages/Markdown/MarkdownPage'));

export interface RouteProps {
    component?: FunctionComponent<{
        source?: string
    }>;
    source?: string;
}

const routes: NavbarRouteItem[] = [
    {
        label: 'Home',
        href: '/',
        component: Home,
    },
    {
        label: 'People',
        subs: [
            {
                label: 'Core Committee',
                href: '/people/committee',
                component: MarkdownPage,
                source: 'people/core-committee',
            },
            {
                label: 'Chairs',
                href: '/people/chairs',
                component: MarkdownPage,
                source: 'people/chairs',
            },
            {
                label: 'Tech',
                href: '/people/tech',
                component: MarkdownPage,
                source: 'people/tech',
            },
        ]
    },
    {
        label: 'Committees',
        subs: [
            {
                label: 'Security Council',
                href: '/committees/security',
                component: MarkdownPage,
                source: 'committees/security-council',
            },
            {
                label: 'Human Rights Council',
                href: '/committees/hr-council',
                component: MarkdownPage,
                source: 'committees/hr-council',
            },
            {
                label: 'Human Rights Committee',
                href: '/committees/hr-committee',
                component: MarkdownPage,
                source: 'committees/hr-committee',
            },
            {
                label: 'Speccom on Technology',
                href: '/committees/tech-speccom',
                component: MarkdownPage,
                source: 'committees/tech-speccom',
            },
            {
                label: 'Political',
                href: '/committees/political',
                component: MarkdownPage,
                source: 'committees/political',
            },
            {
                label: 'Ecofin',
                href: '/committees/ecofin',
                component: MarkdownPage,
                source: 'committees/ecofin',
            },
            {
                label: 'DISEC',
                href: '/committees/disec',
                component: MarkdownPage,
                source: 'committees/disec',
            },
            {
                label: 'Health & Social',
                href: '/committees/health',
                component: MarkdownPage,
                source: 'committees/health'
            },
        ],
    },
    {
        label: 'Crisis',
        href: '/crisis',
    },
    {
        label: 'Information',
        subs: [
            {
                label: 'Schedule',
                href: '/info/schedule',
            },
            {
                label: 'Timeline',
                href: '/info/timeline',
            },
            {
                label: 'Schools attending',
                href: '/info/schools',
            },
            {
                label: 'How to find us',
                href: '/info/directions',
            },
            {
                label: 'Advisers',
                href: '/info/advisers',
            },
        ]
    },
    {
        label: 'Gallery',
        href: '/gallery',
        component: Gallery,
    },
];

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
                            <Component source={route.source} />
                        </Route>
                    })}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
