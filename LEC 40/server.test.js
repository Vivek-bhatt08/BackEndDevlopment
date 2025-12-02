const User = require("./model/userSchema");
const app = require("./server");
const request= require("supertest");
jest.mock("./model/userSchema");


describe("POST /api/users/register",()=>{
    it("should return user exists if he try to register with email which is already present in database ",async()=>{
        User.findOne.mockResolvedValueOnce(true); //asunc func return resolve value not return value
        let response  = await request(app).post("/api/users/register").send({
            name:"vivek",
            email:"vivek123@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("user already exists")
    })


    it("should create new user with gmail:vivek123@gmail.com",async()=>{
        User.findOne.mockResolvedValueOnce(false);
        User.create.mockResolvedValueOnce({
            name:"Nitest",
            email:"vivek123@gmail.com",
            password:"1234"
        })
        let response = await request(app).post("/api/users/register").send({
            name:"Nitest",
            email:"vivek123@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("registraction successfull")
        expect(response.body.data).toEqual({
            name:"Nitest",
            email:"vivek123@gmail.com",
            password:"1234"
        })
    })

})