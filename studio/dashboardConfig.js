export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e00a39b99332e770fb5fe51',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-igu6xiht',
                  apiId: 'b9dc1e36-a501-42c0-b54e-5a360e371fbb'
                },
                {
                  buildHookId: '5e00a39bd2bde51abbdc640c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2a1iqsbq',
                  apiId: '65e7a018-e816-4207-8523-779d7cff0243'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webkomora/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2a1iqsbq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
