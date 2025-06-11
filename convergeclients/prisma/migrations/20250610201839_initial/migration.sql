-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClientNome" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descrição" TEXT NOT NULL,
    "modeloDeNegocio" TEXT NOT NULL,
    "valorAtualDoContrato" REAL NOT NULL,
    "dataInicio" DATETIME NOT NULL
);
