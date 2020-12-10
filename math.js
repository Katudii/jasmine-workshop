class Math {
    constructor() {

    }

    add(...nums) {
        return nums.reduce((acc, el) => { return acc + el })
    }

    subtract(...nums) {
        return nums.reduce((acc, el) => { return acc - el })
    }

    isEven(num){
        if(num%2 == 0){
            return true
        }else{
            false
        }
    }
}

const addTwo = (math,num) =>{
    return math.add(num,2)
}

module.exports = {Math,addTwo}