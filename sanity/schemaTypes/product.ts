export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },

    {
      name: 'price',
      type: 'number',
      title: 'Price',
      options: {
        decimalScale: 2,
        fixedDecimalScale: true,
        allowNegative: false,
        decimalSeparator: ',',
        thousandSeparator: '.',
        prefix: '€ ',
      },
    },
    {
      name: 'category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
      title: 'Product Category',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of the Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'best_seller',
      type: 'boolean',
      title: 'Best Seller',
    },
  ],
}
