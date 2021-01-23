import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import ca from "../../assets/img/projects/ca.png";
import vq from "../../assets/img/projects/vq.png";
import pc from "../../assets/img/projects/pc.png";
import ea from "../../assets/img/projects/ea.png";
import ma from "../../assets/img/projects/ma.png";
import pa from "../../assets/img/projects/pa.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Chef It Up With MUI */}
        <ImageEvent
            date="12/04/2020"
            className="text-center"
            text="Chef It Up"
            src={ca}
            alt="Chef It Up"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>  Chef It Up is a cross platform recipe search based Mobile app that suggest dish to the user based on the ingredients user input; allows user to share post with image, ingredients and instructions to prepare certain dish and also get feedback from other users.
                        
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                            
                              C#
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             
                              Xamarin
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             Microsoft Azure
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              MS SQL
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
               
                <UrlButton
                  href="https://github.com/gurungalien2727/chefitup_app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://vimeo.com/503667080"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>



          {/* Project: Prevent Corona */}
          <ImageEvent
            date="19/07/2020"
            className="text-center"
            text="Prevent Corona"
            src={pc}
            alt="Prevent Corona"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Prevent Corona is a web application that allows  patients with COVID-19 symptoms to register about their health status and view the number of people with COVID-19 symptoms in the area within the application This application also has an interactive Chabot to answer the users’ queries about the virus.
                        <hr />
                       
    
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                            Express
                            </span>
                          </li>
                          <li>
                          <span className="p-2">
                            React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                           
                             MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                           
                             DialogFlow
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
             
                <UrlButton
                  href="https://github.com/gurungalien2727/vandyHack2020"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://devpost.com/software/prevent-corona"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div> 
            </div>
          </ImageEvent>

          {/* Project: Virtual Queue */}
<ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Virtual Queue"
            src={vq}
            alt="Virtual Queue"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Virtual Queue is an android application built to allocate the number to each customer upon entering the Geo-fence
around the store and to help customer keep shop safely by keeping them in a virtual queue and eventually reduce the COVID-19 transmission.
                        <hr />
                        
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                             
                              Android Studio
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             
                              Google Maps
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/gurungalien2727/hackShipIt"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://devpost.com/software/prevent-corona"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: Covid-19 Map */}
          <ImageEvent
            date="21/01/2020"
            className="text-center"
            text="Covid-19 Map"
            src={ma}
            alt="Covid Map Application"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Covid-19 Map is  a web application to show the impact of corona virus all over the world with the map and also shows the table that consists of the countries and their cases. 
    
                        
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                          
                          HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             
                             Javascript
                            </span>
                          </li>
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/gurungalien2727/COVID-19-MAP"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=hfO7AzF5x30&ab_channel=AlienGurung"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Ecommerce Website */}

          <ImageEvent
            date="14/01/2020"
            className="text-center"
            text="Ecommerce Website"
            src={ea}
            alt="Ecommerce Website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        Built an e-commerce web application where users could buy and sell products and also perform live search
for products; added a scripted bot for users to provide information about the products
                        
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                          <span className="p-2">
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             
                              Ajax
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             MySQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/gurungalien2727/e-commApp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=Jda1mqEz8PM&ab_channel=AlienGurung"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Platypus */}

          <ImageEvent
            date="15/12/2019"
            className="text-center"
            text="Platypus"
            src={pa}
            alt="Platypus"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        Platypus is an android app for Data Scientists thats helps in outsourcing the task of labeling to crowd-oriented environments. This android app helps in presenting training data in simple manner to help users identify, classify, or otherwise comment on images, text, objects, and other presented entities. Also an additional matrix that we built in was using Azures Cognitive vision API to extract the contents of an image and verify them to give a user metric to ensure quality of the labelled data set produced.

                        <hr />
                       
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                          <span className="p-2">
                              Android-Studio
                            </span>
                          </li>
                        
                          <li>
                            <span className="p-2">
                             Java
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                             SQLite
                            </span>
                          </li>
                        </ul>
                          
                          
                      
                     
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/gurungalien2727/HackGSU2019"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://devpost.com/software/platypus"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

         
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
