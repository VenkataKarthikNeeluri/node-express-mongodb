const vm = require('vm')

let user = {
    name: "kar",
    email: "kar@gmail.com",
    mobile: "9988009988"

};

console.log('before =', user)

vm.createContext(user)
vm.runInContext(`name="venk";email="venk@gmail.com";mobile="9999999999"`,user)

console.log('after =', user)