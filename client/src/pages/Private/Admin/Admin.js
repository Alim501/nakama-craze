import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateAnime from '../../../components/modals/admin/CreateAnime';
import CreateCategory from '../../../components/modals/admin/CreateCategory';
import CreateProduct from '../../../components/modals/admin/CreateProduct';

const Admin=()=>{
    const [animeVisible, setAnimeVisible]=useState(false)
    const [categoryVisible, setCategoryVisible]=useState(false)
    const [productVisible, setProductVisible]=useState(false)
    return(
        <Container className='d-grid'>
            <Button variant='outline-dark' className='my-2' onClick={()=>setAnimeVisible(true)}>Добавить аниме</Button>
            <Button variant='outline-dark' className='my-2' onClick={()=>setCategoryVisible(true)}>Добавить категорию</Button>
            <Button variant='outline-dark' className='my-2' onClick={()=>setProductVisible(true)}>Добавить продукт</Button>
            <CreateAnime show={animeVisible} onHide={()=>setAnimeVisible(false)}></CreateAnime>
            <CreateCategory show={categoryVisible} onHide={()=> setCategoryVisible(false)}> </CreateCategory>
            <CreateProduct show={productVisible} onHide={()=> setProductVisible(false)}></CreateProduct>
        </Container>
    )
}
export default Admin;