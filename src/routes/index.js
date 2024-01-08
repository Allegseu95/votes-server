const { Router } = require('express')

const router = Router()

const defaultRoutes = []

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
