import React, { useState } from "react";

function Detect(){

    const [image, setImage] = useState("");
    const [objects, setObjects] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleClick(e){

        setImage(e.target.parentNode[0].value);
        setObjects([]);
        setMetadata([]);

        setLoading(true);

    }

    function handleSubmit(e){

        e.preventDefault();

        async function fetchData(){
            const result = await fetch("https://microsoft-computer-vision3.p.rapidapi.com/detect", {
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "x-rapidapi-host": "microsoft-computer-vision3.p.rapidapi.com",
                    "x-rapidapi-key": "3e760c6503msh81a88317f3cc91ap138ea2jsne38a811b8c77"
                },
                "body": JSON.stringify({
                    "url": image
                })
            })
            
            result.json().then(response => {
                setObjects(response.objects);
                setMetadata(response.metadata);
            })
            .catch(err => {
                console.error(err);
            });
        }

        fetchData();

    }
    

    return(
        <main>
            <section className="singular-main-section">
                <div className='singular-main-div'>
                    <h2 className='main-title'>
                        Upload image from web and <span className='title-featured'>watch the future</span>
                    </h2>
                </div>
            </section>
            <section className="singular-form-section">
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder="Paste the url here" className="form-input"/>
                        <button onClick={handleClick} className='submit-btn'>Submit</button>
                    </form>
                    {loading && !metadata.height && 
                        <div className='loading-div'>
                            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </div>}
                    <div className="results-div">
                        {!objects[0] && metadata.height && <h2>No objects found on this image. Please try with another image</h2>}
                        { objects[0] && <h2>On this image:</h2> }
                        {objects.map((item, key) => {
                            return(
                                <div key={key}>
                                    <h2 className="detect-object-name">- {item.object} ({Math.round(item.confidence * 100)}%)</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="image-outter">
                    <div className="image-inner">
                        { objects[0] && <img src={image} alt='slika' /> }
                        {objects.map((item, key) => {
                            return(
                                <div key={key} className="object-rectangle" style={{width: Math.round((item.rectangle.w / metadata.width) * 100) + '%',
                                height: Math.round((item.rectangle.h / metadata.height) * 100) + '%', 
                                left: Math.round((item.rectangle.x / metadata.width) * 100) - 1 + '%', 
                                top: Math.round((item.rectangle.y / metadata.height) * 100) - 1 + '%'}}>
                                    <h4 style={{color: (item.confidence * 100) < 70 ? '#ff0000' : '#00ff00'}} className="rectangle-title">{item.object}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='singular-third-section'>
                <div>
                    <h4 className="upper-subtitle">Haven't had enough?</h4>
                    <h2 className='secondary-title'>Try our celebrity facial recognition</h2>
                    <ul className='normal-list'>
                        <li>- Upload the image to our site</li>
                        <li>- Our AI will try to recognize the celebrity (if there is any) on the picture</li>
                        <li>- Get results with celebrity info and confidence percentage in result</li>
                    </ul>
                    <a className='regular-btn' href='/recognise'>Try it!</a>
                </div>
            </section>
        </main>
        
    )
}

export default Detect;