import { title } from 'process';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Space Post',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'PublishedAt',
      name: 'PublishedAt',
      type: 'datetime',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
  ],
};
