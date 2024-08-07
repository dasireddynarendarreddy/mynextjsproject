-- CreateTable
CREATE TABLE "AddToCart" (
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "colors" TEXT[],
    "sizes" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "AddToCart_product_id_key" ON "AddToCart"("product_id");
