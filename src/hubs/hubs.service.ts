import { Injectable } from '@nestjs/common'
import { CreateHubInput } from './dto/create-hub.input'
import { UpdateHubInput } from './dto/update-hub.input'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class HubsService {
  constructor(private prisma: PrismaService) {
  }

  create(createHubInput: CreateHubInput) {
    return this.prisma.hub.create({
      data: createHubInput
    })
  }

  findAll() {
    return this.prisma.hub.findMany()
  }

  findOne(id: number) {
    return this.prisma.hub.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateHubInput: UpdateHubInput) {
    return this.prisma.hub.update({
      where: {
        id
      },
      data: updateHubInput
    })
  }

  remove(id: number) {
    return this.prisma.hub.delete({
      where: {
        id
      }
    })
  }
}
