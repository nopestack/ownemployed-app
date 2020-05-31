import About from 'pages/about/about'
import CreateProject from 'pages/projects/createProject'
import Home from 'pages/home/home'
import MemberProfile from 'pages/members/profile'
import Members from 'pages/members/members'
import ProjectProfile from 'pages/projects/profile'
import Projects from 'pages/projects/projects'
import SignUpForm from 'pages/signup/signup'
import TermsOfUse from 'pages/termsOfUse/termsOfUse'

export default [
    {
        component: About,
        path: '/about',
        exact: true,
    },
    {
        component: Home,
        path: '/',
        exact: true,
    },
    {
        component: Projects,
        path: '/projects',
        exact: true,
    },
    {
        component: Members,
        path: '/members',
        exact: true,
    },
    {
        component: ProjectProfile,
        path: '/projects/:projectProfileId',
    },
    {
        component: MemberProfile,
        path: '/members/:memberProfileId',
    },
    {
        component: SignUpForm,
        path: '/sign-up',
    },
    {
        component: CreateProject,
        path: '/create-project',
    },
    {
        component: TermsOfUse,
        path: '/terms-of-use',
    },
]
