import { useEffect, useState } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import { 
    codePortfolio,
    gamesPortfolio,
    uxPortfolio,
    allPortfolio} from "../../data";


export default function Portfolio() {

    const [selected, setSelected] = useState("code");
    const [data, setData] = useState([]);
    const list =[ 
    
    {
        id: "code",
        title: "Coding Projects"
    },
    {
        id: "games",
        title: "Unity Games"
    },
    {
        id: "ux",
        title: "UX Design"
    },
    {
        id: "all",
        title: "All Projects"
    },
    
    ];

    useEffect(()=>{
        switch(selected){
            case "code":
                setData(codePortfolio);
                break;
            case "games":
                setData(gamesPortfolio);
                break;
            case "ux":
                    setData(uxPortfolio);
                    break;
            case "all":
                        setData(allPortfolio);
                        break; 
                        default: 
                        setData(codePortfolio);
        }

    },[selected] );

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>
                    (<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} key={item.id}/>
                    ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div>))}

            </div>

           
        </div>
    )
}
