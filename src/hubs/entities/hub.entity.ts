import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql'

@ObjectType()
export class Hub {
  @Field(() => ID)
  id: number

  @Field(() => String)
  name: string

  @Field(() => String)
  code: string

  @Field(() => String)
  address: string

  @Field(() => String)
  addressNumber: string

  @Field(() => Float)
  addressLocationLatitude: number

  @Field(() => Float)
  addressLocationLongitude: number
}
