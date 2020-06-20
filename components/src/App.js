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
import CommentDetail from './CommentDetail';

function App() {
  return (
    <div className="App">
      <CommentGroup>
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
      </CommentGroup>
    </div>
  );
}

export default App;
