import { FunctionComponent, lazy } from 'react'
import { CommitteeConfig } from '../pages/Markdown/MarkdownPage'
import { NavbarRouteItem } from '../components/Navbar/NavbarItem'
import {
    DISEC,
    EcoFin,
    EnviroSci,
    HealthAndSocial,
    HRCommittee,
    HRCouncil,
    Political,
    Security,
    Speccom,
} from './committees'

const Home = lazy(() => import('../pages/Home/Home'));
const Gallery = lazy(() => import('../pages/Gallery/Gallery'));
const MarkdownPage = lazy(() => import('../pages/Markdown/MarkdownPage'));
const Directions = lazy(() => import('../pages/Directions/Directions'));

export interface RouteProps {
    component?: FunctionComponent<{
        source?: string
        watermark?: boolean
        committee?: CommitteeConfig;
    }>;
    source?: string;
    watermark?: boolean;
    committee?: Omit<CommitteeConfig, "name">;
}

export const routes: NavbarRouteItem[] = [
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
                committee: Security,
            },
            {
                label: 'SC Issue 1',
                href: '/committees/security/issue1',
                component: MarkdownPage,
                source: 'committees/security-council-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'SC Issue 2',
                href: '/committees/security/issue2',
                component: MarkdownPage,
                source: 'committees/security-council-2',
                hide: true,
                watermark: true,
            },

            {
                label: 'Human Rights Council',
                href: '/committees/hr-council',
                component: MarkdownPage,
                source: 'committees/hr-council',
                committee: HRCouncil,
            },
            {
                label: 'HRCl Issue 1',
                href: '/committees/hr-council/issue1',
                component: MarkdownPage,
                source: 'committees/hr-council-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'HRCl Issue 2',
                href: '/committees/hr-council/issue2',
                component: MarkdownPage,
                source: 'committees/hr-council-2',
                hide: true,
                watermark: true,
            },

            {
                label: 'Human Rights Committee',
                href: '/committees/hr-committee',
                component: MarkdownPage,
                source: 'committees/hr-committee',
                committee: HRCommittee,
            },
            {
                label: 'HRCo Issue 1',
                href: '/committees/hr-committee/issue1',
                component: MarkdownPage,
                source: 'committees/hr-committee-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'HRCo Issue 2',
                href: '/committees/hr-committee/issue2',
                component: MarkdownPage,
                source: 'committees/hr-committee-2',
                hide: true,
                watermark: true,
            },

            {
                label: 'Special Committee on Technology',
                href: '/committees/tech-speccom',
                component: MarkdownPage,
                source: 'committees/tech-speccom',
                committee: Speccom,
            },
            {
                label: 'Spec Issue 1',
                href: '/committees/tech-speccom/issue1',
                component: MarkdownPage,
                source: 'committees/tech-speccom-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'Spec Issue 2',
                href: '/committees/tech-speccom/issue2',
                component: MarkdownPage,
                source: 'committees/tech-speccom-2',
                hide: true,
                watermark: true,
            },

            {
                label: 'Political',
                href: '/committees/political',
                component: MarkdownPage,
                source: 'committees/political',
                committee: Political,
            },
            {
                label: 'Pol Issue 1',
                href: '/committees/political/issue1',
                component: MarkdownPage,
                source: 'committees/political-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'Pol Issue 2',
                href: '/committees/political/issue2',
                component: MarkdownPage,
                source: 'committees/political-2',
                hide: true,
                watermark: true,
            },

            {
                label: 'EcoFin',
                href: '/committees/ecofin',
                component: MarkdownPage,
                source: 'committees/ecofin',
                committee: EcoFin,
            },
            {
                label: 'Eco Issue 1',
                href: '/committees/ecofin/issue1',
                component: MarkdownPage,
                source: 'committees/ecofin-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'Eco Issue 2',
                href: '/committees/ecofin/issue2',
                component: MarkdownPage,
                source: 'committees/ecofin-2',
                hide: true,
                watermark: true,
            },

            {
                label: 'DISEC',
                href: '/committees/disec',
                component: MarkdownPage,
                source: 'committees/disec',
                committee: DISEC,
            },
            {
                label: 'DC Issue 1',
                href: '/committees/disec/issue1',
                component: MarkdownPage,
                source: 'committees/disec-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'DC Issue 2',
                href: '/committees/disec/issue2',
                component: MarkdownPage,
                source: 'committees/disec-2',
                hide: true,
                watermark: true,
            },

            {
                label: 'Health & Social',
                href: '/committees/health',
                component: MarkdownPage,
                source: 'committees/health',
                committee: HealthAndSocial,
            },
            {
                label: 'H Issue 1',
                href: '/committees/health/issue1',
                component: MarkdownPage,
                source: 'committees/health-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'H Issue 2',
                href: '/committees/health/issue2',
                component: MarkdownPage,
                source: 'committees/health-2',
                hide: true,
                watermark: true,
            },

            {
                label: "EnviroSci",
                href: '/committees/envirosci',
                component: MarkdownPage,
                source: 'committees/envirosci',
                committee: EnviroSci,
            },
            {
                label: 'ESci Issue 1',
                href: '/committees/envirosci/issue1',
                component: MarkdownPage,
                source: 'committees/envirosci-1',
                hide: true,
                watermark: true,
            },
            {
                label: 'H Issue 2',
                href: '/committees/envirosci/issue2',
                component: MarkdownPage,
                source: 'committees/envirosci-2',
                hide: true,
                watermark: true,
            },
        ],
    },
    {
        label: 'Crisis',
        href: '/crisis',
        component: MarkdownPage,
        source: 'crisis',
    },
    {
        label: 'Information',
        subs: [
            {
                label: 'Schedule',
                href: '/info/schedule',
                component: MarkdownPage,
                source: 'info/schedule'
            },
            {
                label: 'Timeline',
                href: '/info/timeline',
                component: MarkdownPage,
                source: 'info/timeline',
            },
            {
                label: 'Schools attending',
                href: '/info/schools',
                component: MarkdownPage,
                source: 'info/schools',
            },
            {
                label: 'How to find us',
                href: '/info/directions',
                component: Directions,
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
