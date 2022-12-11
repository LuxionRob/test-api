const path = require('path')

class productController {
  getUserImage(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'avatars', req.params.id + '.webp'))
  }
  updateUserImage(req, res) {}
  getProductImage(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'products', req.params.id + '.webp'))
  }
  getMemberImage(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'members', req.params.id + '.webp'))
  }
  getLogo(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'icons', 'logo.jpg'))
  }
  getBanner(req, res) {
    res.sendFile(path.join(process.cwd(), 'images', 'banners', req.params.id + '.jpg'))
  }
}

module.exports = new productController()
