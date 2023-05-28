exports.createPages = async ({ graphql, actions }) => {
  // path
  const SingleBlogTemplate = require.resolve('./src/templates/SingleBlog.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;
  console.log('this is the result');
  console.log(result);

  // Each blog page
  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: SingleBlogTemplate,
      context: { id: blog.id },
    });
  });
};
