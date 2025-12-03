'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const CommentApprove = () => {
    const searchParams = useSearchParams();
    const commentId = searchParams.get('id');
  
    useEffect(() => {
      if (commentId) {
        fetch(`/api/comment/reject?id=${commentId}`)
          .then((resp) => {
            console.log('Blog Comment Approved Successfully!', resp);
          })
          .catch((err) => {
            console.error('Blog Comment Approve err:', err);
          });
      }
    }, [commentId]);
  
    return(
    <div className="h-96 text-white flex justify-center items-center text-2xl">
      Comment Rejected 
    </div>
    )
  };

export default CommentApprove





// export default function CommentRejectedPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <h1 className="text-3xl font-semibold text-center">
//         Blog Comment Rejected
//       </h1>
//     </div>
//   );
// }
