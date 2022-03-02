import React from 'react';

function Footer(){


    return(
        <footer className='footer'>
            <section className='footer-section'>
                <div className='footer-inner-div'>
                    <div>
                        <h2 className='footer-title'>AI Image<br/> Tester</h2>
                    </div>
                    <div>
                        <ul className='footer-list'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/detect'>Detect objects</a>
                            </li>
                            <li>
                                <a href='/recognise'>Recognise celebrities</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='footer-title'><a href='http://tonidedic.com.hr/'>Portfolio</a></h2>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;