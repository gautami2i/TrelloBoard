import { FC } from "react";
import { Link } from "react-router-dom";

const Home:FC = () => {
    return (
        <>
        
      
                
                    <p>
                        <Link to="/Trello">Trello</Link>
                    </p>
                    <p>
                        <Link to="/about">About </Link>
                    </p>
                  
            
      
        </>
    );
};

export default Home;
