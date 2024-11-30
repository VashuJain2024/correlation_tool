function calculateCorrelation() {
    const dataX = document.getElementById("dataX").value.split(",").map(Number);
    const dataY = document.getElementById("dataY").value.split(",").map(Number);
    if (dataX.length !== dataY.length) {
        alert("Datasets must have the same length!");
        return;
    }

    const n = dataX.length;

    // Pearson Correlation
    const sumX = dataX.reduce((a, b) => a + b, 0);
    const sumY = dataY.reduce((a, b) => a + b, 0);
    const sumXY = dataX.reduce((sum, xi, i) => sum + xi * dataY[i], 0);
    const sumX2 = dataX.reduce((sum, xi) => sum + xi ** 2, 0);
    const sumY2 = dataY.reduce((sum, yi) => sum + yi ** 2, 0);

    const pearson =
        (n * sumXY - sumX * sumY) /
        Math.sqrt(
            (n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2)
        );

    // Spearman Rank Correlation
    const rank = (arr) =>
        arr
            .map((val, idx) => ({ val, idx }))
            .sort((a, b) => a.val - b.val)
            .map((item, rank) => ({ ...item, rank: rank + 1 }))
            .sort((a, b) => a.idx - b.idx)
            .map((item) => item.rank);

    const rankX = rank(dataX);
    const rankY = rank(dataY);

    const d2 = rankX.map((rx, i) => (rx - rankY[i]) ** 2).reduce((a, b) => a + b, 0);

    const spearman = 1 - (6 * d2) / (n * (n ** 2 - 1));

    // Update Insights
    document.getElementById("insights").innerHTML = `
<p><strong>Pearson Correlation:</strong> ${pearson.toFixed(3)}</p>
<p><strong>Spearman Rank Correlation:</strong> ${spearman.toFixed(3)}</p>
`;

    // Draw Scatter Plot
    drawScatterPlot(dataX, dataY);
}

function drawScatterPlot(dataX, dataY) {
    const canvas = document.getElementById("scatterPlot");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Scaling
    const maxX = Math.max(...dataX);
    const maxY = Math.max(...dataY);
    const scaleX = canvas.width / maxX;
    const scaleY = canvas.height / maxY;

    // Plot Points
    ctx.fillStyle = "blue";
    dataX.forEach((x, i) => {
        const y = dataY[i];
        ctx.beginPath();
        ctx.arc(x * scaleX, canvas.height - y * scaleY, 3, 0, 2 * Math.PI);
        ctx.fill();
    });
}