class User {
    constructor (_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            console.log(`${this.firstName} è più vecchio di ${otherUser.firstName}`)
        } else {
            console.log(`${this.firstName} è più giovane di ${otherUser.firstName}`)
        }
    }
}

const x = new User('Marco', 'Rossi', 20, 'Roma')
const y = new User('Giovanni', 'Bianchi', 30, 'Milano')
const z = new User('Aldo', 'Baglio', 40, 'Palermo')

x.compareAge(y)
z.compareAge(x)


//esercizio 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  sameOwner = function (otherPet) {
    return this.ownerName === otherPet.ownerName
  }
}