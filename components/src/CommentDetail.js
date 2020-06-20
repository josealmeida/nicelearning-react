import React from 'react';
import {
  Comment,
  CommentAuthor,
  CommentAvatar,
  CommentContent,
  CommentMetadata,
  CommentText,
} from 'semantic-ui-react';

const CommentDetail = (props) => {
  return (
    <Comment>
      <CommentAvatar src={props.avatar} />
      <CommentContent>
        <CommentAuthor as="a">{props.author}</CommentAuthor>
        <CommentMetadata>
          <div>{props.timeAgo}</div>
        </CommentMetadata>
        <CommentText>{props.content}</CommentText>
      </CommentContent>
    </Comment>
  );
};

export default CommentDetail;
