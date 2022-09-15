import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '91b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '251'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c16'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '23a'),
    exact: true
  },
  {
    path: '/blog/tags/announcement',
    component: ComponentCreator('/blog/tags/announcement', '185'),
    exact: true
  },
  {
    path: '/blog/tags/announcements',
    component: ComponentCreator('/blog/tags/announcements', '82a'),
    exact: true
  },
  {
    path: '/blog/tags/differential-privacy',
    component: ComponentCreator('/blog/tags/differential-privacy', '843'),
    exact: true
  },
  {
    path: '/blog/tags/federated-learning',
    component: ComponentCreator('/blog/tags/federated-learning', '936'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4e5'),
    exact: true
  },
  {
    path: '/code-of-conduct',
    component: ComponentCreator('/code-of-conduct', '21f'),
    exact: true
  },
  {
    path: '/jobs',
    component: ComponentCreator('/jobs', 'f55'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '792'),
    exact: true
  },
  {
    path: '/resources',
    component: ComponentCreator('/resources', '4ba'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b1c'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c3f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
