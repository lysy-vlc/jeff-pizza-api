import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql'
import { OrderBusinessCode, OrderChannel, OrderReceptionType, OrderStatus, OrderType } from '../enums'
import { Customer } from '../../customers/entities/customer.entity'
import { Hub } from '../../hubs/entities/hub.entity'
import { Product } from '../../products/entities/product.entity'

registerEnumType(OrderBusinessCode, {
  name: 'OrderBusinessCode'
})
registerEnumType(OrderType, {
  name: 'OrderType'
})
registerEnumType(OrderReceptionType, {
  name: 'OrderReceptionType'
})
registerEnumType(OrderStatus, {
  name: 'OrderStatus'
})
registerEnumType(OrderChannel, {
  name: 'OrderChannel'
})

@InputType()
export class CreateOrderInput {
  @Field(() => OrderBusinessCode)
  businessCode: OrderBusinessCode

  @Field(() => Int)
  number: number

  @Field(() => OrderType)
  type: OrderType

  @Field(() => OrderReceptionType)
  receptionType: OrderReceptionType

  @Field(() => OrderStatus)
  status: OrderStatus

  @Field(() => Date)
  requestedDate: Date | string

  @Field(() => Date)
  scheduledDate: Date | string

  @Field(() => Date)
  confirmedDate: Date | string

  @Field(() => OrderChannel)
  channel: OrderChannel

  @Field(() => Int)
  customer: number

  @Field(() => Int)
  hub: number

  @Field(() => [ Int ])
  products?: number[]
}
