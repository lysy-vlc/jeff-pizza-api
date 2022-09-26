import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class UpdateOrderStatusInput {
  @Field(() => Int)
  id: number

  @Field(() => String)
  status: string
}
