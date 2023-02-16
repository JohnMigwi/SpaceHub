import { MdCategory } from 'react-icons/md';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      Image: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, Image, slug }) {
      return {
        title,
        media: Image,
        subtitle: slug.current,
      };
    },
  },
};
