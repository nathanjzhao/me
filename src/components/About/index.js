import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1> 
                    <AnimatedLetters letterClass={letterClass} str={"About Me"} idx={15} />
                </h1>

                <p>
                    I am a computer science student at Stanford University studying Aritificial Intelligence
                    in order to advance research in various scientific fields. Currently, I strive to apply
                    AI to medical imaging and bioinformatics to improve healthcare.
                </p>
                <p>
                    I relish putting my full effort into every challenging project I take on, improving my
                    ability to problem solve and think creatively under different scenarios. Whether in the
                    lab, studying textbooks, or programming my next webproject, there's always something new!
                </p>
                <p>
                    In my free time, I enjoy improvising piano with the harmony of Bill Evans, singing
                    my favorite rock songs on guitar, or writing poems to express my thoughts from long
                    walks. Whenever I can, I try to listen to any new album that has grasped my attention.
                </p>
            </div>

        
            <div className="stage-cube-cont">
                <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#466ee2" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                </div>
            </div>
        </div>
        <Loader type="cube-transition" />
    </>
  )
}

export default About