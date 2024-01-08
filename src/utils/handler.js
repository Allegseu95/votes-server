exports.handler = {
  success: (res, data, message) => {
    return res.status(200).json({
      error: false,
      data,
      status: 200,
      message
    })
  },
  error: (res, error) => {
    const { message } = error
    return res.status(400).json({
      error: true,
      data: null,
      status: 400,
      message
    })
  },
  unauthorized: (res, error) => {
    const { message } = error
    return res.status(401).json({
      error: true,
      data: null,
      status: 401,
      message
    })
  }
}
