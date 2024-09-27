import { Button } from "react-bootstrap";
import { FaArrowCircleUp } from "react-icons/fa";

function ButtonTop(props) {
  return (
    <>
      <Button
        className="ButtonTop"
        id={props.top}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <FaArrowCircleUp style={{ fontSize: "22px" }} />
      </Button>
    </>
  );
}


export default ButtonTop;