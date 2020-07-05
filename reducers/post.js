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