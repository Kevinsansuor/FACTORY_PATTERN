const mongoose = require('mongoose');
const createUserSubscription = require('../factoryExample/subscriptionFactory');

const userSchema = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Subscription: {
        tipo: { type: String, enum: ['UsuarioPlatino', 'UsuarioBronze'], required: true },
        nivel: { type: Number, required: true }
    }
});

const UserModel = mongoose.model('User', userSchema);

class UserService {

    async addNewUser( Nombre, Apellido, Email, tipoSuscripcion, nivelSuscripcion ) {
        console.log('Creando el usuario:', { Nombre, Apellido, Email, tipoSuscripcion, nivelSuscripcion });

        try {
            const subscription = createUserSubscription(tipoSuscripcion, {
                usuarioId: Email,
                nivel: nivelSuscripcion
            });

            console.log('Creando el usuario con suscripción:', subscription);
            

            const user = new UserModel({
                Nombre,
                Apellido,
                Email,
                Subscription: {
                    tipo: tipoSuscripcion,
                    nivel: subscription.nivel
                }
            });

            await user.save();
            console.log('Usuario creado correctamente:', user);
            return { ok: true, msg: 'Usuario creado correctamente', user };
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            return { ok: false, msg: 'Error al crear el usuario', error };
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await UserModel.findOne({ Email: email });
            if (!user) {
                return { ok: false, msg: 'Usuario no encontrado' };
            }
            return { ok: true, user };
        } catch (error) {
            console.error('Error al consultar el usuario:', error);
            return { ok: false, msg: 'Error al consultar el usuario', error };
        }
    }
}

module.exports = UserService;