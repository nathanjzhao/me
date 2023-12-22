import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_af7vt2f', // service details (to personal email)
            'template_2gocmx5', // email template
            refForm.current,
            'fJ6Sz65PRHzpKfQGl',
        )
        .then(
            () => {
                alert('Message sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, try again.')
            }
        )
    }

  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} str={"Contact me"} idx={15} />
                </h1>
                <p>
                    I'm always willing to take on interesting opportunities. If you have any,
                    feel free to contact me below. Don't hesitate to ask any questions or
                    send any other request!
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                        <input placeholder="Name" type="text" name="name" required />
                        </li>
                        <li className="half">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            required
                        />
                        </li>
                        <li>
                        <input
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            required
                        />
                        </li>
                        <li>
                        <textarea
                            placeholder="Message"
                            name="message"
                            required
                        ></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
            <div className="map-info">
            Nathan Zhao <br/>
            436 Mayfield Ave <br/>
            Stanford, CA 94305 <br/>
            <br/>
            <span>nathanzh (at) stanford (dot) edu</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[37.421833339669995, -122.17180448650515]} zoom={15}>
                    <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    <Marker position={[37.421833339669995, -122.17180448650515]}>
                        <Popup>This is where my dorm is. Want to meet for coffee?</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        
        <Loader type="cube-transition" />
    </>
  )
}

export default Contact