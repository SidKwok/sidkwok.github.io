import App from './App';
import PostPage from './views/PostPage';
import AboutPage from './views/AboutPage';
import ProjectsPage from './views/ProjectsPage';

export default [
    {
        path: '/',
        name: 'root-page',
        component: App,
        children: [
            {
                path: 'post',
                name: 'post-page',
                component: PostPage
            },
            {
                path: 'about',
                name: 'about-page',
                component: AboutPage
            },
            {
                path: 'projects',
                name: 'projects-page',
                component: ProjectsPage
            }
        ]
    }
];
