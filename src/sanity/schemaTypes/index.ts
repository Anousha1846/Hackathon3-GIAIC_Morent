import { type SchemaTypeDefinition } from 'sanity';
import {homepage} from './homepage';
import {recommandedCars} from './recommandedCars';
import {cars} from './cars';
import {car} from './car';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    car,
    recommandedCars,
    cars
  ],
}
