import React from 'react';
import Header  from '../HeaderCards';
import { formatDistanceStrict } from 'date-fns';
import { Container,UserTimeContainer,ContentContainer,UserContentContainer} from './style';

function Post({ data }) {
  const nowDate = new Date()
  const apiDateFormated = new Date (data.created_datetime)
  const distanceDate = formatDistanceStrict(nowDate,apiDateFormated)
  return (
  <Container>
    <Header title={data.title} username={data.username} postId={data.id}  content={data.content}/>
    <UserContentContainer>
      <UserTimeContainer>
        <h2>{data.username}</h2>
        <p>{distanceDate} ago</p>
      </UserTimeContainer>
      <ContentContainer>
        <p>{data.content}</p>
      </ContentContainer>
    </UserContentContainer>
  </Container>
  );
}

export default Post;