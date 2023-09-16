// DISCORD USERNAME COPY

        function copyDiscord() {
        navigator.clipboard.writeText("zeunig");
        document.getElementById("dc").src = "icons/check.png";
        setTimeout(() => {
            document.getElementById("dc").src = "icons/discord.svg";
        }, 2250)
        } 

        // SONG CONTROL
        const songLibSize = 4;
        function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let songSelection = randomIntFromInterval(1, songLibSize);
    console.log(songSelection);
    let paused = false;
    switch(songSelection) {
        case 1:
            changeSong(1);
            break;
        case 2: changeSong(2);break;
        case 3: changeSong(3);break;
        case 4: changeSong(4);break;
        default: changeSong(1);break;
    }

    function changeSong(number) {
        switch(number) {
            case 1: // latyobratyo mindenki néz
                document.getElementById('song_title').innerText = "Mindenki néz";
                document.getElementById('song_artist').innerText = "Latyobratyo";
                document.getElementById('song_image').src = "songsimages/mindenkinez.jpg";
                document.getElementById('audiosrc').src = "songs/Mindenki néz.mp3";
                break;
                case 2: // latyobratyo mindenki néz
                document.getElementById('song_title').innerText = "VETTE SUM";
                document.getElementById('song_artist').innerText = "BBY GOYARD";
                document.getElementById('song_image').src = "songsimages/vettesum.jpg";
                document.getElementById('audiosrc').src = "songs/VETTE SUM.mp3";
                break;
            
                case 3: // latyobratyo mindenki néz
                document.getElementById('song_title').innerText = "Nuclear Winter";
                document.getElementById('song_artist').innerText = "Yung Dmize";
                document.getElementById('song_image').src = "songsimages/nuclearwinter.jpg";
                document.getElementById('audiosrc').src = "songs/Nuclear Winter.mp3";
                break;

                case 4: // latyobratyo mindenki néz
                document.getElementById('song_title').innerText = "MOVE LOOK";
                document.getElementById('song_artist').innerText = "SugarHill Keem, Blockwork";
                document.getElementById('song_image').src = "songsimages/movelook.jpg";
                document.getElementById('audiosrc').src = "songs/MOVE LOOK.mp3";
                
                break;
            

        }
        document.getElementById('audio').load();
    }
    function previous() {
        if(songSelection != 1) {
            songSelection = songSelection-1;
        }else {
            songSelection = songLibSize;
        }
        
        changeSong(songSelection);
        if(paused) {
            document.getElementById('audio').load();
        }else {
            document.getElementById('audio').play();
        }
    }
    function next() {
        if(songSelection != songLibSize) {
            songSelection = songSelection+1;
        }else {
            songSelection = 1;
        }
        changeSong(songSelection);
        if(paused) {
            document.getElementById('audio').load();
        }else {
            document.getElementById('audio').play();
        }
        
    }
    function pauseplay() {
        if(paused) {
            paused = false;
            document.getElementById('audio').play();
            document.getElementById('paused_fr').style.display = "none";
            document.getElementById('not_paused_fr').style.display = "block";

        }else {
            paused = true;
            document.getElementById('audio').pause();
            document.getElementById('paused_fr').style.display = "block";
            document.getElementById('not_paused_fr').style.display = "none";
        }
    
    }
    
    document.getElementById('previous').addEventListener('click',previous);
    document.getElementById('pause').addEventListener('click',pauseplay);
    document.getElementById('next').addEventListener('click',next);
    document.getElementById('audio').addEventListener('ended',next);
    


    // OTHER

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const texts = ["zeunig", "3 followers on github", "hardstuck bronze in fortnite", "silly sometimes :P", "developing lol client","fuck rtmp",'imagine using js frameworks for single page website lmfao'];
        let ff = 0;
        async function showShit() {
            document.getElementById('audio').play();
            document.getElementById('enter').style.cursor = "default";
            document.getElementById('prompt').style.pointerEvents = "none";
            document.getElementById('prompt').classList.toggle("fade");
            
            await changeText();
        }
        async function changeText() {
            for(;;) {
                let target_text = texts[0];
                let original_text = document.getElementById('asd').innerText;
                await sleep(5000);
                for(let i = 0; i < texts.length; i++) {
                    for(let j = original_text.length; j >= 0 ; j--) {
                        await sleep(50);
                        document.getElementById('asd').innerText = original_text.slice(0,j);
                    }
                    for(let k = 0; k <= texts[i].length; k++) {
                        await sleep(125);
                        document.getElementById('asd').innerText = texts[i].slice(0, k);
                        original_text = texts[i];
                    }
                    await sleep(2000);
                }
                console.log(":3");
            }
        }
        document.getElementById('prompt').addEventListener('click',showShit);