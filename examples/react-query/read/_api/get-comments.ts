// @ts-nocheck

import { readData } from "@/core/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useQuery } from "@tanstack/react-query";

/**
 * Options for getting comments.
 *
 * @typedef {Object} GetCommentsOptions
 * @property {string} slug - The slug of the course.
 */
type GetCommentsOptions = {
    slug: string;
};

/**
 * Helper function for getting comments.
 *
 * This function calls the `readData` function to fetch comments data from the backend API.
 * It accepts a `slug` string for the course.
 *
 * @param {GetCommentsOptions} options - The options for getting comments.
 * @returns {Promise<CourseCommentList>} - A promise that resolves to the list of course comments.
 */
const getComments = ({
    slug,
}: GetCommentsOptions): Promise<CourseCommentList> => {
    const url = `/courses/${slug}/comments`;
    return readData(url);
};

/**
 * Custom hook for fetching course comments using react-query.
 *
 * This hook wraps the `useQuery` hook from react-query to fetch course comments.
 * It returns the data, error, and loading state.
 *
 * @param {GetCommentsOptions} options - The options for the custom hook.
 * @returns {{
 *   data: any,
 *   error: any,
 *   isLoading: boolean,
 *   refetch: function(): void
 * }} - The state and methods for managing course comments.
 */
export const useCourseComments = ({ slug }: GetCommentsOptions) => {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["courseComments", slug],
        queryFn: () => getComments({ slug }),
        staleTime: 5 * 60 * 60 * 1000, // 5 hours
        gcTime: 6 * 60 * 60 * 1000, // 6 hours
    });

    return {
        data,
        error,
        isLoading,
        refetch,
    };
};
