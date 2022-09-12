import { CreateProductInput } from './create-product.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => String)
  code: string

  @Field(() => String)
  reservationType: string

  @Field(() => String)
  name: string

  @Field(() => String)
  description: string
}
