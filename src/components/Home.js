import React, {useEffect} from 'react'
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"


function Home() {
    const dispatch = useDispatch();


    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot)=>{
          let tempMovies = snapshot.docs.map((doc)=>{
              console.log(doc.data);
              return { id: doc.id, ...doc.data() }
          })  
          dispatch(setMovies(tempMovies));
        //   console.log(tempMovies);
        })
    }, [])
// 14:00:00
    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home;

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;

&: before {
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
    position: relative;
    z-index: -1;
    content : "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right : 0;
}

`