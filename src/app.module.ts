import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CustomersModule } from './customers/customers.module'
import { PrismaService } from './prisma/prisma.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { DirectiveLocation, GraphQLDirective } from 'graphql'
import { HubsModule } from './hubs/hubs.module'
import { ProductsModule } from './products/products.module'
import { OrdersModule } from './orders/orders.module'

@Module({
  imports: [
    CustomersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [ DirectiveLocation.FIELD_DEFINITION ]
          })
        ]
      }
    }),
    HubsModule,
    ProductsModule,
    OrdersModule
  ],
  controllers: [ AppController ],
  providers: [ AppService, PrismaService ]
})
export class AppModule {
}
