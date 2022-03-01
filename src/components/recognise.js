import React, { useState } from "react";

function Recognise(){

    const [image, setImage] = useState("");
    const [results, setResults] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleClick(e){

        setImage(e.target.parentNode[0].value);
        setResults([]);
        setMetadata([]);
        setError([]);

        setLoading(true);

    }

    function handleSubmit(e){

        e.preventDefault();

        async function fetchData(){
            const result = await fetch("https://microsoft-computer-vision3.p.rapidapi.com/models/celebrities/analyze?language=en", {
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
                if(response.result){    
                    setResults(response.result.celebrities);
                    setMetadata(response.metadata);
                }
                else{
                    setError(response.message);
                    setLoading(false);
                }
            })
            .catch(err => {
                setError(err);
            });
        }

        fetchData();

    }
    

    return(
        <main>
            <section className="singular-main-section">
                <div className='singular-main-div'>
                    <h2 className='main-title'>
                        Upload image of celebrity and <span className='title-featured'>we will know who it is</span>
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
                        {!results[0] && metadata.height && <h2>No celebrities recognised on this image. Please try with another image</h2>}
                        {error && <h2>{error}</h2>}
                        { results[0] && <h2>On this image:</h2> }
                        {results.map((item, key) => {
                            return(
                                <div key={key}>
                                    <h2 className="detect-object-name">- {item.name} ({Math.round(item.confidence * 100)}%)</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="image-outter">
                    <div className="image-inner">
                        { results[0] && <img src={image} alt='slika' /> }
                        {results.map((item, key) => {
                            return(
                                <div key={key} className="object-rectangle" style={{width: Math.round((item.faceRectangle.width / metadata.width) * 100) + '%',
                                height: Math.round((item.faceRectangle.height / metadata.height) * 100) + '%', 
                                left: Math.round((item.faceRectangle.left / metadata.width) * 100) - 1 + '%', 
                                top: Math.round((item.faceRectangle.top / metadata.height) * 100) - 1 + '%'}}>
                                    <h4 style={{color: (item.confidence * 100) < 70 ? '#ff0000' : '#00ff00'}} className="rectangle-title">{item.name}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='singular-third-section'>
                <div>
                    <h4 className="upper-subtitle">Haven't had enough?</h4>
                    <h2 className='secondary-title'>Try our object detection engine</h2>
                    <ul className='normal-list'>
                        <li>- Upload the image to our site</li>
                        <li>- Our AI will try to detect as many objects as it can on the picture</li>
                        <li>- Get results with object name, placement on image and confidence percentage in result</li>
                    </ul>
                    <a className='regular-btn' href='/detect'>Try it!</a>
                </div>
            </section>
        </main>
        
    )
}

export default Recognise;