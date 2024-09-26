import "./Carousel.css";
import Slider from "react-slick";

function Carousel({children}){

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        variableWidth: true,
        adaptiveHeigth: true,
        // slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(

        <div>

            <Slider {...settings}>
                {children}
            </Slider>

        </div>



    );

}

export default Carousel;