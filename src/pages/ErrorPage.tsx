import { NavLink} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>ERROR!</h1>
      <p>Cant load the page..............</p>
      <NavLink to={"/"}>
        <button> ERROR </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
