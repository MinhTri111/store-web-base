import React from 'react';
import { Button, Col, Divider, Form, Layout, Row, message, Typography } from 'antd';
import styled from 'styled-components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/stores';
import { InputField } from 'src/components/form';
import { registerAction } from 'src/stores/screens/auth/auth.action';

const { Content } = Layout;
const { Title } = Typography;

const RegisterScreen: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);

  const validationSchema = yup.object().shape({
    username: yup.string().required('USER  REQUIRED'),
    password: yup.string().required('PASSWORD REQUIRED').min(8),
  });

  const initialValues = {
    username: '',
    password: '',
  };

  const onRegisterSuccess = (): void => {
    void message.success('Register success!!!');
    history.push('/login');
  };

  const handleRegister = (value): void => {
    void dispatch(registerAction({ data: value, callback: onRegisterSuccess }));
  };

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema,
    initialValues,
    onSubmit: value => {
      handleRegister(value);
    },
  });

  const { setFieldValue } = formik;

  return (
    <RegisterScreenStyle>
      <Row>
        <Col span={24}>
          <Title style={{ textAlign: 'center' }}>REGISTER</Title>
        </Col>
        <Col span={8} />
        <Col span={8}>
          <Divider />
          <Form name="login" className="register-form" onFinish={() => formik.handleSubmit()}>
            <InputField
              field={formik.getFieldProps('username')}
              setFieldValue={setFieldValue}
              className="form-control form-email"
              inputProps={{
                size: 'middle',
                prefix: <UserOutlined className="site-form-item-icon" />,
                placeholder: 'Username',
              }}
              error={formik.errors.username}
              touched={formik.touched.username}
            />

            <InputField
              field={formik.getFieldProps('password')}
              setFieldValue={setFieldValue}
              className="form-control form-email"
              inputProps={{
                size: 'middle',
                prefix: <LockOutlined className="site-form-item-icon" />,
                placeholder: 'Password',
                type: 'password',
              }}
              error={formik.errors.password}
              touched={formik.touched.password}
            />

            <Button loading={isLoading} className="btn-submit" htmlType="submit" type="primary">
              Register
            </Button>
          </Form>
          <Divider />
        </Col>
        <Col span={8} />
      </Row>
    </RegisterScreenStyle>
  );
};

export default RegisterScreen;

const RegisterScreenStyle = styled(Content)`
  height: 100%;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .btn-submit {
    width: 100%;
  }
`;
