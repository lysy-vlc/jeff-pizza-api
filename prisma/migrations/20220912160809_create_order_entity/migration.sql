-- CreateEnum
CREATE TYPE "OrderBusinessCode" AS ENUM ('Pizza');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('ASAP', 'SCHEDULED');

-- CreateEnum
CREATE TYPE "OrderReceptionType" AS ENUM ('PICKUP', 'HUB', 'DELIVER', 'IN_HUB');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('CONFIRMED', 'IN_PROCESS', 'IN_DELIVERY', 'CANCEL');

-- CreateEnum
CREATE TYPE "OrderChannel" AS ENUM ('IOS', 'HUB', 'ANDROID');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "orderId" INTEGER;

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "businessCode" "OrderBusinessCode" NOT NULL,
    "number" INTEGER NOT NULL,
    "type" "OrderType" NOT NULL,
    "receptionType" "OrderReceptionType" NOT NULL,
    "status" "OrderReceptionType" NOT NULL,
    "requestedDate" TIMESTAMP(3) NOT NULL,
    "scheduledDate" TIMESTAMP(3) NOT NULL,
    "confirmedDate" TIMESTAMP(3) NOT NULL,
    "channel" "OrderChannel" NOT NULL,
    "customerId" INTEGER NOT NULL,
    "hubId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "Hub"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
