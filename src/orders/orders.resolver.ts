import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql'
import { OrdersService } from './orders.service'
import { Order } from './entities/order.entity'
import { CreateOrderInput } from './dto/create-order.input'
import { UpdateOrderInput } from './dto/update-order.input'
import { PubSub } from 'graphql-subscriptions'
import { UpdateOrderStatusInput } from './dto/update-order-status.input'

const pubSub = new PubSub()

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    const newOrder = this.ordersService.create(createOrderInput)

    pubSub.publish('orderCreated', { orderCreated: newOrder })

    return newOrder
  }

  @Subscription(returns => Order)
  orderCreated() {
    return pubSub.asyncIterator('orderCreated')
  }

  @Subscription(returns => Order)
  orderStatusChanged() {
    return pubSub.asyncIterator('orderStatusChanged')
  }

  @Query(() => [ Order ], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll()
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.findOne(id)
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput)
  }

  @Mutation(() => Order)
  async updateOrderStatus(@Args('updateOrderStatusInput') updateOrderStatusInput: UpdateOrderStatusInput) {

    const changedStatusOrder = await this.ordersService.updateStatus(updateOrderStatusInput)

    console.log(changedStatusOrder)

    pubSub.publish('orderStatusChanged', { orderStatusChanged: changedStatusOrder })

    return changedStatusOrder
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id)
  }
}
