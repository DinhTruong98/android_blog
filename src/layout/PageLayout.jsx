import React from "react";
import Header from "../page/Header";
import { makeStyles } from "@material-ui/core";
import Color from "../../general/Color";

const useStyle = makeStyles({
    body: {
        overflow: "hidden",
    },
});

export default function PageLayout({ children }) {
    let classes = useStyle();
    return (
        <div>
            <Header />
            <div className={classes.body}>{children}</div>
            <footer>footer</footer>
        </div>
    );
}
