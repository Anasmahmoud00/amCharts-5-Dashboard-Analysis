# amCharts 5 Dashboard Analysis

## Overview
This project demonstrates the use of amCharts 5 to create a comprehensive dashboard for analyzing student data from Zewail City University. The dashboard provides valuable insights into the student population across various metrics, enabling data-driven decision-making for the university administration.

## Key Features
- **Gender Distribution**: A pie chart showcasing the percentage breakdown of male and female students.
- **Student Enrollment by Faculty**: A funnel chart visualizing the distribution of students across different academic faculties.
- **Student Distribution by Major**: A bar chart displaying the number of students in each academic major.
- **Grade Distribution by Major**: A bullet graph comparing the grade (A, B, C) distributions within each major.

## Dashboard Layout Rationale
The dashboard layout is designed to provide a logical and intuitive flow of information:

1. **Gender Distribution**: Placed at the top to highlight key demographic metrics.
2. **Student Enrollment by Faculty**: Positioned below the gender chart to emphasize student distribution across faculties.
3. **Student Distribution by Major**: Located at the bottom to showcase detailed student distribution by major.
4. **Grade Distribution by Major**: Placed alongside the major distribution to enable comparative analysis of grade performance.

The dashboard uses contrasting hues to differentiate data categories, improving visual appeal and clarity. The grouping of related information aligns with how users mentally organize data, facilitating easier comprehension.

## Technologies Used
This project utilizes the following technologies:
- **Backend Framework**: Flask
- **Search Framework**: PyTerrier
- **Machine Learning**: BERT (bert-base-uncased)
- **Natural Language Processing**: NLTK
- **Frontend**: HTML/CSS with responsive design
- **External Services**: ngrok for tunneling

## Project Structure
```
├── app/
│   ├── static/
│   ├── templates/
│   ├── routes.py
│   ├── models.py
│   ├── utils.py
├── data/
│   ├── student_data.csv
├── notebooks/
│   ├── analysis.ipynb
├── requirements.txt
├── config.py
├── run.py
└── README.md
```

## Getting Started
Follow these steps to set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anasmahmoud00/amCharts-5-Dashboard-Analysis.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd amCharts-5-Dashboard-Analysis
   ```
3. **Create and activate a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
4. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
5. **Download required NLTK data**:
   ```python
   import nltk
   nltk.download('punkt')
   nltk.download('stopwords')
   ```
6. **Run the Flask application**:
   ```bash
   python run.py
   ```
7. **Access the dashboard**:
   Open a web browser and go to `http://127.0.0.1:5000`

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue for any improvements or bug fixes.

## License
This project is licensed under the MIT License.

