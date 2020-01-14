import React from "react";
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { saveToken } from '@/store/account/action';
import service, { ILoginPayload } from './service';
import { createCaptcha } from './util';
import './style.less';


interface ILoginProps extends IPageProps {
  token: string;
  onSaveToken: (token: string) => void;
}

interface ILoginState {
  captcha: string;
}

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

class Login extends React.Component<ILoginProps, ILoginState> {

  public readonly state: Readonly<ILoginState> = {
    captcha: ''
  }

  public canvas: any;

  public componentDidMount() {
    this.createCaptcha();
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login__title">后台管理系统</div>
        <Form layout="horizontal" colon={true} labelAlign="left" {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="账    号">
            {
              getFieldDecorator('username', {
                validateTrigger: 'onBlur',
                initialValue: 'admin',
                rules: [{
                  required: true,
                  message: '账号不能为空'
                }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入账号"
                />
              )
            }
          </Form.Item>

          <Form.Item label="密    码">
            {
              getFieldDecorator('password', {
                initialValue: 'admin123456',
                validateTrigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '密码不能为空！',
                }, {
                  pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
                  message: '密码为6~20位，且需要包含数字和字母！'
                }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                />
              )
            }
          </Form.Item>

          <Form.Item label="验证码">
            {
              getFieldDecorator('verification', {
                initialValue: '',
                validateTrigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '验证码不能为空！'
                }, {
                  pattern: new RegExp(this.state.captcha, 'i'),
                  message: '验证码有误！'
                }],
              })(
                <Row>
                  <Col span={16}>
                    <Input
                      prefix={<Icon type="property-safety" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="请输入验证码"
                    />
                  </Col>
                  <Col span={8} style={{ height: '40px' }}>
                    <canvas onClick={this.createCaptcha} width="80" height="40" style={{ cursor: 'pointer' }} ref={el => this.canvas = el} />
                  </Col>
                </Row>
              )
            }
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" block={true}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }

  // 创建验证码
  private createCaptcha = () => {
    this.setState({ captcha: createCaptcha(this.canvas) })
  }

  // 登录
  private handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    this.props.form.validateFields(async (error: any, values: ILoginPayload) => {
      if (!error) {
        const data = await service.login(values);
        const token = data.token;
        $http.setheader({ Authorization: token });
        this.props.onSaveToken(token);
        this.props.history.replace('/dashboard');
      }
    });
  }
}


export default connect(
  (state: any) => ({ token: state.token }),
  { onSaveToken: saveToken }
)(Form.create<ILoginProps>()(Login))





