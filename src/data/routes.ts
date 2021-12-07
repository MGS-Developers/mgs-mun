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
import Crisis from '../pages/Crisis/Crisis'

const Home = lazy(() => import('../pages/Home/Home'));
const Gallery = lazy(() => import('../pages/Gallery/Gallery'));
const MarkdownPage = lazy(() => import('../pages/Markdown/MarkdownPage'));
const Directions = lazy(() => import('../pages/Directions/Directions'));
const CommitteeList = lazy(() => import('../pages/CommitteeList/CommitteeList'));

export interface RouteProps {
    component?: FunctionComponent<{
        source?: string
        briefingPaper?: boolean
        committee?: CommitteeConfig;
    }>;
    source?: string;
    briefingPaper?: boolean;
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
                label: 'Head Chairs',
                href: '/people/chairs',
                component: MarkdownPage,
                source: 'people/chairs',
            },
        ]
    },
    {
        label: 'Committees',
        href: '/committees',
        component: CommitteeList,
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
                briefingPaper: true,
            },
            {
                label: 'SC Issue 2',
                href: '/committees/security/issue2',
                component: MarkdownPage,
                source: 'committees/security-council-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'HRCl Issue 2',
                href: '/committees/hr-council/issue2',
                component: MarkdownPage,
                source: 'committees/hr-council-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'HRCo Issue 2',
                href: '/committees/hr-committee/issue2',
                component: MarkdownPage,
                source: 'committees/hr-committee-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'Spec Issue 2',
                href: '/committees/tech-speccom/issue2',
                component: MarkdownPage,
                source: 'committees/tech-speccom-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'Pol Issue 2',
                href: '/committees/political/issue2',
                component: MarkdownPage,
                source: 'committees/political-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'Eco Issue 2',
                href: '/committees/ecofin/issue2',
                component: MarkdownPage,
                source: 'committees/ecofin-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'DC Issue 2',
                href: '/committees/disec/issue2',
                component: MarkdownPage,
                source: 'committees/disec-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'H Issue 2',
                href: '/committees/health/issue2',
                component: MarkdownPage,
                source: 'committees/health-2',
                hide: true,
                briefingPaper: true,
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
                briefingPaper: true,
            },
            {
                label: 'H Issue 2',
                href: '/committees/envirosci/issue2',
                component: MarkdownPage,
                source: 'committees/envirosci-2',
                hide: true,
                briefingPaper: true,
            },
        ],
    },
    {
        label: 'Crisis',
        href: '/crisis',
        component: Crisis,
        source: 'crisis',
    },
    {
        label: 'Delegates',
        subs: [
            {
                label: 'Dress code',
                href: '/delegates/dress-code',
                component: MarkdownPage,
                source: 'delegates/dress',
            },
            {
                label: 'Note paper',
                href: '/delegates/paper',
                component: MarkdownPage,
                source: 'delegates/paper',
            },
            {
                label: 'Awards',
                href: '/delegates/awards',
                component: MarkdownPage,
                source: 'delegates/awards',
            },
        ]
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
                label: 'Contact & directions',
                href: '/info/directions',
                component: Directions,
            },
            {
                label: 'Media licensing',
                href: '/info/media',
                component: MarkdownPage,
                source: 'info/media',
            }
        ]
    },
    {
        label: 'Gallery',
        href: '/gallery',
        component: Gallery,
    },
];
