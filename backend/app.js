const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./server'); 
const hallRoutes = require('./routes/hallRoutes');
const courseRoutes = require('./routes/courseRoutes');
const timeSlotRoutes = require('./routes/timeSlotRoutes');

const app = express();
const port = 5000;


connectDB()

  app.use(bodyParser.json());
  app.use(cors());

 
  app.use('/halls', hallRoutes);
  app.use('/courses', courseRoutes);
  app.use('/timeslots', timeSlotRoutes);

 
  app.listen(port, () => {
    console.log("The API is running on port", port);
  });

