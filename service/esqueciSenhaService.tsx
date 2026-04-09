import axios from "axios"

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export default api;

//export class EsqueciSenhaService{

//    enviarToken(){
//        return axiosInstance.post("/auth/esqueceu-senha")
//    }

//    redefinirSenha(){
//        return axiosInstance.post("/auth/redefinir-senha")
//    }
//}