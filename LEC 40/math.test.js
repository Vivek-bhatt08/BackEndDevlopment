const { sub } = require("./math");
const math = require("./math");
jest.mock("./math"); //module mocking 

test("mul of 2 and 3 is 6",()=>{
    math.multiply.mockReturnValueOnce(6);
    expect(math.multiply(2,3)).toBe(6);
})

test("sub of 6 and 1 is 5",()=>{
    math.sub.mockReturnValueOnce(5);
    expect(math.sub(6,1)).toBe(5);
})

test("mod of 6 and 2 is 0",()=>{
    math.modulo.mockReturnValueOnce(0);
    expect(math.modulo(6,2)).toBe(0);
})