import Menu from "./Menu";

const NotFound404 = ({ errorMessage }) => {
  return (
    <div className="container text-center">
      <Menu />
      <div>
        <strong>{errorMessage}</strong>
      </div>
    </div>
  );
};

export default NotFound404;
