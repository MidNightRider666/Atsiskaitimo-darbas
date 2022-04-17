import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CardList from '../../components/CardList/CardList';
import Button from '../../components/UI/Button/Button';
import Container from '../../components/UI/Container';
import Loading from '../../components/UI/Loading';
import { getFetch } from '../../helper/getFect';
import css from './Home.module.scss'


function Home() {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(false);
  const [skillArr, setSkillArr] = useState([]);
  useEffect(() => {
    getSkills();
  }, [])

  
  async function getSkills(){
    setIsLoading(true);
    const skillFromDB = await getFetch('content/skills')
    console.log('skillFromDB===', skillFromDB);
    setSkillArr(skillFromDB)
    setIsLoading(false);
  }

  if(isLoading) {return (<div className={css.loading}>
    <Loading />
    </div>
  )}

  if(token === null || token === undefined ) {
    alert('This is rescrited for unregistered users')
    history.push('/')
  }


  if(skillArr.length <= 0  && !isLoading) {
    console.log('skillArr===', skillArr);
    return (
      <Container>
    <h1>Skills are empty, please add some</h1>
    <Link to={'/Add'}>
    <Button Add>Add skills</Button>
  </Link>
  </Container>
    )
  }

  return (
    <Container>
    <div className={css.flex}>
    <h1>Skills List</h1>
    <Link to={'/Add'}>
      <Button Add>Add skills</Button>
    </Link>
    </div>
    <CardList  item={skillArr}/>
    </Container>
  )
}


export default Home