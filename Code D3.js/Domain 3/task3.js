const svg = d3.select("svg");
const tooltip = d3.select(".tooltip");

const margin = { top: 40, right: 200, bottom: 100, left: 60 };
const width = +svg.attr("width") - margin.left - margin.right;
const height = +svg.attr("height") - margin.top - margin.bottom;

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

const x0 = d3.scaleBand().padding(0.2).range([0, width]);
const x1 = d3.scaleBand().padding(0.05);
const y = d3.scaleLinear().range([height, 0]);

const color = d3.scaleOrdinal().domain(["Yes", "No"]).range(["steelblue", "lightcoral"]);
const keys = ["Yes", "No"];

let fullData = [];

d3.csv("../Preprocessing_project_heart_disease.csv").then(data => {
  // ✅ Chuẩn hóa dữ liệu Smoking
  data.forEach(d => {
    if (d.Smoking === "Smoker") d.Smoking = "Yes";
    else if (d.Smoking === "Non-Smoker") d.Smoking = "No";
  });

  // ✅ Lọc ra dữ liệu hợp lệ chỉ gồm "Yes" và "No"
  fullData = data.filter(d =>
    (d.Smoking === "Yes" || d.Smoking === "No") &&
    d["Heart Disease Status"] &&
    d.Gender
  );

  updateChart("All");
});

function updateChart(genderFilter) {
  g.selectAll("*").remove();

  const filtered = genderFilter === "All" ? fullData : fullData.filter(d => d.Gender === genderFilter);

  const grouped = d3.rollup(
    filtered,
    v => ({
      Yes: v.filter(d => d["Heart Disease Status"] === "Yes").length,
      No: v.filter(d => d["Heart Disease Status"] === "No").length
    }),
    d => d.Smoking
  );

  const currentData = Array.from(grouped, ([Smoking, counts]) => ({
    Smoking,
    ...counts,
    Total: counts.Yes + counts.No
  })).sort((a, b) => {
    const order = ["Yes", "No"];
    return order.indexOf(a.Smoking) - order.indexOf(b.Smoking);
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

  x0.domain(currentData.map(d => d.Smoking));
  x1.domain(keys).range([0, x0.bandwidth()]);
  y.domain([0, d3.max(currentData, d => Math.max(d.Yes, d.No))]).nice();

  // Gridlines
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).tickSize(-width).tickFormat("").ticks(10))
    .selectAll("line")
    .attr("stroke", "#ccc")
    .attr("stroke-dasharray", "2,2")
    .filter(d => d > 0);

  // X Axis
  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x0).tickFormat(d => d === "Yes" ? "Smoker" : "Non-Smoker"));

  // Y Axis
  g.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y));

  // Bars
  const barGroups = g.selectAll(".bar-group")
    .data(currentData)
    .enter()
    .append("g")
    .attr("class", "bar-group")
    .attr("transform", d => `translate(${x0(d.Smoking)},0)`);

  barGroups.selectAll("rect")
    .data(d => keys.map(key => ({ key, value: d[key], total: d.Total, smoking: d.Smoking })))
    .enter()
    .append("rect")
    .attr("x", d => x1(d.key))
    .attr("y", d => y(d.value))
    .attr("width", x1.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("fill", d => color(d.key))
    .on("mouseover", (event, d) => {
      const percent = ((d.value / d.total) * 100).toFixed(1);
      tooltip
        .style("opacity", 1)
        .html(`
          Smoking: ${d.smoking}<br/>
          Heart Disease: ${d.key}<br/>
          Count: ${d.value}<br/>
          Rate: ${percent}%
        `)
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY - 20}px`);

      d3.select(event.currentTarget).attr("fill-opacity", 1);
      g.selectAll("rect").filter(e => e !== d).attr("fill-opacity", 0.3);
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
      g.selectAll("rect").attr("fill-opacity", 1);
    });

  // Legend
  const legend = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width + margin.left + 10},${margin.top})`);

  const legendData = [
    { label: "Heart Disease: Yes", color: "steelblue" },
    { label: "Heart Disease: No", color: "lightcoral" }
  ];

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

// Filter dropdown event
d3.select("#gender-filter").on("change", function () {
  const selected = d3.select(this).property("value");
  updateChart(selected);
});
