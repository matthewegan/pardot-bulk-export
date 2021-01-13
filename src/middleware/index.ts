// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createdAfterMiddleware(req, res, next) {
  if (!req.query.createdAfter) {
    return res.status(400).json({
      message: "Missing expected query 'createdAfter'",
      success: false,
    })
  }
  next()
}
