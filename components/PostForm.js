import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';

import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, setText] = useState('');

    useEffect(() => {
        if(addPostDone){
            setText('');
        }
    }, [addPostDone]);
    
    const onChageText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const onSubmit = useCallback(() => {
        dispatch(addPost(text));
    }, [text]);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return(
        <Form style={{ margin : '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChageText}
                maxLength={140}
                placeholder="어떤 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{float : 'right'}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v) => 
                    <div key={v} style={{display : 'inline-block'}}>
                        <img src={v} style={{width : '200px'}} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                )}
            </div>

        </Form>
    )
}

export default PostForm;