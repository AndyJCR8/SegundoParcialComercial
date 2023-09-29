const { crearOrden, obtenerTodasLasOrdenes, obtenerOrdenPorId, actualizarOrden, eliminarOrden } = require('../controllers/node.js')
const router = require('express').Router()


router.get("/api/orden/crear", crearOrden)
router.get("/api/ordenes", obtenerTodasLasOrdenes)
router.get("/api/orden", obtenerOrdenPorId)
router.get("/api/orden/actualizar", actualizarOrden)
router.get("/api/orden/eliminar", eliminarOrden)

module.exports = router