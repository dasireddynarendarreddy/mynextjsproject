/*
  Warnings:

  - Added the required column `rating` to the `addToCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addToCart" ADD COLUMN     "rating" INTEGER NOT NULL;
