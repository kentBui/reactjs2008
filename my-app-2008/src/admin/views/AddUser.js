import {
  Button,
  Form,
  Input,
  InputNumber,
  notification,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addUser, getUser } from "../redux/actions/user.action";
import PropTypes from "prop-types";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function AddUser() {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  console.log(userReducer);

  const params = useParams();

  console.log(userReducer);
  const { loading, message } = userReducer.addUser;

  const { user } = userReducer.getUser;

  useEffect(() => {
    // console.log(params);

    dispatch(getUser(params.id));
  }, [params]);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  const onFinish = (values) => {
    // console.log(values);
    dispatch(addUser(values));

    // dispatch(updateUser(values));
  };

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        {params.id ? "Update User" : "Add User"}
      </h3>
      <Form
        {...layout}
        initialValues={{
          ["name"]: "kent",
        }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "adress"]}
          label="Adress"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[{ type: "number", min: 0, max: 99, required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "class"]} label="Class">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
          <Typography>{loading ? "Sending" : message}</Typography>
        </Form.Item>
      </Form>
    </>
  );
}

AddUser.propTypes = {};

export default AddUser;
