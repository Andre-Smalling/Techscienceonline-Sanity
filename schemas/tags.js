import { BiHash as icon } from 'react-icons/bi';

export default {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
