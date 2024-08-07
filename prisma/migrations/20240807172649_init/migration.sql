/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `AddToCart` table. All the data in the column will be lost.
  - Added the required column `category` to the `AddToCart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_link` to the `AddToCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AddToCart" DROP COLUMN "imageUrl",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "image_link" TEXT NOT NULL;
