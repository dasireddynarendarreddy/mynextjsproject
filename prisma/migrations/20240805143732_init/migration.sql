/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cart_product_id_key" ON "Cart"("product_id");
