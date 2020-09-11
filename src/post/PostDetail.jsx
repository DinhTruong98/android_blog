import React, { Fragment } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import RestoreIcon from "@material-ui/icons/Restore";
import { makeStyles } from "@material-ui/core";
import { timeAgo } from "../../general/helper";
import moment from "moment";
import "moment/locale/vi";
import { Parallax, Background } from "react-parallax";
import Color from "../../general/Color";

moment.locale("vi");

let useStyle = makeStyles({
    container: {
        padding: "16px",
        backgroundColor: "white",
    },
    contentContainer: {
        backgroundColor: "white",
    },
    history: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    description: {},
});

export default function PostDetail({ post }) {
    let isLoading =
        Object.keys(post).length === 0 && post.constructor === Object;
    let classes = useStyle();
    return (
        <div>
            {isLoading ? (
                <div style={{ padding: "16px" }}>
                    <Skeleton
                        animation="wave"
                        // variant="rect"
                        width={"100%"}
                        height={80}
                    />
                    <Skeleton
                        animation="wave"
                        // variant="rect"
                        width={"100%"}
                        height={40}
                    />
                    <Skeleton
                        animation="wave"
                        // variant="rect"
                        width={"80%"}
                        height={40}
                    />
                </div>
            ) : (
                <div>
                    <Parallax
                        blur={{ min: -100, max: 100 }}
                        bgImage={post.coverImageLink}
                        bgImageAlt="the dog"
                        strength={100}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "column",
                            }}
                        >
                            <div style={{ height: "400px" }} />
                        </div>
                    </Parallax>
                    <div className={classes.container}>
                        <h1 style={{ color: Color.primary, textAlign:"center", fontSize:"4vmax", textTransform:"uppercase" }}>{post.title}</h1>
                        <div className={classes.history}>
                            <RestoreIcon fontSize={"small"} />{" "}
                            <div style={{ paddingLeft: "4px" }}>
                                {timeAgo(post.createdDate)}{" "}
                            </div>
                        </div>
                        <h3>{post.description}</h3>
                        <span
                            dangerouslySetInnerHTML={{ __html: post.detail }}
                        ></span>
                    </div>
                </div>
            )}
        </div>
    );
}
