import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from "next/router";
import { MainButton, BtnWrapper, BtnText } from './Experts/styles';
import Link from "next/link";
import { recoverPass } from "../services/auth.service";

const validationSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email')
    .required('This input is required'),
  password: yup.string()
    .required('This input is required'),
}).required();

export default function LoginModal({ mentorId }) {

  const router = useRouter()
  const [visible, setVisible] = React.useState(false);
  const [forgot, setForgot] = React.useState(false);
  const handler = () => setVisible(true);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const login = (data) => {
    let credentials = {
      username: data?.email,
      password: data?.password
    };
    let options = { ...credentials, redirect: false };

    signIn('credentials', options).then((result) => {
      if (result?.status === 200) {
        // router.push(`/mentor?id=${mentorId}`);
        window.location.href = `http://localhost:3000/mentor?id=${mentorId}`;
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


  // const forgotPassLogin = async (data) => {
  //   const res = await recoverPass({ email: data?.email, password: data?.password })
  //   console.log(res);

  //   if (res?.status === 200) {
  //     closeForgotPass();
  //     login(data);
  //   } else {
  //     setError('password', {
  //       type: 'manual',
  //       message: 'Password is wrong!',
  //     });
  //   }
  // }

  const closeHandler = () => {
    setVisible(false);
  };

  // const forgotPassHandler = () => {
  //   closeHandler();
  //   setForgot(true);
  //   setValue('password', "");
  //   setError('password', "");
  // }

  // const closeForgotPass = () => {
  //   setForgot(false);
  // }

  return (
    <>
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
          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={15}>Remember me</Text>
            </Checkbox>
            <Link href="" onClick={forgotPassHandler}>
              Forgot password?
            </Link>
          </Row> */}
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
    </>
  );
}