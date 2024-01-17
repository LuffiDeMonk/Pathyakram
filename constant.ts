export const SliderContent = [
    {
        id: 1,
        universityName: 'Tribhuwan University',
        location: 'Kathmandu, Nepal',
        logo: '/TUlogo.svg'
    },
    {
        id: 2,
        universityName: 'Kathmandu University',
        location: 'Kathmandu, Nepal',
        logo: '/KUlogo.png'
    },
    {
        id: 3,
        universityName: 'Purwanchal University',
        location: 'Biratnagar, Nepal',
        logo: '/PUlogo.png'
    },
    {
        id: 4,
        universityName: 'Agriculture and Forest University',
        location: 'Biratnagar, Nepal',
        logo: '/PUlogo.png'
    },
]

export const universities = [

    {
        name: "Tribhuvan University",
        location: "Kathmandu",
        established_year: 1959,
        affiliation: "Public"
    },
    {
        name: "Kathmandu University",
        location: "Dhulikhel",
        established_year: 1991,
        affiliation: "Private"
    },
    {
        name: "Pokhara University",
        location: "Pokhara",
        established_year: 1997,
        affiliation: "Private"
    },
    {
        name: "Nepal Open University",
        location: "Patan",
        established_year: 2016,
        affiliation: "Public"
    },
    {
        name: "Purbanchal University",
        location: "Biratnagar",
        established_year: 1993,
        affiliation: "Public"
    }

]

export const streams = [
    {
        universityId: 1,
        universityName: 'Tribhuvan University',
        streams: [
            "Engineering",
            "Medicine",
            "Business Administration",
            "Social Sciences",
            "Computer Science"
        ]

    },
    {
        universityId: 2,
        universityName: "Kathmandu University",
        streams: [
            "Science",
            "Management",
            "Arts",
            "Environmental Science",
            "Information Technology"
        ]
    },
    {
        universityId: 3,
        universityName: "Pokhara University",
        streams: [
            "Engineering",
            "Business Studies",
            "Health Sciences",
            "Tourism and Hospitality"
        ]
    },
    {
        universityId: 4,
        universityName: "Nepal Open University",
        streams: [
            "Education",
            "Social Work",
            "Environmental Management"
        ]
    },
    {
        universityId: 5,
        universityName: "Purbanchal University",
        streams: [
            "Engineering",
            "Health Sciences",
            "Agriculture",
            "Law"
        ]
    }
]

export const subjects = [
    {
        stream: "Engineering",
        semesterSubject: [
            {
                semesterNumber: 1,
                subjects: ["Mathematics I", "Physics", "Chemistry", "Engineering Drawing"]
            },
            {
                semesterNumber: 2,
                subjects: ["Mathematics II", "Mechanics", "Electrical Engineering", "Computer Programming"]
            },
            {
                semesterNumber: 3,
                subjects: ["Mathematics III", "Thermodynamics", "Material Science", "Electronic Circuits"]
            },
            {
                semesterNumber: 4,
                subjects: ["Numerical Methods", "Fluid Mechanics", "Digital Electronics", "Machine Design"]
            },
            {
                semesterNumber: 5,
                subjects: ["Control Systems", "Power Systems", "Database Management Systems", "Software Engineering"]
            },
            {
                semesterNumber: 6,
                subjects: ["Communication Systems", "VLSI Design", "Data Structures and Algorithms", "Robotics"]
            }
        ]
    },
    {
        stream: 'Management',
        semesterSubject: [
            {
                "semesterNumber": 1,
                "subjects": ["Mathematics I", "Physics", "Chemistry", "Engineering Drawing"]
            },
            {
                "semesterNumber": 2,
                "subjects": ["Mathematics II", "Mechanics", "Electrical Engineering", "Computer Programming"]
            },
            {
                "semesterNumber": 3,
                "subjects": ["Mathematics III", "Thermodynamics", "Material Science", "Electronic Circuits"]
            },
            {
                "semesterNumber": 4,
                "subjects": ["Numerical Methods", "Fluid Mechanics", "Digital Electronics", "Machine Design"]
            },
            {
                "semesterNumber": 5,
                "subjects": ["Control Systems", "Power Systems", "Database Management Systems", "Software Engineering"]
            },
            {
                "semesterNumber": 6,
                "subjects": ["Communication Systems", "VLSI Design", "Data Structures and Algorithms", "Robotics"]
            }
        ]
    },
    {
        stream: "Health Sciences",
        semesterSubject: [
            {
                semesterNumber: 1,
                subjects: ["Anatomy", "Physiology", "Biochemistry", "Introduction to Health Science"]
            },
            {
                semesterNumber: 2,
                subjects: ["Microbiology", "Pathophysiology", "Pharmacology", "Medical Ethics"]
            },
            {
                semesterNumber: 3,
                subjects: ["Nutrition and Dietetics", "Epidemiology", "Health Psychology", "Clinical Skills"]
            },
            {
                semesterNumber: 4,
                subjects: ["Medical Imaging", "Patient Care Techniques", "Community Health", "Health Informatics"]
            },
            {
                semesterNumber: 5,
                subjects: ["Pharmacotherapy", "Public Health Policy", "Rehabilitation Sciences", "Health Education"]
            },
            {
                semesterNumber: 6,
                subjects: ["Clinical Research Methods", "Healthcare Management", "Medical Ethics and Law", "Global Health Issues"]
            }
        ]
    }
]

export const Navlinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Contact',
        link: '/contact'
    },
    {
        id: 3,
        name: 'University',
        link: '/university'
    },
    {
        id: 4,
        name: 'Make Request',
        link: '/request'
    },

]