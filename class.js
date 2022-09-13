module.exports = class Vehicle
{
    color = "black"

    constructor()
    {
       console.log("default constructor called")
    }

    //to get property
    get vehicleType()
    {
        return "bike"
    }

     add(a,b)
    {
    return (a+b);
    }
}

/*var veh = new Vehicle()

console.log(veh.color)

console.log(veh.vehicleType) */