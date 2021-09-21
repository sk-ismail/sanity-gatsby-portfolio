export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614970c4939633588d3e20c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-istyv1h1',
                  apiId: '9f11ac92-39ea-443e-9f23-8f0f09aab720'
                },
                {
                  buildHookId: '614970c4c3e0ee68404be4d5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vigp5o55',
                  apiId: 'aee493a8-837f-4973-854f-90fb1a5185a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sk-ismail/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vigp5o55.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
