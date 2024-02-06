import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import JavascriptTwoToneIcon from "@mui/icons-material/JavascriptTwoTone";
import Typography from "@mui/material/Typography";

export default function Work() {
  return (
    <div id="Work" style={{marginTop:'5%'}}>
      <Typography variant="h4" component="div" gutterBottom>
        Work
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Student at CalState
            </Typography>
            <Typography>Major - Information System</Typography>
            <Typography>GDSC Tech Lead</Typography>
            <Typography>Codepath Student</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2021 - 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Project Manager
            </Typography>
            <Typography>Tata Consultancy Services</Typography>
            <Typography>Managed 17-member team</Typography>
            <Typography>Architected front-end</Typography>
            <Typography>Agile methodology collaboration</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2020 - 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <CodeTwoToneIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Software Engineer
            </Typography>
            <Typography>Tata Consultancy Services</Typography>
            <Typography>NGP Tool Proficiency</Typography>
            <Typography>Code Optimization 80%</Typography>
            <Typography>React App Development</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="left"
            variant="body2"
            color="text.secondary"
          >
            2018 - 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <JavascriptTwoToneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              System Engineer
            </Typography>
            <Typography>Tata Consultancy Services</Typography>
            <Typography>Modularized Email Campaigns</Typography>
            <Typography>Compatibility Testing Litmus</Typography>
            <Typography>Mobile-Ready Web Apps</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
