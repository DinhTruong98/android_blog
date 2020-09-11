import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SubjectIcon from "@material-ui/icons/Subject";
import CachedIcon from "@material-ui/icons/Cached";
import Link from "next/link";

const useStyle = makeStyles({
    logoContainer: {
        padding: "16px",
    },
});

export default function SideMenu({ onClose }) {
    let classes = useStyle();
    return (
        <div>
            <div className={classes.logoContainer}>
                <h1> Android game blog</h1>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <Link href={"/"}>
                        <div>
                            <ListItemText primary={"Home Page"} />
                        </div>
                    </Link>
                </ListItem>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <WhatshotIcon />
                    </ListItemIcon>
                    <Link href={"/trending"}>
                        <div>
                            <ListItemText primary={"Trending"} />
                        </div>
                    </Link>
                </ListItem>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <SportsEsportsIcon />
                    </ListItemIcon>
                    <Link href={"/games"}>
                        <div>
                            <ListItemText primary={"All games"} />
                        </div>
                    </Link>
                </ListItem>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <SubjectIcon />
                    </ListItemIcon>
                    <Link href={"/genres"}>
                        <div>
                            <ListItemText primary={"All genres"} />
                        </div>
                    </Link>
                </ListItem>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <CachedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Random game"} />
                </ListItem>
            </List>
        </div>
    );
}
