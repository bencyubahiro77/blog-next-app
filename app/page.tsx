import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardChart from "@/components/dashboard/DashboardChart";
import PostsTable from "@/components/posts/PostsTable";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";
const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title="Posts" count={100} icon={<Newspaper className="text-slate-500" size={72} />} />
        <DashboardCard title="Categories" count={13} icon={<Folder className="text-slate-500" size={72} />} />
        <DashboardCard title="Users" count={700} icon={<User className="text-slate-500" size={72} />} />
        <DashboardCard title="Comments" count={1100} icon={<MessageCircle className="text-slate-500" size={72} />} />
      </div>
      <DashboardChart />
      <PostsTable title="latest" limit={5} /> 
    </div>
  );
}
export default Homepage;