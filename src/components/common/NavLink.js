import React, { Children } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const NavLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname.startsWith(props.href) ? `active` : null,
    })}
  </Link>
));

export default NavLink;
