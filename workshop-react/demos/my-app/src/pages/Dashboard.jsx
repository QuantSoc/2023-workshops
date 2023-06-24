import { Box, Button, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const fakeJobs = [
  {
    company: 'Mayer - Kreiger',
    position: 'Tools',
    startDate: 'June',
    wage: '994.85',
  },
  {
    company: 'Green Group',
    position: 'Books',
    startDate: 'January',
    wage: '169.80',
  },
  {
    company: 'Gislason, Roberts and Brown',
    position: 'Garden',
    startDate: 'January',
    wage: '959.04',
  },
  {
    company: 'Watsica, McKenzie and Cole',
    position: 'Jewelery',
    startDate: 'January',
    wage: '233.89',
  },
  {
    company: 'Grimes Group',
    position: 'Music',
    startDate: 'February',
    wage: '795.79',
  },
];

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const apiData = fetch('http://localhost:5000/jobs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });

    // setJobs(apiData.jobs);
    setJobs(fakeJobs);
  }, []);

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <Grid
        container
        columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        spacing={3}
        sx={{ p: 5 }}
      >
        {jobs.map((job, index) => (
          <Grid
            item={true}
            xs={2}
            sm={4}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <JobCard
              key={'card' + index}
              // company={job.company}
              // position={job.position}
              // startDate={job.startDate}
              // wage={job.wage}
              {...job}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Dashboard;
