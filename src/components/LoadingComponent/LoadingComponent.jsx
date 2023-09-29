import Spinner from 'react-bootstrap/Spinner';
import "./LoadingComponent.css";

function LoadingComponent() {
    return (
      <div className="loadingComponent">
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden" >Loading...</span>
      </Spinner>
      </div>
    );
  }

export default LoadingComponent;