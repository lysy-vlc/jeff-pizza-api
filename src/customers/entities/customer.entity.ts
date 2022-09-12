import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class Customer {
  @Field(() => String)
  email: string

  @Field(() => ID)
  id: number

  @Field(() => String)
  name: string

  @Field(() => String)
  lastName: string

  @Field(() => String)
  phoneNumber: string

  @Field(() => String)
  locale: string

  @Field(() => Boolean)
  elegibleCoupon: boolean

  @Field(() => String)
  coupon: string
}
