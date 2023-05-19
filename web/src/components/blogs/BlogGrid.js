import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            title={blog.title}
            // path={blog.slug.current}
            categories={blog.catogories}
            image={
              {
                // ImageData: blog.coverImage.asset.gatsbyImageData,
                // altText: blog.coverImage.alt,
              }
            }
            publishedAt={blog.publishedAt}
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
