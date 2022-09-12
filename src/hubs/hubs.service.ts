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
    return `This action returns all hubs`
  }

  findOne(id: number) {
    return `This action returns a #${ id } hub`
  }

  update(id: number, updateHubInput: UpdateHubInput) {
    return `This action updates a #${ id } hub`
  }

  remove(id: number) {
    return `This action removes a #${ id } hub`
  }
}
