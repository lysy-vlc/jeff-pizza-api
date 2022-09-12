import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateProductInput {
  @Field(() => String)
  code: string

  @Field(() => String)
  reservationType: string

  @Field(() => String)
  name: string

  @Field(() => String)
  description: string
}
