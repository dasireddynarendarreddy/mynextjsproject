/*
  Warnings:

  - You are about to drop the `AddToCart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AddToCart";

-- DropTable
DROP TABLE "Cart";

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sizes" JSONB NOT NULL,
    "colors" JSONB NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addToCart" (
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image_link" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "colors" TEXT[],
    "sizes" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "cart_product_id_key" ON "cart"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "addToCart_product_id_key" ON "addToCart"("product_id");
