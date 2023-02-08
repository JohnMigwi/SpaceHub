import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Blog Post',
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
    {
      title: 'Blog Body',
      name: 'body',
      type: 'bodyText',
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      PublishedAt: 'PublishedAt',
    },
    prepare({ image, title, PublishedAt }) {
      return {
        title,
        media: image,
        subtitle: PublishedAt
          ? format(new Date(PublishedAt), 'p, dd/MM/yyy')
          : '',
      };
    },
  },
};
