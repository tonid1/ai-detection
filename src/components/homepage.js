import React from 'react';
import Background from '../assets/Pozadina.png';
import AI from '../assets/Mozak.png';
import AiIcon from '../assets/artificial-intelligence.png';
import AiCrosswalk from '../assets/slikZaWeb.png';
import Channing from '../assets/1_fbTbcDOuFOtEBe4IcjfaHw.jpeg'

function Homepage(){

    return(
        <main>
            <section className='homepage-main-section'>
                <div className='homepage-main-div'>
                    <h2 className='main-title'>
                        It's time to be one with <span className='title-featured'>Artificial Intellignece</span>
                    </h2>
                </div>
                <div className='homepage-main-div right-image-div'>
                    <img src={AI} className='homepage-main-image' alt='brain-img'/>
                </div>
            </section>
            <section className='homepage-second-section'>
                <div className='second-section-div left-image-div'>
                    <img className='ai-img' src={AiIcon} alt='brain-img'/>
                </div>
                <div className='second-section-div'>
                    <h2 className='secondary-title'>What is AI?</h2>
                    <p className='normal-text'>"Artificial intelligence leverages computers and machines to mimic the 
                    problem-solving and decision-making capabilities of the human mind." - IBM</p>
                    <p className='normal-text'>There are four potential goals or definitions of AI, which differentiate computer systems on the basis 
                        of rationality and thinking vs. acting:<br/><br/>
                        <span style={{fontWeight: '700'}} >Human approach:</span><br/>
                        Systems that think like humans<br/>
                        Systems that act like humans<br/><br/>
                        <span style={{fontWeight: '700'}} >Ideal approach:</span><br/>
                        Systems that think rationally<br/>
                        Systems that act rationally</p>
                </div>
            </section>
            <section className='homepage-third-section'>
                <div>
                    <h2 className='secondary-title'>How does detecting objects work?</h2>
                    <ul className='normal-list'>
                        <li>- Upload the image to our site</li>
                        <li>- Our AI will detect the object on the photo</li>
                        <li>- Get results like on the photo</li>
                    </ul>
                    <a className='regular-btn' href='/detect'>Try it!</a>
                </div>
                <div className='example-div'>
                    <div className='img-div'>
                        <img className='ai-img' src={AiCrosswalk} alt='ai in action' />
                    </div>
                </div>
            </section>
            <section className='homepage-fourth-section'>
                <div className='left-image-div'>
                    <div className='img-div'>
                        <img className='ai-img' src={Channing} alt='ai in action' />
                    </div>
                </div>
                <div>
                    <h2 className='secondary-title'>How does recognizing celebrities work?</h2>
                    <ul className='normal-list'>
                        <li>- Upload the image to our site</li>
                        <li>- Our AI will try to recognize the celebrity (if there is any) on the picture</li>
                        <li>- Get results like on the photo</li>
                    </ul>
                    <a className='regular-btn' href='/recognise'>Try it!</a>
                </div>
            </section>
        </main>
    )

}

export default Homepage;