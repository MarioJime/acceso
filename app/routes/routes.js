const express = require('express');
const router = express.Router();

//Rutas-Controladores-Requeridos
const AuthController = require('../controllers/AuthController');
const PostController = require('../controllers/PostController');

//Rutas-Middlewares-Requeridas
const auth = require('../middlewares/auth');    


//Rutas-Politicas-Requeridas
const PostPolicy = require('../policies/PostPolicy');


//Ruta Home
router.get('/', (req, res) => {
    res.json({ Welcome:'user!' })
})


//Ruta de login, logout y check_in

router.post('/api/login', AuthController.login);
router.get('/api/logout', AuthController.logout);
router.get('/api/coockie', AuthController.coockie);
router.post('/api/check_in', AuthController.check_in);

//Rutas middlewares

router.get('/api/posts', auth, PostController.index);
router.get('/api/posts/:id', auth, PostController.find,PostPolicy.show, PostController.show);
router.patch('/api/posts/:id', auth, PostController.find,PostPolicy.update,PostController.update);
router.delete('/api/posts/:id', auth, PostController.find,PostPolicy.delete, PostController.delete);


module.exports = router;