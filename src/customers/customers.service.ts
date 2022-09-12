import { Injectable } from '@nestjs/common'
import { CreateCustomerInput } from './dto/create-customer.input'
import { UpdateCustomerInput } from './dto/update-customer.input'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class CustomersService {
  constructor(private prismaService: PrismaService) {
  }

  create(createCustomerInput: CreateCustomerInput) {
    return this.prismaService.customer.create({
      data: createCustomerInput
    })
  }

  findAll() {
    return `This action returns all customers`
  }

  findOne(id: number) {
    return `This action returns a #${ id } customer`
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${ id } customer`
  }

  remove(id: number) {
    return `This action removes a #${ id } customer`
  }
}
