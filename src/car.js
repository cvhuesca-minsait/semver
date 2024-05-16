const dotenv = require('dotenv');
dotenv.config();

class Car {

    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.velocity = 0;
        this.url = process.env.URL || 'https://my-default-url.com';
        console.log(`url: ${this.url}`);
        this.getVelocity();
    }

    getVelocity = () => console.log(`la velocidad es de ${this.velocity} km/h`);
    accelerate = () => (this.velocity += 5, this.getVelocity());
    brake = () => (this.velocity -= 5, this.getVelocity());
    stop = () => (this.velocity = 0, this.getVelocity());

}


module.exports = { Car }