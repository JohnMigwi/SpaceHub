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
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'authohr' }],
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
      description: 'What the article entails',
    },
    {
      title: 'Blog Body',
      name: 'body',
      type: 'richText',
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
