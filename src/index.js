
function MainContent() {
    return (
        <div className="main_page">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><span className="lg_span">i-</span>Minter</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Weapons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Wagyu Games</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li>
                                <button className="cybr-btn enableEthereumButton">
                                    Connect Wallet
                                    <span aria-hidden>_</span>
                                    <span aria-hidden className="cybr-btn__glitch"></span>
                                    <span aria-hidden className="cybr-btn__tag">R25</span>
                                </button>
                            </li>
                        </ul>
                    
                    </div>
                    
                </div>
                
                
            </nav>


            <div className="m_content">







            
                <div className="c_slider">
                    <div className="slider_d">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="the_images">
                                        <img className="ban_i" src="./src/images/amateur.PNG"></img>
                                    </div>
                                    
                                </div>
                                <div className="carousel-item">
                                    <div className="the_images">
                                        <img className="ban_i" src="./src/images/z_killer.PNG"/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="the_images">
                                        <img className="ban_i" src="./src/images/survivor_bg.png"/>
                                    </div>                                    
                                </div>
                                <div className="carousel-item">
                                    <div className="the_images">
                                        <img className="ban_i" src="./src/images/assassin_bg.png" />
                                    </div>                                    
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="fa fa-chevron-left fa-lg" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="fa fa-chevron-right fa-lg" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    
                </div>











    \
                <div className="grid-container">
                    <div className="item2 udb1">
                        <img className="udb" src="./src/images/udb.jpg"></img>
                    </div>
                    <div className="item3">
                        <h6>INTRODUCING THE WEAPONS MINTING GUIDE</h6>
                        <p>
                            Read our Medium guide and learn how minting works.
                        </p>
                    </div>
                    <div className="item4">
                        <button className="button">
                            <span>Read Article </span>
                        </button>
                    </div>
                </div>

                <div className="me_weapons">
                    <div className="header">
                        <h1>My Weapons</h1>
                        <p>
                            Weapon loadouts found in your connected wallet will appear here.
                        </p>
                    </div>

                    

                    <div className="main">
                        <div className="row">
                            <div className="column">
                                <img className="icon_img" src="./src/images/add_icon.PNG"></img>
                                
                            </div>
                            <div className="column">
                                <img className="icon_img" src="./src/images/add_icon.PNG"></img>
                            </div>
                            <div className="column">
                                <img className="icon_img" src="./src/images/add_icon.PNG"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



ReactDOM.render(
<div>
    <MainContent />
</div>,
document.getElementById("root"))

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
  ethereum.request({ method: 'eth_requestAccounts' });
});


let scoll_item = document.querySelector(".scroll_items");

function scrollL() {
    let l_width = scoll_item.offsetWidth;

    scoll_item.scrollBy(l_width + 5, 0);

    // if (p_width >= 2500) {
    //     left.scrollBy(661, 0);
    // }
    // else if (p_width >= 2000) {
    //     left.scrollBy(510, 0);
    // }
    // else if (p_width >= 1300) {
    //     left.scrollBy(370, 0);
    // }  
    // else if (p_width >= 1200)
    // {
    //     left.scrollBy(335, 0);
    // }  
}

function scrollR() {
    let r_width = scoll_item.offsetWidth;
    scoll_item.scrollBy(-r_width - 5, 0);
}

$("#Next").click(function(){
	$("#Slider").append($("#Slider img:first-of-type"));
});

$("#Prev").click(function(){
	$("#Slider").prepend($("#Slider img:last-of-type"));
});

