const { crearOrden, obtenerTodasLasOrdenes, obtenerOrdenPorId, actualizarOrden, eliminarOrden } = require('../controllers/node.js')
const router = require('express').Router()


router.post("/api/orden/crear", crearOrden)
router.get("/api/ordenes", obtenerTodasLasOrdenes)
router.get("/api/orden", obtenerOrdenPorId)
router.put("/api/orden/actualizar", actualizarOrden)
router.delete("/api/orden/eliminar", eliminarOrden)

module.exports = router