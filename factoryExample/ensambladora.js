const createUserSubscription = require('./subscriptionFactory');

const bronzeSubscription = createUserSubscription("usuarioBronze",{
    nivel : 500
})

const platinoSubscription = createUserSubscription("usuarioPlatino",{
    nivel : 1000
})

console.log(bronzeSubscription);
console.log(platinoSubscription);