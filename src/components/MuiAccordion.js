import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function MuiAccordion() {
  return (
    <div>
      
      <Accordion>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
          <Typography>Channels</Typography>
          </AccordionSummary> 
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Quidem nulla, nam blanditiis omnis assumenda architecto accusamus
              modi rerum distinctio culpa quis officia molestiae sint vitae ea
               cumque facilis dolore animi.
               </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  )
}

export default MuiAccordion