const express = require('express');
const projectDB = require('../data/helpers/projectModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    projectDB.get()
        .then(projects => {
            res.status(200).json({ projects });
        })
        .catch(err => {
            res.status(500).json({ error: 'Projects retrieval could not be performed '});
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    projectDB.get(id)
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(404).json({ message: 'Specified Project ID could not be found' });
        });
});

router.get('/:id/actions', (req, res) => {
    const id = req.params.id;

    projectDB.getProjectActions(id)
        .then(actions => {
            if(actions.length !== 0) {
                res.status(200).json({ actions });
            } else {
                res.status(401).json({ message: 'Project has no actions' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error, try again' });
        });
})

router.post('/', (req, res) => {
    const { name, description, completed } = req.body;

    if(name.length >= 1 && name.length <= 128 && description) {
        projectDB.insert(req.body)
            .then(result => {
                res.status(201).json({ result });
            })
            .catch(err => {
                res.status(500).json({ error: 'Server error perforimg that action, try again' });
            });
    } else {
        res.status(500).json({ error: 'Please provide a name that is less than 128 chars and a description' });
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;

    if(id && name.length >= 1 && name.length <= 128 && description) {
        projectDB.update(id, {name, description})
            .then(result => {
                res.status(200).json({ result });
            })
            .catch(err => {
                res.status(500).json({ error: 'Server issue, try again' });
            });
    } else {
        res.status(500).json({ message: 'Please provide necessary info to update posted project' });
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    projectDB.remove(id)
        .then(result => {
            if(result !== 0) {
                res.status(200).json({ result });
            } else {
                res.status(404).json({ message: 'Specified ID does not exist' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error, please try again' });
        });
});

module.exports = router;