import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate("-50%", "-50%");
  width: 50px;
  height: 50px;
  border: 3px solid darkgrey;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
const Loader = () => {
  return <LoaderWrapper />;
};
export default Loader;
