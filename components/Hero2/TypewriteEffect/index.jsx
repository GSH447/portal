import Typewriter from "typewriter-effect";

const HeroTypeWriter = () => {

 
 
 return (

    <>
        <Typewriter
            options={{
            strings: [
                " Saving the lives of people with congenital heart disease everywhere.",
                " Helping cure CHD affecting approximately nearly 1 in 100 newborns annually. ",
                " Providing financial assistance program to patients and families.",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            }}
        />
    </>

 ) 

}

export default  HeroTypeWriter;