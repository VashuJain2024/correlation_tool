# Interactive Correlation Tool 📊

The **Interactive Correlation Tool** is a user-friendly web application built using **HTML**, **CSS**, and **JavaScript**. It enables users to input two datasets, calculate their correlation coefficient, and visualize the relationship using a scatter plot.

---

## Features ✨

- **Interactive Input**:
  - Users can input two datasets as comma-separated values.
- **Correlation Calculation**:
  - Computes the Pearson correlation coefficient between the datasets.
- **Data Visualization**:
  - Displays a scatter plot of the input datasets for better understanding of their relationship.
- **Insights**:
  - Provides actionable insights based on the calculated correlation.

---

## How It Works 🔍

1. **User Input**:
   - Users enter two datasets in the provided text areas (`Dataset X` and `Dataset Y`).
2. **Correlation Calculation**:
   - The `calculateCorrelation()` function computes the correlation coefficient using:
     \[
     r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \sum (y - \bar{y})^2}}
     \]
3. **Scatter Plot**:
   - A scatter plot is generated using the provided data to visualize the relationship.
4. **Insights**:
   - Based on the correlation coefficient, insights about the data relationship (e.g., strong positive, weak negative) are displayed.

---

## Installation and Setup 🚀

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/VashuJain2024/correlation_tool.git
   cd correlation_tool

---

## Output
![Screenshot 2025-01-02 211054](https://github.com/user-attachments/assets/b9d126ca-ee60-4668-a1cd-031ea90096f8)
