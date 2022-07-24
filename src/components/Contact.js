import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'

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


    return (<section className={'contact'} id={'connect'}>
        <Container>
            <Row className={'align-items-center'}>
                <Col md={6}>
                    <img src={contactImg} alt={'contact image'}/>
                </Col>
                <Col md={6}>
                    <h2>Get in touch with us</h2>
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
                                <input type={"email"} value={formDetails.email} placeholder={'Email address'}
                                       onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className={"px-1"}>
                                <input type={"tel"} value={formDetails.phone} placeholder={'Phone no'}
                                       onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col sm={6} className={"px-1"}>
                                <textarea value={formDetails.message} placeholder={'Message'}
                                          onChange={(e) => onFormUpdate('message', e.target.value)}/>
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
                </Col>

            </Row>
        </Container>
    </section>)
}