import React from 'react';
import {
  Comment,
  CommentAuthor,
  CommentAvatar,
  CommentContent,
  CommentMetadata,
  CommentText,
} from 'semantic-ui-react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <Comment>
      <CommentAvatar src={faker.image.avatar()} />
      <CommentContent>
        <CommentAuthor as="a">Sam</CommentAuthor>
        <CommentMetadata>
          <div>Today at 6:00PM</div>
        </CommentMetadata>
        <CommentText>Nice blog post!</CommentText>
      </CommentContent>
    </Comment>
  );
};

export default CommentDetail;
