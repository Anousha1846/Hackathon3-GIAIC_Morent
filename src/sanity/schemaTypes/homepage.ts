export const homepage = {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
      {
        name: 'card1',
        type: 'object',
        title: 'Card 1',
        fields: [
          {
            name: 'heading',
            type: 'string',
            title: 'Heading',
          },
          {
            name: 'paragraph',
            type: 'text',
            title: 'Paragraph',
          },
          {
            name: 'image',
            type: 'image',
            title: 'Image',
          },
          {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
          },
        ],
      },
      {
        name: 'card2',
        type: 'object',
        title: 'Card 2',
        fields: [
          {
            name: 'heading',
            type: 'string',
            title: 'Heading',
          },
          {
            name: 'paragraph',
            type: 'text',
            title: 'Paragraph',
          },
          {
            name: 'image',
            type: 'image',
            title: 'Image',
          },
          {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'card1.heading',
        subtitle: 'card1.paragraph',
        media: 'card1.image',
      },
    },
  };
  