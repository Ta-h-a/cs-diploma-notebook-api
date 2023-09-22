const semesters = 
    [
        {
            // "id": 1,
            "semester": "First Semester",
            "description": "Welcome First Year Students. Choose your interested course and start studying !",
            // Here courses refer to our college subjects
            "theory": [
                {
                    "name":"mathematics",
                    "URL": "/theory/mathematics"
                }
            ],
            "practical":[
                {
                    "name":"information-technology",
                    "URL": "/practical/information-technology"
                }
            ]
        }
    ]

module.exports = semesters;