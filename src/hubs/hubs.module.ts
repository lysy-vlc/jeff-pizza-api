import { Module } from '@nestjs/common'
import { HubsService } from './hubs.service'
import { HubsResolver } from './hubs.resolver'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [ HubsResolver, HubsService, PrismaService ]
})
export class HubsModule {
}
