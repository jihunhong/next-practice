export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id : 1,
            nickname: 'JH',
        },
        content : '첫번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: "https://avatars0.githubusercontent.com/u/21700764?s=460&v=4"
        }],
        Comments : [{
            User: {
                nickname : 'user1'
            },
            content : 'content test 1'
        }]
    }],
    imagePaths : []
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST,
}

const dummyPost = {
    id : 2,
    User : {
        id : 1,
        nickname: 'JH',
    },
    content : '첫번째 게시글 #해시태그 #익스프레스',
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
        case ADD_POST:
            return{
                ...state,
                mainPosts : [dummyPost, ...state.mainPosts],
                postAdded : true
            }
        default:
            return state;
    }
}

export default reducer;