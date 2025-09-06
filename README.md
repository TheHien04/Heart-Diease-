# 🫀 Heart Disease Data Analytics Dashboard

![Background](Image/Background.jpg)

## 1. Introduction
Heart disease remains the **leading cause of death worldwide**, responsible for nearly one-third of all global fatalities.  
Understanding **patterns, risk factors, and prevention strategies** can significantly improve patient outcomes and inform healthcare policy.

This project develops an **interactive D3.js dashboard** analyzing 8 domains related to heart disease, using data visualization to uncover patterns and correlations.

---

## 2. Types of Heart Disease
![Types of Heart Disease](Image/Type%20of%20Heart%20Disease.png)

**Common types include:**
- **Coronary Artery Disease (CAD)**
- **Heart Failure**
- **Arrhythmia**
- **Valve Disease**
- **Cardiomyopathy**

---

## 3. Spotlight on Heart Failure
![Heart Failure](Image/Heart%20failure.jpg)  

Heart failure occurs when the heart muscle is unable to pump blood effectively.  

**Causes:** Coronary artery disease, hypertension, diabetes.  
**Symptoms:** Shortness of breath, fatigue, swelling.

---

## 4. Dataset Attributes
Our dataset contains **10 attributes**, categorized as follows:

| Category           | Attribute               | Example Image |
|--------------------|-------------------------|---------------|
| **Demographics**   | Age, Gender              | — |
| **Lifestyle**      | Exercise Habits          | — |
|                    | Smoking                  | ![Smoking](Image/Smoking%20World.png) |
|                    | Alcohol Consumption      | ![Alcohol Consumption](Image/Alcohol%20Consumption.png) |
| **Clinical**       | Cholesterol Level        | ![Cholesterol](Image/Cholesterrol%20Level.png) |
|                    | Blood Pressure           | ![Blood Pressure](Image/Blood%20Pressure.jpg) |
|                    | BMI                      | ![BMI](Image/Body%20max%20index.png) |
|                    | Family Heart Disease     | — |
|                    | Stress Level             | ![Stress](Image/Stress.jpg) |

---

## 5. Domain-by-Domain Analysis

### **Domain 1 – Age vs Heart Disease**
- **Goal:** Identify correlation between age groups and heart disease prevalence.
- **Key Insight:** Prevalence increases significantly after age 50, reflecting biological aging and accumulated lifestyle/clinical risk.
- **Dashboard:**  
![Domain 1](Image/Domain%201.png)  

---

### **Domain 2 – Gender vs Heart Disease**
- **Goal:** Compare disease rates between male and female.
- **Key Insight:** Males show slightly higher prevalence. This aligns with medical literature, where men often develop heart disease at earlier ages due to hormonal and lifestyle differences.
- **Dashboard:**  
![Domain 2](Image/Domain%202.png)  

---

### **Domain 3 – Blood Pressure vs Heart Disease**
- **Goal:** Assess how blood pressure impacts disease likelihood.
- **Key Insight:** Hypertension (high BP) is strongly associated with higher heart disease incidence. Elevated BP damages arterial walls over time, increasing cardiac stress.
- **Dashboard:**  
![Domain 3](Image/Domain%203.png)  

---

### **Domain 4 – Exercise Habits**
- **Goal:** Analyze the protective effect of regular exercise.
- **Key Insight:** Higher exercise frequency correlates with lower prevalence. Exercise improves circulation, lowers BP, and reduces cholesterol, mitigating disease risk.
- **Dashboard:**  
![Domain 4](Image/Domain%204.png)  

---

### **Domain 5 – Average Cholesterol Level**
- **Goal:** Compare cholesterol levels between healthy and diseased groups.
- **Key Insight:** Patients with heart disease exhibit **higher average cholesterol**, confirming hyperlipidemia as a critical risk factor.
- **Dashboard:**  
![Domain 5](Image/Domain%205.png)  

---

### **Domain 6 – Smoking**
- **Goal:** Evaluate smoking as a risk factor.
- **Key Insight:** Smokers have a **notably higher risk**. Smoking accelerates atherosclerosis, lowers oxygen supply, and damages vessel lining.
- **Dashboard:**  
![Domain 6](Image/Domain%206.png)  

---

### **Domain 7 – Alcohol Consumption**
- **Goal:** Assess the relationship between alcohol intake and disease.
- **Key Insight:** Excessive alcohol correlates with increased prevalence. While moderate intake may be neutral, chronic consumption elevates BP and cholesterol.
- **Dashboard:**  
![Domain 7](Image/Domain%207.png)  

---

### **Domain 8 – Cholesterol Distribution by Gender**
- **Goal:** Identify gender-based differences in cholesterol distribution.
- **Key Insight:** Males show slightly higher cholesterol variation. This aligns with risk profiles where men are more prone to early onset cardiovascular issues.
- **Dashboard:**  
![Domain 8](Image/Domain%208.png)  

---

## 6. Overall Dashboard Overview
### Light Mode
![Light Mode Dashboard](Report/Dashboard%20overview%20light.png)

### Dark Mode
![Dark Mode Dashboard](Report/Dashboard%20overview%20dark.png)

---

## 7. Conclusion & Recommendations
- **Lifestyle factors** (smoking, alcohol, inactivity) substantially elevate heart disease risk → target public health campaigns here.  
- **Clinical markers** (blood pressure, cholesterol, BMI) remain critical for **early detection & monitoring**.  
- **Demographic patterns** (age, gender) highlight vulnerable groups for screening and intervention.  
- Data-driven dashboards like this can help **health policymakers and practitioners** allocate resources effectively, focusing on **preventive measures** and **high-risk cohorts**.  

---
## 8. Data Analytics Pipeline

The project follows a structured pipeline that reflects a **real-world data analytics workflow**:

1. **Data Collection & Preprocessing**  
   - Patient health data with 10 attributes.  
   - Cleaned, normalized, and structured for analysis.  

2. **Exploratory Data Analysis (EDA)**  
   - Visualized relationships across demographics, lifestyle, and clinical attributes.  
   - Identified key risk factors such as **age, blood pressure, cholesterol, and smoking**.  

3. **Interactive Dashboard (D3.js)**  
   - Built custom visualizations for **8 analytical domains**.  
   - Enabled **light/dark mode** and **filters** for user interactivity.  

4. **Statistical Insights**  
   - Generated data-driven findings to support **healthcare decisions**.  
   - Highlighted correlations (e.g., high blood pressure strongly linked with disease).  

5. **Predictive Modeling (Future Work)**  
   - Integrate ML algorithms to **predict heart disease risk**.  
   - Evaluate performance using classification metrics.  

6. **Deployment (Future Work)**  
   - Deploy as a **web-based decision-support tool** for patients and doctors.  

📊 **Pipeline Overview**  
![Pipeline](Image/Design%20Thinking%20Process.png)

## 9. Technology Stack
- **Frontend:** HTML, CSS, JavaScript (D3.js)  
- **Data Processing:** Python, Pandas  
- **Visualization:** D3.js custom charts  
- **Version Control:** GitHub  

---

## 10. Author
👨‍💻 **Nguyen The Hien** – Data Analyst in training, passionate about turning data into actionable insights.

## 11. Future Work
This project currently focuses on **exploratory data analysis (EDA)** and **interactive visualization**.  
Potential extensions include:

- **Machine Learning Models**  
  - Apply classification algorithms (Logistic Regression, Random Forest, XGBoost) to **predict heart disease** based on patient attributes.  
  - Evaluate models using **Accuracy, Precision, Recall, F1-score**, and **ROC-AUC**.  

- **Feature Engineering**  
  - Create new features such as **Age Groups**, **BMI Categories**, or combined lifestyle risk scores (e.g., *Smoking + Alcohol*).  
  - Assess how engineered features improve prediction power.  

- **Statistical Analysis**  
  - Perform hypothesis testing (Chi-square, ANOVA) to confirm significant relationships between categorical and continuous attributes.  

- **Deployment**  
  - Extend dashboard with **Flask/Django API** to serve predictive results.  
  - Deploy as a **web application** where users can input personal health data and get **real-time risk predictions**.  

- **Integration with External Data**  
  - Combine with **global health datasets** (e.g., WHO, CDC) to enrich insights.  
  - Enable **comparisons across countries/regions** for broader public health strategies.  

By expanding into **predictive modeling and deployment**, this project could move from descriptive analytics → to **prescriptive insights**, supporting doctors and policymakers in making proactive, data-driven decisions.
