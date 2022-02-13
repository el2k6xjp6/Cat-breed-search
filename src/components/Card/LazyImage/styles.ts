import styled from "styled-components";
import Loading from "../../../assets/Spinner.gif";

// background-image: url("${props => props.error ? props.errorSrc : (props.loading ? Loading : props.actualSrc)}");
export const StyledImage = styled.div<{ loading: boolean; actualSrc: string }>`
  background-image: url("${(props) =>
    props.loading ? Loading : props.actualSrc}");
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;
