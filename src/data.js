const dbFrases = [
    {
        id:0,
        frase:"Un día sin reír es un día perdido",
        autor:"-Charles Chaplin",
        color:"background-image: radial-gradient(circle at 9.95% 9.95%, #0097ff 0, #0091ff 3.33%, #008bff 6.67%, #0084ff 10%, #627cff 13.33%, #8a73ff 16.67%, #a769f4 20%, #bf5ee6 23.33%, #d253d7 26.67%, #e247c6 30%, #ee3cb4 33.33%, #f733a2 36.67%, #fd2d8f 40%, #ff2c7c 43.33%, #ff306a 46.67%, #ff3858 50%, #fb4246 53.33%, #f44d34 56.67%, #ec5721 60%, #e26204 63.33%, #d66b00 66.67%, #c97400 70%, #bb7c00 73.33%, #ac8300 76.67%, #9c8900 80%, #8a8f00 83.33%, #789300 86.67%, #639700 90%, #4b9b00 93.33%, #279e0a 96.67%, #00a029 100%);"

    },
    {
        id:1,
        frase:"No puedes permitirte estar discapacitado en espíritu a la vez que físicamente.",
        autor:"-Stephen Hawking",
        color:"background-image: radial-gradient(circle at 50% 50%, #a8ffff 0, #a5fdff 25%, #9dd5f2 50%, #91afc2 75%, #828d96 100%);"

    },
    {
        id:2,
        frase:"Cada día sabemos más y entendemos menos",
        autor:"-Albert Einstein",
        color:"background-image: radial-gradient(circle at 50% -20.71%, #fff56b 0, #fff866 6.25%, #fdfa63 12.5%, #e7fb61 18.75%, #d0fb62 25%, #b5fa65 31.25%, #97f86a 37.5%, #73f670 43.75%, #3cf278 50%, #00ee82 56.25%, #00ea8f 62.5%, #00e69d 68.75%, #00e2ad 75%, #00dfbe 81.25%, #00dbd1 87.5%, #00d8e3 93.75%, #00d6f6 100%);"

    },
    {
        id:3,
        frase:"La innovación distingue a los líderes de los seguidores",
        autor:"-Steve Jobs",
        color:"background:linear-gradient(30deg, crimson,sienna, royalblue, indianred, purple);"

    },
    {
        id:4,
        frase:"La educación es el arma más poderosa para cambiar el mundo",
        autor:"-Nelson Mandela",
        color:"background-image: radial-gradient(circle at 50% -20.71%, #ffffdb 0, #ffffd4 8.33%, #ffffce 16.67%, #f7fec7 25%, #e9fbc1 33.33%, #daf7bb 41.67%, #c9f2b5 50%, #b7edb1 58.33%, #a4e9af 66.67%, #91e5af 75%, #7ce2b1 83.33%, #66dfb4 91.67%, #4cdcb9 100%);"

    },
    {
        id:5,
        frase:"Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera",
        autor:"-Albert Einstein",
        color:"background-image: radial-gradient(circle at 58.4% 53.06%, #8cffff 0, #7efff9 16.67%, #73f4ec 33.33%, #6cd8d8 50%, #67bdc2 66.67%, #64a5ae 83.33%, #61919b 100%);"

    },
    {
        id:6,
        frase:"Nunca sabes lo fuerte que eres, hasta que ser fuerte es la única opción que te queda",
        autor:"-Bob Marley",
        color:"background-image: radial-gradient(circle at 50% 50%, #004553 0, #00445b 3.33%, #004461 6.67%, #004368 10%, #00426d 13.33%, #004171 16.67%, #003f74 20%, #003d75 23.33%, #003b76 26.67%, #003875 30%, #0d3573 33.33%, #293170 36.67%, #3a2d6b 40%, #462866 43.33%, #512460 46.67%, #591f59 50%, #601a51 53.33%, #65164a 56.67%, #691241 60%, #6c1039 63.33%, #6d1031 66.67%, #6d1229 70%, #6c1521 73.33%, #6a1919 76.67%, #671e11 80%, #632207 83.33%, #5f2600 86.67%, #5a2a00 90%, #542e00 93.33%, #4e3200 96.67%, #473500 100%);"

    },
    {
        id:7,
        frase:"El secreto de la existencia humana no solo está en vivir, sino también en saber para qué se vive",
        autor:"-Fiódor Dostoievski",
        color:"background-image: radial-gradient(circle at 36.99% 77.9%, #e1ffa0 0, #e5f690 8.33%, #e9eb80 16.67%, #ece06f 25%, #efd35e 33.33%, #f1c54d 41.67%, #f2b53c 50%, #f3a52d 58.33%, #f59422 66.67%, #f8841d 75%, #fa731e 83.33%, #fd6124 91.67%, #ff4e2c 100%);"

    },
    {
        id:8,
        frase:"Pasamos mucho tiempo ganándonos la vida, pero no el suficiente tiempo viviéndola",
        autor:"-Teresa de Calcuta",
        color:"background-image: linear-gradient(180deg, #ffff00 0, #ffff00 8.33%, #ffff00 16.67%, #ddff12 25%, #b5ff30 33.33%, #88ff44 41.67%, #53f253 50%, #00e260 58.33%, #00d56c 66.67%, #00c978 75%, #00c084 83.33%, #00b992 91.67%, #00b4a0 100%);"

    },
    {
        id:9,
        frase:"Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle",
        autor:"-Stephen Hawking",
        color:"background-image: radial-gradient(circle at 31.86% 34.78%, #ff99ff 0, #b779ff 25%, #5353f2 50%, #002ea7 75%, #001067 100%);"

    },
    {
        id:10,
        frase:"Los éxitos más importantes se consiguen cuando existe la posibilidad de fracasar",
        autor:"-LMark Zuckerberg",
        color:"background-image: radial-gradient(circle at 50% -20.71%, #d1fff8 0, #befff6 10%, #a7fff4 20%, #8dfff3 30%, #6cfbf2 40%, #3cf2f2 50%, #00e8f3 60%, #00dff5 70%, #00d6f9 80%, #00cefd 90%, #00c6ff 100%);"

    }
]

export default dbFrases