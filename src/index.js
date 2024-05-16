const { Car } = require('./car');


const myCar = new Car('Toyota', 'Corolla', 'White');
myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.accelerate();
myCar.stop();



module.exports = { Car }

