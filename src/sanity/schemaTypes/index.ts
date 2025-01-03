import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import catagory from './catagory'
import heroimages from './heroImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , catagory, heroimages],
}
