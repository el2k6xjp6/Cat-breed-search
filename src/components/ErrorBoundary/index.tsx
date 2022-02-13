import { Component, ErrorInfo, ReactNode } from "react";
import { Container, ErrorContainer, ErrorImage, ErrorTitle } from "./styles";
import ErrorImg from "../../assets/Error.svg";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <ErrorContainer>
            <ErrorImage src={ErrorImg} alt="Error" />
            <ErrorTitle>Something went wrong.</ErrorTitle>
          </ErrorContainer>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
