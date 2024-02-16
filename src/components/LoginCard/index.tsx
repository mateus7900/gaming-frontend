'use client';
import React, { useCallback, useState } from "react";
import "./styles.scss";
import { TextField } from "@mui/material";
import Button from "../Atoms/Button";
import Logo from '@/images/logo.png';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { login } from "@/services/UserService";
import useUser from "@/context/UserContext";
import { User } from "@/types/User";

const LoginCard: React.FC = () => {
    const router = useRouter();

    const { setUser, setLogged } = useUser();

    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleClickButton() {
        try{
            const data: User = await login(userName, password);
            setUser(data);
            router.push('/home')
        } catch (err) {
            console.error(err);
        }
    }

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserName(event.target.value as string);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    }

    const handleRegister = () => {
        router.push('/register')
    }

    return <div className="card">
        <Image src={Logo} alt="Gaming" className="image"/>
        <TextField label="Username" variant="outlined" onChange={
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChangeUsername(event)
        }/>
        <TextField label="Password" variant="outlined" type="password" onChange={
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChangePassword(event)
        }/>
        <Button text="LOGIN" onClick={handleClickButton} className="button" />
        <Button text="REGISTRE-SE" onClick={handleRegister} className="button" />
    </div>
};

export default LoginCard;