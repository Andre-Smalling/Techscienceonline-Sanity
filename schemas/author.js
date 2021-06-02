import { RiUser3Line as icon } from 'react-icons/ri';

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL to your profile.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Add a high-quality image showing your face.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
      description: 'What do you do?',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      description: 'Tell us anything you want to share about yourself.',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'datejoined',
      title: 'Date Joined',
      type: 'date',
      description: 'When did you join the forum?',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
