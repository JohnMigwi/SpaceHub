exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  // path
  const SingleBlogTemplate = require.resolve('./src/templates/SingleBlog.js');

  const blogListTemplate = require.resolve('./src/templates/Blog-List.js');

  const categoryListTemplate = require.resolve(
    './src/templates/CategoryList.js'
  );

  const singleCategoryTemplate = require.resolve(
    './src/templates/SingleCategory.js'
  );

  const singleAuthorTemplate = require.resolve('./src/templates/Eachauthor.js');

  const AllAuthorsTemplate = require.resolve('./src/templates/AllAuthors.js');

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
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
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

  const categories = result.data.allSanityCategory.nodes;

  const authors = result.data.allSanityAuthor.nodes;

  // a single category to display component

  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });
  // Each blog page

  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: SingleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // all blogs
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });
  // categories
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/categories` : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });
  // single Author pages
  authors.forEach((author) => {
    createPage({
      path: `/authors/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  // Authors
  const totalAllAuthorsTemplate = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAllAuthorsTemplate }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/authors` : `/authors/${index + 1}`,
      component: AllAuthorsTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAllAuthorsTemplate,
        currentPage: index + 1,
      },
    });
  });
};
