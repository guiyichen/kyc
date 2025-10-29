const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const authMiddleware = require('../middleware/auth')
const User = require('../models/User')

const router = express.Router()

// 确保上传目录存在
const uploadDir = path.join(__dirname, '../uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// 配置multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB限制
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error('只支持 JPG、PNG 或 PDF 格式'))
    }
  },
})

// 提交KYC申请
router.post('/submit', authMiddleware, upload.fields([
  { name: 'idDocument', maxCount: 1 },
  { name: 'proofOfAddress', maxCount: 1 },
]), async (req, res) => {
  try {
    const userId = req.userId
    const files = req.files

    // 构建KYC数据
    const kycData = {
      ...req.body,
      documents: {
        idDocument: files.idDocument?.[0]?.filename,
        proofOfAddress: files.proofOfAddress?.[0]?.filename,
      },
      submittedAt: new Date(),
    }

    // 更新用户KYC状态和数据
    await User.findByIdAndUpdate(userId, {
      kycStatus: 'pending',
      kycData,
      updatedAt: new Date(),
    })

    res.json({
      message: 'KYC申请已提交，正在审核中',
      status: 'pending',
    })
  } catch (error) {
    res.status(500).json({ message: '提交失败', error: error.message })
  }
})

// 获取KYC状态
router.get('/status', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId
    const user = await User.findById(userId).select('kycStatus kycData')

    res.json({
      status: user.kycStatus,
      data: user.kycData,
    })
  } catch (error) {
    res.status(500).json({ message: '获取状态失败', error: error.message })
  }
})

module.exports = router
