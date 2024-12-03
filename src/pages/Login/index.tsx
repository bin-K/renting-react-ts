import { Toast } from 'antd-mobile'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, Schema, string } from 'yup'
import { API } from '../../utils/api'

import NavHeader from '../../components/NavHeader'

import './index.scss'

interface ILoginForm {
  username: string
  password: string
}

// 校验规则
const REG_UNAME = /^[a-zA-Z_\d]{5,8}$/;
const REG_PWD = /^[a-zA-Z_\d]{5,12}$/;



export default function Login() {

  const initialValues: ILoginForm = {
    username: '',
    password: ''
  }

  const validationSchema: Schema<ILoginForm> = object({
    username: string().required('账号必填').matches(REG_UNAME, '账号长度为5~8位，只能由数字、字母、下划线组成'),
    password: string().required('密码必填').matches(REG_PWD, '密码长度为5~12位，只能由数字、字母、下划线组成'),
  })

  const handleSubmit = async (values: ILoginForm) => {
    // 获取账号、密码
    const { username, password } = values;
    
    const res = await API.post('/user/login', {
      username,
      password
    });
    console.log(res);

    // 获取返回数据
    const { status, body, description } = res.data;
    if (status === 200) {
      // 登录成功
      // 将token存储到本地
      localStorage.setItem('Renting_token', body.token);
      // if (!props.location.state) {
      //   // 用户直接点击登录按钮
      //   props.history.goBack();
      // } else {
      //   // 用户通过其他地方跳转至登录页面
      //   props.history.replace(props.location.state.from.pathname)
      // }
    } else {
      // 登录失败
      Toast.show({ content: description,duration: 2, maskClickable:false});
    }
  }


  return (
    <div className="root">
      <NavHeader className='navHeader'>账号登陆</NavHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='form'>
          <div className='formItem'>
            <Field
              className='input'
              name='username'
              placeholder="请输入账号"
            />
          </div>
          <ErrorMessage className='error' name="username" component="div"></ErrorMessage>
           <div className='formItem'>
              <Field
                className='input'
                name="password"
                type="password"
                placeholder="请输入密码"
              ></Field>
            </div>
            <ErrorMessage className='error' name="password" component="div"></ErrorMessage>
            <div className='formSubmit'>
              <button
                className="submit"
                type="submit"
              >登  录</button>
            </div>
        </Form>
      </Formik>
    </div>
  )
}