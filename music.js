var divlength =document.querySelectorAll('.song').length;
console.log(divlength);
for(var i=0;i<divlength;i++){
    var demo=document.querySelectorAll('.song')[i].addEventListener('click',playsong)
    var demo=document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong)
}

var song1 = new Audio();
song1.src = "C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Ed_Sheeran_-_Perfect_(Official_Music_Vid_128_16842960.mp3"


var song2 = new Audio();
song2.src ="C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Garry_Sandhu___Din_Gaye___Latest_Punjabi_Songs_2014_128_16842960.mp3"

var song3 = new Audio();
song3.src ="C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Hardwell_feat._Jonathan_Mendelsohn_-_Echo_(Official_Music_Video)_128_16842960.mp3"

var song4 = new Audio();
song4.src = "C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Kygo_-_This_Town_(Lyric)_ft._Sasha_Sloan_128_16842960.mp3"

var song5 = new Audio();
song5.src ="C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Dino_James_-_Achi_Maza_Aayi_[Official_Video]_128_16842960.mp3"

var song6 = new Audio();
song6.src = "C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Daru_Badnaam___Himanshi_Khurana___New_Pu_128_16842960.mp3"

var song7 = new Audio();
song7.src = "C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Buzz_-_Lyrics_Video___Aastha_Gill_feat_B_128_16842960.mp3"

var song8 = new Audio();
song8.src ="C:/Users/vikas/OneDrive/Desktop/waste practice/songs/Bam Bam Bholey Dopeboy-Leo Lil Golu(iPendu.com).mp3"

var song9 = new Audio();
song9.src ="C:/Users/vikas/OneDrive/Desktop/waste practice/songs/05 - Tujhe Bhula Diya(wapking.in).mp3"

















function playsong(){
    var songId = this.innerHTML;
    switch (songId) {
        case "a":
            song1.play();
            break;
            case "b":
            song2.play();
            break;
            case "c":
            song3.play();
            break;
            case "d":
            song4.play();
            break;
            case "e":
            song5.play();
            break;
            case "f":
            song6.play();
            break;
            case "g":
            song7.play();
            break;
            case "h":
            song8.play();
            break;
            case "i":
            song9.play();
            break;
    
        default:
            console.log("wrong input")
            break;
    }
}
function pausesong(){
    var songId =this.innerHTML;
    switch (songId) {
        case "a":
            song1.pause();
            break;
            case "b":
            song2.pause();
            break;
            case "c":
            song3.pause();
            break;
            case "d":
            song4.pause();
            break;
            case "e":
            song5.pause();
            break;
            case "f":
            song6.pause();
            break;
            case "g":
            song7.pause();
            break;
            case "h":
            song8.pause();
            break;
            case "i":
            song9.pause();
            break;
    
        default:
            console.log("wrong input")
            break;
    }
}
