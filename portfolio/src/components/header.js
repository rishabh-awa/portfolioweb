import img from "../staticimg/icon.jpg"
import "../css/header.css"

export default function Header(){
    return(
        <>
        <div className="head">
        
        </div>
        <div className="head2">
            <div className="pic">
                <img src={img} alt="ME" className="img" />
            </div>
            <div className="name">
                <h1>Rishabh Awasthi</h1>
            </div>
        </div>
        </>
    );
}