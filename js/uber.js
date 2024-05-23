class Uber {
    constructor(rate, km) {
        this.rate = rate;
        this.km = km;
    }
    toCalculateUberPrice() {
        return this.rate*this.km;
    }



}
const ubercalculation = new Uber(100,2)
const ubercalculationFor5km=new Uber(100,5)
console.log(ubercalculation.toCalculateUberPrice())
console.log(ubercalculationFor5km.toCalculateUberPrice())
