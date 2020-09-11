import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GetAppIcon from "@material-ui/icons/GetApp";
import Link from "next/link";
import { isMobile } from "../../general/helper";

const useStyles = makeStyles({
    root: {
        // width: "600px",
        margin: "16px",
        boxShadow: "none",
        height: "100%",
    },
    media: {
        height: isMobile().any() ? 140 : 220,
    },
});

export default function Post({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link
                key={post._id}
                href={"/[name]"}
                as={`/${post.url}?pid=${post._id}`}
                href={{ pathname: "/[name]", query: { pid: post._id } }}
            >
                <a>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={post.coverImageLink}
                            title="Contemplative Reptile"
                        />

                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {post.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {post.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Link>
            <CardActions>
                <IconButton aria-label="delete">
                    <FavoriteBorderIcon />
                </IconButton>
                {" " + post.totalLike}

                <IconButton aria-label="delete">
                    <VisibilityIcon />
                </IconButton>
                {" " + post.totalView}
                <IconButton aria-label="delete">
                    <GetAppIcon />
                </IconButton>
                {" " + post.totalDownload}
            </CardActions>
        </Card>
    );
}
