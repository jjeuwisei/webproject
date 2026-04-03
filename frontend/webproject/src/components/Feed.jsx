import { useEffect, useState } from "react";
import './front.css';

export default function Feed({endpoint}) {
    const [feed, setFeed] = useState([]);
    useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            setFeed(data);
        })
        .catch(err => console.error(err));
    },[endpoint]); 

   
return(
    <div className="feed">
        {feed.length === 0 ?(
            <p>Loading...</p>
        ) : (
            feed.map(feed => (
            <Post key={feed.id} feed={feed} />
        ))
        )}
    </div>
);
}

function Post({feed}) {
    if (feed.type === "project") return <ProjectPost feed={feed} />;
    return <AboutMePost feed={feed} />;
}

function AboutMePost({feed}) {
    return(
            <div className="post">
                <h3>{feed.title}</h3>
                <p>{feed.description}</p>   
            </div>
        )
}

function ProjectPost({feed}) {
    return(
            <div className="post">
                <a href={feed.githubUrl} 
                target="_blank" rel="noopener noreferrer">
                <h3>{feed.title}</h3>
                <p>{feed.description}</p>   
                </a>
            </div>
    )
}