import shortId from 'shortid';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'JH',
    },
    content: '첫번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id : shortId.generate(),
      src: 'https://thumbs.gfycat.com/ThoughtfulBriskIriomotecat-size_restricted.gif',
    }, {
      id : shortId.generate(),
      src: 'https://avatars3.githubusercontent.com/u/21700764?s=460&u=fe2df1f57cc9e080816be208b9a8767e9a1d6a61&v=4',
    }, {
      id : shortId.generate(),
      src: 'https://avatars2.githubusercontent.com/u/52182924?s=200&v=4',
    }],
    Comments: [{
      id : shortId.generate(),
      User: {
        id : shortId.generate(),
        nickname: 'user1',
      },
      content: 'content test 1',
    }, {
      id : shortId.generate(),
      User: {
        nickname: 'chae',
      },
      content: 'test2',
    }],
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,

  removePostLoading: false,
  removePostDone: false,
  removePostError: false,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'JH',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id : data.id,
  content : data.content,
  User : {
    id : 1,
    nickname : 'JH'
  }
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: action.error,
      };

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = { ...state.mainPosts[postIndex] };
      console.log(post);
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: action.error,
      };
    
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS: {
      return {
        ...state,
        mainPosts : state.mainPosts.filter((v) => v.id !== action.data),
        removePostLoading: false,
        removePostDone: true,
      };
    }
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: action.error,
      };
    
    default:
      return state;
  }
};

export default reducer;
