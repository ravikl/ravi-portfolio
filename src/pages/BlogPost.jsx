import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  return <div className="p-8 text-lg">Blog Post: {slug}</div>;
}
