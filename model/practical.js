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
                // "id": 1,
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
            },
            {
                // "id": 1,
                "name": "experiment-02",
                "title":"Experiment 02",
                // Sections because a single experiment can have sub experiments
                "sections": [
                    {
                        "tag": "A",
                        "name": "Implement an ADT and Compute space and time complexities.",
                        "URL": "practical/experiment/implement-an-adt-and-compute-space-and-time-complexities"
                    },
                ]
            },
            {
                // "id": 1,
                "name": "experiment-03",
                "title":"Experiment 03",
                // Sections because a single experiment can have sub experiments
                "sections": [
                    {
                        "tag": "A",
                        "name": "Implement Linear  Search compute  space and time  complexities",
                        "URL": "practical/experiment/implement-linear-search-compute-space-and-time-complexities"
                    },
                    {
                        "tag": "B",
                        "name": "Implement Bubble, Selection, insertion sorting algorithms compute space and time complexities, plot graph using asymptomatic notations.",
                        "URL": "practical/experiment/implement-bubble-selection-insertion-sorting-algorithms-compute-space-and-time-complexities-plot-graph-using-asymptomatic-notations"
                    },
                ]
            },
            {
                // "id": 1,
                "name": "experiment-04",
                "title":"Experiment 04",
                // Sections because a single experiment can have sub experiments
                "sections": [
                    {
                        "tag": "A",
                        "name": "Implement Binary Search using recursion Compute space and time complexities, plot graph using asymptomatic notations",
                        "URL": "practical/experiment/implement-binary-search-using-recursion-compute-space-and-time-complexities"
                    },
                    {
                        "tag": "B",
                        "name": "Implement Merge and quick sorting algorithms compute space and time complexities.",
                        "URL": "practical/experiment/implement-merge-and-quick-sorting-algorithms-compute-space-and-time-complexities"
                    },
                    {
                        "tag": "C",
                        "name": "Implement Fibonacci sequence with dynamic programming.",
                        "URL": "practical/experiment/implement-fibonacci-sequence-with-dynamic-programming"
                    },
                ]
            },
            {
                // "id": 1,
                "name": "experiment-05",
                "title":"Experiment 05",
                // Sections because a single experiment can have sub experiments
                "sections": [
                    {
                        "tag": "A",
                        "name": "Implement Singly linked list",
                        "URL": "practical/experiment/implement-singly-linked-list"
                    },
                ]
            },
            {
                // "id": 1,
                "name": "experiment-06",
                "title":"Experiment 06",
                // Sections because a single experiment can have sub experiments
                "sections": [
                    {
                        "tag": "A",
                        "name": "Implement linked list Iterators",
                        "URL": "practical/experiment/implement-linked-list-iterators"
                    },
                ]
            },
            {
                // "id": 1,
                "name": "experiment-07",
                "title":"Experiment 07",
                // Sections because a single experiment can have sub experiments
                "sections": [
                    {
                        "tag": "A",
                        "name": "Implement DLL",
                        "URL": "practical/experiment/implement-dll"
                    },                    
                    {
                        "tag": "B",
                        "name": "Implement CDLL",
                        "URL": "practical/experiment/implement-cdll"
                    }
                ]
            },
            {
                // "id": 1,
                "name": "experiment-08",
                "title":"Experiment 08",
                // Sections because a single experiment can have sub experiments
                "sections": [   
                    {
                        "tag": "A",
                        "name": "Implement Stack Data Structure",
                        "URL": "practical/experiment/implement-stack-data-structure"
                    },                    
                    {
                        "tag": "B",
                        "name": "Implement CDLL",
                        "URL": "practical/experiment/implement-bracket-matching-using-stack"
                    }
                ]
            },
            {
                // "id": 1,
                "name": "experiment-09",
                "title":"Experiment 09",
                // Sections because a single experiment can have sub experiments
                "sections": [   
                    {
                        "tag": "A",
                        "name": "Program to  demonstrate  recursive operations",
                        "URL": "practical/experiment/program-to-demonstrate-recursive-operations"
                    },
                    {
                        "tag": "B",
                        "name": "Implement solution  for Towers of Hanoi",
                        "URL": "practical/experiment/implement-solution-for-tower-of-hanoi"
                    }
                ]
            },
            {
                // "id": 1,
                "name": "experiment-10",
                "title":"Experiment 10",
                // Sections because a single experiment can have sub experiments
                "sections": [   
                    {
                        "tag": "A",
                        "name": "Implement Queue",
                        "URL": "practical/experiment/implement-queue"
                    },
                    {
                        "tag": "B",
                        "name": "Implement priority queue",
                        "URL": "practical/experiment/implement-priority-queue"
                    }
                ]
            },
            {
                // "id": 1,
                "name": "experiment-11",
                "title":"Experiment 11",
                // Sections because a single experiment can have sub experiments
                "sections": [   
                    {
                        "tag": "A",
                        "name": "Implement Binary search tree and its operations using list",
                        "URL": "practical/experiment/implement-binary-search-tree-and-its-operations-using-list"
                    }
                ]
            },
        ]
    }
]
module.exports = data
