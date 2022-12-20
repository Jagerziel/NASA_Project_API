# NASA Projects API

## Description

The NASA Projects API allows you to dynamically search current/prior missions undertaken by NASA detailing the mission description, planets visited, and the mission dates/duration.

The API is sourced from https://api.nasa.gov/


## Endpoints

1) Root Path:  http://localhost:4000/**api/**
2) Projects: http://localhost:4000/api/**projects/**
3) Projects by ID: http://localhost:4000/api/projects/**11643/**


## Technical Notes

### Data

Data is produced by project IDs which contain a project object containing all the relevent data.  The data pulled using item 1 to produce a cleaner version of item 2
1) Project ID
2) Project Details

*Note: Data is limited to the first 100 entries for this project*

### Dependencies

- cors
- dotenv
- express
- node-fetch
- nodemon
- morgan
- mongoose
