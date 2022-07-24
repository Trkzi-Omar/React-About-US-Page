import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import shipments from "../assets/img/shipments-square.jpg";
import users from "../assets/img/users-icon.png";
import drop from "../assets/img/pin-drop.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Stats = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <section className={"skill"} id={'skills'}>
            <Container><Row><Col>
                <div className={'skill-bx'}>
                    <h2>Our stats</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                        <div><img src={shipments} alt={'image-item'}/>
                            <h2>14 285</h2>
                            <h5>Shipments</h5></div>
                        <div><img src={users} alt={'image-item'}/>
                            <h2>176</h2>
                            <h5>Users</h5></div>
                        <div><img src={drop}  alt={'image-item'}/>
                            <h2>112</h2>
                            <h5>Drop Points</h5>
                        </div>
                    </Carousel>
                </div>

            </Col></Row></Container>
            <img className={"background-image-left"} src={colorSharp}/>
        </section>)
}