import project1_img from './project_1.svg'
import project2_img from './project_2.svg'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Encryption",
        w_description: "A comprehensive encryption implementation featuring SSH key generation and secure key deployment. This project includes automated key pair generation (RSA), secure key management, and deployment scripts for secure server authentication. The system handles key generation, public/private key management, and known hosts configuration for enhanced security in remote server communications.",
        w_github: "https://github.com/tadwalgurpreet/Encryption",
        w_tech: ["Python", "SSH", "RSA Encryption", "Key Management", "Security"],
        w_img: project1_img
    },
    {
        w_no: 2,
        w_name: "Diabetes Prediction Model",
        w_description: "A full-stack ML model that predicts diabetes risk based on various medical factors using Random Forest Classifier. Features include interactive Streamlit frontend, FastAPI backend, SHAP-based model explainability, and deployment on Render. The model analyzes 8 key health parameters including glucose levels, BMI, blood pressure, and age to provide accurate diabetes risk predictions.",
        w_github: "https://github.com/tadwalgurpreet/Diabetes-Prediction-Beta1",
        w_tech: ["Python", "Machine Learning", "FastAPI", "Streamlit", "SHAP"],
        w_img: project2_img
    },
]
 
export default mywork_data;