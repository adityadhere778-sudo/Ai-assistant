let btn = document.querySelector("#btn"); 
let content = document.querySelector("#content"); 
let circle = document.querySelector("#circle");

function speak(text){ 
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-US"; 
    window.speechSynthesis.speak(text_speak);
}

function wishme(){
    let day = new Date();
    let hours = day.getHours();

    if(hours >= 0 && hours < 12){
        speak("Good Morning Boss");
    }
    else if(hours >= 12 && hours < 18){
        speak("Good Afternoon Boss");
    }
    else if(hours >= 18 && hours < 21){
        speak("Good Evening Boss");
    }
    else{
        speak("Good Night Boss");
    }
}

window.addEventListener('load', () => {
    wishme();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start()
    //circle.style.dispaly="none"
   // circle.style.dispaly="block"
    
});

    function takeCommand(message){
        if(message.includes("hello")){
            speak("hello Bosss")
        }else if(message.includes("who are you")){
            speak("i am virtual assistant created by aditya boss")
        }else if(message.includes("fuck you")){
            speak("Fuck you bitch")

        }else if(message.includes("who is abhishek")){
            speak("abhishek is very dangerous snake live in khadi corner")
        }else if(message.includes("who is sairaj")){
            speak("the full name of sairaj is, sairaj kishor kamte ,third year BCA student at vsm collage nippani")
        } 
        else if(message.includes("who is arnav")){
            speak("the full name of arnav is, arnav satish mane,third year BCA student at vsm collage nippani")
        } 

        else if(message.includes("open youtube")){
            speak("opening youtube...")
            window.open("https://youtube.com/")
           
        }
        else if(message.includes("open tradingview")){
            speak("opening tradingview...")
            window.open("https://tradingview.com/")
        }   else if(message.includes("open github")){
            speak("opening github...")
            window.open("https://github.com/")
       
        } 
           else if(message.includes("open instagram")){
            speak("opening instagram...")
            window.open("https://www.instagram.com/?hl=en")
        } 
           else if(message.includes("open google")){
            speak("opening google..")
            window.open("https://www.google.com/")
        } 
         else if(message.includes("open whatsapp")){
            speak("opening whatsapp..")
            window.open("https://web.whatsapp.com/")
      
        } 
          else if(message.includes("time")){
            let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
            speak(time)
        } 
          else if(message.includes("date")){
            let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
            speak(date)
        } 
        
        else{
            let finalText="this is what i found on internet regarding"+message.replace("ruby","")|| message.replace("ruby","")
            speak(finalText)
            window.open(`https://www.google.com/search?q=${message.replace("ruby","")||message.replace("ruby","")}`,"_blank")
        }
         
    }







