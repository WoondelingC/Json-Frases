import React, { useState } from 'react'
import { frases } from '../data'
import '../styles/style.css';

export const Frases = () => {

  const [randomQuotes, setRandomQuotes] = useState("");
  const [color, setColor] = useState("ffdf00")


  console.log(color)
  const getNewQuote = () => {

    const paletaDeColores = ['radial-gradient( #a8ffff 0, #a5fdff 25%, #9dd5f2 50%, #91afc2 75%, #828d96 100%)', 'radial-gradient( #fff56b 0, #fff866 6.25%, #fdfa63 12.5%, #e7fb61 18.75%, #d0fb62 25%, #b5fa65 31.25%, #97f86a 37.5%, #73f670 43.75%, #3cf278 50%, #00ee82 56.25%, #00ea8f 62.5%, #00e69d 68.75%, #00e2ad 75%, #00dfbe 81.25%, #00dbd1 87.5%, #00d8e3 93.75%, #00d6f6 100%)', 'linear-gradient(30deg, crimson,sienna, royalblue, indianred, purple)', 'radial-gradient( #ffffdb 0, #ffffd4 8.33%, #ffffce 16.67%, #f7fec7 25%, #e9fbc1 33.33%, #daf7bb 41.67%, #c9f2b5 50%, #b7edb1 58.33%, #a4e9af 66.67%, #91e5af 75%, #7ce2b1 83.33%, #66dfb4 91.67%, #4cdcb9 100%)', 'radial-gradient( #8cffff 0, #7efff9 16.67%, #73f4ec 33.33%, #6cd8d8 50%, #67bdc2 66.67%, #64a5ae 83.33%, #61919b 100%)', ' radial-gradient( #004553 0, #00445b 3.33%, #004461 6.67%, #004368 10%, #00426d 13.33%, #004171 16.67%, #003f74 20%, #003d75 23.33%, #003b76 26.67%, #003875 30%, #0d3573 33.33%, #293170 36.67%, #3a2d6b 40%, #462866 43.33%, #512460 46.67%, #591f59 50%, #601a51 53.33%, #65164a 56.67%, #691241 60%, #6c1039 63.33%, #6d1031 66.67%, #6d1229 70%, #6c1521 73.33%, #6a1919 76.67%, #671e11 80%, #632207 83.33%, #5f2600 86.67%, #5a2a00 90%, #542e00 93.33%, #4e3200 96.67%, #473500 100%)', '#ECA400', 'radial-gradient( #e1ffa0 0, #e5f690 8.33%, #e9eb80 16.67%, #ece06f 25%, #efd35e 33.33%, #f1c54d 41.67%, #f2b53c 50%, #f3a52d 58.33%, #f59422 66.67%, #f8841d 75%, #fa731e 83.33%, #fd6124 91.67%, #ff4e2c 100%)', 'linear-gradient(180deg, #ffff00 0, #ffff00 8.33%, #ffff00 16.67%, #ddff12 25%, #b5ff30 33.33%, #88ff44 41.67%, #53f253 50%, #00e260 58.33%, #00d56c 66.67%, #00c978 75%, #00c084 83.33%, #00b992 91.67%, #00b4a0 100%)', 'radial-gradient( #ff99ff 0, #b779ff 25%, #5353f2 50%, #002ea7 75%, #001067 100%)', 'radial-gradient( #d1fff8 0, #befff6 10%, #a7fff4 20%, #8dfff3 30%, #6cfbf2 40%, #3cf2f2 50%, #00e8f3 60%, #00dff5 70%, #00d6f9 80%, #00cefd 90%, #00c6ff 100%)', '#B6465F', '#8ACDEA']

    let randColor = Math.round(Math.random() * paletaDeColores.length);
    setColor(paletaDeColores[randColor]);
   

    let randIndex = Math.round(Math.random() * frases.length);
    setRandomQuotes(frases[randIndex]);
    
  }


  return (

    <div id="main-contenedor" style={{ background: color, minHeight: "100vh" }}>
      <div id="quote-box">
        {randomQuotes ? (
          <>

            <h1 id="text" style={{ color: color}}>{randomQuotes.frase}</h1>
            <p id="author"  style={{ color: color}}>- {randomQuotes.autor}</p>
          </>
        ) : (
          <h2>Loading....</h2>
        )}

        <div id="new-quote">
          <button onClick={getNewQuote} style={{ background: color}}>New quote</button>
            
          {
            randomQuotes ? (
              <>
              <a style={{ background: color}} href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
               randomQuotes.frase + "-" + randomQuotes.autor)}`} id="tweet-quote"><img src="https://img.freepik.com/vector-gratis/diseno-logotipo-twitter_1035-8934.jpg?size=338&ext=jpg"  alt="" /></a>
              </>

            ):(
              <>
              <a style={{ background: color}} href='https://twitter.com' id="tweet-quote"><img src="https://img.freepik.com/vector-gratis/diseno-logotipo-twitter_1035-8934.jpg?size=338&ext=jpg" alt="" /></a>
              </>
            )}
          
          

        </div>


      </div>

    </div>
  )
}