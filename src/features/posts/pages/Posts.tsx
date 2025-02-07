import { ChangeEvent, useEffect, useState } from "react";
import { getAllPostApi, PostsData } from "@/api/posts/posts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PostItems } from "../components/PostItems";
import { LoadingComponent } from "@/components/ui/LoadingComponent";
import { ErrorLoadingComponent } from "@/components/ui/ErrorLoadingComponent";
import { useInView } from "react-intersection-observer";

export const Posts = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const PAGE_SIZE = 30;
  const TOTAL_DATA_COUNT = 100;

  const {
    data: listOfPosts,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => getAllPostApi(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetchedData = allPages.flat().length;

      if (totalFetchedData >= TOTAL_DATA_COUNT) {
        return undefined;
      }
      return lastPage.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });

  const { ref, inView } = useInView({
    rootMargin: "100px",
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    if (listOfPosts) {
      setPosts(listOfPosts.pages.flat());
    }
  }, [listOfPosts]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return (
      <ErrorLoadingComponent>
        <span>{error.message}</span>
      </ErrorLoadingComponent>
    );
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="w-full md:w-3/4 md:mx-auto">
      <h1 className="text-5xl text-violet-500 font-medium uppercase tracking-wider underline text-center p-8">
        posts
      </h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid md:grid-cols-3 gap-5">
        {filteredPosts?.length > 0 ? (
          filteredPosts.map((post, index) => (
            <PostItems post={post} key={index} num={index} />
          ))
        ) : (
          <p>there is no any Post</p>
        )}
      </div>

      <div ref={ref} className="text-center">
        {isFetchingNextPage ? (
          <span className=" text-violet-600 text-xl font-medium">
            Loding...
          </span>
        ) : (
          <span className=" text-violet-600 text-xl font-medium">
            No more posts...
          </span>
        )}
      </div>
    </div>
  );
};
