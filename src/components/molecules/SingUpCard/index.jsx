import React, { useState } from "react";
import Input from "../../atomics/Input";
import Button from "../../atomics/Button";
import COLORS from "../../../common/colors";
import { useHistory } from "react-router-dom";
import { Container, FormContainer } from "./style";

function SingUpCard() {
  const history = useHistory();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("username", JSON.stringify(value));
      history.push("/mainscreen")
      window.location.reload()
  };

  return (
    <Container>
      <h5>Welcome to CodeLap network!</h5>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          label="Please enter your username"
          onChange={e => setValue(e.target.value)}
          placeholder="ex: jhon doe"
          type="text"
        />
        <Button
          title="Enter"
          type="submit"
          disabled={!value}
          background={COLORS.BLACK}
          color={COLORS.WHITE}
        />
      </FormContainer>
    </Container>
  );
}

export default SingUpCard;
