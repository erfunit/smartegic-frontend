export interface Comment {
    id: number;
    date: string;
    userId: number | undefined;
    fullName: string;
    commentText: string;
    score: number | null;
    isResponse: boolean;
}

export interface CourseCommentList {
    data: Comment[];
    nextPage: number;
}
