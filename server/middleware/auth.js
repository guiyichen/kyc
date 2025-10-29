const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ message: '无访问令牌，请先登录' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key')
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ message: '无效的访问令牌' })
  }
}

module.exports = authMiddleware
