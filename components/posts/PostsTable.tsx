import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,TableCaption} from "@/components/ui/table"
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import { Button } from "../ui/button";

interface PostsTableProps {
    limit?: number;
    title?: string;
}

const PostsTable = ({limit, title}:PostsTableProps) => {
    // sort post in dec order
    const sortedPosts : Post[] = posts.sort((a, b) => a.title.localeCompare(b.title));
    // filter post to limit
    const filteredPosts : Post[] = limit ? sortedPosts.slice(0, limit) : sortedPosts

    return (  
        <div className="mt-10">
            <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
            <Table>
                <TableCaption> A list of recent captions</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="hidden md:table-cell">View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {filteredPosts.map((posts)=>
                    <TableRow key={posts.id}>
                        <TableCell>{posts.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{posts.author}</TableCell>
                        <TableCell className="hidden md:table-cell">{posts.date}</TableCell>
                        <TableCell >
                            <Link href={`/posts/edit/${posts.id}`}>
                               <Button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">Edit</Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
        </div>
      );
}
 
export default PostsTable;