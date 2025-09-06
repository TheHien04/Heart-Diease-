# 🫀 Heart Disease Data Analytics Dashboard

![Background](Image/Background.jpg)

## 1. Introduction
Heart disease remains the **leading cause of death worldwide**, responsible for nearly one-third of all global fatalities.  
Understanding **patterns, risk factors, and prevention strategies** can significantly improve patient outcomes and inform healthcare policy.

This project develops an **interactive D3.js dashboard** analyzing 8 domains related to heart disease, using data visualization to uncover patterns and correlations.

---

## 2. Types of Heart Disease
![Types of Heart Disease](Image/Type%20of%20Heart%20Diease.png)

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
| **Demographics**   | Age, Gender             | ![Gender](Image/Heart%20Gender.jpg) |
| **Lifestyle**      | Exercise Habits         | ![Exercise](Image/Exercise.jpg) |
|                    | Smoking                 | ![Smoking](Image/Smoking%20World.png) |
|                    | Alcohol Consumption     | ![Alcohol Consumption](Image/Alcohol%20Consumption.png) |
| **Clinical**       | Cholesterol Level       | ![Cholesterol Level](Image/Cholesterrol%20Level.png) |
|                    | Blood Pressure          | ![Blood Pressure](Image/Blood%20Pressure.jpg) |
|                    | BMI                      | ![BMI](Image/Body%20max%20index.png) |
|                    | Family Heart Disease     | ![Family](Image/heart_family.jpg) |
|                    | Stress Level             | ![Stress](Image/Stress.jpg) |

---

## 5. Domain-by-Domain Analysis

### **Domain 1 – Age vs Heart Disease**
- **Goal:** Identify correlation between age groups and heart disease prevalence.
- **Key Insight:**  
  Heart disease prevalence rises sharply after age 50, reflecting the cumulative effect of biological aging, lifestyle, and clinical risk factors.  
  Younger groups (<40) show relatively low risk, but early lifestyle interventions here could reduce future disease burden.  
  This aligns with clinical studies emphasizing **age as one of the strongest predictors** of cardiovascular disease.  
- **Dashboard:**  
![Domain 1](Image/Domain%201.png)  

---

### **Domain 2 – Gender vs Heart Disease**
- **Goal:** Compare disease rates between male and female.
- **Key Insight:**  
  Males in the dataset show a consistently higher prevalence of heart disease compared to females.  
  This aligns with medical evidence, where hormonal protection (e.g., estrogen) often delays onset in women until post-menopause.  
  The insight emphasizes the need for **gender-specific screening and prevention strategies**.
- **Dashboard:**  
![Domain 2](Image/Domain%202.png)  

---

### **Domain 3 – Blood Pressure vs Heart Disease**
- **Goal:** Assess how blood pressure impacts disease likelihood.
- **Key Insight:**  
  Patients with elevated or high blood pressure are significantly more likely to develop heart disease.  
  Chronic hypertension contributes to arterial damage and cardiac hypertrophy, creating a pathway to failure if unmanaged.  
  This finding highlights the importance of **regular BP monitoring** and **early treatment** in preve
- **Dashboard:**  
![Domain 3](Image/Domain%203.png)  

---

### **Domain 4 – Exercise Habits**
- **Goal:** Analyze the protective effect of regular exercise.
- **Key Insight:**  
  Patients reporting frequent exercise show a markedly lower prevalence of heart disease.  
  Physical activity improves vascular function, lowers LDL cholesterol, and reduces blood pressure.  
  The insight reinforces the role of **lifestyle modification** as a cost-effective intervention compared to long-term clinical treatment.  
- **Dashboard:**  
![Domain 4](Image/Domain%204.png)  

---

### **Domain 5 – Average Cholesterol Level**
- **Goal:** Compare cholesterol levels between healthy and diseased groups.
- **Key Insight:**  
  Diseased patients consistently show higher mean cholesterol levels.  
  Elevated LDL cholesterol accelerates plaque formation, narrowing arteries and reducing blood flow.  
  This validates cholesterol as a **critical biomarker for early screening** and an actionable target for dietary and pharmaceutical intervention.  
- **Dashboard:**  
![Domain 5](Image/Domain%205.png)  

---

### **Domain 6 – Smoking**
- **Goal:** Evaluate smoking as a risk factor.
- **Key Insight:**  
  Smokers have a substantially higher prevalence of heart disease compared to non-smokers.  
  Smoking contributes to endothelial damage, increases clotting tendency, and reduces oxygen transport in blood.  
  This demonstrates why smoking cessation programs are one of the **most effective public health policies** for cardiovascular prevention.  
- **Dashboard:**  
![Domain 6](Image/Domain%206.png)  

---

### **Domain 7 – Alcohol Consumption**
- **Goal:** Assess the relationship between alcohol intake and disease.
- **Key Insight:**  
  Patients with high alcohol consumption show elevated prevalence of heart disease.  
  While moderate intake may not pose significant risks, chronic heavy drinking raises blood pressure and triglycerides.  
  This suggests the need for **context-aware recommendations**, distinguishing between safe levels and harmful patterns of consumption.  
- **Dashboard:**  
![Domain 7](Image/Domain%207.png)  

---

### **Domain 8 – Cholesterol Distribution by Gender**
- **Goal:** Identify gender-based differences in cholesterol distribution.
- **Key Insight:**  
  Male patients generally exhibit higher cholesterol variability compared to females.  
  This partially explains their earlier onset of cardiovascular disease, with women catching up after menopause.  
  Insights here support **gender-sensitive public health messaging** and **differentiated treatment guidelines**.  
- **Dashboard:**  
![Domain 8](Image/Domain%208.png)  

---
## 6. Design Thinking Process
![Design Thinking](Image/Design%20Thinking%20Process.png)  

This project applied the **Design Thinking methodology**, ensuring the dashboard is not just technically correct but also **human-centered**:  
- **Empathize:** Identify the needs of patients, doctors, and policymakers.  
- **Define:** Frame the core problem (e.g., which risk factors most affect heart disease).  
- **Ideate:** Generate multiple visualization ideas for clarity.  
- **Prototype:** Build D3.js dashboards with filtering and interactivity.  
- **Test:** Validate insights with users and iterate.  

---
## 7. Overall Dashboard Overview
### Light Mode
![Light Mode Dashboard](Report/Dashboard%20overview%20light.png)

### Dark Mode
![Dark Mode Dashboard](Report/Dashboard%20overview%20dark.png)

---
## 7.1.🔎 Cross-Domain Summary Insights

Bringing together insights from all 8 domains, we can highlight several overarching themes:

1. **Demographics as Baseline Risks**  
   - Age remains the **strongest non-modifiable risk factor**, with prevalence rising sharply after 50.  
   - Gender differences are evident, with men at higher risk earlier, though women catch up post-menopause.  

2. **Lifestyle Habits Drive Prevention Potential**  
   - Smoking and alcohol stand out as **high-impact behavioral risks**, strongly linked to higher disease rates.  
   - Regular exercise demonstrates a **protective effect**, reducing disease prevalence significantly.  

3. **Clinical Biomarkers as Early Warning Signals**  
   - High blood pressure and cholesterol are consistently associated with increased disease likelihood.  
   - These are **measurable, trackable, and modifiable** markers that can guide early interventions.  

4. **Integrated Risk Profiles**  
   - No single factor explains heart disease—**it’s the interaction of demographics, lifestyle, and clinical markers** that creates overall risk.  
   - This validates the need for **holistic prevention strategies**, not isolated interventions.  

📌 In short:  
- **Demographics tell us *who* is most at risk.**  
- **Lifestyle explains *why* risks develop.**  
- **Clinical biomarkers show *how* risks manifest.**  

Together, these insights demonstrate the value of a **multi-dimensional, data-driven dashboard** for informing both individual care and public health strategies.

---

## 7.2.✅ Data-Driven Recommendations

Based on insights across all domains, we propose targeted recommendations to different stakeholders:

### 👤 For Individuals
- **Adopt Heart-Healthy Lifestyle**:  
  - Quit smoking and reduce alcohol intake to cut major risk factors.  
  - Engage in **150 minutes of moderate exercise per week** (WHO guideline).  
- **Track Clinical Indicators**:  
  - Regularly monitor **blood pressure, cholesterol, and BMI**.  
  - Seek medical checkups earlier if family history of heart disease exists.  

### 🩺 For Healthcare Professionals
- **Risk Stratification**:  
  - Use **age + BP + cholesterol + lifestyle factors** to identify high-risk patients.  
  - Implement **preventive screenings** starting at age 40 (earlier for high-risk groups).  
- **Patient Education**:  
  - Provide data-driven feedback to patients using visuals (e.g., charts showing impact of smoking/exercise).  
  - Encourage personalized lifestyle changes backed by measurable data.  

### 🏛️ For Policymakers & Public Health
- **Targeted Awareness Campaigns**:  
  - Focus on **smoking cessation, exercise promotion, and dietary changes**.  
  - Design campaigns specifically for **middle-aged and elderly populations**.  
- **Preventive Healthcare Policies**:  
  - Subsidize routine screenings for blood pressure and cholesterol.  
  - Invest in **digital dashboards** like this project to track regional/national heart health trends.  

---

📊 These recommendations highlight how **data analytics bridges the gap between insights and action**.  
By translating patterns into concrete strategies, we can shift healthcare from **reactive treatment → proactive prevention**.

## 7.3 Conclusion & Recommendations
![Healthy Actions](Image/HA-signs-symptoms-social1.png) 

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
