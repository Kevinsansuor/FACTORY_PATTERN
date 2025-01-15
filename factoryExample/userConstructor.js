class User {
    constructor(Nombre, Apellido, Email) {
        console.log("Clase Usuario");

        this.Nombre = Nombre || {};
        this.Apellido = Apellido || {};
        this.Email = Email || {};
        this.Subscription = null;

        
        console.log('Nombre: ', this.getFullName());
    }

    getFullName = () => {
        return `${this.Nombre} ${this.Apellido}`;
    };

    setSubscription(subscription) {
        this.Subscription = subscription;
    }
}

module.exports = User;