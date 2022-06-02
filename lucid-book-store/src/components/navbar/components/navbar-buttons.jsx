import { useNavigate } from "react-router-dom";


const NavbarWishlistButton = ({ wishlistNotification }) => (
  <button className="btn-icon nav-icons">
    <i className="fas is-dark fa-heart icon-badge">
      {wishlistNotification > 0 ? (
        <span className="">{wishlistNotification}</span>
      ) : (
        ""
      )}
    </i>
  </button>
);
const NavbarCartButton = ({ cartNotification }) => (
  <button className="btn-icon nav-icons m-x-1">
    <i className="fas is-dark fa-shopping-cart icon-badge">
      {cartNotification > 0 ? <span className="">{cartNotification}</span> : ""}
    </i>
  </button>
);

const NavbarLoginButton = ({ token, toggleLogoutModal }) => {
  const navigate = useNavigate();
  const authButtonClick = () => {
    token ? toggleLogoutModal() : navigate("/login");
  };
  return (
    <button onClick={authButtonClick} className="btn-primary nav-btn btn-small">
      {token ? "Logout" : "Log in"}
    </button>
  );
};

export { NavbarCartButton, NavbarLoginButton, NavbarWishlistButton };
