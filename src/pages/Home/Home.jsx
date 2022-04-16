import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';
import Button from '../../components/UI/Button/Button';
import Container from '../../components/UI/Container';
import { getFetch } from '../../helper/getFect';




function Home() {

  // const [skillArr, setSkillArr] = useState([]);

  // useEffect(() => {
  //   getSkills();
  // }, [])

  
  // async function getSkills(){
  //   const skillFromDB = await getFetch('content/skills')
  //   console.log('skillFromDB===', skillFromDB);
  //   setSkillArr(skillFromDB)
  // }

  return (
    <Container>
    <div>
    <h1>Skills List</h1>
    <Link to={'/Add'}>
      Add Skills
      <Button>Add skills</Button>
    </Link>
    </div>
    <CardList/>
    </Container>
  )
}

export default Home