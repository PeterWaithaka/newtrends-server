import _Controller from '../../controller.js';
import { handleErr } from '../../../helpers/index.js';
const Controller = _Controller('data/pages');


export async function create (req, res) {
    const _data = req.body;
    const website = req.headers['website'] || '';
    try {
        _data.uid = website + '_' + _data.url;
        const data = await Controller.create(_data);
        return res.send({ state: true, page: data });
    }
    catch (err) {
        handleErr(res, err, 'Failed');
    }
}

export async function update (req, res) {
    const _data = req.body;
    try {
        const data = await Controller.create(_data);
        return res.send({ state: true, data });
    }
    catch (err) {
        handleErr(res, err, 'Failed');
    }
}

export async function remove (req, res) {
    const id = req.params.id;
    try {
        const data = await Controller.remove(id);
        return res.send({ state: true, data });
    }
    catch (err) {
        handleErr(res, err, 'Failed');
    }
}

export async function get (req, res) {
    try {
        const data = await Controller.find({});
        return res.send({ state: true, data });
    }
    catch (err) {
        //  console.log(err, 'Error');
        handleErr(res, err, 'Failed');
    }
}