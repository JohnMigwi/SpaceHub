import React from 'react';
import { Link } from 'gatsby';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';

function BlogItem({ title, path }) {
  return (
    <BlogItemStyles>
      <Link to={`/blogs/${path} `} />
    </BlogItemStyles>
  );
}

export default BlogItem;
