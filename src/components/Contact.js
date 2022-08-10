import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'
import TrackVisibility from "react-on-screen";
import {motion} from "framer-motion";

export const Contact = () => {
    const formInitialDetails = {
        firstname: '', lastname: '', email: '', phone: '', message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('http://localhost:5000/contact', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(formDetails)
        })
        setButtonText('Send');
        setFormDetails(formInitialDetails)
        let result = response.json();
        if (result.code === 200) {
            setStatus({success: true, message: 'Message sent successfully'})
        } else {
            setStatus({success: false, message: 'Something went wrong, please try again in a few minutes'})
        }
    }

    const variants = {/*used in motion.div*/
        visible: {opacity: 1, scale: 1,},
        hidden: {opacity: 0, scale: 0.5, x: -3},
    }
    return (<section className={'contact'} id={'connect'}>
        <Container>
            <Row className={'align-items-center'}>
                <Col md={6}>
                    <motion.div
                        initial={["hidden"]}
                        animate={["visible"]}
                        variants={variants}
                    >
                        <img src={contactImg}
                             alt={'contact image'}/>
                    </motion.div>
                </Col>
                <Col md={6} id={'connect-col'}>
                    <TrackVisibility once={true}>
                        {({isVisible}) => isVisible ?
                            /*<motion.div
                                initial={{x: 300}}
                                animate={{x: 0}}
                                transition={{ease: [0, 0.71, 0.2, 1.01], duration: 0.9}}
                            >*/
                            <div className={'animate__animated animate__fadeInRight'}>
                                <h2><a href={'#connect-message'}>
                                    Get in touch with us
                                    <svg width="123" height="113" viewBox="0 0 123 113" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="Triangles">
                                            <g id="triangles-dark">
                                                <path id="triangle-dark-1" opacity="1"
                                                      d="M58.0782 52.2772C59.3904 53.0509 59.3904 54.9491 58.0782 55.7228L28.7658 73.0064C27.4326 73.7925 25.75 72.8313 25.75 71.2836L25.75 36.7164C25.75 35.1687 27.4326 34.2075 28.7658 34.9936L58.0782 52.2772Z"/>
                                                <path id="triangle-dark-2" opacity="1"
                                                      d="M71.0782 52.2772C72.3904 53.0509 72.3904 54.9491 71.0782 55.7228L41.7658 73.0064C40.4326 73.7925 38.75 72.8313 38.75 71.2836L38.75 36.7164C38.75 35.1687 40.4326 34.2075 41.7658 34.9936L71.0782 52.2772Z"/>
                                            </g>
                                            <g id="triangles-light">
                                                <path id="triangle-light-1" opacity="1"
                                                      d="M58.0782 52.2772C59.3904 53.0509 59.3904 54.9491 58.0782 55.7228L28.7658 73.0064C27.4326 73.7925 25.75 72.8313 25.75 71.2836L25.75 36.7164C25.75 35.1687 27.4326 34.2075 28.7658 34.9936L58.0782 52.2772Z"/>
                                            </g>
                                        </g>
                                    </svg></a></h2>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"text"} value={formDetails.firstname} placeholder={'Firstname'}
                                                   onChange={(e) => onFormUpdate('firstname', e.target.value)}/>
                                        </Col>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"text"} value={formDetails.lastname} placeholder={'Lastname'}
                                                   onChange={(e) => onFormUpdate('lastname', e.target.value)}/>
                                        </Col>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"email"} value={formDetails.email}
                                                   placeholder={'Email address'}
                                                   onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                        </Col>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"tel"} value={formDetails.phone} placeholder={'Phone no'}
                                                   onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                        </Col>
                                        <Col sm={6} className={"p x-1"}>
                                <textarea style={{width: "100%"}} className={"p p x-1"} value={formDetails.message}
                                          placeholder={'Message'}
                                          id={'connect-message'}
                                          onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                        </Col>
                                        <Col sm={6} className={"p x-1"}>
                                            <button type={'submit'}><span>{buttonText}</span></button>
                                        </Col>
                                        {
                                            status.message &&
                                            <Col>
                                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                            </Col>
                                        }
                                    </Row>
                                </form>
                            </div>
                            /*</motion.div> */
                            : ""
                        }
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>)
}