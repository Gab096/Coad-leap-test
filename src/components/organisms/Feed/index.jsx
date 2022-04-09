/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import CreatePost from "../../molecules/CreatePost";
import HeaderCards from "../../molecules/HeaderCards";
import Post from "../../molecules/Post";
import { Container, ContainerFeed } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "../../../store/modules/user/actions";

function Feed() {
  const dispatch = useDispatch(requestApiData());

  useEffect(() => {
    dispatch(requestApiData());
  }, []);

  const { data, loading } = useSelector((state) => state.user);

  return (
    <Container>
      <HeaderCards title="CodeLeap Network" />
      <ContainerFeed>
        <CreatePost />
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
            {data.map((item, index) => (
              <Post data={item} key={index} />
            ))}
          </>
        )}
      </ContainerFeed>
    </Container>
  );
}

export default Feed;
