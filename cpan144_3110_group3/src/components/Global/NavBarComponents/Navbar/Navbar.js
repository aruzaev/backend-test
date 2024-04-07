import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../../../assets/logo.png";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // call api
  };

  const toggleSearchActive = () => {
    setSearchActive((prev) => !prev);
  };

  return (
    <nav className="navbar__main">
      <div className="navbar__left">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar__links-container">
          <div className="navbar__links-container1">
            {/* <Dropdown>
                <Dropdown.Toggle variant="success">Open Menu</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Home Page</Dropdown.Item>
                  <Dropdown.Item href="#">Settings</Dropdown.Item>
                  <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            <Link to="/categories">Categories</Link>
          </div>
        </div>

        <div className="navbar__generate">
          <Link to="/generate">Generate</Link>
        </div>
      </div>

      <div className="search__bar-container">
        <SearchBar
          onSearch={handleSearch}
          onToggle={toggleSearchActive}
          isActive={searchActive}
        />
      </div>
      <div className="navbar__right">
        <div className="navbar__links-container2">
          <Link to="/account">Account</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="navbar__sign">
          <Link to="/signin" type="button">
            Sign in
          </Link>
          <Link to="/signup" type="button">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
