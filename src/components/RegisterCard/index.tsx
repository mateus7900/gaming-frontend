'use client';
import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

import "./styles.scss";
import Button from "../Atoms/Button";
import Logo from '@/images/logo.png';
import Image from "next/image";

const RegisterCard: React.FC = () => {

  const [firstName, setFirstName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  return (
    <div className="register-card">
      <Image src={Logo} alt="Gaming" className="image"/>
      <TextField label="Primeiro Nome" />
      <TextField label="Segundo Nome" />

      <TextField label="Nome de usuário" />
      <TextField label="Idade" />

      <Button text="REGISTER" />
    </div>
  );
};

export default RegisterCard;
