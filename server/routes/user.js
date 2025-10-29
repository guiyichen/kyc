const express = require('express')
const authMiddleware = require('../middleware/auth')
const User = require('../models/User')

const router = express.Router()

// 获取当前用户信息
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId
    const user = await User.findById(userId).select('-password')

    if (!user) {
      return res.status(404).json({ message: '用户不存在' })
    }

    res.json({
      user,
    })
  } catch (error) {
    res.status(500).json({ message: '获取用户信息失败', error: error.message })
  }
})

// 更新用户信息
router.put('/me', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId
    const updates = req.body

    const user = await User.findByIdAndUpdate(
      userId,
      { ...updates, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).select('-password')

    res.json({
      message: '用户信息已更新',
      user,
    })
  } catch (error) {
    res.status(500).json({ message: '更新失败', error: error.message })
  }
})

module.exports = router
