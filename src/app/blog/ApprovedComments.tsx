import { useEffect, useState } from "react";

interface Comment {
  id: string;
  name: string;
  email: string;
  comment: string;
  approvedAt: string;
  pageName: string; 
}

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const units: { limit: number; value: number; unit: Intl.RelativeTimeFormatUnit }[] = [
    { limit: 60, value: 1, unit: "second" },
    { limit: 3600, value: 60, unit: "minute" },
    { limit: 86400, value: 3600, unit: "hour" },
    { limit: 604800, value: 86400, unit: "day" },
    { limit: 2629800, value: 604800, unit: "week" }, 
    { limit: 31557600, value: 2629800, unit: "month" },
    { limit: Infinity, value: 31557600, unit: "year" },
  ];

  for (const { limit, value, unit } of units) {
    if (diffInSeconds < limit) {
      const delta = Math.floor(diffInSeconds / value);
      return rtf.format(-delta, unit);
    }
  }

  return rtf.format(0, "second");
}


export default function ApprovedComments({ pageName }: { pageName: string }) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("/api/comment/approved")
      .then((res) => res.json())
      .then((data: Comment[]) => {
        // console.log("Raw approved comments from API:", data);
        const filtered = data.filter((comment) => comment.pageName === pageName);
        setComments(filtered);
        console.log("Approved comments:", filtered);
      })
      .catch((err) => console.error("Failed to fetch approved comments:", err));
  }, [pageName]);

  return (
    <div className="py-10 ">
      {/* <h2 className="text-2xl font-semibold tracking-tight text-white">
        Comments
      </h2> */}
      <ul className="space-y-4 rounded-xl mt-4  ">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="flex items-start gap-4 border p-4 rounded-xl shadow text-black bg-gray-500/30 "
          >
            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-lg">
              {comment.name.charAt(0).toUpperCase()}
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-blue-500">{comment.name}</p>
              <p className="text-sm text-white">{timeAgo(comment.approvedAt)}</p>
              <p className="text-white">{comment.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
