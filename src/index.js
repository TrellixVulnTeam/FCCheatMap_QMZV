import * as d3 from "d3";
import * as styles from "../styles/index.css";

let app = () => {
	const chart = d3.select("body").append("svg").attr("id", "chart");
	//const legendContainer = chart.append("g").attr("id", "legend");
	const url =
		"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
	const getData = async () => {
		const data = await d3.json(url);
		console.log(data);
		renderChart(data);
	};

	const renderChart = (data) => {
		const areaWidth = window.innerWidth;
		const areaHeight = window.innerHeight;
		const areaPadding = areaHeight * 0.1;
		chart.attr("width", areaWidth).attr("height", areaHeight);
		chart
			.append("text")
			.text("Monthly Global Land-Surface Temperature")
			.attr("x", areaWidth / 2)
			.attr("y", areaPadding + 20)
			.attr("id", "title")
			.attr("text-anchor", "middle")
			.style("fill", "#006fbe");
		chart
			.append("text")
			.attr("x", areaWidth / 2)
			.attr("y", areaPadding + 20)
			.attr("text-anchor", "middle")
			.attr("dy", "1.5em") // you can vary how far apart it shows up
			.html(
				data.monthlyVariance[0].year +
					" -" +
					data.monthlyVariance[data.monthlyVariance.length - 1].year +
					" base temperature: " + data.baseTemperature+'&#8451;'
			)
			.style("fill", "#006fbe");
		/*const parseTime = d3.timeParse("%M:%S");
		const color = d3.scaleOrdinal(d3.schemeCategory10);
		
		
		const tooltip = d3
			.select("body")
			.append("div")
			.attr("id", "tooltip")
			.style("opacity", 0);
		const formatTime = d3.timeFormat("%M:%S");

		

		const x = d3
			.scaleLinear()
			.domain([
				d3.min(data.map((d) => d.Year)) - 1,
				d3.max(data.map((d) => d.Year)) + 1,
			])
			.rangeRound([areaPadding, areaWidth - areaPadding]);
		const y = d3
			.scaleLinear()
			.domain([
				d3.min(data.map((d) => parseTime(d.Time))),
				d3.max(data.map((d) => parseTime(d.Time))),
			])
			.range([areaPadding, areaHeight - areaPadding]);
		const xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));
		const yAxis = d3.axisLeft(y).tickFormat(formatTime);
		chart
			.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (areaHeight - areaPadding) + ")")
			.attr("id", "x-axis")
			.call(xAxis);
		chart
			.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + areaPadding + ",0)")
			.attr("id", "y-axis")
			.call(yAxis);
		
			
		
		chart
			.selectAll("dot")
			.data(data)
			.enter()
			.append("circle")
			.attr("class", "dot")
			.attr("cx", (d) => x(d.Year))
			.attr("cy", (d) => y(parseTime(d.Time)))
			.attr("data-xvalue", (d) => d.Year)
			.attr("data-yvalue", (d) => parseTime(d.Time).toISOString())
			.style("fill", (d) => color(d.Doping != ""))
			.attr("r", 6)
			.on("mouseover", (d, i) => {
				tooltip.transition().duration(200).style("opacity", 1);
				tooltip
					.html(i.Name + "<br/>" + i.Nationality)
					.style("left", event.pageX - 25 + "px")
					.style("top", event.pageY - 45 + "px")
					.attr("data-year", i.Year);
			})
			.on("mouseout", function (d) {
				tooltip.transition().duration(500).style("opacity", 0);
			});

		pulse();

		function pulse() {
			var circles = chart.selectAll("circle");
			(function repeat() {
				circles = circles
					.transition()
					.duration(2000)
					.attr("r", 13)
					.transition()
					.duration(2000)
					.attr("r", 6)
					.on("end", repeat);
			})();
		}
		const legend = legendContainer
			.selectAll("#legend")
			.data(color.domain())
			.enter()
			.append("g")
			.attr("class", "legend-label")
			.attr("transform", function (d, i) {
				return "translate(0," + (areaHeight / 2 - i * 20) + ")";
			});
		legend
			.append("rect")
			.attr("x", areaWidth - areaPadding - 25)
			.attr("width", 18)
			.attr("height", 18)
			.style("fill", color);

		legend
			.append("text")
			.attr("x", areaWidth - areaPadding - 28)
			.attr("y", 9)
			.attr("dy", ".35em")
			.style("text-anchor", "end")
			.text(function (d) {
				if (d) {
					return "Riders with doping allegations";
				} else {
					return "No doping allegations";
				}
			})
			.style("fill", "#163d57");*/
	};

	return getData();
};

// добавляем заголовок в DOM
const root = document.querySelector("#root");
root.appendChild(app());
