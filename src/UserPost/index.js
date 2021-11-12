import React, { useState } from "react";
import LoadingCard from "./LoadingCard";

import { Button, Card, Input, Space } from "antd";

const UserPost = ({ history }) => {
  const [id, setId] = useState();
  const [bodyText, setBodyText] = useState("");

  const onChangeInput = (e) => {
    setId(e.target.value);
  };


  const fetchUserPost = () => {
    if (!id) {
      window.alert("Please enter id");
    } else {
      // dispatch(loadUserPostStart({ id }));
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
      {/* {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {posts.length > 0 && (
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={posts[0].title}>
                <p>User Id: {posts[0].id}</p>
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
                  <span>{posts[0].body}</span>
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
                >
                  Delete
                </Button>

                <Button type="primary">Edit </Button>
              </Space>
            </div>
          )}
        </>
      )} */}
    </div>
  );
};

export default UserPost;
