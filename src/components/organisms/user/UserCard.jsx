import React, { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;
  return (
    <div>
      <Card>
        <UserIconWithName image={user.image} name={user.name} />
        <SDl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
        </SDl>
      </Card>
    </div>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0%;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
