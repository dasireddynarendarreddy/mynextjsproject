-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "product_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image_link" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sizes" TEXT[],
    "colors" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
