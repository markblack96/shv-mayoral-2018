var width = 720;
var height = 640;

<<<<<<< HEAD
var candidates = {
    1: 'Adrian Perkins',
    2: 'Ollie Tyler',
    3: 'Jim Taliaferro',
    4: 'Lee Savage'
}

=======
>>>>>>> f0f5db44ba85a856b45865a7273fbb8340d41edb
var svg = d3.select("#svg-container")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

var g = svg.append("g");

<<<<<<< HEAD
var color = d3.scaleQuantile()
            .range(["#193ABE", "#80a0ff", "#FF0010", "#FF8080"])
            .domain([1,4]);

=======
>>>>>>> f0f5db44ba85a856b45865a7273fbb8340d41edb
var albersProjection = d3.geoAlbers()
    .scale(105000)
    .rotate([93.750,0])
    .center([0,32.450])
    .translate([width/2, height/2]);

var geoPath = d3.geoPath()
    .projection(albersProjection);

g.selectAll("path")
    .data(map_data.features) // have to make sure *.json is formatted right
    .enter()
    .append("path")
    .attr("fill", "#ccc")
    .attr( "stroke", "#333")
<<<<<<< HEAD
    .attr("d", geoPath)
    .style("fill", function(d) {
        return color(d.properties.Winner)
    });
=======
>>>>>>> f0f5db44ba85a856b45865a7273fbb8340d41edb
    .attr("d", geoPath);
