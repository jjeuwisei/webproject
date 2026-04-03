import { useNavigate } from 'react-router-dom';
import './front.css';
export default function Sidebar(){
    const navigate = useNavigate();
    return(
        <div className="sidebar">
            <h2>My Activities</h2>
            <nav>   
                <div className='navItem' 
                onClick={() => navigate("/")}>Home</div>
                <div className='navItem'
                onClick={() => navigate("/projects")}>Projects</div>
                <div className='navItem'
                onClick={() => navigate("/me")}>Profile</div>
            </nav>
        </div>
    );
}
