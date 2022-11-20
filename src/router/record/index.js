const RecordController = require('../../controllers/Record.controller');
const router = require('express').Router();

router.post('/', RecordController.addRecord);
router.get('/:user_id', RecordController.getUserRecords);
router.get('/:user_id/:category_id', RecordController.getUserCategoryRecords);

module.exports = router;
