import React, { useState } from "react";
import Input from "../../atomics/Input";
import Button from "../../atomics/Button";
import COLORS from "../../../common/colors";
import { ContainerForm } from "./style";
import { useDispatch } from "react-redux";

import {uiPostRequest} from "../../../store/modules/user/actions"

function CreatePost() {
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem("username"));

  const handleSubmit = (e) => {
    dispatch(uiPostRequest({ username, title, content }));
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <h2>What’s on your mind?</h2>
      <Input label="Title" placeholder="Hello World" onChange={e => setTitle(e.target.value)} />
      <textarea
        rows={6}
        className="ContentContainer"
        label="Content"
        placeholder="Content here"
        onChange={e => setContent(e.target.value)}
        heigth="100px"
      />
      <Button
        title="Create"
        type="submit"
        disabled={!title || !content}
        background={COLORS.BLACK}
        color={COLORS.WHITE}
      />
    </ContainerForm>
  );
}

export default CreatePost;
