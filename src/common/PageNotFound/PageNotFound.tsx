import styled from 'styled-components';
const NotFoundPage = styled.h3`
  margin: auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PageNotFound = () => {
  return <NotFoundPage>Oops Page Not Found!...</NotFoundPage>;
};
export default PageNotFound;
