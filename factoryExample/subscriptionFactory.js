const UsuarioPlatino = require('./usuarioPlatino');
const UsuarioBronze = require('./usuarioBronze');

//Objeto                    //constructores
const userSubscriptions = { UsuarioPlatino, UsuarioBronze };

function createUserSubscription(tipo, atributos) {
    console.log('Tipos disponibles', Object.keys(userSubscriptions));
    console.log('tipo', tipo);
    
    
    const subscriptionType = userSubscriptions[tipo];
    
    if (!subscriptionType) {
        throw new Error(`Tipo de suscripción inválido: ${tipo}`);
    }

    //Retorno nuevo objeto
    return new subscriptionType(atributos)
}

module.exports = createUserSubscription;