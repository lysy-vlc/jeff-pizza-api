import { Injectable } from '@nestjs/common'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {
  }

  create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({
      data: createProductInput
    })
  }

  findAll() {
    return this.prisma.product.findMany()
  }

  findOne(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.prisma.product.update({
      where: {
        id
      },
      data: updateProductInput
    })
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id
      }
    })
  }
}
