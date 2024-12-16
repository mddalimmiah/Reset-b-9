    console.log('DOM er ajk special events');
    // option:-1 directly set on the Html element:
    // <button onclick="console.log(65)">Another Button</button>

    // option: -2 add onclick function on the html element

    // <button onclick="makeRed()" >Make red!</button>
// important : We will use this
    function makeRed(){
        document.body.style.backgroundColor ='red';
    }

    // option:-3 

        const makeBlueButton=document.getElementById('make-blue');
    //    console.log(makeBlueButton)
    makeBlueButton.onclick = makeBlue;   //onlclick erpor function er name ta likhte hobe tahle call hobe
    function makeBlue(){
        document.body.style.backgroundColor='blue';
    }

    //    option- 3 another
    const purpleButton=document.getElementById('make-purple');
        purpleButton.onclick=function makePurple(){
            document.body.style.backgroundColor='purple';
        }

        // option:4 

        const PinkButton=document.getElementById('make-pink');
        // console.log(PinkButton)
        PinkButton.addEventListener('click', makePink); //ei khane click abong function name likhte hobe tahle function call hobe
        function makePink(){
            document.body.style.backgroundColor='pink';
        }

        // option:4 another

        const makeGreenButton=document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor='green';
        })

        // option:4 final
        // important : We will use this sometimes
        //   document.getElementById('make-goldenrod').addEventListener('click', function(){})
        document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor='goldenrod'
        })