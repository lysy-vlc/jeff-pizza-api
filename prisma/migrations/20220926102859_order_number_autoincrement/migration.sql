-- AlterTable
CREATE SEQUENCE "order_number_seq";
ALTER TABLE "Order" ALTER COLUMN "number" SET DEFAULT nextval('order_number_seq');
ALTER SEQUENCE "order_number_seq" OWNED BY "Order"."number";
