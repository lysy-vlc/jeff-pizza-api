-- CreateTable
CREATE TABLE "Customer" (
    "email" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "elegibleCoupon" BOOLEAN NOT NULL DEFAULT false,
    "coupon" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
