import React, { ReactNode } from 'react'
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

type LayoutProps = {
  children?: ReactNode
}

function Layout(props: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
