import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from "next/router";
import ForgotPassword from "./ForgotPassword";

const validationSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email')
    .required('This input is required'),
  password: yup.string()
    .required('This input is required')
}).required();


export default function Login() {
  const router = useRouter()
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const [activeBlock, setActiveBlock] = useState('login');

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

  const closeHandler = () => {
    setActiveBlock("login");
  };

  const forgotPassHandler = () => {
    setActiveBlock("forgot-password");
    setValue('password', "");
    setError('password', "");
  }

  return (
    <>
      <Button bordered css={{
        background: "#ffff",
        borderColor: "#1B1464",
        borderWidth: "revert",
        fontFamily: "$sans",
        fontSize: "16px",
        color: "#1B1464",
        '&:hover': {
          background: "#1B1464",
          color: "#ffff"
        }
      }} auto onClick={handler}>
        Login
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        {
          activeBlock == 'login' &&
          <>
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  Login
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
                  <Text size={15}>Remember me</Text>
                </Checkbox>
                <span onClick={forgotPassHandler}>
                  Forgot password?
                </span>
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
          </>
        }

        {
          activeBlock == 'forgot-password' && <ForgotPassword loginHandler={() => setActiveBlock("login")} />
        }
      </Modal>
    </>
  );
}
