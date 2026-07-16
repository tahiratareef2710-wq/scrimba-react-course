import img from './im.png'
export default function Header() {
    return (
        <header>
            <div className="header-container">  
                 <img src={img} alt="logo" className="logo" />
                <h1>Chef Claude</h1>           
                </div>
        </header>
    )       
    

}
