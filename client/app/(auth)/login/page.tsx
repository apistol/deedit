'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { login, signUpRegister } from '../../../utils/utils';

interface FormDataLogin {
  email: string;
  password: string;
}

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('Required')
    .test(
      'email-format',
      'Email must include "@" and end with ".com"',
      (value) => !!value && value.includes('@') && value.endsWith('.com'),
    ),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function Login() {
  const [formData, setFormData] = useState<FormDataLogin | null>(null);
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (formCompleted && formData) {
      const submitLogin = async () => {
        const loginUser = await login(formData);
        if (loginUser) {
          console.log('Login successfully:', loginUser);
        } else {
          console.log('Error login');
        }
      };
      submitLogin();
    }
  }, [formCompleted, formData]);

  const onFormSubmit = (values) => {
    setFormData(values);
    setFormCompleted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen">
      <Head>
        <title>Register</title>
      </Head>
      <div className="mx-auto lg:hidden mb-20">
        <p className=" text-8xl font-black bg-beautiful-gradient text-transparent bg-clip-text">
          deedit.
        </p>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 max-w-sm mx-auto mb-24 px-8 sm:px-0">
        <div className="mb-10">
          <p className="font-black text-3xl">Hai sa povestim iar!</p>
        </div>
        <div className="">
          <Formik
            initialValues={INITIAL_FORM_STATE}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              onFormSubmit(values);
            }}
          >
            <Form>
              <div className="pb-4">
                <label htmlFor="email" className="block font-semibold">
                  Email
                </label>
                <Field
                  name="email"
                  placeholder="Please enter your email"
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-md py-2 px-2 text-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="pb-8">
                <label htmlFor="password" className="block font-semibold">
                  Password
                </label>
                <Field
                  name="password"
                  placeholder="Please enter your password"
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-md py-2 px-2 text-sm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full bg-beautiful-gradient hover:bg-red-600 text-white font-semibold py-2 px-2 text-sm rounded-md"
                >
                  SignIn
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex w-full my-4">
          <p className="font-semibold">
            Nu ai un cont?{' '}
            <span className="text-blue-600 hover:underline">
              <Link href="/register">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-beautiful-gradient h-screen rounded-l-[3rem]">
        <div className="w-full h-screen flex flex-col justify-center px-4 gap-28">
          <p className="text-white font-black text-9xl mx-auto">deedit.</p>
          <p className="text-white font-extrabold text-7xl mx-auto">
            Prima aplicatie cu povesti funny din Romania
          </p>
        </div>
      </div>
    </div>
  );
}
