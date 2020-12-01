import { Button, Card, Checkbox, Input, Form } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../redux/actions/auth.action";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Signin extends Component {
  onFinish = (values) => {
    // console.log("Success:", values);
    // call action login
    this.props.login(values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    let { sendingRequest, isLogined } = this.props;

    if (isLogined) {
      return <Redirect to="/" />;
    }

    return (
      <Card title="Sign In" style={{ width: 500, margin: "20px auto" }}>
        <Form
          {...layout}
          name="basic"
          initialValues={
            {
              // remember: true,
            }
          }
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                // custom validate
                validator: (rule, value) => {
                  // console.log(rule, value);
                  if (value && value.length < 3) {
                    return Promise.reject("Length must more than 3");
                  }
                  if (value && value.length > 24) {
                    return Promise.reject("Length must less than or equal 24");
                  }

                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button loading={sendingRequest} type="primary" htmlType="submit">
              {sendingRequest ? "Handling" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    isLogined: state.auth.isLogined,
    message: state.auth.message,
    sendingRequest: state.auth.sendingRequest,
  };
};

// const mapDispatch = (dispatch) => {
//   return { login: (user) => dispatch(login(user)) };
// };

export default connect(mapState, { login })(Signin);
