import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";
import PostsTable from "@/components/posts/PostsTable";

const Posts = () => {
    return ( 
    <div>
        <BackButton text ="Go Back" link="/" />
        <PostsTable />
        <PostPagination />
    </div> 
);
}
 
export default Posts;