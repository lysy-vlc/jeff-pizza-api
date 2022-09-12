/*
  Warnings:

  - Changed the type of `addressLocationLatitude` on the `Hub` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `addressLocationLongitude` on the `Hub` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Hub" DROP COLUMN "addressLocationLatitude",
ADD COLUMN     "addressLocationLatitude" INTEGER NOT NULL,
DROP COLUMN "addressLocationLongitude",
ADD COLUMN     "addressLocationLongitude" INTEGER NOT NULL;
