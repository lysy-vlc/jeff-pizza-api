import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OrderBusinessCode, OrderChannel, OrderReceptionType, OrderStatus, OrderType } from '../enums'
import { Product } from '../../products/entities/product.entity'
import { Customer } from '../../customers/entities/customer.entity'
import { Hub } from '../../hubs/entities/hub.entity'

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

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number

  @Field(() => OrderBusinessCode)
  businessCode: OrderBusinessCode

  @Field(() => Int)
  number: number

  @Field(() => OrderType)
  type: OrderType

  @Field(() => OrderReceptionType)
  receptionType: OrderReceptionType

  @Field(() => OrderStatus)
  status: OrderReceptionType

  @Field(() => Date)
  requestedDate: Date | string

  @Field(() => Date)
  scheduledDate: Date | string

  @Field(() => Date)
  confirmedDate: Date | string

  @Field(() => OrderChannel)
  channel: OrderChannel

  @Field(() => Customer)
  customer: Customer

  @Field(() => Hub)
  hub: Hub

  @Field(() => [ Product ])
  products?: Product[]
}
