import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from "next/router";
import { MainButton, BtnWrapper, BtnText } from './Experts/styles';


const validationSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email')
    .required('This input is required'),
  password: yup.string()
    .required('This input is required'),
}).required();

export default function LoginModal({ mentorId }) {

  const router = useRouter()
  const [visible, setVisible] = React.useState(false);
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const handler = () => setVisible(true);


  const { register, handleSubmit, clearErrors,
    setError, formState: { errors } } = useForm({
      resolver: yupResolver(validationSchema)
    });

  const login = (data) => {
    // console.log(data)
    let credentials = {
      username: data?.email,
      password: data?.password
    };
    let options = {
      ...credentials,
      // callbackUrl: `${window.location.origin}/`,
      redirect: false,
    };
    signIn('credentials', options).then((result) => {
      if (result?.status !== 200) {
        setError('email', {
          type: 'manual',
          message: '    ',
        });
        setError('password', {
          type: 'manual',
          message: 'Email or password is wrong!',
        });
      }
      if (result?.status === 200) {
        window.location.reload(`/mentor?id=${mentorId}`);
        // router.push('/');
      }
    });
  }


  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      {/* <Button auto shadow onClick={handler}>
        Login
      </Button> */}
      <BtnWrapper>
        <MainButton to="View more" onClick={handler}>
          <BtnText>
            View more
          </BtnText>
        </MainButton>
      </BtnWrapper>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Login
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>

          <Input
            // onChange={(e) => setEmail(e.target.value)}
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

          <Input
            clearable
            bordered
            fullWidth
            // onChange={(e) => setPassword(e.target.value)}
            color="primary"
            size="lg"
            type={"password"}
            {...register("password")}
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
          {
            errors?.password?.message &&
            <div class="text-danger">
              {errors?.password?.message}
            </div>
          }
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={handleSubmit(login)}>
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}