const svg = d3.select("svg"),
      margin = { top: 40, right: 200, bottom: 100, left: 60 },
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
const tooltip = d3.select(".tooltip");

let fullData = [];
let currentData = [];

const x = d3.scaleBand().padding(0.4).range([0, width]);
const y = d3.scaleLinear().range([height, 0]);
const color = d3.scaleOrdinal().domain(["Yes", "No"]).range(["steelblue", "lightcoral"]);
const keys = ["Yes", "No"];

d3.csv("../Preprocessing_project_heart_disease.csv").then(data => {
  fullData = data.filter(d => 
    ["High", "Medium", "Low"].includes(d["Exercise Habits"]) &&
    d["Heart Disease Status"] &&
    d["Gender"]
  );

  updateChart("All");

  // Add filter listener
  document.getElementById("genderFilter").addEventListener("change", function () {
    const selectedGender = this.value;
    updateChart(selectedGender);
  });
});

function updateChart(selectedGender) {
  g.selectAll("*").remove();

  const filtered = selectedGender === "All"
    ? fullData
    : fullData.filter(d => d["Gender"] === selectedGender);

  const grouped = d3.rollup(
    filtered,
    v => ({
      Yes: v.filter(d => d["Heart Disease Status"] === "Yes").length,
      No: v.filter(d => d["Heart Disease Status"] === "No").length
    }),
    d => d["Exercise Habits"]
  );

  currentData = Array.from(grouped, ([exercise, counts]) => ({
    Exercise: exercise,
    ...counts,
    Total: counts.Yes + counts.No
  })).sort((a, b) => {
    const order = ["High", "Medium", "Low"];
    return order.indexOf(a.Exercise) - order.indexOf(b.Exercise);
  });

  if (currentData.length === 0 || currentData.every(d => d.Total === 0)) {
    g.append("text")
      .attr("x", width / 2)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("No data available for the selected filter.");
    return;
  }

  drawChart();
}

function drawChart() {
  x.domain(currentData.map(d => d.Exercise));
  y.domain([0, d3.max(currentData, d => d.Total)]).nice();

  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).tickSize(-width).tickFormat("").ticks(10))
    .selectAll("line")
    .attr("stroke", "#ccc")
    .attr("stroke-dasharray", "2,2");

  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d => d))
    .selectAll("text")
    .style("font-size", "12px");

  g.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y).ticks(5))
    .selectAll("text")
    .style("font-size", "12px");

  const stack = d3.stack().keys(keys)(currentData);

  g.selectAll(".serie")
    .data(stack)
    .enter()
    .append("g")
    .attr("fill", d => color(d.key))
    .selectAll("rect")
    .data(d => d)
    .enter()
    .append("rect")
    .attr("x", d => x(d.data.Exercise) + x.bandwidth() * 0.25)
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth() * 0.5)
    .on("mouseover", function(event, d) {
      const key = d3.select(this.parentNode).datum().key;
      const count = d[1] - d[0];
      const percent = d.data.Total ? ((count / d.data.Total) * 100).toFixed(1) : 0;
      const labelMap = { High: "High", Medium: "Medium", Low: "Low" };

      tooltip
        .style("opacity", 1)
        .html(`
          <strong>Exercise Habit:</strong> ${labelMap[d.data.Exercise]}<br/>
          <strong>Heart Disease:</strong> ${key}<br/>
          <strong>Count:</strong> ${count}<br/>
          <strong>Rate:</strong> ${percent}%
        `)
        .style("left", `${event.pageX}px`)
        .style("top", `${event.pageY - 30}px`);

      d3.select(this).attr("fill-opacity", 1);
      g.selectAll("rect").filter(e => e !== d).attr("fill-opacity", 0.3);
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
      g.selectAll("rect").attr("fill-opacity", 1);
    });

  // Tooltip hide on leave
  tooltip.on("mouseleave", () => {
    g.selectAll("rect").attr("fill-opacity", 1);
    tooltip.style("opacity", 0);
  });

  // Chart title (centered)
  svg.selectAll(".chart-title").remove();
  svg.append("text")
    .attr("class", "chart-title")
    .attr("x", width / 2 + margin.left)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")


  // Legend
  const legendData = [
    { label: "Heart Disease: Yes", color: "steelblue" },
    { label: "Heart Disease: No", color: "lightcoral" }
  ];

  svg.selectAll(".legend").remove();
  const legend = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width + margin.left + 10},${margin.top})`);

  legend.selectAll(".legend-item")
    .data(legendData)
    .enter()
    .append("g")
    .attr("class", "legend-item")
    .attr("transform", (d, i) => `translate(0, ${i * 25})`)
    .each(function(d) {
      d3.select(this)
        .append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", d.color);
      d3.select(this)
        .append("text")
        .attr("x", 20)
        .attr("y", 12)
        .style("font-size", "12px")
        .text(d.label);
    });
}
