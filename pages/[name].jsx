import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getData } from "../general/CallApi";
import Head from "next/head";
import PostDetail from "../src/post/PostDetail";

export default function PostDetailPage() {
    const router = useRouter();
    const { pid } = router.query;
    const [post, setPost] = useState({});
    useEffect(() => {
        let postId = pid
            ? pid
            : new URLSearchParams(window.location.search).get("pid");

        getData(`/getPostDetail?pid=${postId}`, (data) => {
            setPost(data.data);
        });
    }, []);

    return (
        <div>
           <PostDetail post={post} />
        </div>
    );
}
