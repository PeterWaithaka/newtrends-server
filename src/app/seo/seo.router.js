const  { findAll, findByUrl, removeMeta, createMeta, editMeta } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createMeta);

router.route('/:id')
    .put(editMeta)
    .delete(removeMeta)
    .get(findByUrl);

router.route('/edit/:id')
    .put(editMeta);

module.exports = router;