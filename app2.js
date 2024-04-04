class Users{
    name;
    #password;
    constructor(name, password) {
        this.name = name
        this.#password = password
    }
    
}

const user1 = new Users("John", "2134141d");
const user2 = new Users("Albert", "213435e");

console.log(user1);
console.log(user2);

