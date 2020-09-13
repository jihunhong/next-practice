export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id : 1,
            nickname: 'JH',
        },
        content : '첫번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: "https://thumbs.gfycat.com/ThoughtfulBriskIriomotecat-size_restricted.gif"
        }, {
            src: "https://avatars3.githubusercontent.com/u/21700764?s=460&u=fe2df1f57cc9e080816be208b9a8767e9a1d6a61&v=4"
        }, {
            src : "https://avatars2.githubusercontent.com/u/52182924?s=200&v=4"
        }],
        Comments : [{
            User: {
                nickname : 'user1'
            },
            content : 'content test 1'
        }, {
            User: {
                nickname : 'chae'
            },
            content : 'test2',
        }]
    }],
    imagePaths : [],
    addPostLoading : false,
    addPostDone : false,
    addPostError : false,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type : ADD_POST_REQUEST,
    data,
})

export const addComment = (data) => ({
    type : ADD_COMMENT_REQUEST,
    data,
})

const dummyPost = {
    id : 2,
    User : {
        id : 1,
        nickname: 'JH',
    },
    content : '더미데이터',
    Images: [{
        src: "https://avatars0.githubusercontent.com/u/21700764?s=460&v=4"
    }],
    Comments : [{
        User: {
            nickname : 'user1'
        },
        content : 'content test 1'
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading : true,
                addPostDone : false,
                addPostError : null,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts : [dummyPost, ...state.mainPosts],
                addPostLoading : false,
                addPostDone : true,
            }
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading : false,
                addPostDone : action.error,
            }        
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading : true,
                addCommentDone : false,
                addCommentError : null,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                mainCOMMENTs : [dummyCOMMENT, ...state.mainCOMMENTs],
                addCommentLoading : false,
                addCommentDone : true,
            }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading : false,
                addCommentDone : action.error,
            }
        default:
            return state;
    }
}

export default reducer;