import { Injectable } from '@nestjs/common'
import { CreateCustomerInput } from './dto/create-customer.input'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { UpdateCustomerInput } from './dto/update-customer.input'

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {
  }

  create(createCustomerInput: CreateCustomerInput) {
    return this.prisma.customer.create({
      data: createCustomerInput
    })
  }

  findAll() {
    return this.prisma.customer.findMany()
  }

  findOne(id: number) {
    return this.prisma.customer.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return this.prisma.customer.update({
      where: {
        id
      },
      data: updateCustomerInput
    })
  }

  remove(id: number) {
    return this.prisma.customer.delete({
      where: {
        id
      }
    })
  }
}
