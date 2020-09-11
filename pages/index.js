import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { makeStyles, Grid } from "@material-ui/core";
import Post from "../src/post/post";
import MainCarousel from "../src/index/MainCarousel";
import { getData } from "../general/CallApi";
import Color from "../general/Color";

let useStyle = makeStyles({
    gridContainer: {
        // maxWidth: "1080px",
        marginTop: "16px",
    },
    bannerContainer: {
        // padding: "16px",
        margin: "16px",
        height: "800px",
    },
    banner: {
        backgroundColor: Color.dark,
        width: "100%",
        height:"100%"
    },
});
export default function Index({ posts }) {
    let classes = useStyle();
    return (
        <Fragment>
            <MainCarousel />
            <Grid
                container
                className={classes.gridContainer}
                justify="center"
                alignContent="center"
                alignItems="flex-start"
                spacing={2}
            >
                <Grid item xs={12} sm={12} md={9} lg={9} spacing={2}>
                    {/* post goes here */}
                    {posts.map((i) => {
                        return <Post post={i} />;
                    })}
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    {/* ads + banner goes here */}
                    <div className={classes.bannerContainer}>
                        <div className={classes.banner}>fake banner</div>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    );
}
export async function getStaticProps(context) {
    // call api to get article list, return article
    let posts = [];
    // let catalogs = [];
    // let products = [];
    await getData("/getPost", (result) => {
        posts = result.data;
    });

    return {
        props: {
            posts: posts,
        },
    };
}
