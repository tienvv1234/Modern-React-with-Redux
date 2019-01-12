import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './ComponentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  // in this case comment details is going to show up instde of the approval card on the
  // prop's object and specifically on a property of the prop's object called the children property
  // if we want to show some component or some custom content inside of a component then we will
  // take the child, we will wrap it with a parent component and then that child component is going
  // to show up inside of the child on the prop's children property
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:00 PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Today at 4:00 PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          timeAgo="Today at 4:00 PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
