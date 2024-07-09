import { $authHost, $host } from ".";
import {jwtDecode} from'jwt-decode'

export const registration=async(email,name,password)=>{
    const {data} = await $host.post('/auth/registration',{email,name,password})
    localStorage.setItem("token",data.token)
    return jwtDecode(data.token)
}
export const login=async(email,name,password)=>{
    const {data} = await $host.post('/auth/login',{email,name,password})
    localStorage.setItem("token",data.token)
    return jwtDecode(data.token)
}
export const check=async()=>{
    const data = await $authHost.get('/auth/check')
    localStorage.setItem("token",data.token)
    console.log(jwtDecode(data.token))
    return jwtDecode(data.token)
}