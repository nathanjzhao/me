import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Resume from '../../assets/Nathan_Zhao_resume.pdf'
import Loader from 'react-loaders'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <AnimatedLetters letterClass={letterClass} str={"Hey there,"} idx={11} /> <br/>
                    <AnimatedLetters letterClass={letterClass} str={"I'm Nathan!"} idx={21} />
                </h1>
                <h2>Computer Science Student at Stanford</h2>
                <div className="buttons">
                    <Link to={`${process.env.PUBLIC_URL}/contact`} className='flat-button'>CONTACT ME</Link>
                    <a href={Resume} target="_blank" rel="noreferrer" className='flat-button'>VIEW RESUME</a>
                </div>
            </div>
            <Logo />
        </div>
        <Loader type="cube-transition" />
    </>
    )
}

export default Home