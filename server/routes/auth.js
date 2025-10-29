const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router()

// 注册
router.post('/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, country } = req.body

    // 检查用户是否已存在
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: '该邮箱已被注册' })
    }

    // 创建新用户
    const user = new User({
      email,
      password,
      firstName,
      lastName,
      country,
    })

    await user.save()

    // 生成JWT令牌
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    res.status(201).json({
      message: '注册成功',
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    })
  } catch (error) {
    res.status(500).json({ message: '注册失败', error: error.message })
  }
})

// 登录
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // 查找用户
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: '邮箱或密码错误' })
    }

    // 验证密码
    const isValidPassword = await user.comparePassword(password)
    if (!isValidPassword) {
      return res.status(401).json({ message: '邮箱或密码错误' })
    }

    // 生成JWT令牌
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    res.json({
      message: '登录成功',
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        kycStatus: user.kycStatus,
      },
    })
  } catch (error) {
    res.status(500).json({ message: '登录失败', error: error.message })
  }
})

module.exports = router
