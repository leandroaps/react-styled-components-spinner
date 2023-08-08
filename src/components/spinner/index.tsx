import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border-width: 1rem;
  border-style: solid;
  border-color: purple purple purple purple;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: purple;
    position: absolute;
    left: 7em;
  }

  &:before {
    top: 2rem;
  }

  &:after {
    bottom: 2rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function Spinner() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}
