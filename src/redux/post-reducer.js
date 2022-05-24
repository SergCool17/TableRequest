import axios from "axios";

const LOAD_POSTS = "LOAD_POSTS";
const SET_POSTS_COUNT = "SET_POSTS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CURRENT_POSTS = "SET_CURRENT_POSTS";
const SORT_BY_ID = "SORT_BY_ID";
const SORT_BY_TITLE = "SORT_BY_TITLE";
const SORT_BY_BODY = "SORT_BY_BODY";
const FILTER_TEXT = "FILTER_TEXT";

let initialState = {
  posts: [
    {
      id: "Loading...",
      title: "Loading...",
      body: "Loading..."
    }
  ],
  currentPosts: [],
  postsCount: 1,
  postsPerPage: 10,
  currentPage: 1,
  lastPostIndex: null,
  firstPostIndex: null,
  pagesCount: null,
  filterText: ""
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.posts]
      };
    case SET_POSTS_COUNT:
      return {
        ...state,
        postsCount: state.posts.length
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    case SET_CURRENT_POSTS:
      return {
        ...state,
        lastPostIndex: state.currentPage * state.postsPerPage,
        firstPostIndex:
          state.currentPage * state.postsPerPage - state.postsPerPage,

        pagesCount: state.posts.length / state.postsPerPage,
        currentPosts: state.posts.slice(
          state.currentPage * state.postsPerPage - state.postsPerPage,
          state.currentPage * state.postsPerPage
        )
      };
    case SORT_BY_ID:
      return {
        ...state,
        currentPosts: [
          ...state.currentPosts.sort((a, b) => (a.id < b.id ? 1 : -1))
        ]
      };
    case SORT_BY_TITLE:
      return {
        ...state,
        currentPosts: [
          ...state.currentPosts.sort((a, b) =>
            a.title.substring(0, 1) < b.title.substring(0, 1) ? 1 : -1
          )
        ]
      };
    case SORT_BY_BODY:
      return {
        ...state,
        currentPosts: [
          ...state.currentPosts.sort((a, b) =>
            a.body.substring(0, 1) < b.body.substring(0, 1) ? 1 : -1
          )
        ]
      };
    case FILTER_TEXT:
      return {
        ...state,
        filterText: action.text
      };
    default:
      return state;
  }
};

const setPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
});
const setPostsCount = () => ({
  type: SET_POSTS_COUNT
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page
});
export const changeCurrentPage = (page) => async (dispatch) => {
  await dispatch(setCurrentPage(page));
  dispatch(setCurrentPosts());
};
const setCurrentPosts = () => ({
  type: SET_CURRENT_POSTS
});

export const filterText = (text) => ({
  type: FILTER_TEXT,
  text
});

export const sortById = () => ({
  type: SORT_BY_ID
});
export const sortByTitle = () => ({
  type: SORT_BY_TITLE
});
export const sortByBody = () => ({
  type: SORT_BY_BODY
});

export const getPosts = () => async (dispatch) => {
  let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  if (response.status === 200) {
    dispatch(setPosts(response.data));
    dispatch(setPostsCount());
    dispatch(setCurrentPosts());
  }
};
