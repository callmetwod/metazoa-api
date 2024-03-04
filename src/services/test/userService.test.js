import { UserEntity } from "../../entities/User.entity.js";
import { UserService } from "../user.service.js";

const instanceServiceUser = new UserService();

afterAll(async ()=>{
    await UserEntity.destroy({
        where: {
            name: "teste"
        }
    });
})

test("Criando usuário -POST", async ()=>{
    const newUser = await instanceServiceUser.createUserService("teste", "teste@gmail.com", "senha1234");
    expect(newUser).toHaveProperty("id")
});

test("Pegando lista de USUÁRIOS", async()=>{
    const allUsers = await instanceServiceUser.getAllUserService()
    expect (allUsers)
})