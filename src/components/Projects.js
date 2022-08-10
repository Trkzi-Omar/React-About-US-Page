import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp1 from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: 'Business', description: 'Lorem Ipsum', imgUrl: projImg1
        }, {
            title: 'Business', description: 'Lorem Ipsum', imgUrl: projImg2
        }, {
            title: 'Business', description: 'Lorem Ipsum', imgUrl: projImg3
        }, {
            title: 'Business', description: 'Lorem Ipsum', imgUrl: projImg1
        }, {
            title: 'Business', description: 'Lorem Ipsum', imgUrl: projImg2
        }, {
            title: 'Business', description: 'Lorem Ipsum', imgUrl: projImg3
        },];

    return (
        <section className={'project'} id={'projects'}>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated  animate__fadeIn" : ""}>
                                    <h2>Our projects</h2>
                                    <p>Lorem Ipsum</p>
                                    <Tab.Container id={"projects-tabs"} defaultActiveKey={"first"}>
                                        <Nav variant="pills"
                                             className={'nav-pills mb-5 justify-content-center align-content-center'}>
                                            <Nav.Item>
                                                <Nav.Link eventKey={"first"}>Tab Num° 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Num° 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="thirsd">
                                                    Tab Num° 3
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey={"first"}>
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard key={index}
                                                                         {...project}/>
                                                        )
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey={"second"}>
                                                Lorem Ipsum
                                            </Tab.Pane>
                                            <Tab.Pane eventKey={"third"}>
                                                Lorem Ipsum
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className={"background-image-right"} src={colorSharp2} alt={''}/>
        </section>
    )
}