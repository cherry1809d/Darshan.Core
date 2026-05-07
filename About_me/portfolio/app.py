from flask import Flask, render_template

app = Flask(__name__)

# --- WEBSITE DATA CONFIGURATION ---

# 1. Profile Information
USER_INFO = {
    "name": "Darshan R",
    "role": "Full-Stack Developer & Robotics Enthusiast",
    "status": "Currently focusing on Flutter Development & Autonomous Systems",
    "about": (
        "My journey started with web development using Python and Flask, "
        "which naturally evolved into a passion for robotics and mobile app "
        "development. I enjoy bridging the gap between software and hardware."
    )
}

# 2. Projects Data (Graphical Grid)
PROJECTS = [
    {
        "title": "Swasth Medi Bot",
        "desc": "Medical automation for symptom tracking and dispensing.",
        "image": "Swasth.jpeg",
        "tech": ["Python","ArduinoUNO,Mega","C++" ,"Flask", "IoT"],
        "category": "Robotics"
    },
    {
        "title": "Smart Parking",
        "desc": "Multi-level garage management with real-time slot tracking.",
        "image": "SmartParking.png",
        "tech": ["Python","Flask","Css","HTML","JS"],
        "category": "Website"
    },
    {
        "title": "Fitness Tracking App",
        "desc": "Comprehensive health monitoring and workout assistant.(Under Development)",
        "image": "fit.png",
        "tech": ["Dart", "Flutter"],
        "category": "Mobile App(Under Development)"

    },

]

# 3. Experience Timeline
EXPERIENCE = [
    {"year": "2025", "role": "Steam Innovation Engineer ", "company": "Bonifon School Of Robotics"},
    {"year": "2025", "role": "AI Teacher", "School": "Christ Public School Mysore"},
]

# 4. Competitions & Achievements
COMPETITIONS = [
    {"title": "Codevour National Robotics Challenge", "award": "Selected to Internationals", "image": "national.jpeg"},

]

# 5. Education
EDUCATION = [
    {"degree": "Bachelor Of Computer Application ", "institution": "Hindustan College Mysore", "year": "2022 - 2025"},
]

# --- ROUTES ---

@app.route('/')
def index():
    """
    Renders the main dashboard page with all data injected.
    """
    return render_template(
        'index.html',
        user=USER_INFO,
        projects=PROJECTS,
        experience=EXPERIENCE,
        competitions=COMPETITIONS,
        education=EDUCATION
    )

if __name__ == '__main__':
    # 'debug=True' allows the server to reload automatically when you change code
    app.run(debug=True, port=5000)