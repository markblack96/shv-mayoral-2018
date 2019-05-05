This project uses QGIS, d3.js, GeoJSON, and public election data to display voting districts and results for the 2018 mayoral election.

### Methods:

#### 1. Gathering data

The latest voting district map for the state of Louisiana was found in the form of a shape file and imported into QGIS. Election results by voting district were also found, imported into QGIS, and then joined to the districts shape file.

The election results file required some cleaning. There were several precincts which needed to be merged into single precincts. Following these operations, a full map of the election results can be generated in QGIS.

The precincts that required merging were precincts 00 005A and 00 005B; 00 090A and 00 090B; and 00 091A and 00 091B.

#### 2. Converting data to appropriate forms

Because we want to display the data with d3.js, the data must be converted into a form that can be read by the library. One form d3.js can take is GeoJSON data. The conversion process for this is simple enough. We simply navigate to the directory containing the .shp file to be converted and run ogr2ogr.

ogr2ogr filename.shp converted_file.json

#### 3. Displaying a Choropleth map with d3.js

Now that we have our data, we can pass it into a javascript file and use d3.js to display it.
