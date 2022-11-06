import Headers from "./Headers";
import Days from "./Days";

function Container() {
  return (
    <div className="container mt-5">
      <div className="row">
        <Headers />
        <Days />
      </div>
    </div>
  );
}

export default Container;
