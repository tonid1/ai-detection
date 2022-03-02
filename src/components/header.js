import React from 'react';

function Header(){

    return(
        <header className='header'>
            <section className='header-section-inner'>
                <div className='header-div'>
                    <h2 className='logo-text'>AI image<br/>tester</h2>
                </div>
                <div className='header-div'>
                    <nav className='navigation'>
                        <ul>
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
                    </nav>
                </div>
                <div className='header-div'>
                    <h2><a href='http://tonidedic.com.hr/'>Portfolio</a></h2>
                </div>
            </section>
        </header>
        
    )

}

export default Header;