const express = require("express")
const db = require('./db/db.js')
const router = require("./routers/ordenRouter.js")

const app = express()

app.use(express.json())

app.use(router)
app.get("/", (req, res) => {
  res.send("Inicio")
});

//probando la conexión a la base de datos
(async () => {
  try {
    await db.authenticate()
    console.log("Database authenticated")
  } catch (error) {
    console.log("ERROR: ", error)
  }
})();

//iniciando el servidor
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});