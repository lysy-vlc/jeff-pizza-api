import { InputType, Int, Field, OmitType, ID } from '@nestjs/graphql'
import { Customer } from '../entities/customer.entity'

@InputType()
export class CreateCustomerInput {
  @Field(() => String)
  email: string

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
