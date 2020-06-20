import React from 'react';
import { Button, Card, CardContent } from 'semantic-ui-react';

const ApprovalCard = (props) => {
  return (
    <Card>
      <CardContent>
        <div className="content">{props.children}</div>
      </CardContent>
      <CardContent extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Reject
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApprovalCard;
