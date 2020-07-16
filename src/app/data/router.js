const Brand = require('./brands/index.js');
const Page = require('./pages/index.js');

const router = require('express').Router();

// export consclientRouter = require('express').Router();

// pages

router.route('/page')
    .get(Page.get)
    .post(Page.create);

router.route('/page/:id')
    .put(Page.update)
    .delete(Page.remove);

// ********** brands *********** //

router.route('/brands')
    .post(Brand.create)
    .get(Brand.findAll);

router.route('/brands/:id')
    .get(Brand.findOne)
    .put(Brand.update)
    .delete(Brand.remove);

router.get('/brands/search/:query', Brand.search);

// ********** brands end *********** //

module.exports = router;
