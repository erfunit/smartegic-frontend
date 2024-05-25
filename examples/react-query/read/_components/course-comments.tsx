"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useCourseComments } from "../_api/get-comments.with-paginatino";
import { Fragment } from "react";

const CourseComments = () => {
    // const { ref, inView } = useInView({});

    const { slug } = useParams();
    const {
        data: comments,
        error,
        isFetching,
        // fetchNextPage,
        hasNextPage,
        refetch,
    } = useCourseComments({
        params: {
            slug: slug as string,
            page: 1,
        },
    });

    // useEffect(() => {
    //     if (inView && hasNextPage) {
    //         fetchNextPage();
    //     }
    // }, [inView, fetchNextPage, hasNextPage]);

    if (error) {
        return (
            <>
                <button
                    className="font-semibold"
                    type="button"
                    onClick={() => refetch()}
                >
                    تلاش مجدد
                </button>
            </>
        );
    }

    return (
        <>
            {comments?.pages.map((currentPage) => (
                <Fragment key={`comment-page-${currentPage}`}>
                    {currentPage.data.map((comment) => (
                        // the jsx that is returning one single item
                        // <Comment
                        //     key={`comment-${comment.id}`}
                        //     {...comment}
                        //     variant="info"
                        // />
                        <div key={`comment-${comment.id}`} />
                    ))}
                </Fragment>
            ))}

            {isFetching ||
                (hasNextPage && (
                    <div
                    // ref={ref}
                    >
                        {/* <TextPlaceholder /> */}
                    </div>
                ))}

            {/* {isLoading && <TextPlaceholder />} */}
        </>
    );
};

export default CourseComments;
