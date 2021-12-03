import React from "react";

type HeaderPropsType = {
  title: string
}
function Header(props: HeaderPropsType) {
  return (
    <div>
      <a href="#home">--- Home ---</a>
      <a href="#news"> --- News Feed --- </a>
      <a href="#message">--- Messages ---</a>
    </div>
  );
}

export default Header;