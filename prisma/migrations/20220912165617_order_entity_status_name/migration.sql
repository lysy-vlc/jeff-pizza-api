/*
  Warnings:

  - The values [Pizza] on the enum `OrderBusinessCode` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrderBusinessCode_new" AS ENUM ('PIZZA');
ALTER TABLE "Order" ALTER COLUMN "businessCode" TYPE "OrderBusinessCode_new" USING ("businessCode"::text::"OrderBusinessCode_new");
ALTER TYPE "OrderBusinessCode" RENAME TO "OrderBusinessCode_old";
ALTER TYPE "OrderBusinessCode_new" RENAME TO "OrderBusinessCode";
DROP TYPE "OrderBusinessCode_old";
COMMIT;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL;
