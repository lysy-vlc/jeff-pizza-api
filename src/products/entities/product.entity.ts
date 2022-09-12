import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number

  @Field(() => String)
  code: string

  @Field(() => String)
  reservationType: string

  @Field(() => String)
  name: string

  @Field(() => String)
  description: string
}
