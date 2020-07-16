import SeoController from '../controller.js';
import { handleErr, resize_save } from '../../helpers/index';
const Controller = SeoController('seo');

// default meta
const globalMeta = {
    url: '',
    metaTitle: '',
    headerOne: '',
    headerTwo: '',
    pageDescription: '',
    metaDescription: '',
    pageContent: '',
    footerContent: '',
    carouselImages: [],
    image: '',
    keywords: []
};

export async function findAll (req, res) {
    try {
        const metas = await Controller.find({});
        return res.send({ metas, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function findByUrl (req, res) {
    const url = req.params.id;
    try {
        const meta = await Controller.findOne({ url });
        if (meta) {
            return res.send({ meta });
        }
        return res.send({ meta: globalMeta });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function getMeta (url) {
    try {
        const meta = await Controller.find({ url });
        if (meta) {
            return meta;
        } else {
            return globalMeta;
        }
    }
    catch (err) {
        return globalMeta;
    }
}

export async function createMeta (req, res) {
    //  console.log('body', req.body);
    const _meta = JSON.parse(req.body.meta);
    const images = req.files;
    try {
        const meta = await Controller.create(_meta);
        if (images && images.banner) {
            //  measurement 1360 X 250
            resize_save({file: images.banner, fileName: meta._id, width: 1360, height: 250}, 'uploads/banners');
        }
        const updated = await Controller.update({ banner: `${meta._id}.webp` }, meta._id);
        return res.send({ meta: updated, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function editMeta (req, res) {
    const id = req.params.id;
    const images = req.files;
    const _meta = JSON.parse(req.body.meta);
    try {
        if (images && images.banner) {
            //  measurement 1360 X 250
            _meta.banner =  `${id}.webp`;
            resize_save({file: images.banner, fileName: id, width: 1360, height: 250}, 'uploads/banners');
        }
        const meta = await Controller.update(_meta, id);
        return res.send({ meta, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function removeMeta (req, res) {
    const id = req.params.id;
    try {
        const meta = await Controller.remove(id);
        return res.send({ meta, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}