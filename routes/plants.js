const router = require('express').Router()
const plantsCtrl = require('../controllers/plants.js')


router.post('/', plantsCtrl.create)
router.get('/', plantsCtrl.index)
router.put('/:id', plantsCtrl.update)
router.delete('/:id', plantsCtrl.delete)


module.exports = router