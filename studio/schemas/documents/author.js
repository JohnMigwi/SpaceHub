import { MdPerson } from 'react-icons/md';

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'name',
      Image: 'profileImage',
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
