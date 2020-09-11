import React from "react";
import { makeStyles } from "@material-ui/core";
import Color from "../../general/Color";
import styles from "./index.module.css";

let useStyle = makeStyles({
    container: {
        width: "400px",
        height: "300px",
    },
    background: {
        filter: "blur(4px)",
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    foreground: {
        backdropFilter: "blur(10px)",
    },
});

export default function CarouselItem() {
    let classes = useStyle();
    return (
        <div
            style={{
                height: "250px",
                color: Color.white,
                lineHeight: "250px",
                textAlign: "center",
                // background: Color.primary,
                backgroundImage: `url(https://store.playstation.com/store/api/chihiro/00_09_000/container/MY/en/999/EP0700-CUSA10246_00-ASIAFULLGAME0000/1596427267000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className={styles.container}>
                <div className={styles.modal}>
                    <div
                        style={{
                            height: "230px",
                            width: "130px",
                            color: Color.white,
                            lineHeight: "150px",
                            textAlign: "center",
                            // background: Color.primary,
                            backgroundImage: `url(https://store.playstation.com/store/api/chihiro/00_09_000/container/MY/en/999/EP0700-CUSA10246_00-ASIAFULLGAME0000/1596427267000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000)`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
