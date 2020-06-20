import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {
  Comment,
  CommentAuthor,
  CommentAvatar,
  CommentContent,
  CommentGroup,
  CommentMetadata,
  CommentText,
} from 'semantic-ui-react';
import faker from 'faker';

function App() {
  return (
    <div className="App">
      <CommentGroup>
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
      </CommentGroup>
    </div>
  );
}

export default App;
