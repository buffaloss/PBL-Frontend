import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from "next/router";
import { recoverPass } from "../services/auth.service";

const validationSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email')
    .required('This input is required'),
  password: yup.string()
    .required('This input is required'),
  password_confirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
}).required();

export default function ForgotPassword({ loginHandler }) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const login = (data) => {
    let credentials = {
      username: data?.email,
      password: data?.password
    };
    let options = {
      ...credentials,
      redirect: false,
    };
    signIn('credentials', options).then((result) => {
      if (result?.status === 200) {
        router.reload(router.asPath);
        // window.location.reload();
      } else if (result?.status !== 200) {
        setError('email', {
          type: 'manual',
          message: '    ',
        });
        setError('password', {
          type: 'manual',
          message: 'Email or password is wrong!',
        });
      }
    });
  }

  const forgotPassLogin = async (data) => {
    const res = await recoverPass({ email: data?.email, password: data?.password })

    if (res?.status === 200) {
      login(data);
    } else {
      setError('password', {
        type: 'manual',
        message: 'Password is wrong!',
      });
    }
  }

  const closeHandler = () => {
    loginHandler();
  };


  return (
    <>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Text b size={18}>
            Recover Password
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>

        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          {...register("email")}
          placeholder="Email"
          contentLeft={<Mail fill="currentColor" />}
        />
        {
          errors?.email?.message &&
          <div class="text-danger">
            {errors?.email?.message}
          </div>
        }

        <Input.Password
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          type={"password"}
          {...register("password")}
          placeholder="New Password"
          contentLeft={<Password fill="currentColor" />}
        />
        {
          errors?.password?.message &&
          <div class="text-danger">
            {errors?.password?.message}
          </div>
        }

        <Input.Password
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          type={"password"}
          {...register("password_confirmation")}
          placeholder="Password confirmation"
          contentLeft={<Password fill="currentColor" />}
        />
        {
          errors?.password_confirmation?.message &&
          <div class="text-danger">
            {errors?.password_confirmation?.message}
          </div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Close
        </Button>
        <Button auto onClick={handleSubmit(forgotPassLogin)}>
          Recover
        </Button>
      </Modal.Footer>
    </>
  );
}
