const svg = d3.select("svg"),
      margin = { top: 60, right: 60, bottom: 60, left: 60 },
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
const tooltip = d3.select(".tooltip");

const radius = Math.min(width / 3.5, height) / 2;
const color = d3.scaleOrdinal().domain(["Yes", "No"]).range(["#4A89C7","#E88284"]);
const keys = ["Yes", "No"];

const pie = d3.pie().sort(null).value(d => d.value);
const arc = d3.arc().innerRadius(0).outerRadius(radius - 10);
const labelArc = d3.arc().innerRadius(radius - 50).outerRadius(radius - 50);

d3.csv("../Preprocessing_project_heart_disease.csv").then(data => {
  const grouped = d3.rollup(
    data.filter(d => d["Family Heart Disease"] === "Yes" || d["Family Heart Disease"] === "No"),
    v => {
      const yes = v.filter(d => d["Heart Disease Status"] === "Yes").length;
      const no = v.filter(d => d["Heart Disease Status"] === "No").length;
      const total = yes + no;
      return {
        Yes: total > 0 ? (yes / total * 100) : 0,
        No: total > 0 ? (no / total * 100) : 0,
        YesCount: yes,
        NoCount: no
      };
    },
    d => d["Family Heart Disease"]
  );

  const dataset = Array.from(grouped, ([label, d]) => ({ label, ...d }));
  drawChart(dataset);
});

function drawChart(data) {
  const positions = [
    { x: width / 4, y: height / 2, label: "Yes" },
    { x: (3 * width) / 4, y: height / 2, label: "No" }
  ];

  // Title
  svg.append("text")
    .attr("x", +svg.attr("width") / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .style("font-weight", "bold")
    .text("Family History vs Heart Disease");

  // Draw pies
  positions.forEach(pos => {
    const item = data.find(d => d.label === pos.label);
    if (!item) return;

    const pieData = pie(keys.map(key => ({
      key,
      value: item[key],
      count: item[key + "Count"]
    })));

    const pieGroup = g.append("g")
      .attr("transform", `translate(${pos.x},${pos.y})`);

    pieGroup.selectAll(".arc")
      .data(pieData)
      .enter()
      .append("path")
      .attr("class", "arc")
      .attr("d", arc)
      .attr("fill", d => color(d.data.key))
      .on("mouseover", (event, d) => {
        tooltip.style("opacity", 1)
          .html(`
            <strong>Family History:</strong> ${pos.label}<br/>
            <strong>Heart Disease:</strong> ${d.data.key}<br/>
            <strong>Count:</strong> ${d.data.count}<br/>
            <strong>Rate:</strong> ${d.data.value.toFixed(1)}%
          `)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));

    // Labels
    pieGroup.selectAll("text")
      .data(pieData)
      .enter()
      .append("text")
      .attr("transform", d => `translate(${labelArc.centroid(d)})`)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(d => `${d.data.value.toFixed(1)}%`)
      .attr("fill", d => d.data.key === "No" ? "white" : "black")
      .style("font-size", "13px");

    // Sub-label
    pieGroup.append("text")
      .attr("y", radius + 25)
      .attr("text-anchor", "middle")
      .style("font-size", "15px")
      .style("font-weight", "bold")
      .text(pos.label);
  });

  // Legend
  const legend = svg.append("g")
    .attr("transform", `translate(${20},${margin.top})`);

  const legendData = [
    { label: "Heart Disease: Yes", color: "#4A89C7" },
    { label: "Heart Disease: No", color: "#E88284"}
  ];

  legend.selectAll("g")
    .data(legendData)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0,${i * 25})`)
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
        .text(d.label)
        .style("font-size", "13px");
    });
}
