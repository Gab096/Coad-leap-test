import React, { useState } from 'react';
import  { Icons}  from '../../../assets/index';
import Button from '../../atomics/Button'
import Input from '../../atomics/Input'
import { Container,DeleteEditContainer, ModalButtonContainer, ContainerForm } from './style';
import { uiDeletePost, uiEditPost ,onSuccessDeletePost} from '../../../store/modules/user/actions';
import { useDispatch } from 'react-redux';
import Modal from '../Modal';


function HeaderCards({ title , username , postId, content}) {
  const dispatch = useDispatch();

  const [isModalDeleteVisible , setModalDeleteVisible]=useState(false);
  const [isModalEditVisible , setModalEditVisible]=useState(false);

  const [editTitle , setEditTitle]=useState(title);
  const [editContent , setEditContent]=useState(content);
    
  const userNameLocalStorage = JSON.parse(localStorage.getItem("username"));


 
  return (
  <Container>
    <h3>{title}</h3>
    {username === userNameLocalStorage ?
      <DeleteEditContainer>
        <Button img={Icons.Delete} onClick={()=> setModalDeleteVisible(true)}/>
        <Button img={Icons.Edit} onClick={()=> setModalEditVisible(true)}/>
      </DeleteEditContainer>
      :null}
      
      {isModalDeleteVisible ?
        <Modal>
        <h1>Are you sure you want to delete this item?</h1>
        <ModalButtonContainer>
        <Button title='cancel' onClick={()=> setModalDeleteVisible(false)} />
        <Button title='OK' onClick={() => { setModalDeleteVisible(false); dispatch(uiDeletePost(postId),onSuccessDeletePost(postId))}}/>
      </ModalButtonContainer>
    </Modal>
    : null }

    {isModalEditVisible ?
    <Modal>
      <h1>Edit item</h1>
      <ContainerForm onSubmit={()=> {dispatch(uiEditPost({ title:editTitle, content:editContent },postId))}}>
        <Input
          label='Title'
          placeholder='Hello World'
          value={editTitle}
          onChange={e => setEditTitle(e.target.value)}
          />
          <textarea
          rows={4}
          cols={12}
          label='Content'
          value={editContent}
          placeholder='Content here'
          onChange={e => setEditContent(e.target.value)}
          heigth='100px'
          />
          <ModalButtonContainer>
            <Button title='cancel' onClick={()=> setModalDeleteVisible(false)} />
            <Button
              disabled={!editContent || !editTitle}
              title='Save'
              type="submit"
              />
          </ModalButtonContainer>
      </ContainerForm>
      </Modal>
      : null }


  </Container>
  );
}

export default HeaderCards;