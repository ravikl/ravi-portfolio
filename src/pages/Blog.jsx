import { Link } from "react-router-dom";

const posts = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    date: "2025-05-27",
  },
  // Add more posts here later
];

export default function Blog() {
  return <div className="p-8 text-lg">This is the blog overview page.</div>;
}
