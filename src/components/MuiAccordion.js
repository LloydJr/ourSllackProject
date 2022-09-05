import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function MuiAccordion() {
  return (
    <div>
      
      <Accordion>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />} >
          <Typography>Fitru Fitru</Typography>
          </AccordionSummary> 
        <AccordionDetails>
          <Typography>
          B.A. in Biological Sciences from the University of Delaware, a former lab technician at TJH2B analytical services.
           Working with a Data Engineering classmate constructing an Outdoor Rock-Climbing Site Guide selection tool to help
            rock climbing enthusiasts choose their ideal site based on criteria selection using Java, Spring Boot, SQL, React
             and Javascript. Experience working with Java, SQL, Spring Boot, React, RESTful API, Javascript and Agile methodology.
              Proficient in Amharic and basic German.
               </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
          <Typography>Lloyd Jusayan Perez Jr.</Typography>
          </AccordionSummary> 
        <AccordionDetails>
          <Typography>
          Former shift manager at Walgreens who was overseeing all aspects of store operations, including customer service,
           merchandising, and staying organized. Grew up playing the trading card game,
            "Yugioh" and is currently working on creating a card directory web application inspired by it.
             The application is a directory that uses a database of Yugioh cards that can be searched in various orders by using Java, React,
              MySQL, and Spring Boot.
               </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
          <Typography>Dejen Ghebrat</Typography>
          </AccordionSummary> 
        <AccordionDetails>
          <Typography>
          B.S. in Internet Network Design and Technology from Wilmington University.
           Over 10 years experience in Internet Technology.
            Most recently worked as Technology Support Group lead technician at UPS for the entire state of Delaware.
             Also holds A+ and Network+ CompTIA certificates.
              Working on a Casino application with team of 4.
               Personally responsible for Black Jack development using Java.
                Users were able to select game and bet funds, choose options to play or stay and double down.
                 Currently working in team of 4 on a full-stack messaging program similar to Slack.
                  Personally responsible for backend API using Java and Spring Boot.
                   Users will be able to send and receive messages in different rooms and to each other via direct messaging.
                    Has experience with Java, SQL, Maven, Javascript, Agile, IntelliJ, and Git.
                     Currently developing React skills
               </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
          <Typography>Tenae Barker</Typography>
          </AccordionSummary> 
        <AccordionDetails>
          <Typography>
          104 of 120 credits (3.5 years) coursework in Pre Med Biology with a Minor in Chemistry.
           Previous experience in research and experimental design.
            Gathered and interpreted data on the Effects of Artificial Light at Night on the Circadian Rhythm of Eastern Red-Backed Salamander.
             Exposure to Python, R programming. Coursework in IBM SPSS.
              Currently collaborating with a partner on a social media app focused on connecting book lovers utilizing Java, Spring, Spring Boot,
               SQL, MySQL, REST API, JavaScript, React, BootStrap, HTML, Git.
                Features include an online book club, shared pictures, posts and book reviews. Proficient in JAVA; familiar with JavaScript and SQL.
               </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  )
}

export default MuiAccordion