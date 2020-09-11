import React from "react";
import CreatePost from "../../src/admin/CreatePost";
import { Button } from "@material-ui/core";
import Link from "next/link";

export default function admin() {
    return (
        <div>
            {/* <Button> + Thêm bài viết</Button> */}
            <CreatePost />
        </div>
    );
}
