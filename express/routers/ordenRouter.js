const { crearOrden, obtenerTodasLasOrdenes, obtenerOrdenPorId, actualizarOrden, eliminarOrden } = require('../controllers/node.js')
const router = require('express').Router()


router.post("/api/orden/crear", crearOrden)
router.get("/api/ordenes", obtenerTodasLasOrdenes)
router.get("/api/orden/:id", obtenerOrdenPorId)
router.put("/api/orden/actualizar/:id", actualizarOrden)
router.delete("/api/orden/eliminar/:id", eliminarOrden)

module.exports = router