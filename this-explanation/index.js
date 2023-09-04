
let obj1 = {
    firstName : 'Gustavo',
    lastName: 'Blasius',
    fullName: function() {
        // console.log('obj01', this)
        // console.log(this.firstName + ' ' + this.lastName)
        // || 
        // console.log(obj1.firstName + ' ' + obj1.lastName)
    }
}



let obj2 = {
    firstName : 'Gustavo',
    lastName: 'Blasius',
    fullName: () => { // dessa forma o this é perdido, por que?
        // console.log('obj02', this)
        // || 
        // console.log(obj2.firstName + ' ' + obj2.lastName)
    }
}


// this é um referencia ao objeto invocador

class Person {

    switchFunc(type){
        console.log('switchFunc', this);

        const listFunctions = {
            FULL_NAME: this.getFullName.bind(this),
            AGE: this.getAge.bind(this)
        }
        
        let name = listFunctions[type];
        console.log('name', name);
        return name;
    }

    getAge(){
        return 30
    }

    getFullName(){
        console.log('getFullName', this);
        const firstName = this.getFirstName();
        const lastName = this.getLastName();
        return firstName + " " + lastName;
    }

    getFirstName(){
        return "Gustavo"
    }

    getLastName(){
        return "Blasius"
    }

    getInfo(type){
        console.log('getInfo', this)
        const infoRequired = this.switchFunc(type)
        return infoRequired();
    }

    getThis(){
        return this
    }
}

// arrow functions - o this estabelecido em arrow functions funciona somente para o escopo em que está estabelecido
// 

const person = new Person();
console.log(person.getInfo('FULL_NAME'));
// const personThis = person.getThis()
