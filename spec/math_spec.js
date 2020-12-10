//toEqual()
//toBe()
//not()
//toBeTruthy()
//toBeFalsy()

const {Math,addTwo} = require("../math")

describe("Math Calculator",()=>{
    let mathObject

    beforeEach(()=>{
        mathObject  = new Math()
    })

    it("Add two numbers",()=>{
        expect(mathObject.add(8,2)).toEqual(10)
    })

    it("subtract two numbers",()=>{
        expect(mathObject.subtract(6,2)).toEqual(4)
    })

    it("check if even",()=>{
        expect(mathObject.isEven(4)).not.toBeFalsy()
    })

    it("should add two",()=>{
        spyOn(mathObject,"add")
        addTwo(mathObject,4)
        expect(mathObject.add).toHaveBeenCalled()
    })
})