import "./button.css"

function ScrollTop(){

    const click = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return(

      <button className="top" onClick={click}>
        &#9650;
      </button>    

    );
}

export default ScrollTop;