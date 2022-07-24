import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css'
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["customer focus", "efficiency", "collaboration", "transparency"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta * 3 / 5)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }


    return (<section className={'banner'} id={'home'}>
        <Container>
            <Row className={'align-items-center'}>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({isVisible}) => <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                            <span className={'tagline'}>
                            Welcome to our About page
                            </span>
                            <h2 style={{color: 'whitesmoke'}}>{`Clients trust us because of our `}
                                <span className={"wrap"}> {text} </span>
                            </h2>
                            <p style={{backgroundColor: '#10303d'}} className={''}>Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt
                                ut
                                labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus arcu
                                bibendum.
                                Ante
                                metus dictum at tempor. Velit euismod in pellentesque massa placerat duis
                                ultricies.
                                Elementum pulvinar etiam non quam lacus suspendisse. Nunc sed augue lacus
                                viverra.
                                Enim
                                blandit volutpat maecenas volutpat blandit. Molestie a iaculis at erat
                                pellentesque
                                adipiscing. Eu lobortis elementum nibh tellus. Id consectetur purus ut
                                faucibus
                                pulvinar.
                                Quam vulputate dignissim suspendisse in est ante. Scelerisque varius morbi
                                enim
                                nunc
                                faucibus a pellentesque sit amet. Viverra suspendisse potenti nullam ac
                                tortor.
                                Diam
                                volutpat commodo sed egestas egestas.
                            </p>
                            <button onClick={() => console.log('connect')}>
                                Let's connect <ArrowRightCircle size={25}/>
                            </button>
                        </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    < TrackVisibility>
                        {({isVisible}) => <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} alt="Header Img"/>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>)
}