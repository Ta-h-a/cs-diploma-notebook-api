const experimentData = [
    {
        "name": "python-program-to-use-and-demonstrate-basic-data-structures",
        "title": "Python program to Use and demonstrate basic data structures",
        "type": "Lab",
        "code":`
        # Program 1 A [i] 
        x = 8.0 
        y = 4.0 
        sum = x + y 
        print(x+y) 
        sub = x - y 
        print(x - y) 
        multi = x * y 
        print(x * y) 
        div = x/y 
        print(x/y) 
        print(abs(x)) 
        print(x**y) 
    
        # ---------------------------------------------
        # String Program - Program 1 A [ii] 
        string1 = "Hello" print("initial string: ") 
        print(string1) 
        string1 = "Welcome" 
        print("Updated String: ") 
        print(string1) 
        text = 'welcome to mlbp' 
        text2 = "good morning students" 
        print("converted string") 
        print(text.upper()) 
        print(text2.upper()) 
        print(text.title()) 
        print("original string") 
        print(text) 
    
        # ---------------------------------------------
        # List Program - Program 1 A [iii] 
        list1=[1,2,3,4,"Python"] 
        print(list1) list1.append(2) 
        print(list1) a = list1.pop(4) 
        print(a) print(list1[:]) 
        print(list1[0:2]) 
        print(list1[-1:-3]) 
    
        # ----------------------------------------------
        # Dictionary Program - Program 1 A [iv] 
        dict1 = {1: 'Java Script', 2: 'xml ', 3: 'oops', 4: 'html'} 
        print(dict1) 
        dict1[1] = 'python' 
        print(dict1) 
        dict1[5] = 'Shambhavi ' 
        print(dict1) 
        del dict1[1] 
        print(dict1) 
        print(dict1.popitem()) 
        print(dict1) 
        print(dict1.keys()) 
        print(dict1.values()) 
        # ----------------------------------------------
        `,
        "description":`
        This code is a collection of four programs: one that performs mathematical operations, one that manipulates strings, one that manipulates lists, and one that manipulates dictionaries. The programs demonstrate various operations such as addition, subtraction, multiplication, division, printing, appending, popping, deleting, and modifying elements in a list and dictionary.
        `,
        "explanation": [
            `In this program, we are performing a variety of operations on data types such as numbers, strings, lists, and dictionaries.`,
        `Mathematical operations:`,
        `We start by performing some basic mathematical operations on two numbers, 8 and 4. We add them to get 12, subtract them to get 4, multiply them to get 32, and divide them to get 2. We also calculate the absolute value of 8 (which is just 8) and raise it to the power of 4 (which is 4096).`,
        `String operations:`,
        `We then move on to string operations. We start with the word "Hello" and say it out loud. Then, we change the word to "Welcome" and say it out loud again. We also convert two sentences to uppercase and title case. Uppercase conversion makes all the letters in a sentence capital, while title case capitalizes the first letter of each word.`,
        `List operations:`,
        `We then move on to list operations. We start with a list containing the elements 1, 2, 3, 4, and "Python". We append the number 2 to the list, pop the element "Python" from the list, and slice the list to take the first two elements and the elements from the last to the third last.`,
        `Dictionary operations:`,
        `Finally, we work with dictionaries. We start with a dictionary that has keys 1, 2, 3, and 4, and their corresponding values 2, 3, 4, and "Python". We update the value of the key 1 to "Python", add a new key-value pair (key 5 with the value "Shambhavi"), and delete the key-value pair with the key 1. We also retrieve all the keys and values from the dictionary.`,
        `Conclusion`,
        `This program provides a good overview of some of the basic operations that can be performed on different data types in Python.`,
    ],
        "ytLink": "https://www.youtube.com/embed/C_XRxLPGbUw",
        "sources": [
            {
                "name": "Calculator using Python",
                "url": "https://www.geeksforgeeks.org/make-simple-calculator-using-python/"
            },
            {
                "name": "Calculator Example",
                "url": "https://www.programiz.com/python-programming/examples/calculator"
            }
        ]

    },
    {
        "name": "implement-an-ADT-with-all-its-operations",
        "title": "Implement an ADT with all its Operations",
        "code": `
    stack = []

    def push(size):
        if len(stack) == size:
            print("List is full!")
        else:
            element = input("Enter the element: ")
            stack.append(element)
            print(stack)

    def pop():
        if not stack:
            print("Stack is empty.")
        else:
            e = stack.pop()
            print("Removed element is:", e)
            print(stack)

    size = int(input("Enter the limit for the stack: "))

    while True:
        print("Select the operation: 1. PUSH 2. POP 3. QUIT")
        choice = int(input())
        
        if choice == 1:
            push(size)
        elif choice == 2:
            pop()
        elif choice == 3:
            break
        else:
            print("Enter the correct operation.")

        `,
        "type": "Lab",
        "description":`
        This code demonstrates a basic implementation of a stack data structure using Python. A stack follows the last-in, first-out (LIFO) principle, where elements are added and removed from the top of the stack.
        `,
        "explanation": [
            "The code begins by initializing an empty stack, represented by a Python list called stack.",
            "The code prompts the user to enter the size limit of the stack, which determines the maximum number of elements it can hold.",
            "The code enters a loop that allows the user to perform three operations: push, pop, or quit.",
            "Push Operation: If the user selects the push operation, the code checks if the length of the stack is equal to the size limit. If it is, it means the stack is full, and the code displays a message indicating that the stack is full. Otherwise, the code prompts the user to input an element to be added to the stack. This element is then appended to the end of the stack using the append() method. Finally, the updated stack is displayed.",
            "Pop Operation: If the user chooses the pop operation, the code first checks if the stack is empty. This is done by evaluating the truthiness of the stack list. If it is empty, it means there are no elements in the stack, and the code displays a message indicating that the stack is empty. Otherwise, the code removes the topmost element from the stack using the pop() method, which eliminates the last element of the list. The popped element is stored in a variable called e for reference. The code then displays the removed element and the updated stack.",
            "Quit Operation: If the user selects the quit operation, the loop breaks, and the program terminates.",
            "If the user enters an invalid choice that does not correspond to any of the available operations, the code displays a message indicating that the correct operation should be entered.",
            "Overall, this code allows users to interact with a stack data structure by adding elements to the top of the stack (push), removing elements from the top (pop), or quitting the program. It provides a practical demonstration of how stacks work and can be used as a foundation for more complex stack-based applications."
            ],
        "ytLink": "https://www.youtube.com/embed/aCVpMz7_gn8",
        "sources": [
            {
                "name": "Stack using Linked List",
                "url": "https://www.studytonight.com/data-structures/stack-using-linked-list"
            },
            {
                "name": "Stack Data Structure",
                "url": "https://www.geeksforgeeks.org/stack-data-structure/"
            }
        ]

    },
    {
        "name": "implement-an-adt-and-compute-space-and-time-complexities",
        "title": "Implement an ADT and Compute space and time complexities.",
        "code": `
        
        # Check Pair

        def checkPair(A, size, x):
            for i in range(0, size-1):
                for j in range(i+1, size):
                    if (A[i] + A[j] == x):
                        print(f"Pair with given sum ({x}) is", {A[i]}, {A[j]})
                        return 1
            return 0

        array = [0, -1, 2, -3, 1, 55]
        x = 2
        if (checkPair(array, len(array), x)):
            print("Valid pair exists for the value:", x)
        else:
            print("Valid pair does not exist for the value:", x)

        # Count Frequency

        def countFreq(arr, n):
            visited = [False for i in range(n)]
            for i in range(n):
                if visited[i] == True:
                    continue
                count = 1
                for j in range(i+1, n):
                    if arr[i] == arr[j]:
                        visited[j] = True
                        count += 1
                print(arr[i], count)

        arr = [50, 50, 3, 60, 7, 8, 50, 45, 55, 45, 100, 100, 100, 100000]
        n = len(arr)
        countFreq(arr, n)


        `,
        "type": "Lab",
        "description":`
        checkPair and countFreq. The checkPair function checks an array for a pair of elements that add up to a given target sum. If a valid pair is found, it is displayed as output. The countFreq function counts the frequency of each element in an array and prints the element along with its count.
        `,
        "explanation": [
            "The checkPair function takes three parameters: A (the array), size (the size of the array), and x (the target sum).",
            "It uses a nested loop structure to iterate through all possible pairs of elements in the array.",
            "Outer loop: The outer loop, controlled by the variable i, iterates from the first element to the second-to-last element of the array.",
            "Inner loop: The inner loop, controlled by the variable j, iterates from the next element after i to the last element of the array.",
            "For each pair of elements, the code checks if their sum is equal to the target sum (x).",
            "If a pair with the given sum is found, it is displayed as output, indicating that a valid pair exists.",
            "The function then returns 1 to indicate the presence of a valid pair. If no pair is found, it returns 0.",
            "The countFreq function takes two parameters: arr (the array) and n (the length of the array).",
            "It initializes a boolean array called visited with False values for each element in the array.",
            "The function iterates through the array using a loop controlled by the variable i.",
            "For each element in the array, it checks if it has been visited previously. If so, it continues to the next element.",
            "If the element has not been visited, it initializes a counter variable count to 1 and enters a nested loop controlled by the variable j.",
            "In the nested loop, it compares the element at index i with the remaining elements in the array (starting from i+1).",
            "If a match is found, it increments the counter count and marks the corresponding element as visited by setting the value in the visited array to True.",
            "Finally, it prints the element and its corresponding frequency (count) as output.",
            "The main code defines an array array and a target sum x.",
            "The checkPair function is called with the array, the length of the array (len(array)), and the target sum as arguments.",
            "If the function returns 1 (indicating a valid pair exists), it prints a message confirming the presence of a valid pair for the given target sum. Otherwise, it prints a message indicating that no valid pair exists.",
            "Similarly, an array arr is defined, and the countFreq function is called with the array and the length of the array as arguments.",
            "The function counts the frequency of each element in the array and prints the element along with its count.",
            "Overall, this code provides detailed functionality to check for a pair with a given sum in an array and count the frequencies of elements in an array."
            ],
        "ytLink": "https://www.youtube.com/embed/yzNOhldYSBI",
        "sources": [
            {
                "name": "codezup",
                "url": "https://codezup.com/program-to-find-pair-with-the-given-sum-in-an-array/"
            },
            {
                "name": "Tutorials Point",
                "url": "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python"
            }
        ]

    },
    {
        "name": "implement-linear-search-compute-space-and-time-complexities",
        "title": "Implement Linear  Search compute  space and time  complexities.",
        "code": `
        # Main Code
        def linearSearch(array, x):
            for i in range(len(array)):
                if array[i] == x:
                    print("Search is successful at position", i)
                    return
            print("Search is not successful")
        
        # --------------------------------------------------
        # Full Code Implementation
        # --------------------------------------------------
        
        import time
        import numpy as np
        import matplotlib.pyplot as plt
        
        def linear_Search(A, x):
            for i in range(0, len(A)):
                if A[i] == x:
                    print("Search is success at position", i)
                    return
            print("Search is not successful")
        
        element = np.array([i*1000 for i in range(1, 40)])
        plt.xlabel('List length')
        plt.ylabel('Time complexity')
        times = list()
        for i in range(1, 40):
            start = time.time()
            a = np.random.randint(1000, size=i*1000)
            linear_Search(a, 1)
            end = time.time()
            times.append(end-start)
            print("Time taken for linear search in", i*1000, "Elements is", end-start, "s")
        plt.plot(element, times, label="Linear Search")
        plt.grid()
        plt.legend()
        plt.show()       


        `,
        "type": "Lab",
        "description":`
        The provided code performs a linear search on arrays of increasing lengths and measures the time it takes to complete the search. It then plots the time complexity results, showing how the search time increases linearly with the size of the input array.
        `,
        "images":[
            "https://i.imgur.com/IQr52W7.png"
        ],
        "explanation":[
            "The code begins by importing the necessary libraries: time, numpy, and matplotlib.pyplot.",
            "This function implements a linear search algorithm.",
            "The function takes two parameters: A, which represents the array to search within, and x, which represents the element to search for.",
            "The function uses a for loop to iterate through each element in the array.",
            "Inside the loop, it checks if the current element (A[i]) matches the target element (x).",
            "If a match is found, it prints a message indicating the successful search at the position i and returns.",
            "If the loop completes without finding a match, it prints a message indicating that the search was unsuccessful.",
            "An array named element is created using NumPy.",
            "The array is initialized with values from 1000 to 39000, incrementing by 1000.",
            "This array represents the lengths of the arrays that will be generated for the search.",
            "The code sets up the plot using plt.xlabel() and plt.ylabel() functions to label the x-axis and y-axis, respectively.",
            "The x-axis is labeled as \"List length\", and the y-axis is labeled as \"Time complexity\".",
            "The code initializes an empty list named times to store the execution times for the linear search.",
            "A loop is executed from 1 to 39 (excluding 40), which represents the index range of the element array.",
            "Inside the loop, the following steps are performed:",
            "- The start time is recorded using time.time() to measure the initial time.",
            "- An array named a is generated using np.random.randint() with a size that increases by 1000 at each iteration.",
            "- The linear_Search function is called, passing the generated array a and the target element 1 as parameters.",
            "- The end time is recorded using time.time() to measure the final time.",
            "- The execution time (end - start) is appended to the times list.",
            "- The execution time for the current iteration is printed.",
            "After the loop completes, the code plots the results using plt.plot().",
            "The element array is used as the x-axis values, representing the list lengths.",
            "The times list is used as the y-axis values, representing the corresponding search times.",
            "The plot is labeled as \"Linear Search\" using the label parameter.",
            "Gridlines are added to the plot using plt.grid().",
            "The legend is displayed using plt.legend().",
            "Finally, the plot is shown using plt.show().",
            "In summary, the code measures the time complexity of a linear search algorithm by performing searches on arrays of increasing lengths.",
            "It provides insights into how the search time increases linearly with the size of the input array.",
            "The results are visualized through a plot, which helps in understanding the relationship between the list length and the time taken for the linear search."
        ],
        "ytLink": "https://www.youtube.com/embed/C46QfTjVCNU",
        "sources": [
            {
                "name": "Java Point",
                "url": "https://www.javatpoint.com/linear-search"
            },
            {
                "name": "Tutorials Point",
                "url": "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python"
            }
        ]

    },
    {
        "name": "implement-bubble-selection-insertion-sorting-algorithms-compute-space-and-time-complexities-plot-graph-using-asymptomatic-notations",
        "title": "Implement Bubble, Selection, insertion sorting algorithms compute space and time complexities, plot graph using asymptomatic notations.",
        "code": `

        # --------------------------------------------------
        def selectionSort(array):
            n = len(array)
            for i in range(n):
                min_index = i
                for j in range(i+1, n):
                    if array[j] < array[min_index]:
                        min_index = j
                array[i], array[min_index] = array[min_index], array[i]
        
        
        def bubbleSort(array):
            n = len(array)
            for i in range(n-1):
                swapped = False
                for j in range(n-i-1):
                    if array[j] > array[j+1]:
                        array[j], array[j+1] = array[j+1], array[j]
                        swapped = True
                if not swapped:
                    return
        
        
        def insertionSort(array):
            n = len(array)
            for i in range(1, n):
                x = array[i]
                j = i - 1
                while j >= 0 and x < array[j]:
                    array[j + 1] = array[j]
                    j -= 1
                array[j + 1] = x
        
        
        sorts = [
            {"name": "Selection Sort", "sort": lambda arr: selectionSort(arr)},
            {"name": "Bubble Sort", "sort": lambda arr: bubbleSort(arr)},
            {"name": "Insertion Sort", "sort": lambda arr: insertionSort(arr)}
        ]
        
        
        import time
        import numpy as np
        import matplotlib.pyplot as plt
        
        elements = np.array([i * 1000 for i in range(1, 5)])
        plt.xlabel('List length')
        plt.ylabel('Time Complexity')
        elements = np.array([i * 1000 for i in range(1, 5)])
        plt.xlabel('List Length')
        plt.ylabel('Time Complexity')
        
        for sort in sorts:
            times = list()
            start_all = time.time()
            for i in range(1, 5):
                start = time.time()
                a = np.random.randint(1000, size=i * 1000)
                sort["sort"](a)
                end = time.time()
                times.append(end - start)
                print(sort["name"], "Sorted", i * 1000, "Elements in", end - start, "s")
            end_all = time.time()
            print(sort["name"], "Sorted Element in", end_all - start_all, "s")
            plt.plot(elements, times, label=sort["name"])
        plt.grid()
        plt.legend()
        plt.show()
        

        `,
        "type": "Lab",
        "description":`
        This code implements three sorting algorithms: selection sort, bubble sort, and insertion sort. It measures the time taken by each algorithm to sort arrays of different lengths and plots the time complexity graph. The code provides a visual comparison of the sorting algorithms based on their performance.
        `,
        "images":[
            'https://i.imgur.com/joPYJuy.png'
        ],
        "explanation":
            [
                "The selection sort algorithm works by repeatedly finding the minimum element in the unsorted portion of the array and swapping it with the first unsorted element. This process continues until the entire array is sorted.",
                "The bubble sort algorithm works by repeatedly comparing adjacent elements in the array and swapping them if they are in the wrong order. This process continues until no more swaps are needed, which means the array is sorted.",
                "The insertion sort algorithm works by repeatedly inserting each element of the array into its correct position in the sorted portion of the array. This process continues until the entire array is sorted.",
                "The time complexity of all three sorting algorithms is O(n^2), which means that the execution time increases quadratically with the size of the input array. However, the insertion sort algorithm is generally faster than the selection sort and bubble sort algorithms.",
                "The code defines a list called `sorts` to store the sorting algorithms. Each algorithm is represented as a dictionary with two keys: `\"name\"` and `\"sort\"`.",
                "The `\"name\"` key stores the name of the sorting algorithm (e.g., \"Selection Sort\").",
                "The `\"sort\"` key stores a lambda function that invokes the corresponding sorting function.",
                "Selection Sort 💀",
                "Function Definition:",
                "The code starts with the definition of the `selectionSort` function, which takes an array as input and performs in-place sorting using the selection sort algorithm.",
                "The selection sort algorithm works by repeatedly finding the minimum element from the unsorted part of the array and placing it at the beginning.",
                "Selection Sort Implementation:",
                "The outer loop iterates over each element of the array, from the first to the last element. It is responsible for selecting the minimum element for each iteration.",
                "Within the outer loop, a variable `min_index` is initialized with the current index `i`.",
                "The inner loop starts from `i+1` and iterates through the remaining elements of the array.",
                "In each iteration of the inner loop, it compares the element at index `j` with the current minimum element at index `min_index`. If a smaller element is found, the `min_index` is updated to point to the new minimum element.",
                "After the inner loop finishes, the minimum element of the unsorted part of the array is found, and it is swapped with the element at index `i`, placing it in the correct sorted position.",
                "This process continues until the entire array is sorted.",
                "Array Initialization and Sorting:",
                "The code initializes an array `arr` with some random unsorted values `[9, 6, 3, 5, 8, 7, 4, 2, 1]`.",
                "The `selectionSort` function is then called with the `arr` array, which performs the selection sort algorithm on the array in-place, sorting it in ascending order.",
                "Printing the Sorted Array:",
                "After sorting the array, the code prints the sorted array using `print(arr)`.",
                "Performance Analysis:",
                "The code also includes a performance analysis section that measures the execution time of the selection sort algorithm for different lengths of arrays.",
                "It uses the `time` module to calculate the execution time.",
                "The `numpy` library is used to create an array `elements` representing the different lengths of arrays to be sorted.",
                "The execution time for sorting each array length is measured using a loop, where a random array is generated using `numpy.random.randint` and then sorted using `selectionSort`.",
                "The execution time for each length is appended to the `times` list.",
                "Finally, the execution time for sorting different lengths of arrays is printed, along with a plot that visualizes the time complexity.",
                "In summary, the code demonstrates the selection sort algorithm by sorting an array and provides a performance analysis by measuring the execution time for different lengths of arrays. The selection sort algorithm repeatedly finds the minimum element and places it at the correct position, resulting in a sorted array.",
                "The code starts with the definition of the `bubbleSort` function, which takes an array as input and performs in-place sorting using the bubble sort algorithm.",
                "The bubble sort algorithm works by repeatedly swapping adjacent elements if they are in the wrong order, until the entire array is sorted.",
                "Bubble Sort Implementation:",
                "The outer loop iterates `n-1` times, where `n` is the length of the array. This loop controls the number of passes needed to sort the array.",
                "Within the outer loop, a variable `swapped` is initialized as `False` to keep track of whether any swapping occurs in a pass. This helps optimize the algorithm by stopping early if the array is already sorted.",
                "The inner loop starts from the first element and iterates through the remaining unsorted elements.",
                "In each iteration of the inner loop, it compares adjacent elements and swaps them if they are in the wrong order (smaller element comes after a larger element).",
                "If any swapping occurs in a pass, the `swapped` variable is set to `True`.",
                "After each pass, the largest element is guaranteed to be at the end of the array, so in the next pass, the inner loop iterates up to `n-i-1`, reducing the number of comparisons in each pass.",
                "If no swapping occurs in a pass (i.e., `swapped` remains `False`), it means the array is already sorted, and the function returns early.",
                "Array Initialization and Sorting:",
                "The code initializes an array `a` with some random unsorted values using `numpy.random.randint`.",
                "The `bubbleSort` function is then called with the `a` array, which performs the bubble sort algorithm on the array in-place, sorting it in ascending order.",
                "Printing the Sorted Array:",
                "After sorting the array, the code prints the time taken to sort different lengths of arrays.",
                "Performance Analysis:",
                "The code also includes a performance analysis section that measures the execution time of the bubble sort algorithm for different lengths of arrays.",
                "It uses the `time` module to calculate the execution time.",
                "The `numpy` library is used to create an array `elements` representing the different lengths of arrays to be sorted.",
                "The execution time for sorting each array length is measured using a loop, where a random array is generated using `numpy.random.randint` and then sorted using `bubbleSort`.",
                "The execution time for each length is appended to the `times` list.",
                "Finally, the execution time for sorting different lengths of arrays is printed, along with a plot that visualizes the time complexity.",
                "In summary, the code demonstrates the bubble sort algorithm by sorting an array and provides a performance analysis by measuring the execution time for different lengths of arrays. Bubble sort repeatedly compares adjacent elements and swaps them if necessary, gradually moving the larger elements towards the end of the array.",
                "The code implements the insertion sort algorithm through the `insertionSort` function, which takes an array as input and sorts the elements in ascending order.",
                "Main Section:",
                "An array `arr` is initialized with some random values.",
                "The `insertionSort` function is called with `arr` as the argument to sort the array in-place.",
                "The sorted array is then printed.",
                "Measuring Time Complexity:",
                "The code continues with a full implementation for measuring the time complexity of the insertion sort algorithm for different input sizes.",
                "The necessary libraries (time, numpy, and matplotlib) are imported.",
                "An array `elements` is created using numpy to store the different input sizes.",
                "The plot labels for the x-axis and y-axis are set.",
                "A list `times` is initialized to store the execution times for each input size.",
                "A loop is used to iterate over the different input sizes, ranging from 1,000 to 4,000 in steps of 1,000.",
                "Inside the loop:",
                "The current input size is used to generate a random array `a` using the `numpy.random.randint()` function.",
                "The `insertionSort` function is called with `a` as the argument to sort the array in-place.",
                "The start and end times are recorded using `time.time()` to measure the execution time.",
                "The difference between the end and start times is appended to the `times` list.",
                "The execution time for the current input size is printed.",
                "After the loop, the total execution time for all input sizes is calculated and printed.",
                "Finally, a plot is generated using `matplotlib.pyplot` to visualize the time complexity. The input sizes (elements) are plotted on the x-axis, and the corresponding execution times (times) are plotted on the y-axis. The plot is displayed using `plt.show()`.",
                "The purpose of this code is to demonstrate the time complexity of the insertion sort algorithm by measuring its execution time for different input sizes and visualizing the results using a plot.",
        ],
        "ytLink": "https://www.youtube.com/embed/9oWd4VJOwr0",
        "sources": [
            {
                "name": "Geeks for Geeks",
                "url": "https://www.geeksforgeeks.org/python-program-for-selection-sort/"
            },
            {
                "name": "Tutorials Point",
                "url": "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python"
            }
        ]

    },
    {
        "name": "implement-binary-search-using-recursion-compute-space-and-time-complexities",
        "title": "Implement Binary Search using recursion Compute space and time complexities.",
        "code": `

        def binarySearch(array, target, si, ei):
            if si > ei:
                return -1
            middle_element = (si + ei) // 2
            if array[middle_element] == target:
                return middle_element
            elif target < array[middle_element]:
                return binarySearch(array, target, si, middle_element - 1)
            else:
                return binarySearch(array, target, middle_element + 1, ei)
        
        import time
        import numpy as np
        import matplotlib.pyplot as plt
        
        elements = np.array([i * 1000 for i in range(1, 40)])
        plt.xlabel('List length')
        plt.ylabel('Time Complexity')
        times = list()
        
        for i in range(1, 40):
            start = time.time()
            a = np.random.randint(1000, size=i * 1000)
            binarySearch(a, 1, 0, len(a) - 1)
            end = time.time()
            times.append(end - start)
            print("Time Taken to Binary Search in ", i * 1000, "Elements is", end - start, "s")
        end_all = time.time()
        x
        plt.plot(elements, times, label="Binary Sort")
        plt.grid()
        plt.legend()
        plt.show()


        `,
        "type": "Lab",
        "description":`
        The given code implements the binary search algorithm. It defines a binarySearch function that takes an array, target element, start index (si), and end index (ei) as parameters. The function recursively performs binary search on the array to find the target element. It compares the target element with the middle element of the current range and narrows down the search range accordingly until the target element is found or the search range is empty.
        `,
        "images":[
            "https://i.imgur.com/XbH1FrW.png"
        ],
        "explanation":[
            "Binary search is an efficient algorithm for finding an element in a sorted array.",
  "It follows a divide-and-conquer approach, repeatedly dividing the search space in half until the target element is found or the search space is empty.",
  "This code implements the binary search algorithm and analyzes its time complexity.",
  "Code Explanation",
  "Main Code",
  "The binarySearch function is defined to perform the binary search.",
  "It takes an array, target element, start index (si), and end index (ei) as parameters.",
  "Binary Search Algorithm",
  "Check if the start index si is greater than the end index ei. If true, return -1 indicating that the target element was not found.",
  "Calculate the middle element index as the average of si and ei, using integer division to obtain the floor value.",
  "Compare the target element with the middle element of the current range:",
  "If they are equal, return the middle element index indicating a successful match.",
  "If the target element is less than the middle element, recursively call binarySearch with the same array, target, si, and middle_element - 1 as the new end index. This narrows down the search range to the lower half of the array.",
  "If the target element is greater than the middle element, recursively call binarySearch with the same array, target, middle_element + 1 as the new start index, and ei as the end index. This narrows down the search range to the upper half of the array.",
  "Time Complexity Analysis",
  "The code measures the time taken by the binary search algorithm for arrays of increasing lengths.",
  "It uses the numpy.random.randint function to generate random arrays with sizes ranging from 1,000 to 39,000 elements.",
  "For each array size:",
  "Start the timer (start = time.time()).",
  "Generate a random array of the specified size using numpy.random.randint.",
  "Perform binary search on the array to find the target element 1, using binarySearch.",
  "Stop the timer (end = time.time()).",
  "Calculate the elapsed time by subtracting start from end and append it to the times list.",
  "Print the time taken for the current array size.",
  "Repeat the above steps for all array sizes.",
  "Plot a graph using matplotlib.pyplot to visualize the relationship between the array size and the corresponding time taken.",
  "Conclusion",
  "The code demonstrates the implementation and time complexity analysis of the binary search algorithm.",
  "The time complexity of binary search is logarithmic, i.e., O(log n), where n is the size of the array.",
  "This means that the time taken by the algorithm increases slowly as the array size grows.",
  "The plotted graph helps visualize the logarithmic time complexity as the array size increases."
],
        "ytLink": "https://www.youtube.com/embed/V_T5NuccwRA",
        "sources": [
            {
                "name": "Binary Search",
                "url": "https://chortle.ccsu.edu/java5/Notes/chap53B/ch53B_18.html"
            },
            {
                "name": "Programiz",
                "url": "https://www.programiz.com/dsa/binary-search"
            }
        ]

    },
    {
        "name": "implement-merge-and-quick-sorting-algorithms-compute-space-and-time-complexities",
        "title": "Implement Merge and quick sorting algorithms compute space and time complexities",
        "code": `

        def mergeSort(arr): 
            if len(arr) > 1:
                a = len(arr) //2
                l = arr[:a]
                r = arr[a:]
                # sort the two halves
                mergeSort(l)
                mergeSort(r)
                i = j = k = 0
                while i < len(l) and j < len(r):
                    if l[i] < r[j]:
                        arr[k] = l[i] 
                        i += 1
                    else:
                        arr[k] = r[j]
                        j += 1
                    k += 1
                while i < len(l):
                    arr[k] = l[i]
                    i += 1
                    k += 1
                while j < len(r):
                    arr[k] = r[j]
                    j += 1
                    k += 1

        
        import time
        import numpy as np
        import matplotlib.pyplot as plt
        
        elements = np.array([i*1000 for i in range(1, 5)])
        plt.xlabel('List length')
        plt.ylabel('Time Complexity')
        elements = np.array([i*1000 for i in range(1, 5)])
        plt.xlabel('List Length')
        plt.ylabel('Time Complexity')
        
        times = list()
        start_all = time.time()
        for i in range(1, 5):
            start = time.time()
            a = np.random.randint(1000, size=i*1000)
            mergeSort(a)
            end = time.time()
            times.append(end - start)
            print("Merge Sort Sorted", i*1000, "Elements in", end - start, "s")
        end_all = time.time()
        print("Merge Sort Sorted Elements in", end_all - start_all, "s")
        plt.plot(elements, times, label="Merge Sort")
        plt.grid()
        plt.legend()
        plt.show()
        
        `,
        "type": "Lab",
        "description":`
        Quick Sort: Efficient divide-and-conquer algorithm with O(n log n) average and worst-case time complexity for sorting large datasets.
        \nMerge Sort: Effective divide-and-conquer algorithm with O(n log n) average and worst-case time complexity for sorting large datasets by recursively dividing, sorting, and merging sub-lists.
        `,
        "images":[
            "https://i.imgur.com/A0ahBuh.png"
        ],
        "explanation":[
            "Merge Sort Algorithm",
            "Introduction",
            "The Merge Sort algorithm is a divide-and-conquer algorithm that recursively divides the input list into smaller sublists until each sublist contains only one element.",
            "It then merges these sublists in a sorted manner until a single sorted list is obtained.",
            "Code Explanation",
            "Divide:",
            "The input list is divided into two halves, approximately of equal size.",
            "Conquer:",
            "Recursively sort the two halves by applying the Merge Sort algorithm.",
            "Merge:",
            "Merge the two sorted halves into a single sorted list by comparing and merging the elements.",
            "Code Implementation",
            "The code starts by defining the mergeSort function, which performs the Merge Sort algorithm on an input array.",
            "It recursively divides the array into smaller subarrays and then merges them to obtain the final sorted array.",
            "The code also includes a section for the full code implementation, which measures the time complexity of the Merge Sort algorithm for sorting different-sized lists of elements.",
            "Initialization:",
            "The code initializes an empty list (times) to store the execution times for different list lengths.",
            "It also creates a range of list lengths (elements) for which the time complexity will be measured.",
            "Loop:",
            "The code loops over each list length in the elements range.",
            "Sorting and Timing:",
            "For each list length, the code generates a random list of integers using NumPy's random.randint() function.",
            "It then applies the mergeSort function to sort the list and measures the execution time using the time.time() function.",
            "The execution time is appended to the times list.",
            "Printing and Plotting:",
            "After sorting each list length, the code prints the number of elements and the corresponding execution time.",
            "Finally, it plots the list lengths (elements) on the x-axis and the execution times (times) on the y-axis using Matplotlib, with the label \"Merge Sort\" for the legend.",
            "Conclusion",
            "The given code demonstrates the implementation of the Merge Sort algorithm and measures its time complexity for sorting different-sized lists of elements.",
            "The execution times are recorded and plotted, allowing for an analysis of the algorithm's performance as the list length increases.",
            "Merge Sort has an average and worst-case time complexity of O(n log n), making it an efficient sorting algorithm for large datasets.",
            "Quick Sort Algorithm",
            "Introduction",
            "The Quick Sort algorithm is a divide-and-conquer algorithm that works by selecting a pivot element and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
            "The sub-arrays are then recursively sorted.",
            "Code Explanation",
            "Choose a pivot:",
            "Select an element from the array as the pivot element.",
            "Partition:",
            "Rearrange the array in such a way that all elements smaller than the pivot are placed before it, and all elements greater than the pivot are placed after it.",
            "The pivot element will be in its final sorted position.",
            "Recursively sort sub-arrays:",
            "Apply the Quick Sort algorithm recursively to the sub-array on the left of the pivot and the sub-array on the right of the pivot.",
            "Code Implementation",
            "The code starts by defining two functions: partition and quickSort.",
            "The partition function performs the partitioning process.",
            "It selects the last element as the pivot and rearranges the elements accordingly.",
            "It returns the index of the pivot element.",
            "The quickSort function serves as the main function for implementing the Quick Sort algorithm.",
            "It recursively applies the quickSort function to the sub-arrays on the left and right of the pivot.",
            "After defining the functions, the code includes a section for the full code implementation.",
            "Initialization:",
            "The code initializes an empty list (times) to store the execution times for different list lengths.",
            "It also creates a range of list lengths (elements) for which the time complexity will be measured.",
            "Loop:",
            "The code loops over each list length in the elements range.",
            "Sorting and Timing:",
            "For each list length, the code generates a random list of integers and applies the quickSort function to sort the list.",
            "It measures the execution time and appends it to the times list.",
            "Printing and Plotting:",
            "After sorting each list length, the code prints the number of elements and the corresponding execution time.",
            "Finally, it plots the list lengths on the x-axis and the execution times on the y-axis, with the label \"Quick Sort\" for the legend.",
            "Conclusion",
            "The given code demonstrates the implementation of the Quick Sort algorithm and measures its time complexity for sorting different-sized lists of elements.",
            "The execution times are recorded and plotted, allowing for an analysis of the algorithm's performance as the list length increases.",
            "Quick Sort has an average time complexity of O(n log n) and a worst-case time complexity of O(n^2), but it is generally considered efficient and widely used for sorting large datasets."
],
        "ytLink": "https://www.youtube.com/embed/4VqmGXwpLqc",
        "sources": [
            {
                "name": "Programiz",
                "url": "https://www.programiz.com/dsa/merge-sort"
            },
            {
                "name": "Geeks For Geeks",
                "url": "https://www.geeksforgeeks.org/quick-sort/"
            }
        ]

    },
    {
        "name": "implement-fibonacci-sequence-with-dynamic-programming",
        "title": "Implement Fibonacci sequence with dynamic programming.",
        "code": `

        def fib(n):
            a = [0, 1]
            for i in range(2, n+1):
                a.append(a[i-1] + a[i-2])
            return a
    
        print(fib(2))
        print(fib(3))
        print(fib(5))
        print(fib(6))s
        print(fib(7))
        print(fib(8))

        `,
        "type": "Lab",
        "description":"The code calculates the Fibonacci sequence up to a given number `n` and returns the sequence as a list. It uses a `for` loop to generate the Fibonacci numbers and appends them to a list. The function is then called with different values of `n` to print the corresponding Fibonacci sequences.",
        "explanation":[
            "Function Definition:",
  "The code defines a function called fib that calculates the Fibonacci sequence up to the given input n.",
  "The function takes a single parameter n, which represents the number of Fibonacci sequence elements to generate.",
  "The function will return a list containing the Fibonacci sequence up to the nth element.",
  "Fibonacci Sequence Initialization:",
  "Inside the function, a list named a is initialized with the first two elements of the Fibonacci sequence: [0, 1].",
  "a[0] represents the 0th Fibonacci number (0) and a[1] represents the 1st Fibonacci number (1).",
  "Fibonacci Sequence Calculation:",
  "A for loop is used to calculate the remaining Fibonacci numbers up to the nth element.",
  "The loop starts from 2 and goes up to n+1 (inclusive).",
  "In each iteration, the next Fibonacci number is calculated by summing the previous two numbers in the sequence (a[i-1] and a[i-2]).",
  "The newly calculated Fibonacci number is then appended to the a list using the append method.",
  "Return the Fibonacci Sequence:",
  "Once the loop completes, the function returns the a list, which contains the Fibonacci sequence up to the nth element.",
  "Testing the Function:",
  "The print statements at the end of the code call the fib function with different values of n to test its functionality.",
  "The function is called with n equal to 2, 3, 5, 6, 7, and 8.",
  "The returned Fibonacci sequences are printed, and the output will be:",
  "[0, 1, 1]",
  "[0, 1, 1, 2]",
  "[0, 1, 1, 2, 3, 5]",
  "[0, 1, 1, 2, 3, 5, 8]",
  "[0, 1, 1, 2, 3, 5, 8, 13]",
  "[0, 1, 1, 2, 3, 5, 8, 13, 21]",
  "In summary, the code defines a function fib that generates the Fibonacci sequence up to a given number n.",
  "The Fibonacci sequence is calculated using a for loop and stored in a list, which is then returned by the function.",
  "The code demonstrates the functionality of the fib function by printing Fibonacci sequences for different values of n."
],
        "ytLink": "https://www.youtube.com/embed/7Sv4NmvdHcw",
        "sources": [
            {
                "name": "Byjus",
                "url": "https://byjus.com/maths/fibonacci-sequence/"
            },
            {
                "name": "Elearning Industry",
                "url": "https://elearningindustry.com/fibonacci-sequence-what-is-and-how-applies-agile-development"
            }
        ]

    },
    {
        "name": "implement-singly-linked-list",
        "title": "Implement Singly linked list (Traversing the Nodes, searching for a Node, Prepending Nodes, Removing Nodes)",
        "code": `
        # Node class

        class Node:
            def __init__(self, data):
                self.data = data
                self.next = None
        
        def printLL(head):
            curr = head
            while curr:
                print(curr.data, end=" -> ")
                curr = curr.next
            print("None")
        
        def searching(head, data):
            curr = head
            while curr:
                if curr.data == data:
                    return True
                curr = curr.next
            return False
        
        def input(data):
            head = None
            tail = None
            for item in data:
                newNode = Node(item)
                if not head:
                    head = newNode
                    tail = newNode
                else:
                    tail.next = newNode
                    tail = newNode
            return head
        
        def removeNode(head, data):
            if head and head.data == data:
                return head.next
            curr = head
            while curr and curr.next:
                if curr.next.data == data:
                    curr.next = curr.next.next
                    break
                curr = curr.next
            return head
        
        myList = input([42, 32, 22, 2, 12])
        printLL(myList)
        print("Search for 93:", searching(myList, 93))
        print("Searching for 12:", searching(myList, 12))
        print("Removing 12 from the list")
        myList = removeNode(myList, 12)
        printLL(myList)
                
        `,
        "type": "Lab",
        "description":"The provided code implements a linked list data structure in Python with functions for printing, searching, prepending, and removing nodes. It demonstrates basic operations on a linked list such as traversal, modification, and manipulation of nodes.",
        "explanation":[
            "Node Class",
            "The Node class represents a single node in the linked list. Each node contains a data attribute to store the value and a next attribute to point to the next node in the list.",
            "printLL Function",
            "The printLL function takes the head of a linked list as input and prints the elements of the linked list in order. It traverses the linked list starting from the head and prints each node's data followed by an arrow (->). Finally, it prints \"None\" to indicate the end of the list.",
            "searching Function",
            "The searching function takes the head of a linked list and a data value as input. It searches for the given data in the linked list and returns True if the data is found and False otherwise. It uses a while loop to iterate through the linked list, comparing the data of each node with the target value.",
            "input Function",
            "The input function takes a list as input and constructs a linked list from the elements of the list. It creates a new node for each element and connects the nodes together to form a linked list. It returns the head of the linked list.",
            "prependingNode Function",
            "The prependingNode function takes the head of a linked list and a data value as input. It creates a new node with the given data and inserts it at the beginning of the linked list. If the linked list is empty (head is None), it simply returns the new node as the new head. Otherwise, it sets the next attribute of the new node to the current head and returns the new node as the new head.",
            "remove Function",
            "The remove function takes the head of a linked list and a data value as input. It searches for the node with the given data in the linked list and removes that node from the list. It uses two pointers, curr and prev, to traverse the list. When the node with the target data is found, the prev.next pointer is modified to skip the current node, effectively removing it from the list.",
            "Usage Example",
            "The code demonstrates the usage of the implemented functions:",
            "It creates a linked list with the elements [1, 2, 3, 4, 5, 6, 7, 8] using the input function and assigns the head to the head variable.",
            "It prints the initial linked list using the printLL function.",
            "It searches for the value 10 in the linked list using the searching function (although it does not capture or use the result).",
            "It prepends the value 5 to the linked list using the prependingNode function and updates the head variable.",
            "It prints the modified linked list after prepending the node.",
            "It removes the node with the value 4 from the linked list using the remove function.",
            "It prints the final linked list after removing the node.",
            "The purpose of this code is to demonstrate the basic operations on a linked list such as printing, searching, inserting at the beginning, and removing nodes."
],
        "ytLink": "https://www.youtube.com/embed/R9PTBwOzceo",
        "sources": [
            {
                "name": "Java Point",
                "url": "https://www.javatpoint.com/ds-linked-list"
            },
            {
                "name": "Geeks For Geeks",
                "url": "https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/"
            }
        ]

    },
    {
        "name": "implement-linked-list-iterators",
        "title": "Implement linked list Iterators",
        "code": `

        class Iter:
        def __init__(self, limit):
            self.limit = limit
    
        def __iter__(self):
            self.x = 10
            return self
    
        def __next__(self):
            x = self.x
            if x > self.limit:
                raise StopIteration
            self.x = x + 1
            return x
    
    
    for i in Iter(13):
        print(i)
    
        `,
        "type": "Lab",
        "description":"The provided code defines an iterable class that generates a sequence of numbers from 10 up to a specified limit using the `__iter__` and `__next__` methods. It demonstrates the implementation of a custom iterator in Python.",
        "explanation":[
            "Code Explanation: Implementing a Custom Iterator",
            "Iter Class",
            "The Iter class represents the iterator. It has three methods:",
            "__init__(self, limit): This is the constructor method that initializes the iterator object. It takes a single parameter limit, which specifies the upper limit of the sequence. It assigns the limit to the self.limit attribute.",
            "__iter__(self): This method is called when the iterator is initialized or reset. It returns the iterator object itself. In this case, it sets the starting value of the sequence to 10 by assigning self.x = 10.",
            "__next__(self): This method is called to retrieve the next element in the sequence. It returns the next number in the sequence and advances the iterator. If the current number (self.x) exceeds the specified limit (self.limit), it raises a StopIteration exception to signal the end of the iteration. Otherwise, it increments self.x by 1 and returns the current number.",
            "Iterating Over the Iterator",
            "The code demonstrates the usage of the iterator by using it in a for loop:",
            "Iter(13): An instance of the Iter class is created with a limit of 13. The limit determines the maximum value in the generated sequence.",
            "for i in Iter(13): The for loop iterates over the Iter object, which automatically calls the __iter__ method to initialize the iterator.",
            "print(i): Inside the loop, each value generated by the iterator is printed. The loop continues until the StopIteration exception is raised, indicating the end of the iteration.",
            "The output of this code will be a sequence of numbers starting from 10 and ending at 13:",
            "10",
            "11",
            "12",
            "13",
            "The purpose of this code is to demonstrate how to implement a custom iterator in Python using the __iter__ and __next__ methods. It allows you to define your own iteration behavior for custom objects."
],
        "ytLink": "https://www.youtube.com/embed/j4l2FKEvbHY",
        "sources": [
            {
                "name": "C++",
                "url": "https://cplusplus.com/reference/iterator/"
            },
            {
                "name": "Geeks For Geeks",
                "url": "https://www.geeksforgeeks.org/implementing-iterator-pattern-of-a-single-linked-list/"
            }
        ]

    },
    {
        "name": "implement-dll",
        "title": "Implement DLL",
        "code": `

        # Node class

        class Node:
            def __init__(self,data=None):
                self.data = data
                self.next = None
                self.prev = None
                
        class DoublyLinkedList:
            def __init__(self):
                self.head = None
                
            def push(self,data):
                newNode = Node(data)
                newNode.next = self.head
                if self.head is not None:
                    self.head.prev = newNode
                self.head = newNode
                
            def insertAfter(self,prevNode,data):
                if prevNode is None:
                    print("The given previous node can't be NULL")
                    return
                newNode = Node(data)
                newNode.next = prevNode.next
                prevNode.next = newNode
                newNode.prev = prevNode
                if newNode.next:
                    newNode.next.prev = newNode
                    
            def append(self,data):
                newNode = Node(data)
                if self.head is None:
                    self.head = newNode
                    return
                lastNode = self.head
                while lastNode.next:
                    lastNode = lastNode.next
                lastNode.next = newNode
                newNode.prev = lastNode
                
            def print_list(self,node):
                print("Traversal in forward direction")
                while node:
                    print("{}".format(node.data))
                    last = node
                    node = node.next
                print("Traversal in reverse direction")
                while last:
                    print("{}".format(last.data))
                    last = last.prev
                    
        dll = DoublyLinkedList()
        dll.push(1)
        dll.append(2)
        dll.append(3)
        dll.append(4)
        dll.append(5)
        dll.insertAfter(dll.head.next,76)
        print("Created DLL is: ")
        dll.print_list(dll.head)
            
        `,
        "type": "Lab",
        "description":`
        The provided code implements a doubly linked list data structure in Python with various operations such as pushing elements to the front, appending elements at the end, and inserting elements after a given node. It also includes a method to print the elements of the linked list in both forward and reverse directions. The code demonstrates the usage of the doubly linked list by creating an instance of the class, performing several operations on it, and then printing the resulting linked list.
        `,
        "explanation":[
            "Code Explanation: Doubly Linked List Implementation in Python",
            "Node Class",
            "The Node class represents a node in a doubly linked list. It has three attributes: data to store the value of the node, next to store a reference to the next node, and prev to store a reference to the previous node. The __init__ method initializes the node with the given data and sets next and prev to None by default.",
            "DoublyLinkedList Class",
            "The DoublyLinkedList class represents the doubly linked list and provides various methods to manipulate the list.",
            "The __init__ method initializes the doubly linked list with an empty head (initially set to None).",
            "The push method inserts a new node at the beginning of the doubly linked list.",
            "The insertAfter method inserts a new node after a specific node in the doubly linked list.",
            "The append method inserts a new node at the end of the doubly linked list.",
            "The print_list method traverses and prints the elements of the doubly linked list.",
            "Main Code",
            "In the main code, an instance of the DoublyLinkedList class is created, named dll.",
            "Several nodes are added to the list using the push and append methods.",
            "The insertAfter method is used to insert a new node with data 76 after the second node.",
            "Finally, the print_list method is called to print the elements of the doubly linked list."
],
        "ytLink": "https://www.youtube.com/embed/H8-IuKKiQeo",
        "sources": [
            {
                "name": "Geeks For Geeks",
                "url": "https://www.geeksforgeeks.org/introduction-to-doubly-linked-lists-in-java/"
            },
            {
                "name": "Programiz",
                "url": "https://www.programiz.com/dsa/doubly-linked-list"
            }
        ]

    },
    {
        "name": "implement-cdll",
        "title": "Implement CDLL",
        "code": `

        # Node class
        class Node:
            def __init__(self, data=None):
                self.data = data
                self.next = None
                self.prev = None
        
        class CDoublyLinkedList:
            def __init__(self):
                self.head = None
                self.tail = None
        
            def createCDLL(self, data):
                newNode = Node(data)
                self.head = newNode
                self.tail = newNode
                print("The circular doubly linked list has been created")
        
            def insertAtBeg(self, data):
                newNode = Node(data)
                if not self.head:
                    self.head = newNode
                    self.tail = newNode
                else:
                    newNode.next = self.head
                    self.head.prev = newNode
                    self.head = newNode
                self.tail.next = self.head
                self.head.prev = self.tail
        
            def delBeg(self):
                if not self.head:
                    return
                if self.head.next == self.tail.next:
                    self.head = self.tail = None
                else:
                    self.head = self.head.next
                    self.tail.next = self.head
                    self.head.prev = self.tail
        
            def searchList(self, data):
                pos = 0
                tempNode = self.head
                while True:
                    pos += 1
                    if tempNode.data == data:
                        print("The required data was found at position:", pos)
                        break
                    if tempNode == self.tail:
                        print("The required data does not exist in the list")
                        break
                    tempNode = tempNode.next
        
            def display(self):
                if not self.head:
                    print("The linked list does not exist")
                    return
                tempNode = self.head
                while True:
                    print(tempNode.data)
                    if tempNode == self.tail:
                        break
                    tempNode = tempNode.next
        
        
        cdll = CDoublyLinkedList()
        cdll.createCDLL(4)
        cdll.insertAtBeg(3)
        cdll.insertAtBeg(2)
        cdll.insertAtBeg(1)
        print("List contents are:")
        cdll.display()
        cdll.delBeg()
        cdll.delBeg()
        print("List contents after deleting:")
        cdll.display()
        cdll.searchList(70)
        cdll.searchList(7)
        
        `,
        "type": "Lab",
        "description":`
        This code implements a Circular Doubly Linked List data structure in Python, allowing for the creation, insertion, deletion, searching, and display of nodes.
        `,
        "explanation":[
            "Code Explanation: Circular Doubly Linked List Implementation in Python",
            "Node Class",
            "The Node class represents a node in a doubly linked list. It has three attributes: data to store the value of the node, next to point to the next node in the list, and prev to point to the previous node in the list. The __init__ method initializes the node with the given data and sets next and prev to None by default.",
            "CDoublyLinkedList Class",
            "The CDoublyLinkedList class represents a circular doubly linked list. It has two attributes: head to point to the head node of the list and tail to point to the tail node of the list.",
            "createCDLL Method",
            "The createCDLL method is used to create a circular doubly linked list. It takes the initial data for the list as an argument. It creates a new node with the given data and assigns it to both head and tail. This establishes a circular link by making the next and prev references of the node point to itself. Finally, it prints a message to indicate that the circular doubly linked list has been created.",
            "insertAtBeg Method",
            "The insertAtBeg method inserts a new node at the beginning of the circular doubly linked list. It takes the data for the new node as an argument. It creates a new node with the given data. If the list is empty (head is None), it assigns the new node to both head and tail. If the list is not empty, it adjusts the next and prev references of the new node and the existing head node to insert the new node at the beginning. Finally, it updates the next reference of the tail node to the head node and the prev reference of the head node to the tail node, thereby maintaining the circular link.",
            "delBeg Method",
            "The delBeg method deletes the node at the beginning of the circular doubly linked list. If the list is empty (head is None), it returns without performing any deletion. If there is only one node in the list (head and tail point to the same node), it sets both head and tail to None. If there are multiple nodes in the list, it adjusts the next and prev references of the head node and the tail node to remove the first node. Finally, it updates the next reference of the tail node to the new head node and the prev reference of the new head node to the tail node.",
            "searchList Method",
            "The searchList method searches for a specific data value in the circular doubly linked list. It takes the data value to search as an argument. It initializes a position counter and a temporary node variable with the head node. It traverses the list in a loop, comparing the data of each node with the target value. If a match is found, it prints the position of the node and breaks out of the loop. If the loop reaches the tail node without finding a match, it prints a message indicating that the required data does not exist in the list.",
            "display Method",
            "The display method prints the contents of the circular doubly linked list. If the list is empty (head is None), it prints a message indicating that the linked list does not exist and returns. It initializes a temporary node variable with the head node. It traverses the list in a loop, printing the data of each node. If the loop reaches the tail node, it breaks out of the loop.",
            "Main Code",
            "In the main code, an instance of the CDoublyLinkedList class is created, named cdll.",
            "The createCDLL method is called to create the circular doubly linked list with an initial node containing the data 4.",
            "The insertAtBeg method is called three times to insert nodes with data values 3, 2, and 1 at the beginning of the list.",
            "The display method is called to print the contents of the circular doubly linked list.",
            "The delBeg method is called twice to delete nodes from the beginning of the list.",
            "The display method is called again to print the contents of the modified list.",
            "The searchList method is called twice to search for the data values 70 and 7 in the list.",
            "This code demonstrates the operations of creating a circular doubly linked list, inserting nodes at the beginning, deleting nodes from the beginning, searching for data values, and displaying the contents of the list."
],
        "ytLink": "https://www.youtube.com/embed/3ZrkixbHCTI",
        "sources": [
            {
                "name": "Alpha Coding Skills",
                "url": "https://www.alphacodingskills.com/ds/circular-doubly-linked-list.php"
            },
            {
                "name": "PythonWife",
                "url": "https://pythonwife.com/circular-doubly-linked-list-in-python/"
            }
        ]

    },
    {
        "name": "implement-stack-data-structure",
        "title": "Implement Stack Data Structure",
        "code": `
    class Stack:
        def __init__(self):
            self.stack = []

        def is_empty(self):
            return len(self.stack) == 0

        def push(self, item):
            self.stack.append(item)

        def pop(self):
            if self.is_empty():
                print("Stack is empty: Underflow")
            else:
                return self.stack.pop()

        def display(self):
            if self.is_empty():
                print("Stack is empty")
            else:
                print("\n<-top")
                for item in reversed(self.stack):
                    print(item)

    stack = Stack()
    while True:
        print("\nStack operation\n1. Add Student\n2. Display Stack\n3. Remove Student\n4. Exit")
        choice = int(input("Enter your choice (1-4): "))
        if choice == 1:
            roll_no = int(input("Enter roll number to be inserted: "))
            student_name = input("Enter student name to be inserted: \n")
            stack.push((roll_no, student_name))
        elif choice == 2:
            stack.display()
        elif choice == 3:
            removed_item = stack.pop()
            if removed_item is not None:
                print("Deleted student is:", removed_item)
        elif choice == 4:
            break
        else:
            print("Invalid Choice")

        `,
        "type": "Lab",
        "description":`
        The given code implements a Stack data structure using a list. It provides methods to check if the stack is empty, add items to the stack, remove items from the stack, and display the contents of the stack. The code allows users to interactively perform stack operations such as adding students, displaying the stack, removing students, and exiting the program.
        `,
        "explanation":[
            "Code Explanation: Stack Implementation in Python",
            "Stack Class",
            "The Stack class represents a stack data structure. It has one attribute: stack, which is a list that serves as the underlying data structure for the stack.",
            "is_empty Method",
            "The is_empty method checks if the stack is empty. It returns True if the length of the stack is 0, indicating that the stack is empty. Otherwise, it returns False.",
            "push Method",
            "The push method adds an item to the stack. It takes an item as an argument and appends it to the end of the stack list using the append method.",
            "pop Method",
            "The pop method removes and returns the top item from the stack. If the stack is empty (checked using is_empty), it prints a message indicating that the stack is empty and there is an underflow. Otherwise, it uses the pop method on the stack list to remove and return the last item.",
            "display Method",
            "The display method displays the contents of the stack. If the stack is empty (checked using is_empty), it prints a message indicating that the stack is empty. Otherwise, it iterates over the stack list in reverse order using the reversed function and prints each item on a new line.",
            "Main Code",
            "In the main code, an instance of the Stack class is created, named stack.",
            "The code enters an infinite loop to repeatedly perform stack operations until the user chooses to exit.",
            "Inside the loop, a menu is displayed to the user, asking for their choice.",
            "If the user chooses:",
            "1: They are prompted to enter a roll number and student name, which are then pushed onto the stack as a tuple (roll_no, student_name).",
            "2: The display method is called to print the contents of the stack.",
            "3: The pop method is called to remove the top item from the stack, and the removed item (if any) is printed.",
            "4: The loop is broken, and the program exits.",
            "Any other choice: An \"Invalid Choice\" message is printed.",
            "This code allows the user to add students (roll number and name) to the stack, display the stack contents, remove students from the stack, and exit the program. The stack operations are implemented using the methods defined in the Stack class."
],
        "ytLink": "https://www.youtube.com/embed/I37kGX-nZEI",
        "sources": [
            {
                "name": "Geeks For Geeks",
                "url": "https://www.geeksforgeeks.org/stack-data-structure/"
            },
            {
                "name": "Java point",
                "url": "https://www.javatpoint.com/data-structure-stack"
            }
        ]

    },
    {
        "name": "implement-bracket-matching-using-stack",
        "title": "Implement Bracket matching using stack.",
        "code": `

    def checkBalance(expr):
        stack = []
        for char in expr:
            if char in ["(", "{", "["]:
                stack.append(char)
            else:
                if not stack:
                    return False
                currChar = stack.pop()
                if currChar == "(":
                    if char != ")":
                        return False
                if currChar == "{":
                    if char != "}":
                        return False
                if currChar == "[":
                    if char != "]":
                        return False
        if stack:
            return False
        return True

    expr = "{{[()]}}"
    if checkBalance(expr):
        print("The given string is balanced")
    else:
        print("The given string is not balanced")

        `,
        "type": "Lab",
        "description":`
        The checkBalance function uses a stack-based approach to check if an expression containing parentheses, curly braces, and square brackets is balanced, returning True if it is and False otherwise.
        `,
        "explanation":[
            "Code Explanation: Checking Balanced Parentheses, Curly Braces, and Square Brackets using a Stack",
            "checkBalance Function",
            "The checkBalance function checks if a given expression expr containing parentheses, curly braces, and square brackets is balanced. It uses a stack to keep track of opening symbols and ensures that the closing symbols match the corresponding opening symbols.",
            "Stack Initialization",
            "The stack is initialized as an empty list.",
            "Iterating Over Characters",
            "The function iterates over each character char in the expr string.",
            "Opening Symbols",
            "If the character char is an opening symbol (i.e., '(', '{', or '['), it is pushed onto the stack using the append method.",
            "Closing Symbols",
            "If the character char is a closing symbol, the function performs the following checks:",
            "If the stack is empty (i.e., there are no corresponding opening symbols for the current closing symbol), it means the expression is unbalanced. In this case, the function returns False.",
            "If the stack is not empty, it pops the top character currChar from the stack using the pop method.",
            "It then checks if currChar matches the expected closing symbol for the current character char.",
            "If they don't match, it means the expression is unbalanced, and the function returns False.",
            "Final Check",
            "After iterating through all the characters in the expression, the function performs a final check:",
            "If there are remaining opening symbols in the stack (i.e., the stack is not empty), it means the expression is unbalanced. In this case, the function returns False.",
            "If the stack is empty, it means all opening and closing symbols are properly balanced, and the function returns True.",
            "Main Code",
            "In the main code, a string expr is defined, representing the expression to be checked for balanced parentheses, curly braces, and square brackets.",
            "The checkBalance function is called with expr as an argument.",
            "If the function returns True, it means the expression is balanced, and the message \"The given string is balanced\" is printed.",
            "If the function returns False, it means the expression is unbalanced, and the message \"The given string is not balanced\" is printed.",
            "This code allows you to check whether a given expression containing parentheses, curly braces, and square brackets is balanced or not using a stack-based approach. It ensures that opening and closing symbols are properly matched in the expression."
],
        "ytLink": "https://www.youtube.com/embed/aKTGpBeOeZg",
        "sources": [
            {
                "name": "Geeks For Geeks",
                "url": "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression//"
            },
            {
                "name": "Coding Ninjas",
                "url": "https://www.codingninjas.com/blog/2021/09/09/understanding-balanced-parentheses/"
            }
        ]

    },
    {
        "name": "program-to-demonstrate-recursive-operations",
        "title": "Program to  demonstrate  recursive operations",
        "code": `

    def fact(n):
        if (n==0 or n==1):
            return 1
        return n * fact(n-1)
    
    n = int(input("Enter the value: "))
    res = fact(n)
    print("Factorial of",n,"is",res)
    
        `,
        "type": "Lab",
        "description":`
        The code implements a recursive function to calculate the factorial of a number using the concept of repeated multiplication. It takes user input, performs the factorial calculation, and displays the result.
        `,
        "explanation":[
            "Code Explanation: Calculating Factorial Recursively",
  "fact Function",
  "The fact function calculates the factorial of a given number n recursively. It uses the concept of a recursive function where the factorial of n is defined as the product of n and the factorial of n-1.",
  "Base Case",
  "The base case of the recursive function is defined when n is 0 or 1. In this case, the function returns 1 since the factorial of 0 and 1 is 1.",
  "Recursive Step",
  "For n greater than 1, the function recursively calls itself with the argument n-1 and multiplies it by n. This recursive step continues until the base case is reached.",
  "Returning the Result",
  "The result of the factorial calculation is returned as the output of the function.",
  "Main Code",
  "In the main code, an integer n is taken as input from the user, representing the value for which the factorial will be calculated.",
  "The fact function is called with n as an argument, and the result is assigned to the variable res.",
  "Finally, the calculated factorial value is displayed using the print function.",
  "This code allows you to calculate the factorial of a given number using a recursive approach. It breaks down the factorial calculation into simpler subproblems until it reaches the base case."
],
        "ytLink": "https://www.youtube.com/embed/gfhtaP5Wq7M",
        "sources": [
            {
                "name": "Geeks For Geeks",
                "url": "https://www.geeksforgeeks.org/java-program-to-find-factorial-of-a-number-recursively"
            },
            {
                "name": "Programiz",
                "url": "https://www.programiz.com/python-programming/examples/factorial-recursion"
            }
        ]

    },
    {
        "name": "implement-solution-for-tower-of-hanoi",
        "title": "Implement solution  for Tower of Hanoi",
        "code": `

        def towerOfHanoi(n, source, auxiliary, destination):
            if n == 1:
                print(f"Move disk 1 from source {source} to destination {destination}")
                return
            towerOfHanoi(n - 1, source, destination, auxiliary)
            print(f"Move disk {n} from source {source} to destination {destination}")
            towerOfHanoi(n - 1, auxiliary, source, destination)
    
        n = int(input("Enter the disk number: "))
        towerOfHanoi(n, 'A', 'B', 'C')
            
        `,
        "type": "Lab",
        "description":`
        The code implements the Tower of Hanoi puzzle solution using a recursive algorithm. It takes the number of disks as input, recursively solves the subproblems to move the disks, and prints the sequence of moves required to solve the puzzle.
        `,
        "images": [
            "https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/TV-Tower-of-Hanoi-normal-image01.jpg"
        ],
        "explanation":[
            "The Tower of Hanoi problem can be solved using a recursive approach.",
  "The algorithm can be summarized as follows:",
  "Define the function towerOfHanoi(n, source, auxiliary, destination): This function takes four parameters - n (number of disks), source (the rod where the disks are initially placed), auxiliary (the spare rod), and destination (the rod where the disks need to be moved). The purpose of this function is to print the sequence of moves required to solve the Tower of Hanoi problem.",
  "Check the base case: If there is only one disk (n == 1), move it directly from the source rod to the destination rod and print the move. Return from the function.",
  "Recursively solve the subproblems: If there are more than one disk (n > 1), recursively solve the subproblem of moving n-1 disks from the source rod to the auxiliary rod, using the destination rod as the spare rod. Print the move. Recursively solve the remaining subproblem of moving n-1 disks from the auxiliary rod to the destination rod, using the source rod as the spare rod.",
  "Code Explanation",
  "The provided code implements the Tower of Hanoi algorithm:",
  "def towerOfHanoi(n, source, auxiliary, destination): If n == 1: print(f\"Move disk 1 from source {source} to destination {destination}\") return towerOfHanoi(n - 1, source, destination, auxiliary) print(f\"Move disk {n} from source {source} to destination {destination}\") towerOfHanoi(n - 1, auxiliary, source, destination) n = int(input(\"Enter the disk number: \")) towerOfHanoi(n, 'A', 'B', 'C')",
  "The code defines the function towerOfHanoi that takes the parameters n, source, auxiliary, and destination. It follows the recursive approach to solve the Tower of Hanoi problem.",
  "The base case is checked using n == 1. If true, it means there is only one disk remaining, so it is moved directly from the source rod to the destination rod. The move is printed.",
  "If n is greater than 1, the function makes recursive calls to solve the subproblems. It first moves n-1 disks from the source rod to the auxiliary rod using the destination rod as the spare rod. The move is printed. Then it recursively moves the remaining n-1 disks from the auxiliary rod to the destination rod using the source rod as the spare rod.",
  "The user is prompted to enter the number of disks n and the towerOfHanoi function is called with the provided arguments to solve the Tower of Hanoi problem."
],
        "ytLink": "https://www.youtube.com/embed/YstLjLCGmgg",
        "sources": [
            {
                "name": "Semantics Scholar",
                "url": "https://www.semanticscholar.org/paper/The-Tower-of-Hanoi-Myths-and-Maths-Hinz-Klav%C5%BEar/98b4202d35d1f42564b9f2220ffe614d832b0168"
            },
            {
                "name": "Geeks for Geeks",
                "url": "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/"
            }
        ]

    },
    {
        "name": "implement-queue",
        "title": "Implement Queue",
        "code": `
        # Queue
        queue = []
        
        def enqueue():
            element = input("Enter the element: ")
            queue.append(element)
            print("Element is added to queue")
            print(queue)
        
        def dequeue():
            if not queue:
                print("Queue is empty")
            else:
                e = queue.pop(0)
                print("Element removed ", e)
                print(queue)
        
        def display():
            print(queue)
        
        while True:
            print("Select the operation: 1. Add  2. Remove  3. Show  4. Quit")
            choice = int(input())
            if choice == 1:
                enqueue()
            elif choice == 2:
                dequeue()
            elif choice == 3:
                display()
            elif choice == 4:
                print("Quit")
                break
            else:
                print("Enter the correct operation")
            
        `,
        "type": "Lab",
        "description":`
        The code implements queue operations using a list in Python, allowing users to add elements, remove elements, and display the current contents of the queue interactively.
        `,
        "explanation":[
            "The provided code implements a queue data structure using a list in Python. It offers the following operations:",
            "enqueue(): This operation adds an element to the end of the queue. It prompts the user to enter an element, appends it to the queue list, and displays a message along with the updated queue.",
            "dequeue(): This operation removes an element from the front of the queue. If the queue is empty, it displays a message. Otherwise, it removes the element at index 0 from the queue list using pop(0), displays the removed element, and shows the updated queue.",
            "display(): This operation displays the current contents of the queue by printing the queue list.",
            "Code Explanation",
            "The code defines the operations and implements a menu-based loop to interact with the queue:",
            "queue = []",
            "def enqueue(): element = input(\"Enter the element: \") queue.append(element) print(\"Element is added to the queue\") print(queue)",
            "def dequeue(): if not queue: print(\"Queue is empty\") else: e = queue.pop(0) print(\"Element removed:\", e) print(queue)",
            "def display(): print(queue)",
            "while True: print(\"Select the operation: 1. Add  2. Remove  3. Show  4. Quit\") choice = int(input()) if choice == 1: enqueue() elif choice == 2: dequeue() elif choice == 3: display() elif choice == 4: print(\"Quit\") break else: print(\"Enter the correct operation\")",
            "The code initializes an empty list called queue to store the elements.",
            "The enqueue() function prompts the user to enter an element, appends it to the queue list, and displays a message along with the updated queue.",
            "The dequeue() function checks if the queue list is empty. If it is, it prints a message indicating that the queue is empty. Otherwise, it removes the element at index 0 using pop(0), stores it in the variable e, prints the removed element, and shows the updated queue.",
            "The display() function simply prints the queue list to display the current contents.",
            "The program enters an infinite loop using while True. It displays a menu to the user with the available operations: Add, Remove, Show, and Quit. It prompts the user to enter a choice (1-4). Based on the user's choice, it calls the corresponding operation function (enqueue(), dequeue(), display()), or exits the loop if the choice is 4 (Quit). If the choice is not valid, it displays a message indicating that the user should enter the correct operation.",
            "This code allows users to interactively perform queue operations and see the resulting changes in the queue."
],
        "ytLink": "https://www.youtube.com/embed/zp6pBNbUB2U",
        "sources": [
            {
                "name": "Simpli learn",
                "url": "https://www.simplilearn.com/tutorials/data-structure-tutorial/queue-in-data-structure"
            },
            {
                "name": "Programiz",
                "url": "https://www.programiz.com/dsa/queue/"
            }
        ]

    },
    {
        "name": "implement-priority-queue",
        "title": "Implement Priority Queue",
        "code": `

        import queue
        q = queue.PriorityQueue()
        q.put(10)
        q.put(60)
        q.put(20)
        q.put(110)
        q.put(40)
        print(q.get())
        print(q.get())
        print(q.get())
        print(q.get())
        print(q.get())
            
        `,
        "type": "Lab",
        "description":`
        The code utilizes the PriorityQueue class from the queue module to implement a priority queue. Elements are added to the queue based on their priority and retrieved in the order of their priority.
        `,
        "explanation":[
            "Introduction",
  "The given code demonstrates the use of the PriorityQueue class from the queue module in Python. A priority queue is a data structure where each element has a priority associated with it. Elements are retrieved in the order of their priority, with the highest priority element being dequeued first.",
  "Code Explanation",
  "The code provides an example of using a priority queue:",
  "import queue",
  "q = queue.PriorityQueue()",
  "q.put(10)",
  "q.put(60)",
  "q.put(20)",
  "q.put(110)",
  "q.put(40)",
  "print(q.get())",
  "print(q.get())",
  "print(q.get())",
  "print(q.get())",
  "print(q.get())",
  "The code begins by importing the queue module, which provides the PriorityQueue class for implementing a priority queue.",
  "A priority queue object q is created using the PriorityQueue() constructor.",
  "Elements are added to the priority queue using the put() method, which inserts elements based on their priority.",
  "The elements are retrieved from the priority queue using the get() method, which dequeues elements in the order of their priority. The retrieved elements are printed using the print() function.",
  "This code demonstrates the usage of the PriorityQueue class to implement a priority queue and retrieve elements based on their priority."
],
        "ytLink": "https://www.youtube.com/embed/m9SVfOYTaBQ",
        "sources": [
            {
                "name": "Geeks for Geeks",
                "url": "https://www.geeksforgeeks.org/priority-queue-set-1-introduction/"
            },
            {
                "name": "Oracle",
                "url": "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/PriorityQueue.html"
            }
        ]
    },
    {
        "name": "implement-binary-search-tree-and-its-operations-using-list",
        "title": "Implement Binary search tree and its operations using list",
        "code": `

    class Node:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None
                
        def inorder(root):
            if root:
                inorder(root.left)
                print(str(root.data) + "->", end='')
                inorder(root.right)
        
        def insert(node, data):
            if node is None:
                return Node(data)
            if data < node.data:
                node.left = insert(node.left, data)
            else:
                node.right = insert(node.right, data)
            return node
        
        def delete_node(root, key):
            if root is None:
                return root
        
            if key < root.data:
                root.left = delete_node(root.left, key)
            elif key > root.data:
                root.right = delete_node(root.right, key)
            else:
                if not root.left:
                    return root.right
                elif not root.right:
                    return root.left
                temp = minValueNode(root.right)
                root.data = temp.data
                root.right = delete_node(root.right, temp.data)
        
            return root
    
    root = None
    data = [8, 3, 9, 18, 5, 13, 6]
    root = insert(root, data[0])
    [root := insert(root, num) for num in data[1:]]
    
    print("Inorder traversal: ", end='')
    inorder(root)
    
    print("After delete: ")
    root = delete_node(root, 13)
    print("Inorder traversal: ", end='')
    inorder(root)
    
        `,
        "type": "Lab",
        "description":`
        The code illustrates the operations of insertion, deletion, and inorder traversal on a Binary Search Tree (BST) implemented using the Node class. The BST maintains the property that the left child of a node has a smaller value, and the right child has a larger value.
        `,
        "explanation":[
            "The given code demonstrates various operations on a Binary Search Tree (BST) implemented using the Node class. BST is a binary tree where the left child of a node has a smaller value, and the right child has a larger value. The code showcases the insertion of nodes into the BST, deletion of a node, and the inorder traversal of the tree.",
            "Code Explanation",
            "Node Class",
            "The code begins with the definition of the Node class, which represents a node in the BST. Each node contains data, a left child reference, and a right child reference.",
            "Inorder Traversal",
            "The inorder function performs an inorder traversal of the BST and prints the node values in ascending order. It takes a node as a parameter and recursively traverses the left subtree, visits the current node, and then recursively traverses the right subtree.",
            "Insertion Operation",
            "The insert function inserts a new node into the BST. It takes a node and data as parameters. If the given node is None, indicating an empty subtree, a new node with the given data is created and returned. If the data is less than the node's data, the function is called recursively on the left child to insert the data. Otherwise, the function is called recursively on the right child. The updated node reference is returned.",
            "Deletion Operation",
            "The delete_node function deletes a node with a given key from the BST. It takes the root node and the key to be deleted as parameters. If the root is None, indicating an empty tree, the function returns None. If the key is less than the root's data, the function is called recursively on the left subtree. If the key is greater than the root's data, the function is called recursively on the right subtree. If the key matches the root's data, the following steps are performed:",
            "If the root has no left child, the right child replaces the root.",
            "If the root has no right child, the left child replaces the root.",
            "If the root has both left and right children, the minimum value node from the right subtree (smallest value greater than the root) replaces the root. The minimum value node is found by traversing the leftmost node in the right subtree. Its data is copied to the root, and then the delete operation is performed on the right subtree to remove the duplicate node.",
            "BST Creation and Operations",
            "The code creates an empty root node and a list of data values to be inserted into the BST. Using a list comprehension, each data value is inserted into the BST by calling the insert function. The inorder traversal of the tree is printed before and after deleting a specific node (13 in this case) using the inorder function and the delete_node function.",
            "Conclusion",
            "The given code demonstrates the operations performed on a Binary Search Tree (BST) using the Node class. It showcases the insertion of nodes, deletion of a node, and the inorder traversal of the tree."
],
        "ytLink": "https://www.youtube.com/embed/cySVml6e_Fc",
        "sources": [
            {
                "name": "Geeks for Geeks",
                "url": "https://www.geeksforgeeks.org/what-is-binary-search-tree/"
            },
            {
                "name": "Baeldung",
                "url": "https://www.baeldung.com/cs/binary-search-trees"
            }
        ]
    },
    {
        "name": "implementations-of-bfs",
        "title": "Implementations of  BFS",
        "code": `
        import collections
        def bfs(graph,root):
            visited,queue = set(),collections.deque([root])
            visited.add(root)
            while queue:
                vertex = queue.popleft()
                print(str(vertex)+" ",end="")
                for neighbour in graph[vertex]:
                    if neighbour not in visited:
                        visited.add(neighbour)
                        queue.append(neighbour)
        
        if __name__ == '__main__':
            graph = {0:[1,2],1:[2],2:[3],3:[1,2]}
            print("Following is Breadth First Traversal")
            bfs(graph,0)      
    
        `,
        "type": "Lab",
        "description":`
        The code showcases the Breadth-First Search (BFS) algorithm for traversing a graph in breadth-first order, starting from a given root vertex. It uses a queue to keep track of the vertices to visit next and maintains a visited set to track the visited vertices during the traversal.
        `,
        "explanation":[
            "Code Explanation: Breadth-First Search (BFS)",
            "Introduction",
            "The provided code demonstrates the Breadth-First Search (BFS) algorithm for traversing a graph. BFS explores all the vertices of a graph in breadth-first order, starting from a given root vertex. It uses a queue to keep track of the vertices to visit next.",
            "Code Explanation",
            "BFS Function",
            "The bfs function takes two parameters: graph (the graph represented as an adjacency list) and root (the starting vertex for the BFS traversal).",
            "Initialization",
            "Inside the bfs function, a set called visited is created to keep track of the visited vertices. A deque called queue is initialized with the root vertex. The root vertex is added to both the visited set and the queue.",
            "BFS Traversal",
            "The main BFS traversal begins with a while loop that continues until the queue is empty. Inside the loop, the popleft method is used to retrieve and remove the vertex at the front of the queue.",
            "Visiting a Vertex",
            "The visited vertex is printed using print(str(vertex)+\" \", end=\"\"). This displays the vertex value followed by a space, allowing the traversal order to be shown on a single line.",
            "Exploring Neighbors",
            "The for loop iterates over each neighbor of the current vertex, accessed through the graph[vertex] adjacency list. If a neighbor has not been visited, it is added to the visited set and also added to the queue. This ensures that unvisited neighbors will be visited in subsequent iterations.",
            "Graph Representation",
            "After the bfs function definition, a graph is defined as a dictionary. Each key represents a vertex, and the corresponding value is a list of neighbors for that vertex.",
            "Main Function",
            "Finally, the main section of the code checks if the module is being run directly (if __name__ == '__main__':). Inside this block, the graph is defined, and the bfs function is called with the graph and the starting vertex 0. The BFS traversal is then printed as \"Following is Breadth First Traversal\".",
            "Conclusion",
            "The given code demonstrates the Breadth-First Search (BFS) algorithm using a graph represented as an adjacency list. It performs a BFS traversal starting from a given root vertex, visiting all vertices in breadth-first order. The code initializes a visited set and a queue, explores neighbors of vertices, and prints the traversal order."
          ],
        "ytLink": "https://www.youtube.com/embed/pcKY4hjDrxk",
        "sources": [
            {
                "name": "Khan Academy",
                "url": "https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/breadth-first-search-and-its-uses"
            },
            {
                "name": "Geeks for Geeks",
                "url": "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/"
            }
        ]
    },
    {
        "name": "implementation-of-dfs",
        "title": "Implementation of DFS",
        "code": `
        def dfs(graph,start,visited=None):
            if visited is None:
                visited = set()
            visited.add(start)
            print(start)
            for next in graph[start]-visited:
                dfs(graph,next,visited)
            return visited

        graph = {'0':set(['1','2']),
                '1':set(['2']),
                '2':set(['3']),
                '3':set(['1','2'])}

        print("Following is Depth First Traversal: ")
        print(dfs(graph,'0'))

        `,
        "type": "Lab",
        "description":`
        The code showcases the Depth-First Search (DFS) algorithm for traversing a graph in depth-first order, starting from a given starting vertex. It uses recursion to visit the neighbors of each vertex and maintains a visited set to track the visited vertices during the traversal.
        `,
        "explanation":[
            "Code Explanation: Depth-First Search (DFS)",
            "Introduction",
            "The provided code demonstrates the Depth-First Search (DFS) algorithm for traversing a graph. DFS explores all the vertices of a graph in depth-first order, starting from a given starting vertex. It uses recursion to visit the neighbors of each vertex.",
            "Code Explanation",
            "DFS Function",
            "The dfs function takes three parameters: graph (the graph represented as an adjacency list), start (the starting vertex for the DFS traversal), and visited (a set to keep track of the visited vertices).",
            "Visited Set Initialization",
            "Inside the dfs function, an if statement checks if the visited set is None. If it is None, a new set is created and assigned to visited. This ensures that the visited set is initialized properly.",
            "Visiting a Vertex",
            "The start vertex is added to the visited set using visited.add(start). This marks the current vertex as visited. Then, the value of the current vertex is printed using print(start).",
            "Exploring Neighbors",
            "The for loop iterates over each neighbor of the current vertex. It accesses the neighbors through the graph[start] adjacency list. To find the unvisited neighbors, the set difference operation (-) is used between the neighbor set and the visited set (graph[start] - visited). This ensures that only unvisited neighbors are visited.",
            "Recursive Call",
            "For each unvisited neighbor, the dfs function is recursively called with the neighbor as the new start vertex and the visited set. This allows the algorithm to explore the neighbors in depth-first order.",
            "Graph Representation",
            "After the dfs function definition, a graph is defined as a dictionary. Each key represents a vertex, and the corresponding value is a set of neighbors for that vertex.",
            "Main Function",
            "Finally, the main section of the code defines the graph and calls the dfs function with the graph and the starting vertex '0'. The DFS traversal is then printed as \"Following is Depth First Traversal\".",
            "Conclusion",
            "The given code demonstrates the Depth-First Search (DFS) algorithm using a graph represented as an adjacency list. It performs a DFS traversal starting from a given starting vertex, visiting all vertices in depth-first order. The code initializes a visited set, visits each vertex, recursively explores the neighbors, and prints the traversal order."
],
        "ytLink": "https://www.youtube.com/embed/Y40bRyPQQr0",
        "sources": [
            {
                "name": "Geeks for Geeks",
                "url": "https://brilliant.org/wiki/depth-first-search-dfs/"
            },
            {
                "name": "Baeldung",
                "url": "https://www.simplilearn.com/tutorials/data-structure-tutorial/dfs-algorithm"
            }
        ]
    },
    {
        "name": "implement-hash-functions",
        "title": "Implement Hash functions",
        "code": `
    class Student:
        def __init__(self,name,email):
            self.name = name
            self.email = email

    student = Student("Arun","arun@abcom")
    # Calling function
    result = hash(student)
    # Displaying result
    print("Hash Value is",result)

        `,
        "type": "Lab",
        "description":`
        The code demonstrates the usage of the hash() function on an instance of the Student class to generate a unique hash value, which can be used for indexing, uniqueness checks, and data integrity validation.
        `,
        "explanation":[
            "Code Explanation: Student Class and Hashing",
            "Introduction",
            "The provided code demonstrates the usage of the hash() function on an instance of the Student class. The hash() function is used to generate a hash value for an object, which can be useful for various purposes such as indexing, uniqueness checks, and data integrity validation.",
            "Code Explanation",
            "Student Class",
            "The Student class represents a student and has two attributes: name and email. The class is defined with an __init__ method, which is the constructor that initializes the name and email attributes with the values passed as arguments.",
            "Creating an Instance",
            "An instance of the Student class is created with the name \"Arun\" and email \"arun@abcom\" using the statement student = Student(\"Arun\", \"arun@abcom\"). This instance represents a student with the specified name and email.",
            "Hashing the Object",
            "The hash() function is called on the student object using the statement result = hash(student). This function calculates and returns a hash value for the object. The hash value is an integer that is generated based on the object's contents and is unique for each distinct object (in most cases).",
            "Displaying the Result",
            "The generated hash value is stored in the result variable. The statement print(\"Hash Value is\", result) is used to display the hash value on the console.",
            "Conclusion",
            "The given code creates an instance of the Student class, calculates the hash value for that object using the hash() function, and displays the resulting hash value. Hashing objects can be useful for various purposes, such as indexing objects in data structures, ensuring object uniqueness, and verifying the integrity of data."
],
        "ytLink": "https://www.youtube.com/embed/54Qh85vySEg",
        "sources": [
            {
                "name": "Toppr",
                "url": "https://www.toppr.com/guides/python-guide/references/methods-and-functions/methods/built-in/hash/python-hash/"
            },
            {
                "name": "Geeks for Geeks",
                "url": "https://www.geeksforgeeks.org/python-hash-method/"
            }
        ]
    },
]

module.exports = experimentData;