import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            path={blog.categories[0].slug.current}
            categories={blog.categories}
            myimg={blog.categories[0].coverImage.asset.gatsbyImageData}
            image={{
              altText: blog.categories[0].coverImage.alt,
            }}
            publishedAt={blog.publishedAt}
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
