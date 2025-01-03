export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'name of Product',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Image',
            of: [{type: 'image'}],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of product'
         },
         {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source : 'name'
            }
         },
         {
            name: 'price',
            type: 'number',
            title: 'Price',
         },{
            name : 'catagory',
            title: 'Product of Catagory',
            type: 'reference',
            to :[
               {
                 type: 'catagory'
               }
            ]
         }
    ]
}