import PropTypes from "prop-types";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

// Validate that `children` is a valid React node
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
