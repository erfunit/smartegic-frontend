import { readData } from "@/core/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useInfiniteQuery } from "@tanstack/react-query";

/**
 * Options for getting comments.
 *
 * @typedef {Object} GetCommentsOptions
 * @property {Object} params - The parameters for getting comments.
 * @property {string} params.slug - The slug of the course.
 * @property {number} params.page - The page number for pagination.
 */
type GetCommentsOptions = {
    params: {
        slug: string;
        page: number;
    };
};

/**
 * Helper function for getting comments.
 *
 * This function calls the `readData` function to fetch comments data from the backend API.
 * It accepts a `params` object containing the course slug and page number.
 *
 * @param {GetCommentsOptions} options - The options for getting comments.
 * @returns {Promise<CourseCommentList>} - A promise that resolves to the list of course comments.
 */
const getComments = ({
    params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
    const { slug, page } = params;
    const url = `/courses/${slug}/comments?page=${page}`;
    return readData(url);
};

/**
 * Custom hook for fetching course comments using react-query.
 *
 * This hook wraps the `useInfiniteQuery` hook from react-query to provide infinite scrolling functionality
 * for fetching course comments. It returns the data, error, loading state, and methods for fetching more comments.
 *
 * @param {GetCommentsOptions} options - The options for the custom hook.
 * @returns {{
 *   data: any,
 *   error: any,
 *   isFetching: boolean,
 *   fetchNextPage: function(): void,
 *   hasNextPage: boolean,
 *   refetch: function(): void
 * }} - The state and methods for managing course comments.
 */
export const useCourseComments = ({ params }: GetCommentsOptions) => {
    const { data, error, isFetching, fetchNextPage, hasNextPage, refetch } =
        useInfiniteQuery({
            queryKey: ["courseComments", params.slug],
            queryFn: ({ pageParam }) =>
                getComments({ params: { ...params, page: pageParam } }),
            staleTime: 5 * 60 * 60 * 1000, // 5 hours
            gcTime: 6 * 60 * 60 * 1000, // 6 hours
            getNextPageParam: (lastPage) => lastPage.nextPage,
            initialPageParam: 1,
        });

    return {
        data,
        error,
        isFetching,
        fetchNextPage,
        hasNextPage,
        refetch,
    };
};
