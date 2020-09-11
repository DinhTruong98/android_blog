import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, useTheme } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { postData } from "../../general/CallApi";
import CKEditor4 from "ckeditor4-react";

export default function CreatePost() {
    const editorRef = useRef();
    const [isPostData, setIsPostData] = useState(null);
    const [post, setPost] = useState({});
    const [editorLoaded, setEditorLoaded] = useState(false);
    const { register, handleSubmit, errors, setValue } = useForm();
    const onSubmit = (data) => {
        setPost(data);
        setIsPostData(true);
    };
    const { CKEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            //CKEditor: require("cke"),
            // ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
        register("detail");
        setEditorLoaded(true);
    }, []);

    useEffect(() => {
        if (isPostData == true) {
            postData("/createPost", post);
        }
        setIsPostData(false);
    }, [isPostData]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ backgroundColor: "white", padding: "16px" }}>
                <TextField
                    id="outlined-basic"
                    label="Tiêu đề"
                    variant="outlined"
                    inputRef={register({ required: true, maxLength: 1000 })}
                    name={"title"}
                    fullWidth
                />
            </div>
            <div style={{ backgroundColor: "white", padding: "16px" }}>
                <TextField
                    id="outlined-basic"
                    label="Mô tả ngắn"
                    variant="outlined"
                    fullWidth
                    rows={3}
                    multiline
                    inputRef={register({ required: true, maxLength: 1000 })}
                    name={"description"}
                />
            </div>
            <div style={{ backgroundColor: "white", padding: "16px" }}>
                <TextField
                    id="outlined-basic"
                    label="Link tải"
                    variant="outlined"
                    fullWidth
                    inputRef={register}
                    name={"downloadLink"}
                />
            </div>
            <div style={{ backgroundColor: "white", padding: "16px" }}>
                <TextField
                    id="outlined-basic"
                    label="Link ảnh bìa"
                    variant="outlined"
                    fullWidth
                    inputRef={register}
                    name={"coverImageLink"}
                />
            </div>
            {editorLoaded ? (
                <div style={{ backgroundColor: "white", padding: "16px" }}>
                    <CKEditor4
                        data="<h1>Tiêu đề</h1><p>Nội dung</p>"
                        onInit={(editor) => {
                            // You can store the "editor" and use when it is needed.
                            // console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event) => {
                            // console.log(event, editor);

                            setValue("detail", event.editor.getData());
                        }}
                        onBlur={(event, editor) => {
                            // console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                            // console.log("Focus.", editor);
                        }}
                    />
                </div>
            ) : null}

            <div
                style={{
                    padding: "16px",
                    backgroundColor: "white",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </div>
        </form>
    );
}
