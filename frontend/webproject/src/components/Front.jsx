import "./front.css";
import linkedinlogo from "../assets/linkedinlogo.png";
import githublogo from "../assets/githublogo.png";
import xlogo from "../assets/xlogo.png"
import ttactoe from "../assets/tic-tac-toe.png"
export default function Front () {
    const tagName = "jjeuwikodo"
    const aboutMe = "Welcome to my web page. Hi my name is Garl Joshua Marcial." +
    "Currently studying computer science in university, and i am working my absolute best "+ 
    "to be good at programming and know lots of things about computers!, So this site will be a " +
    "documentation of my journey. I will update this from time to time (hopefully) " +
    "as i learn things to reflect on my learnings"
    return (
        <>
        <div className="introBody">
            <h2>About me</h2>
            <p className="intro">
                {aboutMe}
            </p>
            <hr></hr>
        </div>     
            <div className="socials">            
                <h1>
                    {tagName}
                </h1> 
                <a href="https://www.linkedin.com/in/garl-joshua-marcial-89a6913b1/" 
                target="_blank" rel="noopener noreferrer">
                    <img src={linkedinlogo} alt="linkedinlogo"/>
                </a>
                <a href="https://github.com/jjeuwisei" target="_blank" rel="noopener noreferrer">
                    <img src={githublogo} alt="githublogo" className="githublogo"/>
                </a>
                <a href="https://x.com/joshsennn" target="_blank" rel="noopener noreferrer">
                    <img src={xlogo} alt="xlogo" className="xlogo"/>
                </a>
            </div>
            <div className="tttimage">           
                <img src={ttactoe} alt="tictactoeimg" className="tictactoe-img"/>
            <a href="">
                tic-tac-toe in react
            </a>
            </div>
            {/* commented for now ill try to make it work soon
            <div className="socials">
                {images.map((src, index) => (
                    <div key={index} className="image-wrapper">
                            <img src={src} alt={`Image ${index+ 1}`}/>
                    </div>
                ))}
            </div> */}
            </>
    );
}