'use client';
import Head from 'next/head';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { signUpRegister } from '../utils/utils';

interface FormDataRegister {
  name: string;
  email: string;
  password: string;
}

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAndPolicy: false,
};

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required('Required'),
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  termsAndPolicy: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('Required'),
});

export default function Register() {
  const [formData, setFormData] = useState<FormDataRegister | null>(null);
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (formCompleted && formData) {
      const submitRegister = async () => {
        const register = await signUpRegister(formData);
        if (register) {
          console.log('Register created successfully:', register);
        } else {
          console.log('Error creating register');
        }
      };
      submitRegister();
    }
  }, [formCompleted, formData]);

  const onFormSubmit = (values) => {
    setFormData(values);
    setFormCompleted(true);
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <Head>
        <title>Register</title>
      </Head>

      <div className="w-full lg:w-1/2 max-w-sm mx-auto mb-24 px-8 sm:px-0">
        <div className="mb-10">
          <p className="font-black text-3xl">
            Hai sa ne zici povestea aia Blana!
          </p>
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
              <div className="py-4">
                <label htmlFor="name" className="block font-semibold">
                  Username
                </label>
                <Field
                  name="name"
                  placeholder="Please enter your username"
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-md py-2 px-2 text-sm"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600"
                />
              </div>
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
              <div className="pb-4">
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
              <div className="pb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block font-semibold"
                >
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  placeholder="Please confirm your password"
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-md py-2 px-2 text-sm"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="pb-4">
                <label className="inline-flex items-center mt-3">
                  <Field
                    type="checkbox"
                    name="termsAndPolicy"
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">
                    I agree to the Terms of Service
                  </span>
                </label>
                <ErrorMessage
                  name="termsAndPolicy"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full bg-beautiful-gradient hover:bg-red-600 text-white font-semibold py-2 px-2 text-sm rounded-md"
                >
                  Signup
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex w-full my-4">
          <p className="font-semibold">
            Already a deeder?{' '}
            <span className="text-blue-600 hover:underline">
              <Link href="/">Sign in</Link>
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
