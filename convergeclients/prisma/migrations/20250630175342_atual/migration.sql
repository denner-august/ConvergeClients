/*
  Warnings:

  - Added the required column `plataforma` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "ClientNome" TEXT NOT NULL,
    "descrição" TEXT NOT NULL,
    "plataforma" TEXT NOT NULL,
    "modeloDeNegocio" TEXT NOT NULL,
    "valorAtualDoContrato" REAL NOT NULL,
    "dataInicio" DATETIME NOT NULL
);
INSERT INTO "new_users" ("ClientNome", "dataInicio", "descrição", "id", "modeloDeNegocio", "titulo", "valorAtualDoContrato") SELECT "ClientNome", "dataInicio", "descrição", "id", "modeloDeNegocio", "titulo", "valorAtualDoContrato" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
