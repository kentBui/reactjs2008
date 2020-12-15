import { Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { getAllListUsers } from "../redux/actions/user.action";

function ListUsers(props) {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSiza] = useState(2);

  useState(() => {
    props.getAllListUsers({ term: "", page: current, pageSize: pageSize });
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Class",
      key: "class",
      dataIndex: "class",
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Space size="middle">
          <a>View</a>
          <a onClick={() => onEditUser(data.id)}>Edit</a>
          {/* <Link to={`/user/edit/${data.id}`}>Edit</Link> */}
          {/* get object of this item on row */}
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const onEditUser = (id) => {
    console.log(id);
    // console.log(props.history);
    setTimeout(() => {
      props.history.push(`/user/edit/${id}`);
    }, 2000);
  };

  const onPageChange = (page, pageSize) => {
    setCurrent(page);
    setPageSiza(pageSize);
    console.log("state:", page, pageSize);
    props.getAllListUsers({ term: "", page: page, pageSize: pageSize });
  };

  const { users } = props.list;

  console.log(users);

  return (
    <Table
      columns={columns}
      dataSource={users.data}
      pagination={{
        current,
        pageSize,
        total: users.total,
        onChange: onPageChange,
      }}
    />
  );
}

const mapState = (state) => {
  return {
    list: state.userReducer.list,
  };
};

ListUsers.propTypes = {};

export default connect(mapState, { getAllListUsers })(withRouter(ListUsers));
