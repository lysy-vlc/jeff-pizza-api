import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { HubsService } from './hubs.service'
import { Hub } from './entities/hub.entity'
import { CreateHubInput } from './dto/create-hub.input'
import { UpdateHubInput } from './dto/update-hub.input'

@Resolver(() => Hub)
export class HubsResolver {
  constructor(private readonly hubsService: HubsService) {
  }

  @Mutation(() => Hub)
  createHub(@Args('createHubInput') createHubInput: CreateHubInput) {
    return this.hubsService.create(createHubInput)
  }

  @Query(() => [ Hub ], { name: 'hubs' })
  findAll() {
    return this.hubsService.findAll()
  }

  @Query(() => Hub, { name: 'hub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hubsService.findOne(id)
  }

  @Mutation(() => Hub)
  updateHub(@Args('updateHubInput') updateHubInput: UpdateHubInput) {
    return this.hubsService.update(updateHubInput.id, updateHubInput)
  }

  @Mutation(() => Hub)
  removeHub(@Args('id', { type: () => Int }) id: number) {
    return this.hubsService.remove(id)
  }
}
