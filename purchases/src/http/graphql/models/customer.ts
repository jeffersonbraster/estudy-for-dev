import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Purchase } from './purchases';

@ObjectType()
export class Customer {
  @Field(() => ID)
  id: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
