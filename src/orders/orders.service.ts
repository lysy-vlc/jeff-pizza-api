import { Injectable } from '@nestjs/common'
import { UpdateOrderInput } from './dto/update-order.input'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateOrderInput } from './dto/create-order.input'
import { UpdateOrderStatusInput } from './dto/update-order-status.input'
import { Order } from './entities/order.entity'
import { OrderStatus } from './enums'

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {
  }

  create(createOrderInput: CreateOrderInput) {
    const {
      businessCode,
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
      },
      include: {
        hub: true,
        customer: true,
        products: true
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

  update(id: number, updateOrderInput: UpdateOrderInput) {
    const {
      businessCode,
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
    } = updateOrderInput

    return this.prisma.order.update({
      where: {
        id
      },
      data: {
        businessCode,
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
      },
      include: {
        hub: true,
        customer: true,
        products: true
      }
    })
  }

  updateStatus(updateOrderStatusInput: UpdateOrderStatusInput) {
    const {
      id,
      status
    } = updateOrderStatusInput

    return this.prisma.order.update({
      where: {
        id
      },
      data: {
        status: OrderStatus[status]
      },
      include: {
        hub: true,
        customer: true,
        products: true
      }
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
