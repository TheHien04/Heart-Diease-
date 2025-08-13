d3.csv("../Preprocessing_project_heart_disease.csv").then(data => {
  data.forEach(d => d["Cholesterol Level"] = +d["Cholesterol Level"]);

  const avgData = d3.rollups(
    data,
    v => d3.mean(v, d => d["Cholesterol Level"]),
    d => d["Heart Disease Status"]
  ).map(([status, avg]) => ({ status, avg }));

  const width = 700, height = 400;
  const margin = { top: 40, right: 120, bottom: 60, left: 80 };

  const svg = d3.select("#cholesterol_bar")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const x = d3.scaleBand()
    .domain(avgData.map(d => d.status))
    .range([margin.left, width - margin.right])
    .padding(0.4);

  const y = d3.scaleLinear()
    .domain([0, d3.max(avgData, d => d.avg)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const tooltip = d3.select("#tooltip");

  svg.selectAll("rect")
    .data(avgData)
    .enter()
    .append("rect")
    .attr("x", d => x(d.status))
    .attr("y", d => y(d.avg))
    .attr("width", x.bandwidth())
    .attr("height", d => height - margin.bottom - y(d.avg))
    .attr("fill", d => d.status === "Yes" ? "steelblue" : "lightcoral")
    .on("mouseover", (event, d) => {
      tooltip.style("opacity", 1)
        .html(`
          <div style="text-align:center">
            <strong>Status:</strong> ${d.status}<br/>
            <strong>Average Cholesterol:</strong> ${d.avg.toFixed(1)} mg/dL
          </div>
        `)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 30) + "px");
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .append("text")
    .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
    .attr("y", 40)
    .attr("class", "axis-label")
    .attr("fill", "currentColor")
    .text("Heart Disease Status");

  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -50)
    .attr("class", "axis-label")
    .attr("fill", "currentColor")
    .text("Average Cholesterol Level");

  // Legend
  const legend = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width - margin.right + 10},${margin.top})`);

  const legendData = [
    { label: "Heart Disease: Yes", color: "steelblue" },
    { label: "Heart Disease: No", color: "lightcoral" }
  ];

  legend.selectAll("g")
    .data(legendData)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0, ${i * 20})`)
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
        .text(d.label);
    });
});
