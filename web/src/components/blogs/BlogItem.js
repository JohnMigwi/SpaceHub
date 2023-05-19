import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';

function BlogItem({ title }) {
  return <BlogItemStyles>{title}</BlogItemStyles>;
}

export default BlogItem;
