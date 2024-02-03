import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = 'http://161.35.153.209:5430/api'

interface CreatePostItemPayload {
  user_id: string
  main_text: string
}

interface CreatePostItemData {
  status: number
  post_id: string
}

interface EditPostItemPayload {
  post_id: number
  new_text: string
}

interface EditPostItemData {
  status: number
  message: string
}

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: builder => ({

    getPostList: builder.query<any, any>({
      query: () => `/post`
    }),

    getPostItem: builder.query<any, any>({
      query: (postId: string) => `/post/${postId}`
    }),

    createPostItem: builder.mutation<CreatePostItemData, CreatePostItemPayload>({
      query: payload => ({
        url: '/post',
        method: 'POST',
        body: payload
      }),
    }),

    editPostItem: builder.mutation<EditPostItemData, EditPostItemPayload>({
      query: payload => ({
        url: '/post',
        method: 'PUT',
        body: payload,
      }),
    }),

    deletePostItem: builder.mutation<any, any>({
      query: postId => ({
        url: `/post/${postId}`,
        method: 'DELETE',
      }),
    }),  
  })
})
