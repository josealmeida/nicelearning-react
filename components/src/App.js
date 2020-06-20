import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { CommentGroup } from 'semantic-ui-react';
import CommentDetail from './CommentDetail';
import faker from 'faker';

function App() {
  return (
    <div className="App">
      <CommentGroup>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 6:00PM"
          content="Nice one!"
        />
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 7:00PM"
          content="Cool!"
        />
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Today at 8:00PM"
          content="Really nice!"
        />
      </CommentGroup>
    </div>
  );
}

export default App;
