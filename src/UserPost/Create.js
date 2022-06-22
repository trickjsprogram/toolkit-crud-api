import React, { useState } from "react";
import { Input, Button, Card, Space } from "antd";
import LoadingCard from "./LoadingCard";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { createPost } from "../redux/features/postSlice";
import createPost from "../redux/features/postSlice"

const CreatePost = ({ history }) => {
  const [values, setValues] = useState({ title: "", body: "" });

  const [showPost, setShowPost] = useState(false);
  const {post, loading}=useSelector((state)=>({...state.app}))
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(values))
    setValues({ title: "", body: "" });
    setShowPost(true)
  };
  console.log(values,"store the value");

  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <div className="site-card-border-less-wrapper">
            <Card type="inner" title={post[0].title}>
              <p>User Id: {post[0].id}</p>
              <span>{post[0].body}</span>
            </Card>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "20px" }}>
          <h1>Create Post</h1>
          <Input
            placeholder="Enter title"
            type="text"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <Input.TextArea
            placeholder="Enter Body"
            type="text"
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            value={values.body}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Space style={{ margin: 10 }}>
            <Button onClick={() => history.push("/")}>Go Back</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </div>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </>
  );
};

export default CreatePost;
