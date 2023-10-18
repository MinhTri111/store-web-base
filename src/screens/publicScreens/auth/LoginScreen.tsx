import React from 'react';
import { Button, Col, Divider, Form, Layout, Row, Typography } from 'antd';
import styled from 'styled-components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/stores';
import { InputField } from 'src/components/form';
import { loginAction } from 'src/stores/screens/auth/auth.action';

const { Content } = Layout;
const { Title } = Typography;

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);

  const validationSchema = yup.object().shape({
    username: yup.string().required('USERNAME REQUIRED'),
    password: yup.string().required('PASSWORD REQUIRED').min(8),
  });

  const initialValues = {
    username: '',
    password: '',
  };

  const onLoginSuccess = (): void => {
    navigate('/dashboard');
  };

  const handleLogin = (value): void => {
    void dispatch(loginAction({ data: value, callback: onLoginSuccess }));
  };

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema,
    initialValues,
    onSubmit: value => {
      handleLogin(value);
    },
  });

  const { setFieldValue } = formik;

  return (
    <LoginScreenStyle>
      <Row>
        <Col span={24}>
          <Title style={{ textAlign: 'center' }}>LOGIN</Title>
        </Col>
        <Col span={8} />
        <Col span={8}>
          <Divider />

          <Form name="login" className="login-form" onFinish={() => formik.handleSubmit()}>
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
              Login
            </Button>
          </Form>
          <Divider />
        </Col>
        <Col span={8} />
      </Row>
    </LoginScreenStyle>
  );
};

export default LoginScreen;

const LoginScreenStyle = styled(Content)`
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
