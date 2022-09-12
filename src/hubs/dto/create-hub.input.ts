import { InputType, Int, Field, Float } from '@nestjs/graphql'

@InputType()
export class CreateHubInput {
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
