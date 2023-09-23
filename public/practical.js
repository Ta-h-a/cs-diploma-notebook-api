const data = [
    {
        "title": "IT Skills",
        "name": "information-technology",
        "code": "something",
        "experiments" : [
            {
                "id": 1,
                "name": "name-of-the-experiment",
                "sections": [],
                "variants": []
            }
        ]
    },
    {
        "title": "DSA with Python",
        "name": "data-structures-and-algorithms-with-python",
        "code": "20CS41P",
        "description": "Data structures are the techniques organizing data and of designing the algorithms for real-life projects.",
        "experiments": [
            {
                "id": 1,
                "name": "experiment-01",
                "title":"Experiment 01",
                // Sections because a single experiment can have sub experiments
                "sections": [
                    {
                        "tag": "A",
                        "name": "Python program to Use and demonstrate basic data structures.",
                        "URL": "practical/experiment/python-program-to-use-and-demonstrate-basic-data-structures"
                    },
                    {
                        "tag": "B",
                        "name": "Implement an ADT with all its Operations.",
                        "URL": "practical/experiment/implement-an-ADT-with-all-its-operations"
                    }
                ]
            }
        ]
    }
]
module.exports = data