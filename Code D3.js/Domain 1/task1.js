d3.csv("../Preprocessing_project_heart_disease.csv").then(data => {
    console.log("CSV loaded for domain1, data length:", data.length);

    const ageBins = [16, 24, 32, 40, 48, 56, 64, 72, 80];
    const ageLabels = ["<16", "16-24", "24-32", "32-40", "40-48", "48-56", "56-64", "64-72", "72-80", ">80"];

    const getAgeGroup = (age) => {
        if (age < 16) return "<16";
        if (age >= 80) return ">80";
        for (let i = 0; i < ageBins.length - 1; i++) {
            if (age >= ageBins[i] && age < ageBins[i + 1]) {
                return `${ageBins[i]}-${ageBins[i + 1]}`;
            }
        }
        return ">80";
    };

    data.forEach(d => {
        d.Age = +d.Age;
        d["Heart Disease Status"] = d["Heart Disease Status"].trim();
        d.AgeGroup = getAgeGroup(d.Age);
    });

    function renderChart(statusFilter) {
        let filteredData = data;
        if (statusFilter !== "All") {
            filteredData = data.filter(d => d["Heart Disease Status"] === statusFilter);
        }

        const groupedData = d3.rollup(
            filteredData,
            v => v.length,
            d => d.AgeGroup,
            d => d["Heart Disease Status"]
        );

        const processedData = [];
        ageLabels.forEach(ageGroup => {
            const statusMap = groupedData.get(ageGroup) || new Map();
            processedData.push({
                ageGroup,
                Yes: statusMap.get("Yes") || 0,
                No: statusMap.get("No") || 0
            });
        });

        const width = 800;
        const height = 500;
        const margin = {top: 30, right: 150, bottom: 80, left: 140};

        d3.select("#bar_chart").select("svg").remove();

        const svg = d3.select("#bar_chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "bar_chart-container");

        const x = d3.scaleBand()
            .domain(ageLabels)
            .range([margin.left, width - margin.right])
            .paddingInner(0.1)
            .paddingOuter(0.05);

        const y = d3.scaleLinear()
            .domain([0, d3.max(processedData, d => Math.max(d.Yes, d.No))])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const tooltip = d3.select(".tooltip-bar_chart");
        if (tooltip.empty()) {
            d3.select("body")
                .append("div")
                .attr("class", "tooltip-bar_chart")
                .style("opacity", 0)
                .style("position", "absolute")
                .style("background", "lightgray")
                .style("padding", "5px")
                .style("border-radius", "5px");
        }

        // Bars Yes
        svg.selectAll(".bar-yes")
            .data(processedData)
            .enter()
            .append("rect")
            .attr("class", "bar bar-yes")
            .attr("x", d => x(d.ageGroup))
            .attr("y", d => y(d.Yes))
            .attr("width", x.bandwidth() / 2)
            .attr("height", d => height - margin.bottom - y(d.Yes))
            .attr("fill", "steelblue")
            .on("mouseover", function(event, d) {
                d3.select(this).attr("opacity", 0.8);
                d3.select(".tooltip-bar_chart").transition().duration(200).style("opacity", 0.9);
                d3.select(".tooltip-bar_chart")
                    .html(`Age Group: ${d.ageGroup}<br>Status: Yes<br>Count: ${d.Yes}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 10) + "px");
            })
            .on("mouseout", function() {
                d3.select(this).attr("opacity", 1);
                d3.select(".tooltip-bar_chart").transition().duration(500).style("opacity", 0);
            });

        // Bars No
        svg.selectAll(".bar-no")
            .data(processedData)
            .enter()
            .append("rect")
            .attr("class", "bar bar-no")
            .attr("x", d => x(d.ageGroup) + x.bandwidth() / 2)
            .attr("y", d => y(d.No))
            .attr("width", x.bandwidth() / 2)
            .attr("height", d => height - margin.bottom - y(d.No))
            .attr("fill", "lightcoral")
            .on("mouseover", function(event, d) {
                d3.select(this).attr("opacity", 0.8);
                d3.select(".tooltip-bar_chart").transition().duration(200).style("opacity", 0.9);
                d3.select(".tooltip-bar_chart")
                    .html(`Age Group: ${d.ageGroup}<br>Status: No<br>Count: ${d.No}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 10) + "px");
            })
            .on("mouseout", function() {
                d3.select(this).attr("opacity", 1);
                d3.select(".tooltip-bar_chart").transition().duration(500).style("opacity", 0);
            });

        // Axis X
        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("font-size", "12px")
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end")
            .attr("dx", "-0.8em")
            .attr("dy", "0.15em");

        // Axis Y
        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Labels
        svg.append("text")
            .attr("class", "axis-label x-label")
            .attr("x", width / 2)
            .attr("y", height - 10)
            .text("Age Group");

        svg.append("text")
            .attr("class", "axis-label y-label")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2)
            .attr("y", margin.left - 40)
            .text("Number of Patients");

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .text("Distribution of Heart Disease Status Across Age Groups");

        // Legend
        const legend = svg.append("g")
            .attr("class", "legend")
            .attr("transform", `translate(${width - margin.right - 10}, ${margin.top})`);

        legend.append("rect").attr("x", 0).attr("y", 0).attr("width", 15).attr("height", 15).attr("fill", "steelblue");
        legend.append("text").attr("x", 20).attr("y", 12).text("Heart Disease: Yes");

        legend.append("rect").attr("x", 0).attr("y", 20).attr("width", 15).attr("height", 15).attr("fill", "lightcoral");
        legend.append("text").attr("x", 20).attr("y", 32).text("Heart Disease: No");
    }

    // Initial render
    renderChart("All");

    // Dropdown change
    d3.select("#statusFilter").on("change", function () {
        const selected = d3.select(this).property("value");
        renderChart(selected);
    });
}).catch(error => {
    console.error("Error loading CSV in domain1.js:", error);
});
