import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from "next/router";
import { registerUser } from '../services/auth.service';
import { toast } from "react-toastify";

const validationSchema = yup.object().shape({
  first_name: yup.string()
    .required('This input is required'),
  last_name: yup.string()
    .required('This input is required'),
  email: yup.string().email('Must be a valid email')
    .required('This input is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  password_confirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
}).required();

export default function Register() {

  const router = useRouter()
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);


  const { register, handleSubmit, clearErrors,
    setError, formState: { errors } } = useForm({
      resolver: yupResolver(validationSchema)
    });

  const userRegister = (data) => {
    registerUser(data).then((res) => {
      if (res?.data && res?.data?.token) {
        let credentials = {
          username: data?.email,
          password: data?.password
        };
        let options = {
          ...credentials,
          callbackUrl: `${window.location.origin}/`,
          redirect: false
        };
        signIn("credentials", options).then((result) => {
          if (result?.status === 200) {
            toast.success('Auth success!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            router.reload()
          } else {
            toast.error('Auth error!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      } else {
        toast.error('Register error!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
  }


  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button css={{ background: "#ED1E79", fontSize: "16px" }} auto onClick={handler}>
        Register
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Register
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
            {...register("first_name")}
            placeholder="First name"
            contentLeft={<Mail fill="currentColor" />}
          />
          {
            errors?.first_name?.message &&
            <div class="text-danger">
              {errors?.first_name?.message}
            </div>
          }

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            {...register("last_name")}
            placeholder="Last name"
            contentLeft={<Mail fill="currentColor" />}
          />
          {
            errors?.last_name?.message &&
            <div class="text-danger">
              {errors?.last_name?.message}
            </div>
          }

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

          <Input
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
          <Input
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
          <Button auto onClick={handleSubmit(userRegister)}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
