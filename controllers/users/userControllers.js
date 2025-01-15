const User = require("../../factoryExample/userConstructor");
const UserService = require("../../models/userModel");
const createUserSubscription = require("../../factoryExample/subscriptionFactory");

const service = new UserService();

const addNewUser = async (req, res) => {
    try {
        const { Nombre, Apellido, Email, subscriptionType, subscriptionAttributes } = req.body;

        console.log(Nombre, Apellido, Email, subscriptionType, subscriptionAttributes);

        const subscription = createUserSubscription(subscriptionType, subscriptionAttributes);

        const user = await service.addNewUser(Nombre, Apellido, Email, subscriptionType, subscription.nivel);

        res.status(201).json(user);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ ok: false, msg: 'Error al crear el usuario', error });
    }
};


const searchUser = async (req, res) => {
    const { Email } = req.params;

    try {
        const user = await service.getUserByEmail(Email);

        const Nombre = user.user.Nombre;
        const Apellido = user.user.Apellido;
        const id = user.user._id;

        console.log('id: ' + id);
        

        
        const newUser = new User(Nombre, Apellido, Email);

        res.status(200).json({ ok: true, msg: 'Usuario encontrado', newUser });
        // Nombre: 'Kevin',
        // Apellido: 'Suarez',
        // Email: 'kevinsansuor@gmail.com',
        // _id: new ObjectId('67870f0b3c1efd008d8bd4b3'),

        
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error al consultar el usuario', error });
    }
}
module.exports = {
    addNewUser,
    searchUser
}