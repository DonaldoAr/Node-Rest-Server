
// {
//     nombre: '',
//     correo: '',
//     password: '523698741',
//     img: '4556',
//     rol: '5569',
//     estado: false,
//     google: false,
    
// }
const {Schema, model} = require('mongoose');
const UsuarioSchema = Schema({
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatorio'],        
    },
    img:{
        type: String
    },
    role:{
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
})

module.exports = model('Usuario',UsuarioSchema);