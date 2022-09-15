import { Injectable } from '@nestjs/common'
import { UpdateOrderInput } from './dto/update-order.input'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateOrderInput } from './dto/create-order.input'

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {
  }

  create(createOrderInput: CreateOrderInput) {
    const {
      businessCode,
      number,
      type,
      receptionType,
      status,
      requestedDate,
      scheduledDate,
      confirmedDate,
      channel,
      customer,
      hub,
      products
    } = createOrderInput

    return this.prisma.order.create({
      data: {
        businessCode,
        number,
        type,
        receptionType,
        status,
        requestedDate,
        scheduledDate,
        confirmedDate,
        channel,
        customer: {
          connect: {
            id: customer
          }
        },
        hub: {
          connect: {
            id: hub
          }
        },
        products: {
          connect: products.map(p => ({
            id: p
          }))
        }
      }
    })
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        hub: true,
        customer: true,
        products: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.order.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateOrderInput: Prisma.OrderUpdateInput) {
    return this.prisma.order.update({
      where: {
        id
      },
      data: updateOrderInput
    })
  }

  remove(id: number) {
    return this.prisma.order.delete({
      where: {
        id
      }
    })
  }
}
