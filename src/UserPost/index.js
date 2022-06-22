import React, { useState } from "react";
import LoadingCard from "./LoadingCard";
import { useSelector,useDispatch } from "react-redux";
import { getPost,deletePost } from "../redux/features/postSlice";

import { Button, Card, Input, Space } from "antd";

const UserPost = ({ history }) => {

  const dispatch=useDispatch();

  const [id, setId] = useState();
  const [bodyText, setBodyText] = useState("");
  const {loading,post,edit} =useSelector((state)=>({...state.app}))
  console.log(post,"this is posts");
  const onChangeInput = (e) => {
    setId(e.target.value);
  };


  const fetchUserPost = () => {
    if (!id) {
      window.alert("Please enter id");
    } else {
      dispatch(getPost({id}))
      setId("");
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Fetch Post</h1>
      <Input
        placeholder="Enter User Id"
        type="number"
        onChange={onChangeInput}
        value={id}
        style={{ width: "300px" }}
      />
      <br />
      <br />
      <Space size="middle" style={{ margin: 10 }}>
        <Button type="primary" onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type="primary" onClick={() => history.push("/create")}>
          Create User Post
        </Button>
      </Space>
      <br />
      <br />
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {post?.length>0 &&(
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={post[0].title}>
                <p>User Id: {post[0].id}</p>
                {edit ? (
                  <>
                    <Input.TextArea
                      rows={4}
                      value={bodyText}
                      onChange={(e) => setBodyText(e.target.value)}
                    />
                    <Space
                      size="middle"
                      style={{
                        marginTop: 5,
                        marginLeft: 5,
                      }}
                    >
                      <Button type="primary">Save</Button>
                      <Button>Cancel</Button>
                    </Space>
                  </>
                ) : (
                  <span>{post[0].body}</span>
                )}
              </Card>
              <Space
                size="middle"
                style={{
                  marginTop: 35,
                  marginLeft: 5,
                  float: "right",
                }}
              >
                <Button
                  style={{ cursor: "pointer" }}
                  type="primary"
                  disabled={edit}
                  danger
                  // onClick={()=>dispatch(deletePost{id:post(1).id})}
                  onClick={()=>dispatch(deletePost({id:post[0].id}))}
                >
                  Delete
                </Button>

                <Button type="primary">Edit </Button>
              </Space>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserPost;
