import {Col, Row , Nav , Tab , Container} from "react-bootstrap";
import React from "react";
import {ProjectsCard} from "./ProjectsCard";
import colorSharp2 from "../assets/images/color-sharp2.png"
import projImg1 from "../assets/images/project-img1.png"
import projImg2 from "../assets/images/project-img2.png"
import projImg3 from "../assets/images/project-img3.png"
import hunman from "../assets/images/none.png"
export const Projects = () => {
    const projects = [
        {
            title: "سرتیتر",
            description: "خبری نیست",
            imgUrl:hunman,
        },
        {
            title: "سرتیتر",
            description: "خبری نیست",
            imgUrl:hunman,
        },
        {
            title: "سرتیتر",
            description: "خبری نیست",
            imgUrl:hunman,
        }
    ]
    return(
        <section className="project">
        <Container>
            <Row>
                <Col>
                    <h2>پروژه ها</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در س</p>
                    <Tab.Container id="projects=tabs" defaultActiveKey="first" >
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">برگه 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">برگه 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">برگه 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project , index) => {
                                            return(
                                                <ProjectsCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">هیچی نیست</Tab.Pane>
                            <Tab.Pane eventKey="third">هیچی نیست</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
            <img className="background-image-right" src={colorSharp2} alt="back"/>
        </section>
    )
}