exports.notFound = (req, res, next) => {
  res.status(404).json({
    error: true,
    data: null,
    status: 404,
    message: 'Recurso no encontrado'
  })
}
