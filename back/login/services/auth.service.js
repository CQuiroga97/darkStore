const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dependencyContainer = require('../src/dependencyContainer');
const UsuarioRepository = dependencyContainer.getRepository('usuarioRepository');
require('dotenv').config();


const authService = {

   login: async (req,res) =>{

    const {correo, clave} = req.body;
    const usuario = await UsuarioRepository.findByCorreo(correo);
    if(usuario.length <= 0){
        return res.status(404).send("Usuario no encontrado");
    }
    console.log(usuario[0].activo);
    if(!usuario[0].activo){
        return res.status(401).send("Usuario inactivo");
    }
    if(!bcrypt.compareSync(clave, usuario[0].clave)){
        return res.status(401).send("Contraseña incorrecta");
    }
    const accessToken = generateAccessToken(usuario);
    res.header('authorization', accessToken).json({
        message: 'Usuario autenticado',
        accessToken: accessToken,
        usuario: usuario[0]
    });
    },


};

function generateAccessToken(usuario) {
    return jwt.sign({usuario}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

function validateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Acceso denegado');
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send('Token inválido');
        req.user = user;
        next();
    });
}


module.exports = authService;
