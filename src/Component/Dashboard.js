import * as React from 'react';
import TaskDashboard from './TaskDashboard';
import Myprofile from './Myprofile';
import SavedPosts from './SavedPosts';
import MyFeed from './MyFeed';
import Feed from './Feed';
import TaskManagement from './TaskManagement';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="boxcontents mx-auto"
      style={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, marginTop:"70px"}}
    >
      <Tabs
     className="Tabfixing mx-auto"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', background:"pink", color:"white", overflow:"visible"}}
        
      >
       <Tab label="MY PROFILE" {...a11yProps(0)} />
        <Tab label="FEED" {...a11yProps(1)} />
        <Tab label="MY FEED" {...a11yProps(2)} />
        <Tab label="SAVED POSTS" {...a11yProps(3)} />
        <Tab label="TASK DASHBOARD" {...a11yProps(4)} />
        <Tab label="TASK MANAGEMENT" {...a11yProps(5)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
   <Myprofile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Feed/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <MyFeed/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <SavedPosts/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TaskDashboard/>
      </TabPanel>
      <TabPanel value={value} index={5}>
       <TaskManagement/>
      </TabPanel>
    </Box>
  );
}
