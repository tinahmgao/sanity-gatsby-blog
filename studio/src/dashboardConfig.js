export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ca8f30d203bd0fd0b203c7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ywwdavbz",
                  apiId: "cf92d48c-d11c-43ba-acd6-c6a8d15a4689",
                },
                {
                  buildHookId: "62ca8f31a4c6be12124e856e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-b71tydzo",
                  apiId: "a0b80aa7-e944-4387-a049-540fb631e9da",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tinahmgao/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-b71tydzo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
