// const 

document.querySelectorAll("#Artists .card").forEach(
    (x) => {
        x.addEventListener("mouseenter", () => {
            document.querySelectorAll("#Artists .play").forEach(
                (e) => {
                    e.classList.toggle("vanish");
                }
            )
        });

        x.addEventListener("mouseleave", () => {
            document.querySelectorAll("#Artists .play").forEach(
                (e) => {
                    e.classList.toggle("vanish");
                }
            )
        });
    }
)


const songs = [
    new Audio("./Songs/1.Despacito.mp3"),
    new Audio("./Songs/2.Anaganaga Oka Uru.mp3"),
    new Audio("./Songs/3.Nuvvante Na Navvu.mp3"),
    new Audio("./Songs/4.The Life Of Ram.mp3"),
    new Audio("./Songs/5.Aakasam_lo_okataara.mp3"),
    new Audio("./Songs/6.Koncham Koncham.mp3"),
    new Audio("./Songs/7.Venello Adapilla.mp3"),
    new Audio("./Songs/8.Apudo ipudo epudo.mp3"),
    new Audio("./Songs/9.Jabilli Kosam Akasamalle.mp3"),
    new Audio("./Songs/10.redemma.mp3"),
    new Audio("./Songs/11.aaseetha.mp3"),
    new Audio("./Songs/12.meenu.mp3"),
    new Audio("./Songs/13.ashapasham.mp3"),
    new Audio("./Songs/14.neechupule.mp3"),
    new Audio("./Songs/15.ythis.mp3")
];

function isAudioPlaying(audioElement) {
    return !audioElement.paused && !audioElement.ended && audioElement.readyState > 2;
}

function pauseExcept(exceptionIndex) {
    songs.forEach(
        (song, index) => {
            if (index != exceptionIndex) {
                song.pause();
                cards[index].classList.remove("blurrImg");
            }
        }
    )
}

const cards = Array.from({ length: 15 },
    (_, i) => document.getElementById(`s${i + 1}`)
);

songs.forEach((song, index) => {
    const card = cards[index];

    card.addEventListener("click", () => {
        if (isAudioPlaying(song)) {
            song.pause();
            card.classList.remove("blurrImg"); // Remove blur when paused
        } else {
            // Pause all other songs and remove blur from all other cards
            pauseExcept(index);

            // Play the clicked song and add blur effect
            song.play().then(() => {
                console.log(`Playing song ${index + 1}`);
                card.classList.add("blurrImg");
            }).catch((e) => {
                console.log(`Failed to play song ${index + 1}:`, e);
            });
        }
    });
});

const seekBars = Array.from({ length: 15 }, (_, i) => document.getElementById(`seek${i + 1}`));
songs.forEach((audio, index) => {
    const seekBar = seekBars[index];

    // When metadata is loaded, set the seekBar's max value
    audio.addEventListener("loadedmetadata", () => {
        seekBar.max = audio.duration;
    });

    // Update seekBar as the song plays
    audio.addEventListener("timeupdate", () => {
        seekBar.value = audio.currentTime;
    });

    // Allow the user to seek through the song
    seekBar.addEventListener("input", (e) => {
        audio.currentTime = seekBar.value;
        e.stopPropagation();
    });
});












































































// const a1 = new Audio("./Songs/1.Despacito.mp3");
// const a2 = new Audio("./Songs/2.Anaganaga Oka Uru.mp3");
// const a3 = new Audio("./Songs/3.Nuvvante Na Navvu.mp3");
// const a4 = new Audio("./Songs/4.The Life Of Ram.mp3");
// const a5 = new Audio("./Songs/5.Aakasam_lo_okataara.mp3");
// const a6 = new Audio("./Songs/6.Koncham Koncham.mp3");
// const a7 = new Audio("./Songs/7.Venello Adapilla.mp3");
// const a8 = new Audio("./Songs/8.Apudo ipudo epudo.mp3");
// const a9 = new Audio("./Songs/9.Jabilli Kosam Akasamalle.mp3");
// const a10 = new Audio("./Songs/10.redemma.mp3");
// const a11 = new Audio("./Songs/11.aaseetha.mp3");
// const a12 = new Audio("./Songs/12.meenu.mp3");
// const a13 = new Audio("./Songs/13.ashapasham.mp3");
// const a14 = new Audio("./Songs/14.neechupule.mp3");
// const a15 = new Audio("./Songs/15.ythis.mp3");


// const songs = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15];

// const c1 = document.getElementById("s1");
// const c2 = document.getElementById("s2");
// const c3 = document.getElementById("s3");
// const c4 = document.getElementById("s4");
// const c5 = document.getElementById("s5");
// const c6 = document.getElementById("s6");
// const c7 = document.getElementById("s7");
// const c8 = document.getElementById("s8");
// const c9 = document.getElementById("s9");
// const c10 = document.getElementById("s10");
// const c11 = document.getElementById("s11");
// const c12 = document.getElementById("s12");
// const c13 = document.getElementById("s13");
// const c14 = document.getElementById("s14");
// const c15 = document.getElementById("s15");




// c1.addEventListener(
//     "click",

//     () => {
//         c1.classList.toggle("blurrImg");
//         if (!songs[0].paused) {
//             songs[0].pause();
//         } else {
//             songs[0].play().then(
//                 console.log("Playing Despacito")
//             ).catch(
//                 (e) => {
//                     console.log("Failed despacito ", e);
//                 }

//             )
//         }
//     }

// )








