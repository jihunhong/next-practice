import shortId from 'shortid';
import faker from 'faker';
import produce from 'immer';

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

initialState.mainPosts = initialState.mainPosts.concat(
  Array(20).fill().map((v, i) => ({
    id : shortId.generate(),
    User : {
      id : shortId.generate(),
      nickname : faker.name.findName(),
    },
    content : faker.lorem.paragraph(),
    Images : [{
      src : faker.image.image(),
    }],
    Comments : [{
      User : {
        id : shortId.generate(),
        nickname : faker.name.findName(),
      },
      content : faker.lorem.sentence(),
    }],
  }))
)

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

  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS: {
        draft.removePostLoading = false;
        draft.removePostDone = true;
        console.log(action.data);
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
      }
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostDone = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: 
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentDone = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
