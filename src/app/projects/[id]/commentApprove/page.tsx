'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const CommentApprove = () => {
    const searchParams = useSearchParams();
    const commentId = searchParams.get('id');
  
    useEffect(() => {
      if (commentId) {
        fetch(`/api/comment/approve?id=${commentId}`)
          .then((resp) => {
            console.log('Comment Approved Successfully!', resp);
          })
          .catch((err) => {
            console.error('Comment Approve err:', err);
          });
      }
    }, [commentId]);
  
    return(
    <div className="h-96 text-white flex justify-center items-center text-2xl">
      Comment Approved 
    </div>
    )
  };

export default CommentApprove



// // ClientComponent.tsx
// 'use client';

// import { useSearchParams } from 'next/navigation';
// import React, { useEffect } from 'react';

// const ClientComponent = () => {
//   const searchParams = useSearchParams();
//   const commentId = searchParams.get('id');

//   useEffect(() => {
//     if (commentId) {
//       fetch(`/api/comment/approve?id=${commentId}`)
//         .then((resp) => {
//           console.log('Blog Comment Approved Successfully!', resp);
//         })
//         .catch((err) => {
//           console.error('Blog Comment Approve err:', err);
//         });
//     }
//   }, [commentId]);

//   return <div>Approved</div>;
// };

// export default ClientComponent;



