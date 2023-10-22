const experimentData = [
  // DSA with Python
  {
    name: "python-program-to-use-and-demonstrate-basic-data-structures",
    language: "python",
    title: "Python program to Use and demonstrate basic data structures",
    type: "Lab",
    code: `
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
    description: `
        This code is a collection of four programs: one that performs mathematical operations, one that manipulates strings, one that manipulates lists, and one that manipulates dictionaries. The programs demonstrate various operations such as addition, subtraction, multiplication, division, printing, appending, popping, deleting, and modifying elements in a list and dictionary.
        `,
    explanation: [
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
    ytLink: "https://www.youtube.com/embed/C_XRxLPGbUw",
    sources: [
      {
        name: "Calculator using Python",
        url: "https://www.geeksforgeeks.org/make-simple-calculator-using-python/",
      },
      {
        name: "Calculator Example",
        url: "https://www.programiz.com/python-programming/examples/calculator",
      },
    ],
  },
  {
    name: "implement-an-ADT-with-all-its-operations",
    language: "python",
    title: "Implement an ADT with all its Operations",
    code: `
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
    type: "Lab",
    description: `
        This code demonstrates a basic implementation of a stack data structure using Python. A stack follows the last-in, first-out (LIFO) principle, where elements are added and removed from the top of the stack.
        `,
    explanation: [
      "The code begins by initializing an empty stack, represented by a Python list called stack.",
      "The code prompts the user to enter the size limit of the stack, which determines the maximum number of elements it can hold.",
      "The code enters a loop that allows the user to perform three operations: push, pop, or quit.",
      "Push Operation: If the user selects the push operation, the code checks if the length of the stack is equal to the size limit. If it is, it means the stack is full, and the code displays a message indicating that the stack is full. Otherwise, the code prompts the user to input an element to be added to the stack. This element is then appended to the end of the stack using the append() method. Finally, the updated stack is displayed.",
      "Pop Operation: If the user chooses the pop operation, the code first checks if the stack is empty. This is done by evaluating the truthiness of the stack list. If it is empty, it means there are no elements in the stack, and the code displays a message indicating that the stack is empty. Otherwise, the code removes the topmost element from the stack using the pop() method, which eliminates the last element of the list. The popped element is stored in a variable called e for reference. The code then displays the removed element and the updated stack.",
      "Quit Operation: If the user selects the quit operation, the loop breaks, and the program terminates.",
      "If the user enters an invalid choice that does not correspond to any of the available operations, the code displays a message indicating that the correct operation should be entered.",
      "Overall, this code allows users to interact with a stack data structure by adding elements to the top of the stack (push), removing elements from the top (pop), or quitting the program. It provides a practical demonstration of how stacks work and can be used as a foundation for more complex stack-based applications.",
    ],
    ytLink: "https://www.youtube.com/embed/aCVpMz7_gn8",
    sources: [
      {
        name: "Stack using Linked List",
        url: "https://www.studytonight.com/data-structures/stack-using-linked-list",
      },
      {
        name: "Stack Data Structure",
        url: "https://www.geeksforgeeks.org/stack-data-structure/",
      },
    ],
  },
  {
    name: "implement-an-adt-and-compute-space-and-time-complexities",
    language: "python",
    title: "Implement an ADT and Compute space and time complexities.",
    code: `
        
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
    type: "Lab",
    description: `
        checkPair and countFreq. The checkPair function checks an array for a pair of elements that add up to a given target sum. If a valid pair is found, it is displayed as output. The countFreq function counts the frequency of each element in an array and prints the element along with its count.
        `,
    explanation: [
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
      "Overall, this code provides detailed functionality to check for a pair with a given sum in an array and count the frequencies of elements in an array.",
    ],
    ytLink: "https://www.youtube.com/embed/yzNOhldYSBI",
    sources: [
      {
        name: "codezup",
        url: "https://codezup.com/program-to-find-pair-with-the-given-sum-in-an-array/",
      },
      {
        name: "Tutorials Point",
        url: "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python",
      },
    ],
  },
  {
    name: "implement-linear-search-compute-space-and-time-complexities",
    language: "python",
    title: "Implement Linear  Search compute  space and time  complexities.",
    code: `
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
    type: "Lab",
    description: `
        The provided code performs a linear search on arrays of increasing lengths and measures the time it takes to complete the search. It then plots the time complexity results, showing how the search time increases linearly with the size of the input array.
        `,
    images: ["https://i.imgur.com/IQr52W7.png"],
    explanation: [
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
      'The x-axis is labeled as "List length", and the y-axis is labeled as "Time complexity".',
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
      'The plot is labeled as "Linear Search" using the label parameter.',
      "Gridlines are added to the plot using plt.grid().",
      "The legend is displayed using plt.legend().",
      "Finally, the plot is shown using plt.show().",
      "In summary, the code measures the time complexity of a linear search algorithm by performing searches on arrays of increasing lengths.",
      "It provides insights into how the search time increases linearly with the size of the input array.",
      "The results are visualized through a plot, which helps in understanding the relationship between the list length and the time taken for the linear search.",
    ],
    ytLink: "https://www.youtube.com/embed/C46QfTjVCNU",
    sources: [
      {
        name: "Java Point",
        url: "https://www.javatpoint.com/linear-search",
      },
      {
        name: "Tutorials Point",
        url: "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python",
      },
    ],
  },
  {
    name: "implement-bubble-selection-insertion-sorting-algorithms-compute-space-and-time-complexities-plot-graph-using-asymptomatic-notations",
    language: "python",
    title:
      "Implement Bubble, Selection, insertion sorting algorithms compute space and time complexities, plot graph using asymptomatic notations.",
    code: `

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
    type: "Lab",
    description: `
        This code implements three sorting algorithms: selection sort, bubble sort, and insertion sort. It measures the time taken by each algorithm to sort arrays of different lengths and plots the time complexity graph. The code provides a visual comparison of the sorting algorithms based on their performance.
        `,
    images: ["https://i.imgur.com/joPYJuy.png"],
    explanation: [
      "The selection sort algorithm works by repeatedly finding the minimum element in the unsorted portion of the array and swapping it with the first unsorted element. This process continues until the entire array is sorted.",
      "The bubble sort algorithm works by repeatedly comparing adjacent elements in the array and swapping them if they are in the wrong order. This process continues until no more swaps are needed, which means the array is sorted.",
      "The insertion sort algorithm works by repeatedly inserting each element of the array into its correct position in the sorted portion of the array. This process continues until the entire array is sorted.",
      "The time complexity of all three sorting algorithms is O(n^2), which means that the execution time increases quadratically with the size of the input array. However, the insertion sort algorithm is generally faster than the selection sort and bubble sort algorithms.",
      'The code defines a list called `sorts` to store the sorting algorithms. Each algorithm is represented as a dictionary with two keys: `"name"` and `"sort"`.',
      'The `"name"` key stores the name of the sorting algorithm (e.g., "Selection Sort").',
      'The `"sort"` key stores a lambda function that invokes the corresponding sorting function.',
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
    ytLink: "https://www.youtube.com/embed/9oWd4VJOwr0",
    sources: [
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/python-program-for-selection-sort/",
      },
      {
        name: "Tutorials Point",
        url: "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python",
      },
    ],
  },
  {
    name: "implement-binary-search-using-recursion-compute-space-and-time-complexities",
    language: "python",
    title:
      "Implement Binary Search using recursion Compute space and time complexities.",
    code: `

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
    type: "Lab",
    description: `
        The given code implements the binary search algorithm. It defines a binarySearch function that takes an array, target element, start index (si), and end index (ei) as parameters. The function recursively performs binary search on the array to find the target element. It compares the target element with the middle element of the current range and narrows down the search range accordingly until the target element is found or the search range is empty.
        `,
    images: ["https://i.imgur.com/XbH1FrW.png"],
    explanation: [
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
      "The plotted graph helps visualize the logarithmic time complexity as the array size increases.",
    ],
    ytLink: "https://www.youtube.com/embed/V_T5NuccwRA",
    sources: [
      {
        name: "Binary Search",
        url: "https://chortle.ccsu.edu/java5/Notes/chap53B/ch53B_18.html",
      },
      {
        name: "Programiz",
        url: "https://www.programiz.com/dsa/binary-search",
      },
    ],
  },
  {
    name: "implement-merge-and-quick-sorting-algorithms-compute-space-and-time-complexities",
    language: "python",
    title:
      "Implement Merge and quick sorting algorithms compute space and time complexities",
    code: `

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
    type: "Lab",
    description: `
        Quick Sort: Efficient divide-and-conquer algorithm with O(n log n) average and worst-case time complexity for sorting large datasets.
        \nMerge Sort: Effective divide-and-conquer algorithm with O(n log n) average and worst-case time complexity for sorting large datasets by recursively dividing, sorting, and merging sub-lists.
        `,
    images: ["https://i.imgur.com/A0ahBuh.png"],
    explanation: [
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
      'Finally, it plots the list lengths (elements) on the x-axis and the execution times (times) on the y-axis using Matplotlib, with the label "Merge Sort" for the legend.',
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
      'Finally, it plots the list lengths on the x-axis and the execution times on the y-axis, with the label "Quick Sort" for the legend.',
      "Conclusion",
      "The given code demonstrates the implementation of the Quick Sort algorithm and measures its time complexity for sorting different-sized lists of elements.",
      "The execution times are recorded and plotted, allowing for an analysis of the algorithm's performance as the list length increases.",
      "Quick Sort has an average time complexity of O(n log n) and a worst-case time complexity of O(n^2), but it is generally considered efficient and widely used for sorting large datasets.",
    ],
    ytLink: "https://www.youtube.com/embed/4VqmGXwpLqc",
    sources: [
      {
        name: "Programiz",
        url: "https://www.programiz.com/dsa/merge-sort",
      },
      {
        name: "Geeks For Geeks",
        url: "https://www.geeksforgeeks.org/quick-sort/",
      },
    ],
  },
  {
    name: "implement-fibonacci-sequence-with-dynamic-programming",
    language: "python",
    title: "Implement Fibonacci sequence with dynamic programming.",
    code: `

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
    type: "Lab",
    description:
      "The code calculates the Fibonacci sequence up to a given number `n` and returns the sequence as a list. It uses a `for` loop to generate the Fibonacci numbers and appends them to a list. The function is then called with different values of `n` to print the corresponding Fibonacci sequences.",
    explanation: [
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
      "The code demonstrates the functionality of the fib function by printing Fibonacci sequences for different values of n.",
    ],
    ytLink: "https://www.youtube.com/embed/7Sv4NmvdHcw",
    sources: [
      {
        name: "Byjus",
        url: "https://byjus.com/maths/fibonacci-sequence/",
      },
      {
        name: "Elearning Industry",
        url: "https://elearningindustry.com/fibonacci-sequence-what-is-and-how-applies-agile-development",
      },
    ],
  },
  {
    name: "implement-singly-linked-list",
    language: "python",
    title:
      "Implement Singly linked list (Traversing the Nodes, searching for a Node, Prepending Nodes, Removing Nodes)",
    code: `
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
    type: "Lab",
    description:
      "The provided code implements a linked list data structure in Python with functions for printing, searching, prepending, and removing nodes. It demonstrates basic operations on a linked list such as traversal, modification, and manipulation of nodes.",
    explanation: [
      "Node Class",
      "The Node class represents a single node in the linked list. Each node contains a data attribute to store the value and a next attribute to point to the next node in the list.",
      "printLL Function",
      'The printLL function takes the head of a linked list as input and prints the elements of the linked list in order. It traverses the linked list starting from the head and prints each node\'s data followed by an arrow (->). Finally, it prints "None" to indicate the end of the list.',
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
      "The purpose of this code is to demonstrate the basic operations on a linked list such as printing, searching, inserting at the beginning, and removing nodes.",
    ],
    ytLink: "https://www.youtube.com/embed/R9PTBwOzceo",
    sources: [
      {
        name: "Java Point",
        url: "https://www.javatpoint.com/ds-linked-list",
      },
      {
        name: "Geeks For Geeks",
        url: "https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/",
      },
    ],
  },
  {
    name: "implement-linked-list-iterators",
    language: "python",
    title: "Implement linked list Iterators",
    code: `

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
    type: "Lab",
    description:
      "The provided code defines an iterable class that generates a sequence of numbers from 10 up to a specified limit using the `__iter__` and `__next__` methods. It demonstrates the implementation of a custom iterator in Python.",
    explanation: [
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
      "The purpose of this code is to demonstrate how to implement a custom iterator in Python using the __iter__ and __next__ methods. It allows you to define your own iteration behavior for custom objects.",
    ],
    ytLink: "https://www.youtube.com/embed/j4l2FKEvbHY",
    sources: [
      {
        name: "C++",
        url: "https://cplusplus.com/reference/iterator/",
      },
      {
        name: "Geeks For Geeks",
        url: "https://www.geeksforgeeks.org/implementing-iterator-pattern-of-a-single-linked-list/",
      },
    ],
  },
  {
    language: "python",
    name: "implement-dll",
    title: "Implement DLL",
    code: `

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
    type: "Lab",
    description: `
        The provided code implements a doubly linked list data structure in Python with various operations such as pushing elements to the front, appending elements at the end, and inserting elements after a given node. It also includes a method to print the elements of the linked list in both forward and reverse directions. The code demonstrates the usage of the doubly linked list by creating an instance of the class, performing several operations on it, and then printing the resulting linked list.
        `,
    explanation: [
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
      "Finally, the print_list method is called to print the elements of the doubly linked list.",
    ],
    ytLink: "https://www.youtube.com/embed/H8-IuKKiQeo",
    sources: [
      {
        name: "Geeks For Geeks",
        url: "https://www.geeksforgeeks.org/introduction-to-doubly-linked-lists-in-java/",
      },
      {
        name: "Programiz",
        url: "https://www.programiz.com/dsa/doubly-linked-list",
      },
    ],
  },
  {
    name: "implement-cdll",
    language: "python",
    title: "Implement CDLL",
    code: `

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
    type: "Lab",
    description: `
        This code implements a Circular Doubly Linked List data structure in Python, allowing for the creation, insertion, deletion, searching, and display of nodes.
        `,
    explanation: [
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
      "This code demonstrates the operations of creating a circular doubly linked list, inserting nodes at the beginning, deleting nodes from the beginning, searching for data values, and displaying the contents of the list.",
    ],
    ytLink: "https://www.youtube.com/embed/3ZrkixbHCTI",
    sources: [
      {
        name: "Alpha Coding Skills",
        url: "https://www.alphacodingskills.com/ds/circular-doubly-linked-list.php",
      },
      {
        name: "PythonWife",
        url: "https://pythonwife.com/circular-doubly-linked-list-in-python/",
      },
    ],
  },
  {
    name: "implement-stack-data-structure",
    language: "python",
    title: "Implement Stack Data Structure",
    code: `
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
    type: "Lab",
    description: `
        The given code implements a Stack data structure using a list. It provides methods to check if the stack is empty, add items to the stack, remove items from the stack, and display the contents of the stack. The code allows users to interactively perform stack operations such as adding students, displaying the stack, removing students, and exiting the program.
        `,
    explanation: [
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
      'Any other choice: An "Invalid Choice" message is printed.',
      "This code allows the user to add students (roll number and name) to the stack, display the stack contents, remove students from the stack, and exit the program. The stack operations are implemented using the methods defined in the Stack class.",
    ],
    ytLink: "https://www.youtube.com/embed/I37kGX-nZEI",
    sources: [
      {
        name: "Geeks For Geeks",
        url: "https://www.geeksforgeeks.org/stack-data-structure/",
      },
      {
        name: "Java point",
        url: "https://www.javatpoint.com/data-structure-stack",
      },
    ],
  },
  {
    name: "implement-bracket-matching-using-stack",
    language: "python",
    title: "Implement Bracket matching using stack.",
    code: `

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
    type: "Lab",
    description: `
        The checkBalance function uses a stack-based approach to check if an expression containing parentheses, curly braces, and square brackets is balanced, returning True if it is and False otherwise.
        `,
    explanation: [
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
      'If the function returns True, it means the expression is balanced, and the message "The given string is balanced" is printed.',
      'If the function returns False, it means the expression is unbalanced, and the message "The given string is not balanced" is printed.',
      "This code allows you to check whether a given expression containing parentheses, curly braces, and square brackets is balanced or not using a stack-based approach. It ensures that opening and closing symbols are properly matched in the expression.",
    ],
    ytLink: "https://www.youtube.com/embed/aKTGpBeOeZg",
    sources: [
      {
        name: "Geeks For Geeks",
        url: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression//",
      },
      {
        name: "Coding Ninjas",
        url: "https://www.codingninjas.com/blog/2021/09/09/understanding-balanced-parentheses/",
      },
    ],
  },
  {
    name: "program-to-demonstrate-recursive-operations",
    language: "python",
    title: "Program to  demonstrate  recursive operations",
    code: `

    def fact(n):
        if (n==0 or n==1):
            return 1
        return n * fact(n-1)
    
    n = int(input("Enter the value: "))
    res = fact(n)
    print("Factorial of",n,"is",res)
    
        `,
    type: "Lab",
    description: `
        The code implements a recursive function to calculate the factorial of a number using the concept of repeated multiplication. It takes user input, performs the factorial calculation, and displays the result.
        `,
    explanation: [
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
      "This code allows you to calculate the factorial of a given number using a recursive approach. It breaks down the factorial calculation into simpler subproblems until it reaches the base case.",
    ],
    ytLink: "https://www.youtube.com/embed/gfhtaP5Wq7M",
    sources: [
      {
        name: "Geeks For Geeks",
        url: "https://www.geeksforgeeks.org/java-program-to-find-factorial-of-a-number-recursively",
      },
      {
        name: "Programiz",
        url: "https://www.programiz.com/python-programming/examples/factorial-recursion",
      },
    ],
  },
  {
    name: "implement-solution-for-tower-of-hanoi",
    language: "python",
    title: "Implement solution  for Tower of Hanoi",
    code: `

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
    type: "Lab",
    description: `
        The code implements the Tower of Hanoi puzzle solution using a recursive algorithm. It takes the number of disks as input, recursively solves the subproblems to move the disks, and prints the sequence of moves required to solve the puzzle.
        `,
    images: [
      "https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/TV-Tower-of-Hanoi-normal-image01.jpg",
    ],
    explanation: [
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
      "The user is prompted to enter the number of disks n and the towerOfHanoi function is called with the provided arguments to solve the Tower of Hanoi problem.",
    ],
    ytLink: "https://www.youtube.com/embed/YstLjLCGmgg",
    sources: [
      {
        name: "Semantics Scholar",
        url: "https://www.semanticscholar.org/paper/The-Tower-of-Hanoi-Myths-and-Maths-Hinz-Klav%C5%BEar/98b4202d35d1f42564b9f2220ffe614d832b0168",
      },
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/",
      },
    ],
  },
  {
    language: "python",
    name: "implement-queue",
    title: "Implement Queue",
    code: `
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
    type: "Lab",
    description: `
        The code implements queue operations using a list in Python, allowing users to add elements, remove elements, and display the current contents of the queue interactively.
        `,
    explanation: [
      "The provided code implements a queue data structure using a list in Python. It offers the following operations:",
      "enqueue(): This operation adds an element to the end of the queue. It prompts the user to enter an element, appends it to the queue list, and displays a message along with the updated queue.",
      "dequeue(): This operation removes an element from the front of the queue. If the queue is empty, it displays a message. Otherwise, it removes the element at index 0 from the queue list using pop(0), displays the removed element, and shows the updated queue.",
      "display(): This operation displays the current contents of the queue by printing the queue list.",
      "Code Explanation",
      "The code defines the operations and implements a menu-based loop to interact with the queue:",
      "queue = []",
      'def enqueue(): element = input("Enter the element: ") queue.append(element) print("Element is added to the queue") print(queue)',
      'def dequeue(): if not queue: print("Queue is empty") else: e = queue.pop(0) print("Element removed:", e) print(queue)',
      "def display(): print(queue)",
      'while True: print("Select the operation: 1. Add  2. Remove  3. Show  4. Quit") choice = int(input()) if choice == 1: enqueue() elif choice == 2: dequeue() elif choice == 3: display() elif choice == 4: print("Quit") break else: print("Enter the correct operation")',
      "The code initializes an empty list called queue to store the elements.",
      "The enqueue() function prompts the user to enter an element, appends it to the queue list, and displays a message along with the updated queue.",
      "The dequeue() function checks if the queue list is empty. If it is, it prints a message indicating that the queue is empty. Otherwise, it removes the element at index 0 using pop(0), stores it in the variable e, prints the removed element, and shows the updated queue.",
      "The display() function simply prints the queue list to display the current contents.",
      "The program enters an infinite loop using while True. It displays a menu to the user with the available operations: Add, Remove, Show, and Quit. It prompts the user to enter a choice (1-4). Based on the user's choice, it calls the corresponding operation function (enqueue(), dequeue(), display()), or exits the loop if the choice is 4 (Quit). If the choice is not valid, it displays a message indicating that the user should enter the correct operation.",
      "This code allows users to interactively perform queue operations and see the resulting changes in the queue.",
    ],
    ytLink: "https://www.youtube.com/embed/zp6pBNbUB2U",
    sources: [
      {
        name: "Simpli learn",
        url: "https://www.simplilearn.com/tutorials/data-structure-tutorial/queue-in-data-structure",
      },
      {
        name: "Programiz",
        url: "https://www.programiz.com/dsa/queue/",
      },
    ],
  },
  {
    name: "implement-priority-queue",
    language: "python",
    title: "Implement Priority Queue",
    code: `

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
    type: "Lab",
    description: `
        The code utilizes the PriorityQueue class from the queue module to implement a priority queue. Elements are added to the queue based on their priority and retrieved in the order of their priority.
        `,
    explanation: [
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
      "This code demonstrates the usage of the PriorityQueue class to implement a priority queue and retrieve elements based on their priority.",
    ],
    ytLink: "https://www.youtube.com/embed/m9SVfOYTaBQ",
    sources: [
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/priority-queue-set-1-introduction/",
      },
      {
        name: "Oracle",
        url: "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/PriorityQueue.html",
      },
    ],
  },
  {
    name: "implement-binary-search-tree-and-its-operations-using-list",
    language: "python",
    title: "Implement Binary search tree and its operations using list",
    code: `

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
    type: "Lab",
    description: `
        The code illustrates the operations of insertion, deletion, and inorder traversal on a Binary Search Tree (BST) implemented using the Node class. The BST maintains the property that the left child of a node has a smaller value, and the right child has a larger value.
        `,
    explanation: [
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
      "The given code demonstrates the operations performed on a Binary Search Tree (BST) using the Node class. It showcases the insertion of nodes, deletion of a node, and the inorder traversal of the tree.",
    ],
    ytLink: "https://www.youtube.com/embed/cySVml6e_Fc",
    sources: [
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/what-is-binary-search-tree/",
      },
      {
        name: "Baeldung",
        url: "https://www.baeldung.com/cs/binary-search-trees",
      },
    ],
  },
  {
    name: "implementations-of-bfs",
    language: "python",
    title: "Implementations of  BFS",
    code: `
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
    type: "Lab",
    description: `
        The code showcases the Breadth-First Search (BFS) algorithm for traversing a graph in breadth-first order, starting from a given root vertex. It uses a queue to keep track of the vertices to visit next and maintains a visited set to track the visited vertices during the traversal.
        `,
    explanation: [
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
      'The visited vertex is printed using print(str(vertex)+" ", end=""). This displays the vertex value followed by a space, allowing the traversal order to be shown on a single line.',
      "Exploring Neighbors",
      "The for loop iterates over each neighbor of the current vertex, accessed through the graph[vertex] adjacency list. If a neighbor has not been visited, it is added to the visited set and also added to the queue. This ensures that unvisited neighbors will be visited in subsequent iterations.",
      "Graph Representation",
      "After the bfs function definition, a graph is defined as a dictionary. Each key represents a vertex, and the corresponding value is a list of neighbors for that vertex.",
      "Main Function",
      "Finally, the main section of the code checks if the module is being run directly (if __name__ == '__main__':). Inside this block, the graph is defined, and the bfs function is called with the graph and the starting vertex 0. The BFS traversal is then printed as \"Following is Breadth First Traversal\".",
      "Conclusion",
      "The given code demonstrates the Breadth-First Search (BFS) algorithm using a graph represented as an adjacency list. It performs a BFS traversal starting from a given root vertex, visiting all vertices in breadth-first order. The code initializes a visited set and a queue, explores neighbors of vertices, and prints the traversal order.",
    ],
    ytLink: "https://www.youtube.com/embed/pcKY4hjDrxk",
    sources: [
      {
        name: "Khan Academy",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/breadth-first-search-and-its-uses",
      },
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
      },
    ],
  },
  {
    name: "implementation-of-dfs",
    language: "python",
    title: "Implementation of DFS",
    code: `
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
    type: "Lab",
    description: `
        The code showcases the Depth-First Search (DFS) algorithm for traversing a graph in depth-first order, starting from a given starting vertex. It uses recursion to visit the neighbors of each vertex and maintains a visited set to track the visited vertices during the traversal.
        `,
    explanation: [
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
      "The given code demonstrates the Depth-First Search (DFS) algorithm using a graph represented as an adjacency list. It performs a DFS traversal starting from a given starting vertex, visiting all vertices in depth-first order. The code initializes a visited set, visits each vertex, recursively explores the neighbors, and prints the traversal order.",
    ],
    ytLink: "https://www.youtube.com/embed/Y40bRyPQQr0",
    sources: [
      {
        name: "Geeks for Geeks",
        url: "https://brilliant.org/wiki/depth-first-search-dfs/",
      },
      {
        name: "Baeldung",
        url: "https://www.simplilearn.com/tutorials/data-structure-tutorial/dfs-algorithm",
      },
    ],
  },
  {
    name: "implement-hash-functions",
    language: "python",
    title: "Implement Hash functions",
    code: `
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
    type: "Lab",
    description: `
        The code demonstrates the usage of the hash() function on an instance of the Student class to generate a unique hash value, which can be used for indexing, uniqueness checks, and data integrity validation.
        `,
    explanation: [
      "Code Explanation: Student Class and Hashing",
      "Introduction",
      "The provided code demonstrates the usage of the hash() function on an instance of the Student class. The hash() function is used to generate a hash value for an object, which can be useful for various purposes such as indexing, uniqueness checks, and data integrity validation.",
      "Code Explanation",
      "Student Class",
      "The Student class represents a student and has two attributes: name and email. The class is defined with an __init__ method, which is the constructor that initializes the name and email attributes with the values passed as arguments.",
      "Creating an Instance",
      'An instance of the Student class is created with the name "Arun" and email "arun@abcom" using the statement student = Student("Arun", "arun@abcom"). This instance represents a student with the specified name and email.',
      "Hashing the Object",
      "The hash() function is called on the student object using the statement result = hash(student). This function calculates and returns a hash value for the object. The hash value is an integer that is generated based on the object's contents and is unique for each distinct object (in most cases).",
      "Displaying the Result",
      'The generated hash value is stored in the result variable. The statement print("Hash Value is", result) is used to display the hash value on the console.',
      "Conclusion",
      "The given code creates an instance of the Student class, calculates the hash value for that object using the hash() function, and displays the resulting hash value. Hashing objects can be useful for various purposes, such as indexing objects in data structures, ensuring object uniqueness, and verifying the integrity of data.",
    ],
    ytLink: "https://www.youtube.com/embed/54Qh85vySEg",
    sources: [
      {
        name: "Toppr",
        url: "https://www.toppr.com/guides/python-guide/references/methods-and-functions/methods/built-in/hash/python-hash/",
      },
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/python-hash-method/",
      },
    ],
  },
  // IT Skills

  // Experiment 01
  // A
  {
    name: "write-an-algorithm-to-add-two-numbers",
    title: "Write an Algorithm to add two numbers",
    language: "plaintext",
    code: `
Step 1 → START

Step 2 → Declare three variables n1, n2 and SUM

Step 3 → Read (input) two numbers and store in n1 & n2 respectively 

Step 4 → Add n1&n2 and store result in SUM. i.e. SUM = n1 + n2 

Step 5 → Display (output) result i.e. SUM

Step 6 → STOP
        
        `,
    type: "Theory",
    description: `
        This algorithm is a simple set of instructions to add two numbers. It begins by declaring three containers (variables) to store values - n1, n2, and SUM. It then asks the user for two numbers, adds them together, and displays the result. Finally, it signals the end of the process.
        `,
    explanation: [
      "Step 1: START. This marks the beginning of the algorithm.",
      "Step 2: Declare three variables n1, n2, and SUM. These are containers to hold values.",
      "Step 3: Read (input) two numbers and store in n1 & n2 respectively. Get numbers from the user and store them in n1 and n2.",
      "Step 4: Add n1 and n2 and store the result in SUM. Perform addition with the numbers in n1 and n2, and store the result in SUM.",
      "Step 5: Display (output) the result, i.e., SUM. Show the result to the user.",
      "Step 6: STOP. This marks the end of the algorithm.",
    ],
    ytLink: "https://www.youtube.com/embed/kiDD61FAaaI",
    sources: [
      {
        name: "C Sharp",
        url: "https://www.csharp-console-examples.com/pseudocode-examples/pseudocode-to-add-two-numbers/",
      },
      {
        name: "Jakerpomperada",
        url: "https://jakerpomperada.blogspot.com/2019/10/sum-of-two-numbers-pseudocode-algorithm.html",
      },
    ],
  },
  // B
  {
    name: "write-an-algorithm-to-subtract-two-numbers",
    title: "Write an Algorithm to subtract two numbers",
    language: "plaintext",
    code: `
Step 1 → START

Step 2 → Declare three variables n1, n2 and diff.

Step 3 → Read (input) two numbers and store in n1 & n2 respectively 

Step 4 → Subtract n1 & n2 and store result in diff i.e. diff = n1 - n2 

Step 5 → Display (output) result i.e. diff

Step 6 → STOP
        `,
    type: "Theory",
    description: `
        This algorithm is designed to subtract one number (n2) from another number (n1). It starts by declaring three containers (variables) to hold values: n1, n2, and diff. The user is prompted to input two numbers, which are stored in n1 and n2. The algorithm then subtracts n2 from n1 and stores the result in a variable called "diff". Finally, it displays the result of the subtraction (diff) to the user.
        `,
    explanation: [
      "Step 1: START. This marks the beginning of the algorithm.",
      "Step 2: Declare three variables n1, n2, and diff. These are containers to hold values.",
      "Step 3: Read (input) two numbers and store in n1 & n2 respectively. Get numbers from the user and store them in n1 and n2.",
      "Step 4: Subtract n1 and n2 and store the result in diff. Perform subtraction with the numbers in n1 and n2, and store the result in diff.",
      "Step 5: Display (output) the result, i.e., diff. Show the result to the user.",
      "Step 6: STOP. This marks the end of the algorithm.",
    ],
    // "ytLink": "https://www.youtube.com/embed/iNREA76O7Uw?si=MBMOagigmS8cbyJA",
    // "sources": [
    //     {
    //         "name": "A Tech Daily",
    //         "url": "https://www.atechdaily.com/posts/algorithm-and-flowchart-to-find-largest-of-three-numbers"
    //     },
    //     {
    //         "name": "Programiz",
    //         "url": "https://www.programiz.com/python-programming/examples/largest-number-three"
    //     }
    // ]
    ytLink: "https://www.youtube.com/embed/5XKftwEf_KU",
    sources: [
      {
        name: "Python Guides",
        url: "https://pythonguides.com/subtract-two-numbers-in-python/#:~:text=Python%20program%20to%20subtract%20two%20number%20user%20input,result%20is%E2%80%9D%2Cc%29%20is%20used%20to%20get%20the%20output.",
      },
      {
        name: "Coding broz",
        url: "https://www.codingbroz.com/c-program-to-subtract-two-numbers/",
      },
    ],
  },
  // C
  {
    // "name": "calculate-and-print-sum-of-n-numbers",
    // "title": "Calculate	and	print sum of 'N' numbers",
    name: "write-an-algorithm-to-find-smallest-of-3-numbers",
    title: "Write an Algorithm to find smallest of 3 numbers",
    language: "plaintext",
    code: `
Step 1 → START

Step 2 → Declare four variables n1, n2, n3 and MIN.

Step 3 → Read (input) three numbers and store in n1, n2 & n3 respectively 

Step 4 → Let MIN = n1

Step 5 → if (n2 < MIN) , then MIN = n2, else next step 

Step 6 → if (n3 < MIN), then MIN = n3, else next step 

Step 7 → Display (output) MIN as Smallest Number.

Step 8 → STOP
        `,
    type: "Theory",
    description: `
        This algorithm is designed to find the smallest number among three input numbers. It begins by declaring four containers (variables) to hold values: n1, n2, n3, and MIN. The user is prompted to input three numbers, which are stored in n1, n2, and n3. The algorithm then compares these numbers to determine the smallest one, storing it in the MIN variable. Finally, it displays the smallest number (MIN) to the user.
        `,
    explanation: [
      "Step 1: START. This marks the beginning of the algorithm.",
      "Step 2: Declare four variables n1, n2, n3, and MIN. These are containers to hold values.",
      "Step 3: Read (input) three numbers and store in n1, n2, and n3 respectively. Get numbers from the user and store them in n1, n2, and n3.",
      "Step 4: Let MIN = n1. Initialize MIN with the value of n1.",
      "Step 5: Check if n2 is smaller than MIN. If yes, update MIN to be n2.",
      "Step 6: Check if n3 is smaller than MIN. If yes, update MIN to be n3.",
      "Step 7: Display (output) MIN as the Smallest Number. Show the smallest number (MIN) to the user.",
      "Step 8: STOP. This marks the end of the algorithm.",
    ],
    // "ytLink": "https://www.youtube.com/embed/fFqmBP2EbVY?si=I86Y5jpTcgnyrYvV",
    // "sources": [
    //     {
    //         "name": "Geeks for Geeks",
    //         "url": "https://www.geeksforgeeks.org/program-find-sum-first-n-natural-numbers/"
    //     },
    //     {
    //         "name": "Python Guides",
    //         "url": "https://pythonguides.com/python-program-to-find-sum-of-n-numbers/"
    //     }
    // ]
    ytLink: "https://www.youtube.com/embed/dgS_Lu3xBBU?si=jB_Z-on8NUjuwBUy",
    sources: [
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/program-to-find-the-smallest-element-among-three-elements/",
      },
      {
        name: "Brainly",
        url: "https://brainly.in/question/11318260",
      },
    ],
  },
  // D
  {
    name: "write-an-algorithm-to-find-largest-of-3-numbers",
    title: "Write an Algorithm to find largest of 3 numbers",
    language: "plaintext",
    code: `
Step 1 → START

Step 2 → Declare four variables n1, n2, n3 and MAX.

Step 3 → Read (input) three numbers and store in n1, n2 & n3 respectively 

Step 4 → Let MAX = n1

Step 5 → if (n2 >MAX) , then MAX = n2, else next step 

Step 6 → if (n3 >MAX), then MAX = n3, else next step 

Step 7 → Display (output) MAX as Largest Number.

Step 8 → STOP
        `,
    type: "Theory",
    description: `
        This algorithm aims to find the largest number among three input numbers. It begins by declaring four containers (variables) to hold values: n1, n2, n3, and MAX. The user is prompted to input three numbers, which are stored in n1, n2, and n3. The algorithm then compares these numbers to determine the largest one, storing it in the MAX variable. Finally, it displays the largest number (MAX) to the user.
        `,
    explanation: [
      "Step 1: START. This marks the beginning of the algorithm.",
      "Step 2: Declare four variables n1, n2, n3, and MAX. These are containers to hold values.",
      "Step 3: Read (input) three numbers and store in n1, n2, and n3 respectively. Get numbers from the user and store them in n1, n2, and n3.",
      "Step 4: Let MAX = n1. Initialize MAX with the value of n1.",
      "Step 5: Check if n2 is larger than MAX. If yes, update MAX to be n2.",
      "Step 6: Check if n3 is larger than MAX. If yes, update MAX to be n3.",
      "Step 7: Display (output) MAX as the Largest Number. Show the largest number (MAX) to the user.",
      "Step 8: STOP. This marks the end of the algorithm.",
    ],
    // "ytLink": "https://www.youtube.com/embed/fFqmBP2EbVY?si=I86Y5jpTcgnyrYvV",
    // "sources": [
    //     {
    //         "name": "Geeks for Geeks",
    //         "url": "https://www.geeksforgeeks.org/program-find-sum-first-n-natural-numbers/"
    //     },
    //     {
    //         "name": "Python Guides",
    //         "url": "https://pythonguides.com/python-program-to-find-sum-of-n-numbers/"
    //     }
    // ]
    ytLink: "https://www.youtube.com/embed/OGDo9idPgfo?si=rr_cvI4jdQqK-Nq2",
    sources: [
      {
        name: "Programiz",
        url: "https://www.programiz.com/python-programming/examples/largest-number-three/",
      },
      {
        name: "Code Project",
        url: "https://www.codeproject.com/articles/760587/how-to-find-the-largest-of-numbers",
      },
    ],
  },
  // E
  {
    name: "write-an-algorithm-to-calculate-&-print-sum-of-n-numbers",
    title: "Write an Algorithm to Calculate & Print sum of N numbers",
    language: "plaintext",
    code: `
Step 1 → START

Step 2 → Declare three variables N, count, SUM

Step 3 → Read (input) value of N

Step 4 → Initialize count = 1 and SUM = 0

Step 5 → if (count <=N) , then goto next step, else goto step 9 

Step 6 → SUM = SUM + count

Step 7 → count = count + 1

Step 8 → go to step 5

Step 9 → Display (output) the value of SUM. 

Step 10 → STOP
        `,
    type: "Theory",
    description: `
        This algorithm is designed to calculate the sum of numbers starting from 1 up to a given value, N. It begins by declaring three containers (variables) to hold values: N, count, and SUM. The user is prompted to input a value for N. The algorithm then initializes count and SUM, followed by iterating through a loop, adding each count to the SUM. Once the loop is complete, it displays the total sum (SUM) to the user.
        `,
    explanation: [
      "Step 1: START. This marks the beginning of the algorithm.",
      "Step 2: Declare three variables N, count, and SUM. These are containers to hold values.",
      "Step 3: Read (input) value of N. Get a value from the user and store it in N.",
      "Step 4: Initialize count = 1 and SUM = 0. Set the initial values of count and SUM.",
      "Step 5: Check if count is less than or equal to N. If yes, proceed to the next step. If not, go to step 9.",
      "Step 6: SUM = SUM + count. Increment SUM by the current value of count.",
      "Step 7: Increment count by 1. Increase count for the next iteration.",
      "Step 8: Go to step 5. Loop back to step 5 and repeat steps 5-7 until count is within the specified range.",
      "Step 9: Display (output) the value of SUM. Show the total sum (SUM) to the user.",
      "Step 10: STOP. This marks the end of the algorithm.",
    ],
    ytLink: "https://www.youtube.com/embed/fFqmBP2EbVY?si=I86Y5jpTcgnyrYvV",
    sources: [
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/program-find-sum-first-n-natural-numbers/",
      },
      {
        name: "Python Guides",
        url: "https://pythonguides.com/python-program-to-find-sum-of-n-numbers/",
      },
    ],
  },

  // Experiment 02
  // A
  {
    name: "design-a-flowchart-to-add-two-numbers",
    title: "Design a Flowchart to add two numbers",
    language: "plaintext",
    images: ["https://i.imgur.com/kd6lAG2.png"],
    type: "Theory",
    description: `
        The flowchart starts with the "Start" symbol, initiating the algorithm. It then proceeds to declare three variables: n1, n2, and sum. The user inputs values for n1 and n2. Next, the algorithm calculates the sum of n1 and n2 using the operation sum = n1 + n2. The result is displayed to the user. Finally, the algorithm reaches the "Stop" symbol, signifying the end of the process.
        `,
    explanation: [
      "Start: The Start symbol (usually an oval or rounded rectangle) indicates the beginning of the process. It initiates the algorithm and sets things in motion.",
      "Declare Variables: This step involves declaring the necessary variables for the program. In a flowchart, this is often represented by a parallelogram symbol, signifying input or output. Variables n1, n2, and sum are declared to store values.",
      "Read Input: In the flowchart, reading input is typically represented by a parallelogram symbol. It's the process of taking input from an external source. Here, we read the values of n1 and n2, likely from the user.",
      "Calculate Sum: Calculation steps are usually represented by rectangles in a flowchart. In this case, we calculate the sum of n1 and n2, performing the operation sum = n1 + n2.",
      "Display Output: Displaying output is another action typically represented by a parallelogram symbol. It's the process of showing results to the user. Here, we display the value of sum to the user.",
      "Stop: The Stop symbol (often an oval or rounded rectangle) signifies the end of the process. It's the conclusion of the algorithm and halts further execution.",
    ],
    ytLink: "https://www.youtube.com/embed/DXciCVt6hfA",
    sources: [
      {
        name: "Technology Strive",
        url: "https://technologystrive.com/flow-chart/sum-of-two-numbers",
      },
      {
        name: "Testing Docs",
        url: "https://www.testingdocs.com/raptor-flowchart-adding-two-numbers/",
      },
    ],
  },
  // B
  {
    name: "design-a-flowchart-to-subtract-two-numbers",
    title: "Design a Flowchart to subtract two numbers",
    language: "plaintext",
    images: ["https://i.imgur.com/JHHpCLV.png"],
    type: "Theory",
    description: `
        The flowchart starts with the beginning of the process, followed by the declaration of variables to store values. Input is obtained for the numbers to be subtracted. The difference between the numbers is calculated and stored. The program then displays the calculated difference. The process ends, signifying the completion of the program.
        `,
    explanation: [
      "START → Indicates the beginning of the process, where the program starts its execution.",
      "Declare n1, n2 and DIFF → Indicates the declaration of three variables: n1, n2, and DIFF. These variables are used to store the values of the two numbers to be subtracted and their difference.",
      "Read (input) n1 and n2 → Indicates the input of the two numbers to be subtracted. The program asks the user to enter the values of n1 and n2 and stores them in the respective variables.",
      "DIFF = n1 - n2 → Indicates the calculation of the difference between n1 and n2 and storing it in the variable DIFF. The program subtracts the value of n2 from the value of n1 and stores the result in the variable DIFF.",
      "Display (output) DIFF → Indicates the output of the difference between n1 and n2. The program displays the value of DIFF on the screen or prints it on a paper.",
      "STOP → Indicates the end of the process, where the program stops executing.",
    ],
    ytLink: "https://www.youtube.com/embed/OmvcE2nPF7g",
    sources: [
      {
        name: "Moomoomath blog",
        url: "http://www.moomoomathblog.com/2016/05/flowchart-adding-subtracting-integers.html",
      },
      {
        name: "Testing Docs",
        url: "https://www.testingdocs.com/raptor-flowchart-to-subtract-two-numbers/",
      },
    ],
  },
  // C
  {
    name: "design-a-flowchart-to-find-smallest-of-3-numbers",
    title: "Design a Flowchart to find Smallest of 3 numbers",
    language: "plaintext",
    images: ["https://i.imgur.com/A7soDyh.png"],
    type: "Theory",
    description: `
        The flowchart outlines a step-by-step algorithm to find the smallest number among three input numbers, incorporating input validation for error handling. Beginning with the Start symbol, it proceeds to declare variables to hold the input numbers. The user is prompted to input three numbers, which are then validated for correctness. The algorithm compares the first two numbers and stores the smaller one. Following this, it compares the smallest to the third number, determining the overall smallest number among the three. Finally, it displays this smallest number to the user.
        `,
    explanation: [
      "START → The Start symbol indicates the beginning of the process.",
      "VARIABLE DECLARATION → This step is used to declare the three variables: n1, n2, and n3, which will store the three numbers for comparison.",
      "USER INPUT PROMPT → This step prompts the user to enter three numbers.",
      "INPUT VALIDATION → Here, the program validates the user's input to ensure it consists of three valid numbers and provides error handling if needed.",
      "COMPARE FIRST TWO NUMBERS → Compares the first two numbers (n1 and n2) and stores the smaller one in a variable called min.",
      "COMPARE SMALLEST TO THIRD NUMBER → Compares the smallest number (min) to the third number (n3) to determine the overall smallest number among the three.",
      "DISPLAY OUTPUT → The program displays the smallest number to the user.",
    ],
    ytLink: "https://www.youtube.com/embed/Dj_5Tv5sOxI",
    sources: [
      {
        name: "Brainly",
        url: "https://brainly.in/question/19808848",
      },
      {
        name: "Testing Docs",
        url: "https://www.testingdocs.com/questions/flowchart-to-find-the-smallest-among-3-numbers/",
      },
    ],
  },
  // D
  {
    name: "design-a-flowchart-to-find-largest-of-3-numbers",
    title: "Design a Flowchart to find Largest of 3 numbers",
    language: "plaintext",
    images: ["https://i.imgur.com/UbOOfHp.png"],
    type: "Theory",
    description: `
        The flowchart explains a program's structure for finding the largest among three numbers. It begins by declaring variables (n1, n2, n3, and MAX) and initializing MAX with n1. The program then takes user input for n1, n2, and n3. It compares n2 and n3 with MAX, updating MAX if necessary. Finally, it displays the largest value (MAX) and ends the process.
        `,
    explanation: [
      "START → The Start symbol indicates the beginning of the process.",
      "VARIABLE DECLARATION → This step is used to declare the variables: n1, n2, n3, and MAX. Variables are introduced to store values during the program execution.",
      "USER INPUT PROMPT → In this step, the program prompts the user to input values for n1, n2, and n3. The entered values are stored in their respective variables.",
      "INITIALIZE MAX → The program sets the initial value of MAX by assigning the value of n1 to it.",
      "COMPARE n2 TO MAX → Compares the value of n2 with MAX to determine the largest so far. If n2 is greater, MAX is updated.",
      "COMPARE n3 TO MAX → Compares the value of n3 with MAX to determine the overall largest number. MAX is updated if needed.",
      "DISPLAY MAX → The program displays the largest value (MAX) to the user.",
      "END → The End symbol indicates the conclusion of the program's execution.",
    ],
    ytLink: "https://www.youtube.com/embed/wuXqMMHdnBk",
    sources: [
      {
        name: "Math Answers",
        url: "https://math.answers.com/other-math/Draw_a_flowchart_diagram_to_find_the_largest_of_3_numbers#:~:text=The%20flowchart%20in%20deriving%20the%20largest%20of%20three,the%20decision%20box%20for%20%27Is%20variable_A%20not%20numeric%3F%27.",
      },
      {
        name: "Alphabet Coder",
        url: "https://www.alphabetacoder.com/2020/08/flowchart-to-find-largest-among-three.html",
      },
    ],
  },
  // E
  {
    name: "design-a-flowchart-to-calculate-and-print-sum-of-n-numbers",
    title: "Design a Flowchart to Calculate & Print Sum of N numbers",
    language: "plaintext",
    images: ["https://i.imgur.com/S71uPMd.png"],
    type: "Theory",
    description: `
        The flowchart outlines a program that calculates the sum of numbers from 1 to a given input (N). It begins by declaring three variables: N, SUM, and COUNT. The program then takes user input for N and initializes SUM and COUNT. A loop iterates as long as COUNT is less than or equal to N, adding COUNT to the SUM and incrementing COUNT. Finally, it displays the sum (SUM) and concludes the program.
        `,
    explanation: [
      "START → The Start symbol marks the beginning of the program.",
      "VARIABLE DECLARATION → This step introduces and names three variables: N, SUM, and COUNT, used to store input, sum of numbers, and the current number to be added.",
      "USER INPUT PROMPT → This step involves prompting the user to input the value of N, which is then stored in the variable N.",
      "INITIALIZE SUM → The program sets the initial value of SUM to 0.",
      "INITIALIZE COUNT → The program sets the initial value of COUNT to 1.",
      "CONDITION CHECK → This step checks if COUNT is less than or equal to N, determining whether the loop should continue or not.",
      "UPDATE SUM → When the condition is true, this step updates the value of SUM by adding COUNT to it.",
      "UPDATE COUNT → Following SUM update, this step increments COUNT by 1 for the next iteration.",
      "DISPLAY OUTPUT → The program displays the calculated sum (SUM) to the user.",
      "END → The End symbol marks the conclusion of the program's execution.",
    ],
    ytLink: "https://www.youtube.com/embed/TWKgV0oTgm8",
    sources: [
      {
        name: "Technology Strive",
        url: "https://technologystrive.com/flow-chart/sum-of-first-n-numbers",
      },
      {
        name: "A Tech Daily",
        url: "https://www.atechdaily.com/posts/algorithm-and-flowchart-for-finding-the-sum-of-natural-number-upto-given-number?q=trading+tips#gsc.tab=0&gsc.q=trading%20tips&gsc.page=1",
      },
    ],
  },
  // Experiment 05
  {
    name: "design-and-create-webpage-for-displaying-your-poem",
    title: "Design and create webpage for displaying your poem",
    language: "html",
    code: `
    <!-- /* Save HTML file as: Prog5.html* / -->
    <!DOCTYPE html>
    <html>
    
    <head>
        <title>MY POEM</title>
    </head>
    
    <body style="background-color: lightpink">
        <center>
            <h1>
                <mark><u>JOHNY JOHNY YES PAPA</mark></u>
            </h1>
    
            <p>
                <i>
                    <font size="7" color="darkblue" face="Arial"> JOHNY JOHNY..<br> YES PAPA</font>
                </i>
            </p>
    
            <p><b>
                    <font size="6" color="darkred" face=”Courier New”>
                        EATING SUGAR.? <br>NO PAPA</font>
                </b></p>
    
            <p><i><b>
                        <font size="5" color="darkgreen" face="Calibri"> TELLING A LIE.?<br> NO PAPA</font>
                    </b></i></p>
    
            <p>
                <font size="5" color="darkvoilet" face=”Times New Roman”>
                    OPEN YOUR MOUTH.?<br> HA HA..</font>
            </p>
    
            <p>
                <font size="4" color="black">
                    Poem by: XYZ</font>
            </p>
        </center>
    </body>
    
    </html>
        
        `,
    images: ["https://i.imgur.com/MHrenC9.png"],
    type: "Lab",
    description: `
        The HTML code creates a webpage displaying a poem titled "JOHNY JOHNY YES PAPA" in a visually styled format using HTML tags for various font styles, sizes, colors, and alignments
        `,
    explanation: [
      "Starting HTML: Imagine HTML is like a language computers understand. When we start an HTML file, it's like saying to the computer, 'Hey, get ready, we're going to talk in HTML now.'",
      "Setting Up the Document: It's like when you're writing a letter. You want to set up the basics first. The <head> part is where you put important information about your 'letter,' like a title. It's like writing the recipient's address on an envelope. The <title> is like giving your letter a title, so people know what it's about before they open it.",
      "Starting the Main Content: Now, let's dive into the body of the letter. The <body> is where the main content of your letter goes, just like the main part of the letter you're writing.",
      "Making Things Look Nice: Sometimes, you want your letter to look neat and organized. The <center> tag is like saying, 'Let's make everything nice and centered on the page, so it looks clean and tidy.'",
      "Writing the Heading: When you write a letter, you often start with a big, important title. The <h1> tag is like that - it's saying, 'This is the big, important part.' And using <mark> and <u> is like highlighting and underlining the title to make it even more noticeable.",
      "Styling the Text: You know how you use different styles when you write, like making words slanted or changing their size? The <i> tag is like saying, 'Let's slant this part, like we're whispering it.' And the <font> tag is like choosing how big, what color, and what font style you want for that part of the text.",
      "Adding Emphasis: Sometimes, you want to say something extra loud or strong in your letter. The <b> tag is like using bold letters to make a point, saying, 'Pay attention to this!'",
      "Writing the Poem: Now, let's get into the heart of the letter, where you tell your story. In this case, it's a poem. You use different styles to make it interesting, just like using different voices or expressions when you tell a story to make it more exciting.",
      "Ending the Letter: Like ending a letter with your name, here we have a line that tells us who wrote the poem. It's like saying, 'This awesome poem was created by XYZ.'",
      "Closing HTML: Finally, just like you finish a letter with 'Sincerely' or 'Best regards,' we end our HTML file by saying, 'Okay, we're done with the whole thing. The end!'",
    ],
    ytLink: "https://www.youtube.com/embed/fz-pj8_C9YY?si=UoRJUCapYmkOFpXB",
    sources: [
      {
        name: "Medium",
        url: "https://medium.com/programming-for-design-practices/html-basics-4172cffc0a5b",
      },
      {
        name: "khanacademy",
        url: "https://www.khanacademy.org/computing/computer-programming/html-css/intro-to-html/pc/challenge-write-a-poem",
      },
    ],
  },
  // Experiment 06
  {
    name: "design-and-create-webpage-for-your-wish-list",
    title:
      "Design and create webpage for your Wish List (What you want to do).Also list Challenges and Opportunities along with images to present your dreams. (List ordered and unordered, Image, table)",
    language: "html",
    code: `
        <!-- /* Save HTML file as: Prog6.html* / -->
        <!DOCTYPE HTML>
        <html>
        
        <head>
            <title>Wish List</title>
        </head>
        
        <body style="background-color: lightyellow;">
            <font size="6">
        
                <p><u><mark> MY WISH LIST </mark></u></p>
        
                <p><b><u> ORDERED LIST </u></b></p>
                <ol type="a">
                    <li> I wish to travel to abroad</li>
                    <li> I wish to have a wonderful graduate ceremony with my family</li>
                    <li> I wish to dance with Prabhu Deva</li>
                    <li> i wish to be a speaker in front of 400 people</li>
                    <li> I wish to play cricket with Virat Kohli</li>
                </ol>
        
                <p><b><u> UNORDERED LIST </u></b></p>
                <ul type="circle">
                    <li> I wish to dance under the rain with loving people</li>
                    <li> I wish to go to the wonderful resort with my family</li>
                    <li> I wish to learn new Programming Language </li>
                    <li> I wishto Join the big corporate company </li>
                    <li> I wish to swim in ocean </li>
                </ul>
        
        
                <p><b><u>IMAGE</u></b></p>
                <img src="https://media1.tenor.com/images/a862d2cb92bfbe6213e298871b1e8a9a/tenor.gif?itemid=15805236"
                    width="300" height="300">
        
                <p><b><u> TABLE </u></b></p>
                <table border=2 bordercolor="red" cellpadding="8">
                    <tr bgcolor="lightgreen">
                        <th>CHALLENGES</th>
                        <th>OPPORTUNITIES</th></b>
                    </tr>
                    <tr>
                        <td> Confusion about career choices. </td>
                        <td> To recoup with career decision.</td>
                    </tr>
                    <tr>
                        <td> Failures related to exam.</td>
                        <td> Responding to Globalization.</td>
                    </tr>
                    <tr>
                        <td> Time management</td>
                        <td> Empowering People.</td>
                    </tr>
                    <tr>
                        <td> Competition pressure</td>
                        <td> Improving Ethical Behavior. </td>
                    </tr>
                    <tr>
                        <td> Communicating issues to parents</td>
                        <td> Getting recognition at early stage. </td>
                    </tr>
                </table>
            </font>
        </body>
        
        </html>
        `,
    images: [
      "https://i.imgur.com/7PF9Ca3.png",
      "https://i.imgur.com/7XFgugo.png",
    ],
    type: "Lab",
    description: `
        The HTML code creates a webpage describing a wish list. It includes a title, a marked and underlined heading, ordered and unordered lists of wishes, an image, and a table showcasing challenges and opportunities.
        `,
    explanation: [
      "Starting HTML: HTML is like a language that computers understand. Starting HTML is like saying 'Hey, let's create a webpage using this language.'",
      "Starting the Main Content: Once we've set up the structure, we start the main part where all the content goes, like the body of a letter.",
      "Making Things Look Nice: The <font> tag helps in styling the text, making it visually appealing. In this case, it's used to make the text larger for emphasis.",
      "Writing the Heading: The heading is like the title of a story or book, grabbing attention. The <u> and <mark> tags underline and highlight the heading to make it stand out.",
      "Creating Lists: Lists help organize information. The ordered list <ol> has items with numbers (a, b, c...), and the unordered list <ul> has items with bullet points.",
      "Adding List Items: Each <li> (list item) is a wish on our wish list. It's like writing down each item on a list, like items you need to buy at a store.",
      "Displaying an Image: Just like putting a picture in your storybook, the <img> tag displays an image. It helps convey an idea or a feeling related to the content.",
      "Creating a Table: The <table> tag is like creating a chart or a table in a document. It's a neat way to organize information, like listing challenges and opportunities side by side.",
      "Closing HTML: Just like how you say 'The end' at the end of a story, we close the HTML file. It's like putting a period at the end of a sentence. It tells the computer we're done.",
    ],
    ytLink: "https://www.youtube.com/embed/rPblWCqOgWs",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/html//html_lists_ordered.asp",
      },
      {
        name: "W3D",
        url: "https://www.w3docs.com/learn-html/html-lists.html",
      },
    ],
  },
  // Experiment 07
  {
    name: "design-and-create-webpage-using-html-and-css-about-an-awesome-animal",
    title:
      "Design and create webpage using HTML and CSS about an awesome animal (Use necessary CSS tags)",
    language: "html",
    code: `
    <!-- /* Save HTML file as: Prog7.html* / -->
    <!DOCTYPE HTML>
    <html>
            
    <head>
        <title>Cascading Style Sheet (CSS)</title>
        <style type="text/css">
            head_style {
                height: 400px;
                width: 50em;
                color: blue;
                background-color: lightpink;
                font-size: 50px;
                letter-spacing: 10;
                text-align: center;
                text-shadow: 3px 3px yellow;
                box-shadow: 2px 4px 4px blue;
                border: 4px solid red;
                padding: 20px;
            }
    
            p1_style {
                color: red;
                font-size: 25px;
                letter-spacing: 10;
                text-shadow: 2px 2px black;
            }
    
            p2_style {
                color: blue;
                font-size: 35px;
                letter-spacing: 10;
                text-shadow: 3px 3px yellow;
            }
    
            p3_style {
                color: green;
                font-size: 35px;
                letter-spacing: 10;
                text-shadow: 3.5px 1.5px brown;
            }
        </style>
    </head>
    
    <body bgcolor="lightyellow">
    
        <center>
            <br>
            <br><br>
    
            <head_style>MY AWESOME ANIMAL (TIGER)</head_style>
            <br><br>
            <br><br>
    
            <img src="https://th.bing.com/th/id/R.44911e11999fb4f7007ca88ebe5a8952?rik=RZTQYPK6Ge35bA&riu=http%3a%2f%2fwww.pbh2.com%2fwordpress%2fwp-content%2fuploads%2f2012%2f10%2fcutest-animal-gifs-tiger-cub-yawn.gif&ehk=G6CyfhCYAApjqm4PyDwsU2iF7cdBJnMBQ%2f6dhaiBrhs%3d&risl=&pid=ImgRaw&r=0" Height="200" Width="400"></img>
    
            <p>
                <p1_style>Tiger is the biggest and strongest animals of the jungle.<br> Tiger is a “Carnivorous” animal
                    (flesh eater) </p1_style>
            </p>
    
    
            <p>
                <p2_style>Tigers live for about 25 years<br>
                    Tigers love to swim and play in the water<p2_style>
            </p>
    
    
            <p>
                <p3_style>Tigers can sprint at over 60 km/hour<br>
                    Tigers “Roaring” sound can reach 3km away</p3_style>
            </p>
    
        </center>
    
    </body>
    
    </html>
        `,
    images: ["https://i.imgur.com/zB7fJyy.png"],
    type: "Lab",
    description: `
        The HTML code defines a basic webpage structure with a title and content about tigers. It includes a styled heading, an image of a tiger, and three paragraphs with specific styles.
        `,
    explanation: [
      "Starting HTML: HTML is like a language that computers understand. Starting HTML is like saying 'Hey, let's create a webpage using this language.'",
      "Defining Document Type: <!doctype html> is the declaration that specifies the document type and version of HTML being used.",
      "Starting HTML Structure: <html> is the root element that encapsulates the entire HTML content.",
      "Defining Head: <head> contains meta-information about the document, including the title and links to external resources like stylesheets.",
      "Setting Title: <title> sets the title of the webpage that appears in the browser's title bar or tab.",
      "Defining Styles: <style> is used to embed CSS (Cascading Style Sheets) within the HTML file, defining styles for various elements.",
      "Defining CSS Styles: CSS styles are defined for selectors like head_style, p1_style, p2_style, and p3_style, specifying properties like color, font-size, letter-spacing, text-shadow, etc.",
      "Starting Body: <body> is the container for the visible content of the webpage.",
      "Setting Body Background Color: bgcolor attribute of <body> sets the background color of the page to light yellow.",
      "Centering Content: <center> is used to center the content within it.",
      "Adding Line Breaks: <br> creates line breaks for spacing.",
      "Displaying Heading: <head_style> defines a styled heading for the webpage.",
      "Displaying Image: <img> displays an image sourced from a URL with specified height and width.",
      "Displaying Paragraphs: <p> defines paragraphs of text.",
      "Defining CSS Styles for head_style: Styles a heading with the class 'head_style'. It sets the height to 400 pixels, width to 50em, text color to blue, background color to light pink, font size to 50 pixels, letter spacing to 10 units, aligns text to center, adds a yellow text shadow, blue box shadow, a 4-pixel solid red border, and 20 pixels of padding.",
      "Defining CSS Styles for p1_style: Styles for a paragraph. It sets the text color to red, font size to 25 pixels, letter spacing to 10 units, and adds a black text shadow.",
      "Defining CSS Styles for p2_style: Styles for another paragraph. It sets the text color to blue, font size to 35 pixels, letter spacing to 10 units, and adds a yellow text shadow.",
      "Defining CSS Styles for p3_style: Styles for yet another paragraph. It sets the text color to green, font size to 35 pixels, letter spacing to 10 units, and adds a brown text shadow.",
    ],
    ytLink: "https://www.youtube.com/embed/D-h8L5hgW-w?si=c-fEGMJ6y5bx1ItO",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/html/html_css.asp",
      },
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/web-technology/html-css/",
      },
    ],
  },
  // Experiment 07
  {
    name: "design-and-create-web-page-for-a-travel-book-with-more-than-three-pages",
    title:
      "Design and create web page for a travel book with more than 3 pages, table to list places (iframe, hyperlink)",
    language: "html",
    code: `

<!-- /* Save HTML file as: homepage.html* / -->
<!DOCTYPE HTML>

<html>

<head>

    <title> Travel Book </title>

</head>


<body bgcolor="purple">
    <center>
        <font size="7" color="yellow"> MY TRAVEL BOOK WEBSITE </font>


        <font size="4" color="yellow">
            <marquee> Welcome to my Travel book website </marquee><br>


            <iframe src="frame1.html" name="f1" style="width:30%; height:80%;"></iframe>
            <iframe src="frame2.html" name="f2" style="width:65%; height:80%;"></iframe>

            <marquee> Contact for more details X.Y.Z M.L.B. Polytechnic, Belagavi </marquee>
        </font>
    </center>
</body>

</html>

<!-- ------------------------------------------------------------ -->

<!-- frame1.html - Save this in a html file with the following name in the same directory -->

<html>

<body bgcolor="lightpink">
    <font size="6">
        <center>
            <table border=2 bordercolor="blue" cellpadding="10">
                <tr>

                    <th bgcolor="lightgreen">*TOURIST PLACES*</th>

                </tr>
                <tr>

                    <td><a href="gokak.html" target="f2"> Gokak Falls</a></td>
                </tr>
                <tr>
                    <td><a href="mysore.html" target="f2"> Mysore Palace </a></td>



                </tr>
                <tr>

                    <td><a href="golgumbaz.html" target="f2"> Golgumbaz</a></td>
                </tr>
                <tr>
                    <td><a href="badami.html" target="f2"> Badami Caves</a></td>

                </tr>
                <tr>
                    <td><a href="contact.html" target="f2"> Contact Details</a></td>

                </tr>

            </table>
        </center>
    </font>
</body>

</html>

<!-- ------------------------------------------------------------ -->

<!-- frame2.html - Save this in a html file with the following name in the same directory -->

<html>
    <body bgcolor="lightpink">

    </body>
</html>

<!-- ------------------------------------------------------------ -->

<!-- gokak.html - Save this in a html file with the following name in the same directory -->

<html>

<body>
    <center>
        <font color="white">
            <h1>GOKAK FALLS</h1>
        </font><img src="https://2.bp.blogspot.com/-OabbDTIevwg/WpVAuCvfiQI/AAAAAAAAO98/zCc_XUwLyMIH5nmG8dlo1ezLRH_svalfwCLcBGAs/s1600/1.jpg" width="400" height="300">

        <table border="2" cellpadding="20">
            <caption>
                <font size="5" color="white">INFORMATION ABOUT GOKAKFALLS</font>
            </caption>
            <tr bgcolor="yellow">
                <th> FOOD </th>
                <th> HALT </th>
                <th> GUIDE </th>
                <th> TOURIST BUS </th>

            </tr>
            <tr bgcolor="lightyellow">
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>

            </tr>
        </table>
    </center>
</body>

</html>

<!-- ------------------------------------------------------------ -->

<!-- mysore.html - Save this in a html file with the following name in the same directory -->

<html>

<body>
    <center>
        <font color="white">
            <h1>MYSORE PALACE</h1>
        </font><img src="https://th.bing.com/th/id/OIP.jWJ0UUluSEaVjLmgfeFObAHaE7?pid=ImgDet&rs=1" width="500"
            height="300">

        <table border="2" cellpadding="20">
            <caption>
                <font size="5" color="white">INFORMATION ABOUT MYSORE PALACE
                </font>
            </caption>
            <tr bgcolor="yellow">
                <th>FOOD</th>
                <th>HALT</th>
                <th>GUIDE</th>
                <th>TOURIST BUS</th>

            </tr>
            <tr bgcolor="lightyellow">
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>

            </tr>
        </table>
    </center>
</body>

</html>


<!-- ------------------------------------------------------------ -->

<!-- badami.html - Save this in a html file with the following name in the same directory -->

<html>


<body>



    <center>
        <font color="white">
            <h1>BADAMI CAVES</h1>


        </font><img src="https://www.mustvisitplace.com/wp-content/uploads/2019/04/badami-cave-temples-scaled.jpg" width="400" height="300">

        <table border="2" cellpadding="20">
            <caption>
                <font size="5" color="white">INFORMATION ABOUTT BADAMI </font>
            </caption>
            <tr bgcolor="yellow">
                <th>FOOD</th>
                <th>HALT</th>
                <th>GUIDE</th>
                <th>TOURIST BUS</th>

            </tr>
            <tr bgcolor="lightyellow">
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>

            </tr>
        </table>
    </center>
</body>

</html>

<!-- ------------------------------------------------------------ -->

<!-- golgumbaz.html - Save this in a html file with the following name in the same directory -->

<html>

<body>
    <center>
        <font color="white">
            <h1>GOLGUMBAZ</h1>
        </font><img src="https://th.bing.com/th/id/R.f9c991a53d7ab1544d66526ca81f4eaa?rik=LtvE%2fTNE3UgAuA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb6%2fGol_Gumbaz.jpg&ehk=tdLI5yhAv3%2bEk%2bweOPgnTWCGKnpkd8oPEVx43fVj%2fJU%3d&risl=&pid=ImgRaw&r=0" width="400" height="300">

        <table border="2" cellpadding="20">
            <caption>
                <font size="5" color="white">INFORMATION ABOUT GOLGUMBAZ</font>
            </caption>
            <tr bgcolor="yellow">
                <th>FOOD</th>
                <th>HALT</th>
                <th>GUIDE</th>
                <th>TOURIST BUS</th>


            </tr>
            <tr bgcolor="lightyellow">
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>
                <td> Available </td>

            </tr>
        </table>
    </center>
</body>

</html>

<!-- ------------------------------------------------------------ -->

<!-- contact.html - Save this in a html file with the following name in the same directory -->

<html>

<body bgcolor="lightpink">
    <h2>
        <center>CONTACT DETAILS</center>
    </h2>
    <font size="6">
        <p>X.Y.Z<br> M.L.B POLYTECHNIC <br> BELAGAVI </p>
    </font>
</body>

</html>


`,
    images: [
      "https://i.imgur.com/VIARmKT.png",
      "https://i.imgur.com/eC9s0Sk.png",
      "https://i.imgur.com/WsNXEjp.png",
      "https://i.imgur.com/mcIN4kE.png",
      "https://i.imgur.com/FyzO2Mr.png",
      "https://i.imgur.com/dgPoFKq.png",
    ],
    type: "Lab",
    description: `

        `,
    explanation: [
      'HTML file: Save as homepage.html. Save this code as a file named "homepage.html" to create the main HTML file for the website.',
      "DOCTYPE HTML: Declares the HTML version being used. This declaration specifies that the HTML version being used is HTML5.",
      "Root HTML Element: Root element that encapsulates the entire HTML content. The <html> element is the root element that encapsulates all the content on the webpage.",
      "Head Section: Contains meta-information about the document. The <head> section contains meta-information, links to stylesheets, and other data that helps describe the document.",
      "Title: Sets the title of the webpage. The <title> element sets the title of the webpage, which is displayed in the browser's title bar or tab.",
      "Body Section: Contains the visible content of the webpage. The <body> section contains the visible content of the webpage, including text, images, and other elements.",
      'Background Color: Sets the background color of the webpage. The "bgcolor" attribute in the <body> tag sets the background color of the webpage.',
      "Centering Content: Centers content on the webpage. The <center> tag is used to center content within its parent element.",
      'Styling Fonts and Marquee: Styles fonts and creates scrolling text. The <font> tag with "size" and "color" attributes is used to style fonts, and the <marquee> tag creates scrolling text.',
      "Displaying External Content: Displays external content (HTML files) within iframes. The <iframe> tag is used to display external content (in this case, other HTML files) within the webpage.",
      "Closing HTML: Closes the HTML structure. The closing </html> tag signifies the end of the HTML document.",
      'frame1.html: Save this as an HTML file. Save the content provided under "frame1.html Content" as a file named "frame1.html".',
      "frame1.html Content: Displays a table with links to tourist places. The HTML content that creates a table with links to various tourist places.",
      'frame2.html: Save this as an HTML file. Save the content provided under "frame2.html Content" as a file named "frame2.html".',
      "frame2.html Content: Empty page with a light pink background. The HTML content for an empty page with a light pink background.",
      'gokak.html: Save this as an HTML file. Save the content provided under "gokak.html Content" as a file named "gokak.html".',
      "gokak.html Content: Information about Gokak Falls. The HTML content that provides information about Gokak Falls.",
      'mysore.html: Save this as an HTML file. Save the content provided under "mysore.html Content" as a file named "mysore.html".',
      "mysore.html Content: Information about Mysore Palace. The HTML content that provides information about Mysore Palace.",
      'badami.html: Save this as an HTML file. Save the content provided under "badami.html Content" as a file named "badami.html".',
      "badami.html Content: Information about Badami Caves. The HTML content that provides information about Badami Caves.",
      'golgumbaz.html: Save this as an HTML file. Save the content provided under "golgumbaz.html Content" as a file named "golgumbaz.html".',
      "golgumbaz.html Content: Information about Golgumbaz. The HTML content that provides information about Golgumbaz.",
      'contact.html: Save this as an HTML file. Save the content provided under "contact.html Content" as a file named "contact.html".',
      "contact.html Content: Displays contact details. The HTML content that displays contact details.",
    ],

    ytLink: "https://www.youtube.com/embed/aRGdDy18qfY",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/html/html_iframe.asp",
      },
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/html-iframes/",
      },
    ],
  },
  // Experiment 08
  {
    name: "design-and-create-web-page-with-javaScript-to-design-simple-calculator",
    title:
      "Design and create web page with JavaScript to Design simple calculator to perform the following operations: sum, product, difference and quotient",
    language: "html",
    code: `

<!-- Write the CSS and JS code in separate files - Here i wrote them in the HTML itself due to compatibility issues -->
<!-- /* Save HTML file as: Prog9.html* / -->
<html>

<head>
<meta name=”viewport” content=”width=device-width,initial-scale=1”>
<title>My Favorite Animal</title>
<link rel="stylesheet" href="style.css">
<!-- Write the CSS and JS code in separate files - Here i wrote them in the HTML itself due to compatibility issues -->
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    .button {
        width: 50;
        height: 50;
        font-size: 25;
        margin: 2;
        cursor: pointer;
    }
    
    .textview {
        width: 217;
        margin: 5;
        font-size: 25;
        padding: 5;
    }
</style>
<!-- Write the CSS and JS code in separate files - Here i wrote them in the HTML itself due to compatibility issues -->
<script>
        function insert(num){
            document.form.textview.value=document.form.textview.value+num;
        }
        
        function equal(){
            var exp=document.form.textview.value;
            if(exp){
                document.form.textview.value=eval(exp);
            }
        }
        
        function clean(){
            document.form.textview.value="";
        }
        
        function back(){
            var exp=document.form.textview.value;
            document.form.textview.value=exp.substring(0,exp.length-1);
        }
</script>
</head>

<body>
<div class="main">
    <form name="form">
        <input class="textview" name="textview">
    </form>

    <table>
        <tr>
            <td><input class="button" type="button" value="C" onclick="clean()"></td>
            <td><input class="button" type="button" value="<" onclick="back()"></td>
            <td><input class="button" type="button" value="/" onclick="insert('/')"></td>
            <td><input class="button" type="button" value="x" onclick="insert('*')"></td>
        </tr>

        <tr>
            <td><input class="button" type="button" value="7" onclick="insert(7)"></td>
            <td><input class="button" type="button" value="8" onclick="insert(8)"></td>
            <td><input class="button" type="button" value="9" onclick="insert(9)"></td>
            <td><input class="button" type="button" value="-" onclick="insert('-')"></td>
        </tr>

        <tr>
            <td><input class="button" type="button" value="4" onclick="insert(4)"></td>
            <td><input class="button" type="button" value="5" onclick="insert(5)"></td>
            <td><input class="button" type="button" value="6" onclick="insert(6)"></td>
            <td><input class="button" type="button" value="+" onclick="insert('+')"></td>
        </tr>

        <tr>
            <td><input class="button" type="button" value="1" onclick="insert(1)"></td>
            <td><input class="button" type="button" value="2" onclick="insert(2)"></td>
            <td><input class="button" type="button" value="3" onclick="insert(3)"></td>
            <td><input class="button" type="button" value="=" onclick="equal()"></td>
        </tr>

        <tr>
            <td><input class="button" type="button" value="0" onclick="insert(0)"></td>
            <td><input class="button" type="button" value="." onclick="insert('.')"></td>
        </tr>

        <script src="script.js"></script>
</body>

</html>

<!-- ------------------------------------------------------------ -->

<!-- style.css.html - Save this in a css file with the following name in the same directory -->

* {
margin: 0;
padding: 0;
}

.button {
width: 50;
height: 50;
font-size: 25;
margin: 2;
cursor: pointer;
}

.textview {
width: 217;
margin: 5;
font-size: 25;
padding: 5;
}


<!-- ------------------------------------------------------------ -->

<!-- script.html - Save this in a JS file with the following name in the same directory -->

function insert(num){
    document.form.textview.value=document.form.textview.value+num;
}

function equal(){
    var exp=document.form.textview.value;
    if(exp){
        document.form.textview.value=eval(exp);
    }
}

function clean(){
    document.form.textview.value="";
}

function back(){
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
} 

`,
    images: ["https://i.imgur.com/LfFq4fB.png"],
    type: "Lab",
    description: `

        `,
    explanation: [
      "Save the HTML code as 'Prog9.html'. This file contains the structure of the webpage.",
      "DOCTYPE HTML declares the HTML version being used for the document.",
      "The root <html> element encapsulates the entire HTML content.",
      "The <head> section holds meta-information about the document, like the title and links.",
      "The <title> element sets the title of the webpage, visible in the browser's title bar.",
      "Link to an external CSS file named 'style.css' to style the webpage.",
      "CSS rules for styling elements on the webpage are defined in this section.",
      "CSS rules for centering content on the webpage.",
      "JavaScript functions for the calculator's functionality are included here.",
      "The function 'insert(num)' adds the provided number to the calculator display.",
      "The function 'equal()' evaluates and displays the result of the expression.",
      "The function 'clean()' clears the calculator display.",
      "The function 'back()' removes the last character from the calculator display.",
      "The <body> section contains the visible content of the webpage.",
      "Input elements, representing numbers, operators, and actions in the calculator.",
      "Link to an external JavaScript file named 'script.js' to provide additional functionality.",
    ],
    ytLink: "https://www.youtube.com/embed/LX8_z1nvqk4",
    sources: [
      {
        name: "Dev",
        url: "https://dev.to/javascriptacademy/create-a-simple-calculator-using-html-css-and-javascript-4o7k",
      },
      {
        name: "Make Use Of",
        url: "https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/",
      },
    ],
  },
  // Experiment 10
  {
    name: "design-and-create-a-personal-webpage-with-dashboard",
    title: "Design and create a personal webpage with dashboard",
    language: "html",
    code: `
<!DOCTYPE html>
<html>

<head>
    <title>Dashboard</title>
    <style>
        /* Style the header */
        .header {
            padding: 10px;
            text-align: center;
            background: blue;
            color: white;
            font-size: 25px;
        }

        /* Style the top navigation bar */
        .navbar {
            overflow: hidden;
            background-color: yellow;
        }

        /* Style the navigation bar links */
        .navbar a {
            color: black;
            text-align: center;
            padding: 14px 20px;
        }


        /* Change color on hover */
        .navbar a:hover {
            background-color: red;
            color: black;
        }
    </style>
</head>


<body bgcolor="lightgreen">

    <div class="header">
        <h1>DASH BOARD</h1>
        <p>(Admin control Panel)</p>
    </div>

    <div class="navbar">
        <b><a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a></b>
    </div>

</body>

</html>
        `,
    images: ["https://i.imgur.com/dfN1ArJ.png"],
    type: "Lab",
    description: `
        The given HTML code constructs a basic webpage featuring a title, header, and a navigation bar. The document starts with a declaration specifying HTML5. The head section defines the title of the page and internal CSS styles for styling elements such as the header and navigation bar. The body has a light green background and contains two main divisions: one for the header and another for the navigation bar. The header includes a prominent heading "DASH BOARD" and a descriptive subtext "Admin control Panel." The navigation bar, styled in yellow with links styled for hover effects, presents three links labeled "Link 1," "Link 2," and "Link 3." This setup provides a foundation for creating a visually appealing webpage with a clear header and accessible navigation.
        `,
    explanation: [
      "DOCTYPE html: Declares the HTML5 doctype for the document.",
      "Root <html> element: Root element that encapsulates the entire HTML content.",
      "Head section: Contains meta-information and styles for the document.",
      "Title: Sets the title of the webpage, visible in the browser's title bar.",
      "CSS Styling: Defines styles for elements within the webpage.",
      "Style the header: Styles the header section with padding, background, and font color.",
      "Style the top navigation bar: Styles the navigation bar with overflow and background color.",
      "Style the navigation bar links: Styles the links within the navigation bar.",
      "Change color on hover: Specifies styles for links on hover.",
      "Body section: Contains the visible content of the webpage.",
      "Background color: Sets the background color of the body section.",
      "Header: Contains a heading and a subheading within a styled <div>.",
      "Navigation bar: Contains navigation links within a styled <div>.",
    ],
    ytLink: "https://www.youtube.com/embed/g6HqL18plx4",
    sources: [
      {
        name: "Tutsplus",
        url: "https://webdesign.tutsplus.com/building-an-admin-dashboard-layout-with-css-and-a-touch-of-javascript--cms-33964t",
      },
      {
        name: "Geeks for Geeks",
        url: "https://www.geeksforgeeks.org/how-to-create-responsive-admin-dashboard-using-html-css-javascript/",
      },
    ],
  },
  // Experiment 11
  {
    name: "design-and-create-web-page-about-advantages-of-business-process-automation",
    title:
      "Design and create web page about advantages of business process automation with respect to your branch of engineering",
    language: "html",
    code: `
<!-- Prog11.html -->
<!DOCTYPE html>
<html>

<head>
    <title>BPA</title>
    <style>
        header {
            color: red;
            font-size: 75px;
            text-shadow: 5px 5px 5px yellow;
        }
    </style>
</head>


<body bgcolor="lightgreen">
    <center>
        <header>BUSINESS PROCESS AUTOMATION</header>


        <iframe src="frame1.html" name="f1" style="width:30%; height:80vh;"></iframe>
        <iframe src="frame2.html" name="f2" style="width:65%; height:80vh;"></iframe>


        <marquee>Advantage of Process Automation for Computer Science branch</marquee>
    </center>
</body>

</html>

<!-- frame1.html -->
<html>

<body bgcolor="lightpink">
    <font size="6">
        <center>
            <table border=2 bordercolor="blue" cellpadding="25" colspan="10">
                <tr>
                    <th bgcolor="lightgreen">*ENGINEERING BRANCHES*</th>
                </tr>
                <tr>
                    <td><a href="CS.html" target="f2">COMPUTER SCI.</a></td>
                </tr>
                <tr>
                    <td>CIVIL ENGINEERING</td>
                </tr>
                <tr>
                    <td>ELECTRONICS & COMM.</td>
                </tr>
                <tr>
                    <td>MECHANICAL ENGG.</td>
                </tr>
                <tr>
                    <td>ELECTRICAL & ELELC</td>
                </tr>
            </table>
        </center>
    </font>
</body>

</html>

<!-- frame2.html -->
<html>

    <body bgcolor="lightpink">
        
    </body>

</html>

<!-- cs.html -->
<html>

<body>
    <center>
        <h1>ADVANTAGES OF PROCESS AUTOMATION</h1>
        <h3>COMPUTER SCIENCE</h3>
    </center>
    <font size="4" color="blue">
        <p>•Companies implementing process automation have a competitive advantage over their competitors, both in
            operability and reliability.</p>
        <p>•Process automation reduces operative costs and increases both, speed and reliability of task implementation,
            development, and support.</p>
        <p>•Enhances work continuity, and satisfies the demand for IT departments and computer systems.</p>
        <p>•It improves strategic analysis and streamlines the deployment of applications through automated job
            execution.</p>
        <p>•Eliminates manual execution of command sequences subjected to human error, increasing efficiency and
            productivity of the organization.</p>
        <p>•It enables visibility and control of all workflows and tasks, providing status reports of completed
            processes, in progress and incoming tasks.</p>
        <p>•It supports both, local, virtual and hybrid environments in the Cloud, increasing the possibilities of
            management and process control.</p>
    </font>
</body>

</html>

        `,
    images: [
      "https://i.imgur.com/7h11S2d.png",
      "https://i.imgur.com/AFbokkP.png",
    ],
    type: "Lab",
    description: `
        The HTML code comprises multiple interconnected files. Prog11.html serves as the main page, styled with a centered red header and iframes. frame1.html presents engineering branches as clickable links, linking to content in frame2.html. cs.html details advantages of process automation specific to Computer Science. The structure allows centralized control and display of diverse content through iframes, enhancing user experience and information presentation.
        `,
    explanation: [
      "Prog11.html: This is the main HTML file for the webpage structure. It's the entry point of the webpage and contains the overall structure of the page.",
      "DOCTYPE HTML: This declaration specifies the HTML version being used, ensuring proper rendering and interpretation of the HTML content.",
      "Root HTML Element: The <html> element is the root element that encapsulates the entire HTML content of the webpage. All other elements are nested within this root element.",

      "Head Section: The <head> section contains meta-information about the document, such as links to stylesheets, character encoding, and the title of the webpage.",
      "Title: The <title> element sets the title of the webpage, which is displayed in the title bar or tab of the web browser.",
      "CSS Styling: CSS styles are applied to the 'header' element, specifying properties like color, font size, and text shadow to style the header text.",

      "Body Section: The <body> section contains the visible content of the webpage, including headers, text, images, and other elements.",
      "Background Color: The 'bgcolor' attribute sets the background color of the webpage to light green, providing a specific aesthetic to the page.",
      "Centering Content: The 'center' tag is used to center-align content within the webpage for a visually pleasing layout.",

      "IFrames: Two <iframe> elements are used to display external content within framed sections. 'frame1.html' and 'frame2.html' are loaded into these iframes.",
      "Marquee: The <marquee> tag creates a scrolling text effect, displaying the advantage of process automation for the Computer Science branch.",
      "frame1.html: This file contains a table listing different engineering branches and links to their respective pages.",

      "frame2.html: This file provides a light pink background. It's used to display content in the second iframe, creating a visually appealing layout.",
      "CS.html: This file displays detailed advantages of process automation specific to the Computer Science branch, providing valuable information to users.",
    ],
    ytLink: "https://www.youtube.com/embed/npnp--SSx_8?si=Br6BUPvPQmeyUWf5",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/howto/howto_css_responsive_iframes.asp",
      },
      {
        name: "StackOverflow",
        url: "https://stackoverflow.com/questions/2979860/how-are-iframes-used-in-html",
      },
    ],
  },

  // Python

  // 2A
  {
    name: "write-a-programme-to-swap-the-variable-values",
    title: "Write a programme to `SWAP` the variable values",
    language: "python",
    code: `
    x=5
    y=8
    z=3
    print("Before Swapping")
    print("Values of x and y and z:",x,y,z)
    temp=x
    x=y
    y=z
    z=temp
    print ("After Swapping")
    print ("Values of x and y and z:",x,y,z)
        `,
    type: "Lab",
    description: `
        This Python program showcases a common programming task - swapping the values of variables. It sets initial values for x, y, and z, and then proceeds to swap their values using a temporary variable. The code provides a "Before Swapping" message to display the initial values and an "After Swapping" message to show the new values of these variables. It serves as a practical example of how to perform variable value swapping in a clear and understandable manner.
        `,
    explanation: [
      "The provided Python code exemplifies the process of swapping values between three variables: x, y, and z.",
      "Initially, specific values are assigned to these variables: x is initialized with 5, y with 8, and z with 3.",
      "To execute the swapping operation, the code introduces a temporary variable named 'temp' to retain the initial value of x.",
      "A specific sequence of reassignments to x, y, and z is followed meticulously to accomplish the variable value swapping.",
      "The program commences by presenting a message, 'Before Swapping,' followed by displaying the original values of x, y, and z.",
      "Upon completing the swapping process, it proceeds to print a message, 'After Swapping,' and unveils the new values of these variables.",
      "Upon execution, this program effectively serves as a practical illustration of the concept of variable value swapping in Python, offering a hands-on demonstration of this fundamental programming technique.",
    ],
    ytLink: "https://www.youtube.com/embed/3dpJrMtxYeo",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-program-to-swap-two-variables/",
      },
      {
        name: "Programmiz",
        url: "https://www.programiz.com/python-programming/examples/swap-variables",
      },
    ],
  },
  // 2B
  {
    name: "write-a-python-program-for-quadratic-equation",
    title: "Write a python program for `QUADRATIC EQUATION`",
    language: "python",
    code: `
    import cmath
    a=1
    b=5
    c=6
    d=(b**2)-(4*a*c)
    ans1=(-b-cmath.sqrt(d))/(2*a)
    ans2=(-b+cmath.sqrt(d))/(2*a)
    print("the solution is",ans1,ans2)
        `,
    type: "Lab",
    description: `
        This Python code solves a quadratic equation of the form ax^2 + bx + c = 0 using the quadratic formula. It imports the cmath module to handle complex numbers and calculates the discriminant to determine the nature of the solutions (real, repeated, or complex). The solutions are computed and displayed in the expected output.
        `,
    explanation: [
      "The Python code's purpose is to solve quadratic equations of the form ax^2 + bx + c = 0 using the quadratic formula.",
      "It starts by importing the cmath module to handle complex numbers, which may be necessary for certain quadratic equations.",
      "The coefficients a, b, and c are initialized with specific values representing the coefficients of the quadratic equation: a = 1, b = 5, and c = 6 in this case.",
      "The code calculates the discriminant (d) using the formula d = b^2 - 4ac, which is essential in determining the nature of the solutions.",
      "Based on the discriminant value, the code determines the type of solutions:",
      "If d is positive, there are two real solutions.",
      "If d is zero, there is one real solution (a repeated root).",
      "If d is negative, two complex solutions exist.",
      "The program utilizes the quadratic formula to compute the two solutions, ans1 and ans2, using the equations ans1 = (-b - sqrt(d)) / (2a) and ans2 = (-b + sqrt(d)) / (2a). The sqrt function from the cmath module ensures accurate handling of complex solutions.",
      "To conclude, the code displays the solutions to the quadratic equation, preceded by the message 'the solution is.'",
      "The results for ans1 and ans2 represent the two possible solutions for the given quadratic equation, and they are presented in the expected output within parentheses with a potential imaginary component (e.g., '(-3+0j) (-2+0j)').",
    ],
    ytLink: "https://www.youtube.com/embed/aX-PRr1KOZc?si=UswDFDV25G5XEUuA",
    sources: [
      {
        name: "Python",
        url: "https://docs.python.org/3/library/cmath.html",
      },
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/module_cmath.asp",
      },
    ],
  },
  // 2C
  {
    name: "write-a-python-program-to-perform-arithmetic-operations-by-input-function",
    title:
      "Write a python program to perform `Arithmetic operations  by Input function`",
    language: "python",
    code: `
    x=int(input("Enter number1"))
    y=int(input("Enter number2"))
    sum=x+y
    print("the sum is=",sum)
    sub=x-y
    print("the sub is=",sub)
    multi=x*y
    print("the multi is=",multi)
    division=x/y
    print("the division is=",division)
        `,
    type: "Lab",
    description: `
        This Python code is a simple program that takes user input for two numbers, performs four basic arithmetic operations (addition, subtraction, multiplication, and division), and displays the results with appropriate messages for each operation.
        `,
    explanation: [
      "The Python code is a simple program designed to perform four basic arithmetic operations on two user-input numbers: x and y.",
      "It begins by utilizing the input function to collect user input for the values of x and y.",
      "These input values are subsequently converted into integers using the int function, ensuring they can be used for mathematical calculations.",
      "The program then proceeds to calculate and display the results of the four basic arithmetic operations: addition, subtraction, multiplication, and division.",
      "For each operation, the code provides a message indicating the specific operation being executed and the corresponding result.",
      "The user is presented with the sum, subtraction, multiplication, and division of the input numbers, offering a clear and interactive way to perform these calculations.",
    ],
    ytLink: "https://www.youtube.com/embed/HM32Ahxkt-s",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-arithmetic-operators/",
      },
      {
        name: "Tutorial Gateway",
        url: "https://www.tutorialgateway.org/python-program-to-perform-arithmetic-operations/",
      },
    ],
  },
  // 3A
  {
    name: "write-a-python-program-to-find-largest-of-three-numbers-by-using-if-statement",
    title:
      "Write a python program to find largest of 3 numbers by using `IF` Statement",
    language: "python",
    code: `
    a=int(input("Enter value of a"))
    b=int(input("Enter value of b"))
    c=int(input("Enter value of c"))
    if a>b and a>c:
        print("a is largest")
    if b>a and b>c:
        print("b is largest")
    if c>a and c>b:
        print("c is largest")
        `,
    type: "Lab",
    description: `
        This Python code determines the largest among three numbers (a, b, and c) provided by user input. It uses if statements to compare the values and displays a message indicating which of the three numbers is the largest.
        `,
    explanation: [
      "The Python code is intended to identify the largest value among three numbers, a, b, and c, based on user input.",
      "It initiates by using the input function to gather numerical values for each of the variables: a, b, and c.",
      "The input values are subsequently converted into integers using the int function, making them suitable for numerical comparisons.",
      "The code employs a series of if statements to compare these input values and determine the largest number among them.",
      "The first if statement checks if 'a' is greater than both 'b' and 'c'. If true, it prints 'a is largest.'",
      "The second if statement assesses whether 'b' is greater than both 'a' and 'c' and, if so, it outputs 'b is largest.'",
      "The third if statement examines whether 'c' is the largest number by comparing it with 'a' and 'b'. If it is the largest, it displays 'c is largest.'",
      "Consequently, the code provides the user with the identification of the largest value among the three input numbers, demonstrating the use of conditional statements and user input in Python.",
    ],
    ytLink: "https://www.youtube.com/embed/wKQRmXR3jhc",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-if-else/",
      },
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/gloss_python_if_statement.asp",
      },
    ],
  },
  // 3B
  {
    name: "write-a-python-program-to-check-given-value-is-pass-or-fail-by-using-if-else-statement",
    title:
      "Write a python program to check given value is `PASS` or `FAIL` by using `IF ELSE` Statement",
    language: "python",
    code: `
    marks=int(input("Enter your marks"))
    if marks>=35:
        print("PASS")
    else:
        print("FAIL")
        `,
    type: "Lab",
    description: `
        This Python code determines whether a student has passed or failed an exam based on user-entered exam marks. It uses a conditional if-else statement to check if the marks are greater than or equal to 35 and displays "PASS" or "FAIL" accordingly.
        `,
    explanation: [
      "The Python code is created to determine whether a student has passed or failed an exam, based on the marks entered by the user.",
      "It commences by using the input function to collect user input, representing the student's examination marks.",
      "A conditional statement, specifically an if statement, is used to evaluate whether the marks are greater than or equal to 35.",
      "If the condition is met, indicating that the student's marks are 35 or higher, the program displays 'PASS.'",
      "Conversely, if the condition is not satisfied, the else block is executed, resulting in the message 'FAIL' being printed.",
      "Essentially, the code delivers immediate feedback to the user, informing them whether they have passed or failed the examination based on their input.",
      "For example, if a user enters 42 as their marks, the code will respond with 'PASS,' confirming the student's success. This code serves as a fundamental illustration of decision-making in Python and is commonly used to handle pass-fail criteria in various educational contexts.",
    ],
    ytLink: "https://www.youtube.com/embed/p-yn8Wz6Bxk",
    sources: [
      {
        name: "StackOverflow",
        url: "https://stackoverflow.com/questions/60379622/how-can-i-print-true-or-false-as-pass-or-fail",
      },
      {
        name: "Dremendo",
        url: "https://www.dremendo.com/python-programming-tutorial/python-if-elif-questions/q9-input-subject-marks-and-check-pass-or-fail-in-python",
      },
    ],
  },
  // 3C
  {
    name: "write-a-python-program-to-identify-the-given-number-is-positive-negative-or-zero-by-using-if-else-if-statement",
    title:
      "Write a python program to identify the given number is POSITIVE,NEGATIVE OR ZERO by using `IF ELSE IF` Statement",
    language: "python",
    code: `
    num=-10
    if num>0:
        print("Number is positive")
    elif num<0:
        print("Number is negative")
    else:
        print("Number is zero")
        `,
    type: "Lab",
    description: `
        This Python code assesses the sign of a numerical value, 'num,' to determine if it's positive, negative, or zero. It uses conditional statements (if, elif, and else) to classify the number and prints an appropriate message.
        `,
    explanation: [
      "The Python code's purpose is to assess the sign of a numerical value, 'num,' determining whether it's positive, negative, or zero.",
      "It starts by initializing the variable 'num' with an initial value of -10.",
      "The code utilizes a series of conditional statements to evaluate the sign of the number.",
      "It begins with an 'if' statement to check if 'num' is greater than 0. If this condition is met, it prints 'Number is positive.'",
      "If 'num' is not greater than 0, the code proceeds to an 'elif' statement (short for 'else if') to check if 'num' is less than 0. If this condition is satisfied, it prints 'Number is negative.'",
      "If neither the 'if' nor 'elif' conditions are met, the code moves to the 'else' block and prints 'Number is zero.'",
      "In the specific context of this code, where 'num' is initially set to -10, it falls into the second condition (elif), indicating that the number is negative. Therefore, the code will output 'Number is negative.' This code provides a basic example of using conditional statements to categorize numerical values based on their sign.",
    ],
    ytLink: "https://www.youtube.com/embed/avw8kBjxx40",
    sources: [
      {
        name: "StackOverflow",
        url: "https://stackoverflow.com/questions/680656/what-is-the-difference-between-if-else-and-switch",
      },
      {
        name: "hacker.io",
        url: "https://hackr.io/blog/python-conditional-statements-switch-if-else",
      },
    ],
  },
  // 4A
  {
    name: "execute-and-perform-python-program-by-using-looping-statement",
    title: "Execute and perform python program by using `Looping Statement`",
    language: "python",
    code: `
    n=int(input("Enter the number"))
    for i in range(1,11):
        c=n*i
        print(n,"*",i,"=",c)
        `,
    type: "Lab",
    description: `
        This Python code generates a multiplication table for a user-specified number 'n.' It collects user input using the input function, then uses a for loop to calculate and display the product of 'n' with numbers from 1 to 10.
        `,
    explanation: [
      "The Python code's purpose is to create a multiplication table for a user-specified number, denoted as 'n.'",
      "It initiates by using the input function to gather user input, representing the number for which the multiplication table will be generated.",
      "The code employs a 'for' loop to iterate through numbers from 1 to 10 (inclusive), using the 'range' function with the argument (1, 11).",
      "During each iteration, the program calculates the product of the user-defined number 'n' and the current value of 'i' and stores it in the variable 'c.'",
      "The code then prints each multiplication operation in the format 'n * i = c,' where 'n' represents the user-input number, 'i' represents the numbers from 1 to 10, and 'c' represents the result of the multiplication.",
      "For example, if the user enters 7 as 'n,' the code will generate and display the multiplication table for 7, showcasing the results of 7 multiplied by each integer from 1 to 10. This code provides a clear demonstration of using loops and basic arithmetic operations in Python to create multiplication tables for educational or practical purposes.",
    ],
    ytLink: "https://www.youtube.com/embed/OnDr4J2UXSA",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_for_loops.asp",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-for-loops/",
      },
    ],
  },
  // 4B
  {
    name: "write-a-python-program-to-implement-addition-of-ten-natural-numbers",
    title:
      "Write a python program to `Implement Addition of 10 Natural Numbers`",
    language: "python",
    code: `
    i=1
    while(i<=10):
        print(i)
        i=i+1
        `,
    type: "Lab",
    description: `
        This Python code utilizes a while loop to print numbers from 1 to 10. It initializes a variable 'i' to 1 and uses the while loop with the condition 'i <= 10' to print each number, incrementing 'i' by 1 in each iteration until it reaches 10.
        `,
    explanation: [
      "The Python code is a simple program that utilizes a 'while' loop to print numbers ranging from 1 to 10.",
      "It begins by initializing a variable 'i' with the value 1, serving as the starting point for the sequence of numbers to be printed.",
      "The 'while' loop condition, 'i <= 10,' ensures that the loop continues executing as long as the value of 'i' is less than or equal to 10.",
      "Within the loop, the code prints the current value of 'i' using the 'print' statement.",
      "The code then increments 'i' by 1 in each iteration using 'i = i + 1,' ensuring that the loop eventually terminates when 'i' becomes greater than 10.",
      "Consequently, upon running the code, it will print the numbers from 1 to 10, with each number appearing on a new line. This code offers a straightforward approach to generating a sequence of numbers within a specified range using a 'while' loop.",
    ],
    ytLink: "https://www.youtube.com/embed/JKK13i_ApOw",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_while_loops.asp",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-while-loop/",
      },
    ],
  },
  // 4C
  {
    name: "write-a-python-program-to-perform-addition-of-first-ten-natural-numbers-by-using-while-looping-statement",
    title:
      "Write a python program to perform Addition of First 10 Natural numbers by using `While Looping Statement`.",
    language: "python",
    code: `
    n=10
    sum=0
    i=1
    while i<=n:
        sum=sum+i
        i=i+1
    print("the sum of first 10 natural numbers is",sum)
        `,
    type: "Lab",
    description: `
        This Python code calculates the sum of the first 10 natural numbers using a 'while' loop. It initializes variables 'n' and 'sum,' then uses a 'while' loop to accumulate the sum, and finally displays the result to the user.
        `,
    explanation: [
      "This Python code is a program to calculate the sum of the first 10 natural numbers.",
      "It initiates by initializing a variable 'n' with the value 10, which represents the number of natural numbers to be summed.",
      "Additionally, it initializes the variable 'sum' to 0, which will accumulate the sum.",
      "The code establishes a 'while' loop with the condition 'i <= n,' where 'i' starts at 1. This loop continues to execute as long as 'i' is less than or equal to 'n.'",
      "Inside the loop, it updates the 'sum' by adding the current value of 'i' to it using 'sum = sum + i.'",
      "Simultaneously, it increments 'i' by 1 in each iteration with 'i = i + 1.'",
      "Following the loop, the code prints a message, 'the sum of the first 10 natural numbers is,' followed by the final value of 'sum.'",
      "The 'while' loop accumulates the sum of the first 10 natural numbers, and this sum is displayed to the user.",
      "When executed, the code will print 'the sum of the first 10 natural numbers is 55' because the sum of the numbers from 1 to 10 is indeed 55. This code demonstrates the use of a 'while' loop for cumulative calculations, applicable to similar summation problems.",
    ],
    ytLink: "https://www.youtube.com/embed/Oo72LgwD2II",
    sources: [
      {
        name: "Tutorials Point",
        url: "https://www.tutorialspoint.com/How-to-Find-the-Sum-of-Natural-Numbers-using-Python",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-program-to-print-the-natural-numbers-summation-pattern/",
      },
    ],
  },
  // 5A
  {
    name: "python-program-for-set-operations",
    title: "Python program for `SET operations`.",
    language: "python",
    code: `
    months=set(["January","February","March","April","May","June"])
    print("The original set")
    print(months)
    print("Adding other months to the set")
    months.add("July")
    months.add("August")
    print("printing modified set")
    print(months)
        `,
    type: "Lab",
    description: `
        This Python code illustrates the use of sets, which are unordered collections of unique elements that do not allow duplicates. It initializes a set of months, prints the original set, adds "July" and "August" to the set, and demonstrates that sets maintain uniqueness and handle duplicates.
        `,
    explanation: [
      "Sets in Python are unordered collections of unique elements, and they do not allow duplicates.",
      "Sets can be defined using curly braces {} or created using the set() constructor.",
      "Set Initialization: The code begins by initializing a set named months using the set literal notation.",
      "This set contains the names of six months: 'January,' 'February,' 'March,' 'April,' 'May,' and 'June.'",
      "Sets automatically handle duplicates, ensuring that only one unique instance of each element is stored.",
      "Printing the Original Set: The code uses the print function to display the original contents of the months set.",
      "This illustrates the fact that sets are unordered collections, and the order in which elements are displayed may not match the order in which they were added.",
      "Adding Elements to the Set: The code demonstrates how to add elements to the set by introducing 'July' and 'August' to the months set.",
      "It uses the add method, which is specific to sets.",
      "Sets ensure the uniqueness of elements, so attempting to add a duplicate value will be ignored.",
      "Printing the Modified Set: After adding 'July' and 'August' to the set, the code prints the updated contents of the months set.",
      "This demonstrates that the new elements, 'July' and 'August,' have been successfully included.",
      "Sets maintain their uniqueness, guaranteeing that no duplicate elements exist within the set.",
      "In summary, sets are a valuable data structure in Python, particularly when you need to store a collection of distinct and unique values. They are also useful for performing set operations such as union, intersection, and difference. This code exemplifies the simplicity and uniqueness of sets, showcasing their ability to store and manipulate collections of distinct elements.",
    ],
    ytLink: "https://www.youtube.com/embed/r3R3h5ly_8g",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_sets.asp",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/sets-in-python/",
      },
    ],
  },
  // 5B
  {
    name: "python-program-for-union-method",
    title: "Python program for `UNION method`",
    language: "python",
    code: `
    set1={'python','Java'}
    set2={'C++','Java','pgmC'}
    set=set1.union(set2)
    print(set)
        `,
    type: "Lab",
    description: `
        This Python code works with sets, demonstrating the concept of set union. It initializes two sets, 'set1' and 'set2,' and uses the union operation to create a new set containing all unique elements from both sets. Duplicate elements are automatically removed, showcasing the fundamental set operation of union.
        `,
    explanation: [
      "Set Initialization: The code initializes two sets, set1 and set2, using curly braces {}.",
      "set1 contains the elements 'python' and 'Java', while set2 contains 'C++', 'Java', and 'pgmC'.",
      "Sets automatically remove duplicates, ensuring that only unique elements are stored, so any duplicates in the initialization will be treated as a single occurrence in the sets.",
      "Union of Sets: The code utilizes the union method to perform the union operation on set1 and set2.",
      "Set union combines the elements from both sets while eliminating duplicates, creating a new set named set.",
      "This new set contains all the unique elements from both set1 and set2.",
      "Displaying the Result: To visualize the result of the union operation, the code employs the print function to display the contents of the set.",
      "The output will show all the unique elements that exist in either set1 or set2, without any duplicates.",
      "Concept of Set Union: In the context of sets, the union operation is a fundamental set operation.",
      "It combines two sets, creating a new set containing all the unique elements from both sets, ensuring that duplicates are removed.",
      "The union operation is often symbolized using ∪ and is widely used in set theory and various applications like database queries and data analysis.",
      "In this specific example, the code effectively demonstrates the concept of set union by uniting set1 and set2. The result, stored in the variable set, contains all the distinct elements from both sets, with duplicates removed. This is a valuable operation when working with datasets that require unique elements.",
    ],
    ytLink: "https://www.youtube.com/embed/uzoN0XEshDo",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/ref_set_union.asp",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/questions/52431546/different-ways-of-unioning-sets",
      },
    ],
  },
  // 5C
  {
    name: "python-program-for-intersection-method",
    title: "Python program for `INTERSECTION method`",
    language: "python",
    code: `
    set1={'python','Java'}
    set2={'C++','Java','pgmC','python'}
    set=set1.intersection(set2)
    print(set)
        `,
    type: "Lab",
    description: `
        This Python code works with sets and demonstrates the concept of set intersection. It initializes two sets, 'set1' and 'set2,' and uses the intersection operation to create a new set containing elements that are common to both sets. Duplicate elements are automatically removed. The code illustrates the fundamental set operation of intersection.
        `,
    explanation: [
      "The Python code focuses on working with sets and demonstrates the concept of set intersection.",
      "Sets are unordered collections of unique elements and support various set operations.",
      "The code initializes two sets, set1 and set2, using curly braces {}.",
      "set1 contains the elements 'python' and 'Java,' while set2 contains 'C++,' 'Java,' 'pgmC,' and 'python.'",
      "Sets automatically eliminate duplicate elements, so even if there are duplicates in the initialization, they will be stored as unique elements in the sets.",
      "The code employs the intersection method to perform the intersection operation on set1 and set2.",
      "Set intersection extracts elements that are common to both sets, creating a new set, which is also named set.",
      "To visualize the outcome of the intersection operation, the code uses the print function to display the contents of the set.",
      "The output will reveal all the elements that are common to both set1 and set2, without any duplicates.",
      "Set intersection is a fundamental set operation that extracts elements shared by two sets, often represented using the symbol ∩ in set theory.",
      "In practical applications, set intersection is used in various scenarios, such as database queries, identifying common elements in datasets, and ensuring data integrity by checking for overlaps.",
      "When set1 and set2 are intersected, the result, stored in the variable set, contains all the elements that exist in both sets, helping identify common elements.",
    ],
    ytLink: "https://www.youtube.com/embed/lWK_XBY8U2Y",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/ref_set_intersection.asp",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/intersection-function-python/",
      },
    ],
  },
  // 6A
  {
    name: "write-a-python-program-for-performing-list-implementation-with-basic-operating-of-list",
    title:
      "Write a Python program for performing `list implementation with Basic Operating of LIST`",
    language: "python",
    code: `
    colleges=["MLBP","BET","GPT","GIT"]
    print(colleges)
    colleges.append("BGS")
    print(colleges)
    colleges.insert(0,"Bhartesh")
    print(colleges)
    colleges.remove("GPT")
    print(colleges)
        `,
    type: "Lab",
    description: `
        The Python code manages a list called "colleges" containing college names. It demonstrates list operations, including initialization, printing, appending, inserting, and removing elements from the list. The code illustrates the dynamic nature of lists, allowing easy modification of their content.
        `,
    explanation: [
      "List Initialization: The code initializes a list named 'colleges' with the inclusion of four college names: 'MLBP,' 'BET,' 'GPT,' and 'GIT.' Python's lists are versatile data structures, capable of storing elements of varying data types and being mutable, meaning their content can be changed.",
      "Printing the Original List: In the initial stage, the code employs the 'print' function to display the original 'colleges' list, offering a clear illustration of its contents as initially defined. This serves as a baseline for future modifications.",
      "Appending an Element: A pivotal step unfolds as the code utilizes the 'append' method, which is specific to lists. This method facilitates the straightforward addition of 'BGS' to the list, effectively appending this college name to the end. This showcases the dynamic nature of lists in Python.",
      "Printing the List with the Appended Element: Following the successful addition of 'BGS,' the code reverts to the 'print' function, displaying the revised 'colleges' list. This visual representation serves to validate the integration of 'BGS,' confirming the update.",
      "Inserting an Element at the Beginning: The code proceeds to employ the 'insert' method, a versatile list method. This method allows for the precise insertion of 'Bhartesh' at the commencement of the list, exerting control over both the index for insertion and the element itself. Such flexibility is a hallmark of Python lists.",
      "Printing the List with the Inserted Element: In the aftermath of introducing 'Bhartesh' at the list's outset, the code once again invokes the 'print' function. This presentation of the 'colleges' list underscores the alteration, with 'Bhartesh' now residing at the list's inception.",
      "Removing an Element: The code steps into a notable operation, utilizing the 'remove' method, an essential list method in Python. This method targets and eliminates 'GPT' from the list, finding and deleting its initial occurrence. This controlled removal operation effectively trims down the list's size.",
      "Printing the List with the Removed Element: Following the calculated excision of 'GPT,' the code circles back to printing the 'colleges' list, affirming the absence of 'GPT' and underscoring the list's streamlined composition post-removal.",
    ],
    ytLink: "https://www.youtube.com/embed/1KLgcBcWCsE",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_lists.asp",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-lists/",
      },
    ],
  },
  // 7A
  {
    name: "write-a-python-program-to-perform-basic-operations-of-dictionary",
    title: "Write a Python Program to perform `Basic Operations Of DICTIONARY`",
    language: "python",
    code: `
    colleges={"name":"MLBP","code":"India","ID":"315"}
    print(colleges)
    colleges["location"]="Belagavi"
    print(colleges)
    colleges["location"]="B.Kudachi"
    print(colleges)
    colleges.pop("code")
    print(colleges)
    mycolleges=colleges.copy()
    print(mycolleges)
        `,
    type: "Lab",
    description: `
        The provided Python code focuses on dictionary manipulation. It starts by initializing a dictionary named 'colleges' with key-value pairs, prints the original dictionary, adds, updates, and removes key-value pairs, creates a copy, and demonstrates that changes in one dictionary do not affect the other as they are separate copies.
        `,
    explanation: [
      "Dictionary Initialization: The code commences by initializing a dictionary titled 'colleges.' This dictionary is populated with key-value pairs that encompass significant details about a college, including its name, location, and an identification number. Dictionaries in Python facilitate the storage of heterogeneous data types, making them a versatile choice for managing data.",
      "Printing the Original Dictionary: Following the dictionary's initialization, the code harnesses the 'print' function, a fundamental Python function, to visually present the original contents of the 'colleges' dictionary. This step offers a clear depiction of the dictionary's initial state, replete with its key-value pairs, ensuring that the starting point is explicitly apparent.",
      "Adding a New Key-Value Pair: The code transitions to a pivotal phase, introducing a novel key-value pair to the 'colleges' dictionary. Specifically, it appends the key 'location' with the value 'Belagavi' directly to the dictionary. This augmentation is executed via a straightforward assignment, further enriching the dictionary's data.",
      "Printing the Dictionary with the Added Key-Value Pair: Subsequent to the integration of 'location: Belagavi,' the code propels forth by printing the modified 'colleges' dictionary. This visual representation serves to corroborate the incorporation of the new key-value pair, thereby elucidating the updated content.",
      "Modifying an Existing Key's Value: The code proceeds to engage in the alteration of an extant key's associated value within the 'colleges' dictionary. In particular, the value linked with the key 'location' is transformed from 'Belagavi' to 'B.Kudachi.' This revision is effectuated via a direct value assignment operation, and it denotes a dynamic manipulation of the dictionary's contents.",
      "Printing the Dictionary with the Modified Value: In the wake of the 'location' key's value modification, the code takes another stride forward, rendering the updated 'colleges' dictionary in print form. This presentation, imbued with the adjusted value for the 'location' key, articulates the effect of the transformation, ensuring a tangible representation of the dictionary's refined state.",
      "Removing a Key-Value Pair: The code approaches a pivotal operation that involves the 'pop' method, an essential function for dictionaries in Python. Employing this method, it orchestrates the eradication of the key 'code' and its corresponding value from the 'colleges' dictionary. This deliberate excision effectively trims down the dictionary's size and structure.",
      "Printing the Dictionary with the Removed Key-Value Pair: Subsequent to the methodical elimination of the 'code' key-value pair, the code proceeds to once again print the 'colleges' dictionary. This iteration of presentation serves as a validation of the successful removal of the 'code' key and its accompanying value, thereby affirming the dictionary's streamlined composition.",
      "Creating a Copy of the Dictionary: The code takes a leap into the realm of data duplication, capitalizing on the 'copy' method to generate a replicated version of the 'colleges' dictionary. This duplicate is denoted by the identifier 'mycolleges' and serves as an autonomous copy, allowing for separate operations and manipulations.",
      "Printing the Copied Dictionary: Finally, the code shines a spotlight on the 'mycolleges' dictionary, which stands as a distinct copy of 'colleges.' The act of printing this separate copy underscores a fundamental concept in Python: changes applied to one dictionary do not propagate to the other, as they are autonomous entities. This visual presentation emphasizes the autonomy of the copied dictionary and serves as a practical illustration of data replication in Python.",
    ],
    ytLink: "https://www.youtube.com/embed/C29qMZb9HrA",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_dictionaries.asp",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-dictionary/",
      },
    ],
  },
  // 8A
  {
    name: "write-a-python-program-for-string-manipulation-method",
    title: "Write a python program for `STRING` manipulation method.",
    language: "python",
    code: `
    text='Welcome to M.L.Bharatesh Polytechnic'
    print(text)
    print("to convert upper case:")
    print(text.upper())
    print("to convert lower case:")
    print(text.lower())
    word=(text.split())
    print("after spliting:")
    print(word)
    print(list(reversed(text)))
        `,
    type: "Lab",
    description: `
        The provided Python code operates on a text string, showcasing how to change its case to uppercase and lowercase, split it into words, and attempt to reverse it.
        `,
    explanation: [
      "String Initialization: The code initializes a variable 'text' as a text string with the value 'Welcome to M.L.Bharatesh Polytechnic.' This string serves as the primary data for various text manipulation operations.",
      "Printing the Original Text: After initializing the 'text' string, the code utilizes the 'print' function, a core Python feature, to visually display the original content of the 'text' string. This step establishes a clear starting point, enabling programmers to understand and verify the initial data.",
      "Converting to Uppercase: The code employs Python's 'upper()' method, which is specific to strings. This method is used to transform the 'text' string into uppercase characters. Every character within the 'text' string, irrespective of its original case, becomes capitalized. As a result, 'Welcome to M.L.Bharatesh Polytechnic' is converted to 'WELCOME TO M.L.BHARATESH POLYTECHNIC.'",
      "Printing the Uppercase Text: Following the uppercase conversion, the code proceeds to print the modified 'text' string. The printed output showcases the 'text' in its uppercase form, offering a visual confirmation of the transformation.",
      "Converting to Lowercase: The code moves forward with another transformation by utilizing the 'lower()' method, a counterpart to 'upper()' in Python's string manipulation arsenal. The 'text' string is subjected to this method, leading to the conversion of all characters to lowercase. Each character within the 'text' string transitions to its lowercase equivalent, resulting in the text 'welcome to m.l.bharatesh polytechnic.'",
      "Printing the Lowercase Text: Subsequent to the successful conversion to lowercase, the code proceeds to print the modified 'text.' The printed output showcases the 'text' in its lowercase state, confirming the effect of the transformation and providing a clear visual representation.",
      "Splitting the Text: The code advances to another operation, employing the 'split()' method, a fundamental tool for string manipulation in Python. 'split()' is applied to the 'text' string, segmenting it into individual words. By default, the method separates the string into words based on spaces, effectively creating a list of words. Each element in the list represents a distinct word from the original text.",
      "Printing the List of Words: Immediately following the text splitting process, the code prints the outcome – the list of words stored within the variable 'word.' The printed display exhibits each word as an individual element within the list. This visual representation of segmented words aids in comprehending the transformation and confirms the successful operation.",
      "Reversing the Text: The code embarks on a different aspect of string manipulation, attempting to reverse the order of characters within the 'text' string. To accomplish this, it utilizes the 'reversed()' function, a feature of Python that facilitates the reversal of iterable objects. However, it's crucial to note that the result of 'reversed(text)' is an iterator, not a direct list of characters. Consequently, the 'reversed(text)' outcome represents an iterator, necessitating further processing to achieve the intended reversed text output.",
      "Printing the Reversed Text: The code proceeds to print the result of 'reversed(text)' in an attempt to display the reversed text. Nonetheless, due to the nature of the 'reversed()' function, which yields an iterator, the output may not align with expectations. It's imperative to understand that, for the successful display of reversed text, the iterator should be transformed into a list, followed by a subsequent reformation into a string. This critical consideration ensures the effective reversal of the text string and its accurate representation.",
    ],
    ytLink: "https://www.youtube.com/embed/lSItwlnF0eU",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-string/",
      },
      {
        name: "Python",
        url: "https://docs.python.org/3/library/string.html",
      },
    ],
  },
  // 8B
  {
    name: "write-a-python-program-for-array-implementation",
    title: "Write a python program for `Array` implementation",
    language: "python",
    code: `
    import array as arr
    x=arr.array("i",[4,7,10,12])
    print("first element",x[0])
    print("second element",x[1])
    print("last element",x[-1])
        `,
    type: "Lab",
    description: `
        The provided Python code focuses on the array module and demonstrates key concepts related to array initialization and element access. It begins by importing the array module, creating an array named 'x' with a specified data type and initial values. The code showcases how to access array elements using both positive and negative indexing. This narrative underscores the significance of Python's array module in managing collections of data with a specified data type and presents a vivid exploration of array initialization and element access techniques.
        `,
    explanation: [
      "Importing the array Module: The code initiates by executing an essential import statement. This act brings the array module into the realm of the code, a pivotal component residing within Python's extensive standard library. The array module assumes a role of significance, primarily designed to facilitate the management and manipulation of arrays. Arrays, similar to lists in Python, offer a medium for the organized storage of data. However, what sets arrays apart is their adherence to specific data types for their elements. This critical distinction ensures data uniformity within an array, a trait highly advantageous in various computational and scientific contexts.",
      "Array Initialization: A critical phase within the code unfolds with the creation of a new array, aptly christened 'x.' This initiation procedure is orchestrated through the utilization of the arr.array() constructor. Within this initiation, two pivotal facets come to the fore. The first facet entails the selection of a precise data type governing the array's contents. Here, the chosen data type is aptly signified by the character code 'i,' an unequivocal declaration that the array shall serve as a vessel for signed integers, each residing within a 32-bit space. This judicious choice of data type lays the foundation for the array's uniformity and precise data representation. In the second facet, the array is enriched with an initial infusion of values. A list, here represented as [4, 7, 10, 12], assumes the role of the bestower, gracing the array 'x' with the distinct numeric identities of 4, 7, 10, and 12. These values seamlessly meld with the array, establishing its initial composition.",
      "Accessing Array Elements: The code embarks on an expedition to explore the array 'x,' unveiling its treasures with surgical precision. A triumphant proclamation, 'first element,' marks the initiation of this journey. It is a declaration that announces the first treasure concealed within the array. This treasure resides at index 0, thereby accessible through the code's skillful application of x[0]. As the quest unfolds, 'second element' beckons the code's attention toward the array's second treasure. It calls for the code's navigation to index 1, where this valuable treasure finds its dwelling as x[1]. In the grand finale of this expedition, 'last element' becomes a masterstroke of exploration. It undertakes a reverse journey within the array's confines, guided by the technique of negative indexing. This method employs the indexing of -1, effectively seeking out the ultimate jewel nestled within the array. The outcome is a richly encapsulated relic, accessible via the designation x[-1]. In the realm of arrays, negative indexing serves as the compass when traversing from the array's terminus.",
      "Concept of the array Module: Within the expansive domain of Python, the array module emerges as a distinguished entity ensconced within the annals of the standard library. Its primary vocation is to usher the concept of arrays into the Pythonic landscape. In essence, arrays are akin to Python's native lists, offering a receptacle for the organization of data. Nevertheless, the defining feature of arrays is their rigorous adherence to specific data types for their constituents. This adherence ensures an unswerving uniformity of data, a quality highly advantageous in computational, scientific, and engineering contexts.",
      "In conclusion, this narrative intricately weaves together the concepts of importing the array module, initializing arrays, and the art of accessing array elements. In the process, it unveils the multifaceted nature of arrays and their utilization through Python's array module.",
    ],
    ytLink: "https://www.youtube.com/embed/6a39OjkCN5I",
    sources: [
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_arrays.asp",
      },
      {
        name: "Python",
        url: "https://docs.python.org/3/library/array.html",
      },
    ],
  },
  // 9A
  {
    name: "write-a-python-program-to-find-largest-of-three-numbers-by-using-in-built-function",
    title:
      "Write a python program to `Find Largest of 3 Numbers by Using in-built Function`",
    language: "python",
    code: `
    def maximum (a,b,c):
        if (a>=b) and (a>=c):
            largest=a
        elif (b>=a) and (b>=c):
            largest=b
        else:
            largest=c
        return largest
    a=10
    b=20
    c=30
    print(maximum(a,b,c))
        `,
    type: "Lab",
    description: `
        The provided Python code defines a function called 'maximum' that takes three arguments ('a,' 'b,' and 'c') and returns the maximum value among them. It employs conditional statements to compare the values of 'a,' 'b,' and 'c' and uses the 'return' statement to convey the result. The code initializes three variables with numerical values, invokes the 'maximum' function with these variables as arguments, and prints the maximum value. This code exemplifies the creation and usage of a custom Python function for logical decision-making.
        `,
    explanation: [
      "Function Definition: The code initiates by defining a Python function called 'maximum' with three parameters: 'a,' 'b,' and 'c.' The function's primary purpose is to determine and return the largest value among these parameters.",
      "Conditional Statements: Inside the 'maximum' function, conditional statements are used for comparisons. It employs 'if,' 'elif' (else if), and 'else' constructs to evaluate 'a,' 'b,' and 'c':",
      "If 'a' is greater than or equal to both 'b' and 'c,' 'a' is assigned as the maximum.",
      "If 'b' is greater than both 'a' and 'c,' 'b' is chosen as the maximum.",
      "If none of the above conditions are met, 'c' is identified as the maximum.",
      "Returning the Maximum: The 'maximum' function concludes by returning the determined maximum value using the 'return' statement.",
      "Variable Initialization: Before invoking the 'maximum' function, the code sets the initial values of 'a,' 'b,' and 'c' to 10, 20, and 30, respectively. These variables represent the numeric inputs to be compared.",
      "Function Call: The 'maximum' function is called with 'a,' 'b,' and 'c' as arguments. The function processes these arguments and delivers the largest value among them, which is then printed using 'print(maximum(a, b, c)).'",
      "Function Usage: This code showcases the practical application of a custom Python function, 'maximum,' designed for numerical comparison. It demonstrates the formulation of a function to perform logical decision-making tasks.",
      "Output: In this specific example, with 'a=10,' 'b=20,' and 'c=30,' the 'maximum' function returns '30' as the largest value. This illustrates the function's ability to effectively identify and report the maximum value among the inputs.",
    ],
    ytLink: "https://www.youtube.com/embed/Cz6q5u4iW5w",
    sources: [
      {
        name: "Programiz",
        url: "https://www.programiz.com/python-programming/examples/largest-number-three",
      },
      {
        name: "Toppr",
        url: "https://www.toppr.com/guides/python-guide/examples/python-examples/python-program-to-find-the-largest-among-three-numbers/",
      },
    ],
  },
  // 9B
  {
    name: "write-a-python-program-to-calculate-factorial-of-given-number",
    title: "Write a python program to `Calculate Factorial of given Number`",
    language: "python",
    code: `
    def recursion(n):
        if(n<1):
            print("Factorial not possible")
        elif(n>1):
            return n*recursion(n-1)
        else:
            return 1
    n=int(input("enter number:"))
    print("Factorial of given number is",recursion(n))
        `,
    type: "Lab",
    description: `
        The provided Python code defines a recursive function named 'recursion' for calculating the factorial of a given positive integer 'n.' It solicits user input for 'n,' computes the factorial using recursion, and displays the result. The code handles cases where 'n' is less than 1 by indicating that factorial calculation is not possible for non-positive integers. It successfully calculates and communicates the factorial value for positive integers.
        `,
    explanation: [
      "Function Definition: The code introduces a recursive Python function named 'recursion' tailored for factorial calculation. It leverages recursion to efficiently compute the factorial of an input number 'n.'",
      "Recursive Factorial Calculation: Within the 'recursion' function, a series of recursive cases unfolds:",
      "When 'n' is less than 1, the code responds by signaling 'Factorial not possible,' recognizing the absence of a factorial definition for non-positive integers.",
      "For 'n' greater than 1, the function recursively calculates the factorial by returning 'n' multiplied by 'recursion(n-1).' This iterative process breaks down the factorial problem into smaller, manageable subproblems.",
      "When 'n' assumes the value of 1, the function promptly returns 1, acknowledging the well-defined factorial of 1.",
      "User Input: The code actively engages with the user by soliciting numeric input. This input is acquired and stored within the variable 'n' for subsequent processing.",
      "Factorial Calculation: With 'n' in hand, the code invokes the 'recursion' function, submitting 'n' as the argument. The result of this recursive computation is captured in a designated variable.",
      "Printing the Result: The code culminates its journey by elegantly presenting the result to the user. It articulates the calculated factorial value prefaced by the informative message, 'Factorial of the given number is.'",
      "Recursive Factorial Calculation: Factorial, symbolized as 'n!,' denotes the product of all positive integers from 1 to 'n.' Recursive factorial computation employs the paradigm of recursion to break down the complex factorial problem into smaller, comprehensible subproblems.",
      "Output: Upon receiving a positive integer from the user, the code diligently computes and showcases the factorial value. However, when a non-positive integer (less than 1) is offered, it gracefully responds with 'Factorial not possible,' acknowledging the mathematical constraints associated with factorial definitions for non-positive integers. Thus, the code exercises mathematical awareness and conveys results with precision.",
    ],
    ytLink: "https://www.youtube.com/embed/gfhtaP5Wq7M",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-program-for-factorial-of-a-number/",
      },
      {
        name: "Python Guides",
        url: "https://pythonguides.com/factorial-of-a-number-in-python/",
      },
    ],
  },
  // 10A
  {
    name: "write-a-python-program-to-define-module-to-find-fibonacci-numbers-import-the-module-to-another-program",
    title:
      "Write a python program to define module to `find Fibonacci Numbers Import the Module to Another Program`",
    language: "python",
    code: [
      {
        name: "fibonacci.py",
        type: "python",
        data: `
    def fibonacci(n):
        n1 = 0
        n2 = 1
        print(n1)
        print(n2)
        for x in range(0, n):
            n3 = n1+n2
            if (n3 >= n):
                break
            print(n3, end=' ')
            n1 = n2
            n2 = n3
    # (save it as fibonacci.py)
    `,
      },
      {
        name: "main.py",
        type: "python",
        data: `
    import fibonacci
    n = int(input("enter range"))
    if (n < 0):
        print("enter valied range")
    else:
        print("the range is :")
        fibonacci.fibonacci(n)
                `,
      },
    ],
    type: "Lab",
    description: `
        The provided Python code consists of two parts: a module (fibonacci.py) and a main script. The module defines a function named 'fibonacci(n)' that generates and prints Fibonacci numbers up to a specified range 'n.' It uses a for loop, starting with initial values of 0 and 1, to compute the Fibonacci sequence. The main script imports the module and interacts with the user to input a non-negative integer 'n,' which represents the range for Fibonacci number generation. If 'n' is valid, it calls the 'fibonacci' function from the module to display the Fibonacci numbers up to the specified range, with the sequence correctly updated within the loop.
        `,
    explanation: [
      "Part 1: The Fibonacci Module (fibonacci.py):",
      "The Fibonacci module, encapsulated in 'fibonacci.py,' defines a Python function known as 'fibonacci(n).' This function is purpose-built to generate and present Fibonacci numbers within a designated range, n. Here's an overview of its core functionality:",
      "Commencing with two crucial variables, n1 and n2, initialized with values corresponding to the first two Fibonacci numbers (0 and 1).",
      "The process initiates with the display of the initial values of n1 and n2, thereby kickstarting the Fibonacci sequence, and these initial values are presented as 0 and 1.",
      "The code orchestrates a 'for' loop, the backbone of Fibonacci number generation. The loop's purpose is to craft and exhibit Fibonacci numbers, stretching from 0 to n. The upper limit, n, is determined by user input.",
      "Nestled within the loop, the next Fibonacci number, n3, takes shape by summing n1 and n2.",
      "The code includes a conditional check to ascertain whether n3 surpasses or equals the specified range, n. When this condition is met, the loop gracefully concludes, having either reached or exceeded the target range.",
      "Upon calculating and displaying n3, the function meticulously updates the values of n1 and n2. This update is pivotal, ensuring the accurate generation of the Fibonacci sequence.",
      "Part 2: The Main Script:",
      "The primary script functions as the orchestrator of interactions with the user and can be summarized as follows:",
      "It takes on the role of importing the fibonacci module, establishing a vital bridge that allows access to the 'fibonacci' function within the main script.",
      "The script, in its interactive capacity, extends an invitation to the user, prompting the input of a range value, referred to as 'n.' The user's contribution is anticipated in the form of an integer.",
      "It enforces a robust conditional statement, exercising due diligence by verifying whether the user's input, 'n,' falls below the threshold of zero. If this condition is met, the script promptly issues an instruction: 'enter a valid range.' This stern communication is grounded in the understanding that the Fibonacci sequence remains undefined for negative values.",
      "When 'n' emerges as a non-negative integer, the script delights in announcing 'the range is.' Subsequently, the script proceeds to orchestrate a call to the 'fibonacci.fibonacci(n)' function sourced from the imported module. This function, now at the script's disposal, excels in crafting and presenting Fibonacci numbers up to the user-defined range.",
      "In essence, this codebase's mission revolves around the orchestration of Fibonacci numbers. The module, 'fibonacci.py,' is a dedicated Fibonacci artisan, weaving the sequence with precision, while the main script, the conductor of this Fibonacci symphony, ensures user interaction and directs the performance. Together, they create a harmonious code composition that explores the Fibonacci realm up to a specified range, 'n.",
    ],
    ytLink: "https://www.youtube.com/embed/OK81K_zoY-M",
    sources: [
      {
        name: "Programiz",
        url: "https://www.programiz.com/python-programming/examples/fibonacci-sequence",
      },
      {
        name: "edureka",
        url: "https://www.edureka.co/blog/python-fibonacci-series/",
      },
    ],
  },
  // 11A
  {
    name: "write-a-python-program-by-using-numpy-module",
    title: "Write a python program by using `NumPy module`",
    language: "python",
    code: `
    import numpy as np
    a = np.array([[10, 2, 3], [4, 5, 6], [7, 8, 9]])
    print("Sorting along the columns")
    print(np.sort(a, axis=0))
    print("Sorting along the rows")
    print(np.sort(a, axis=1))
    datatype = np.dtype([('name', 'S10'), ('mark', int)])
    array = np.array([('mlbp', 315), ('bet', 100)], dtype=datatype)
    print("Sorting the structured array by the 'name' field")
    print(np.sort(array, order='name'))
        `,
    type: "Lab",
    description: `
        The provided Python code demonstrates the use of the NumPy library for sorting operations within arrays. It imports the NumPy library, creates a 3x3 array named 'a' filled with integer values, and showcases two sorting operations: column-wise sorting using 'np.sort(a, axis=0)' and row-wise sorting using 'np.sort(a, axis=1).'
        `,
    explanation: [
      "The code initiates by importing the NumPy library, a fundamental tool for numerical and array operations in Python, with the standard alias 'np.'",
      "It proceeds to create a 3x3 NumPy array named 'a,' filled with integer values. This array is utilized for sorting demonstrations.",
      "The first sorting operation focuses on sorting the elements along the columns (axis 0) using the 'np.sort(a, axis=0)' function. This function sorts 'a' along the specified axis and returns a sorted array. The sorted array is then displayed, demonstrating column-wise sorting.",
      "The second sorting operation similarly employs the 'np.sort' function to sort the elements along the rows (axis 1) using 'np.sort(a, axis=1).' The resultant sorted array is showcased, illustrating the sorting along rows.",
      "The code takes a significant step by defining a structured data type using the 'np.dtype()' function. This structured data type, termed 'datatype,' defines two fields: 'name,' characterized by a string data type with a maximum length of 10 characters ('S10'), and 'mark,' using an integer data type.",
      "Subsequently, a structured NumPy array, named 'array,' is instantiated to contain two records. Each record holds values for 'name' and 'mark.'",
      "The code demonstrates structured array sorting by sorting 'array' based on the 'name' field using 'np.sort(array, order='name').' This command sorts 'array' based on the specified field and prints the sorted structured array.",
      "In summary, this code exemplifies the application of NumPy for sorting elements within arrays, including both column-wise and row-wise sorting. Additionally, it demonstrates structured array sorting based on specific fields. NumPy is an essential library for numerical and data manipulation tasks, extensively used in scientific and data analysis domains.",
    ],
    ytLink: "https://www.youtube.com/embed/eQAuGKayM80",
    sources: [
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/questions/2828059/sorting-arrays-in-numpy-by-column",
      },
      {
        name: "Open source Options",
        url: "https://opensourceoptions.com/sort-numpy-arrays-by-columns-or-rows/",
      },
    ],
  },
  // 12A
  {
    name: "write-a-python-program-to-perform-read-operation-in-file",
    title: "Write a python program to perform `read` operation in FILE",
    code: [
      {
        name: "file1.txt",
        type: "text",
        data: `
    Hello Welcome to Python
    Welcome to MLBP
    Welcome to Computer Science Dept
    (Type in notepad,and save as file1.txt or whatever name you want.)
                `,
      },
      {
        name: "index.py",
        type: "python",
        data: `
    myfile=open("file1.txt","r")
    print(myfile.read())
                `,
      },
    ],
    type: "Lab",
    description: `
        The Python code reads the content of a text file, "file1.txt," and displays it in the console, illustrating the essential steps of file handling in Python.
        `,
    explanation: [
      "The provided Python code serves as a straightforward program for reading and displaying the contents of a text file named 'file1.txt.' Its functionality is summarized as follows:",
      "File Opening:",
      "The code commences by utilizing the 'open()' function to establish a connection with the 'file1.txt' in read mode. This operation creates a file object, and it is assigned to the variable 'myfile.'",
      "Reading File Content:",
      "The 'read()' method, employed on the 'myfile' file object, is called to retrieve the entire content of 'file1.txt' as a string. This method reads the text within the file, capturing it as a string.",
      "Console Output:",
      "Subsequently, the code employs the 'print' function to display the content of the file. Consequently, the text stored within 'file1.txt' is presented in the terminal or console.",
      "In essence, this code provides a basic illustration of how to read and present the contents of a text file in Python. Its execution entails opening the specified file, retrieving its content, and subsequently printing that content in the console for user observation.",
    ],
    ytLink: "https://www.youtube.com/embed/DmHSwTiD5Tk",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/how-to-read-from-a-file-in-python/",
      },
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_file_handling.asp",
      },
    ],
  },
  // 12B
  {
    name: "write-a-python-program-to-perform-write-operation-in-file",
    title: "Write a python program to perform `Write` operation in `FILE`",
    code: [
      {
        name: "file2.txt",
        type: "text",
        data: `
    Create a blank page or file in notepad.
    (Save as file2.txt)             
                `,
      },
      {
        name: "main.py",
        type: "python",
        data: `
    myfile=open("file2.txt","w")
    myfile.write("Welcome to BELAGAVI")
    myfile.close()
    `,
      },
    ],
    type: "Lab",
    description: `
        This Python code creates a new text file, "file2.txt," and writes the text "Welcome to BELAGAVI" into it using the 'open()' function with write mode ('w') and the 'write()' method. Proper file closure is ensured. The resulting content within "file2.txt" is "Welcome to BELAGAVI," illustrating the file creation and writing process in Python.
        `,
    explanation: [
      "The provided Python code serves as a script for creating a new text file named 'file2.txt' and writing the text 'Welcome to BELAGAVI' into it. Here's a breakdown of its functionality:",
      "File Handling: The code starts by using the 'open()' function to open a file named 'file2.txt' in write mode ('w'). The 'w' mode is used for writing to files and creates a new file if it doesn't already exist.",
      "Writing to the File: After opening the file in write mode, the 'write()' method is used to insert the text 'Welcome to BELAGAVI' into the file. This text is predefined within the script and is transferred to the specified file.",
      "Properly Closing the File: It's essential to close the file using the 'close()' method to ensure that any changes are saved and system resources are released.",
      "Result: When the code is executed, it creates a new text file named 'file2.txt' if it doesn't already exist. It then writes the text 'Welcome to BELAGAVI' into this file.",
      "The content within 'file2.txt' will appear as: Welcome to BELAGAVI",
      "In summary, this code demonstrates the process of generating a new text file, adding specific content to it, and correctly closing the file in Python.",
    ],
    ytLink: "https://www.youtube.com/embed/GJ5LJnIEEYo",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/writing-to-file-in-python/",
      },
      {
        name: "W3S",
        url: "https://www.w3schools.com/python/python_file_write.asp",
      },
    ],
  },
  // 12C
  {
    name: "write-a-python-program-to-perform-append-operation-in-file",
    title: "Write a python program to perform `APPEND` operation in `FILE`",
    code: [
      {
        name: "file3.txt",
        type: "text",
        data: `
    Create a new .txt file save= file3.txt
                `,
      },
      {
        name: "main.py",
        type: "python",
        data: `
    myfile=open("file3.txt","a+")
    myfile.write("This is the string text written by my program in file3.txt")
    myfile.close()
    `,
      },
    ],
    type: "Lab",
    description: `
    The Python code effectively opens a file named "file3.txt" in append mode ("a+"), allowing both reading and appending to an existing file or creating a new one if it doesn't exist. It uses the 'write()' method to append the specified text to the end of the file. Proper file closure is ensured using the 'close()' method. The result is the addition of the text "This is the string text written by my program in file3.txt" to the file "file3.txt," illustrating the file handling process in Python.
        `,
    explanation: [
      "Part 1: Opening or Creating the File",
      "Opening the File: The code initiates by employing the 'open()' function to open a file called 'file3.txt' in append mode ('a+'). This function takes two arguments: the file name and the mode for opening the file.",
      "Append Mode ('a+'): 'a+' mode serves the purpose of opening a file in both append and read modes. When this mode is used, it ensures that if the file already exists, it opens it for both reading and appending. However, if the file does not exist, it creates a new one.",
      "Part 2: Writing to the File",
      "Writing to the File: The code utilizes the 'write()' method associated with the 'myfile' file object. This method is responsible for appending the specified text, which reads, 'This is the string text written by my program in file3.txt,' to the end of the file. Essentially, it appends this text to the pre-existing content in the file or writes it to a newly created file.",
      "Part 3: Closing the File",
      "Closing the File: Properly closing the file is a crucial step to ensure that any modifications are saved, and system resources are efficiently released. The 'close()' method is applied to the 'myfile' file object for this purpose.",
      "Result: Upon executing this code, it performs the following actions:",
      "Opens 'file3.txt' in append mode.",
      "If the file already exists, it adds the specified text to the end of the file.",
      "If the file does not exist, it creates a new file named 'file3.txt' and appends the text to it.",
      "As a result, the file 'file3.txt' will contain the appended text: This is the string text written by my program in file3.txt",
      "In summary, this code effectively demonstrates the process of opening a file in append mode, writing designated text to it, and appropriately closing the file in Python.",
    ],
    ytLink: "https://www.youtube.com/embed/O3KAyaDvM-k",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-append-to-a-file/",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/questions/4706499/how-do-i-append-to-a-file",
      },
    ],
  },
  // 13A
  {
    name: "write-the-python-program-to-identify-and-resolve-exceptions-and-handling-methods-in-python",
    title:
      "Write the python program to `identify and resolve exceptions and handling methods` in python",
    language: "python",
    code: `
    try:
        a=int(input("Enter value of a"))
        b=int(input("Enter value of b"))
        c=a/b
        print("a/b=%d"%c)
    except Exception as e:
        print("can't divide by zero")
        print(e)
    else:
        print("else block")
    `,
    type: "Lab",
    description: `
    This Python code snippet effectively employs exception handling to manage potential issues during program execution. It interacts with the user to input two integers ('a' and 'b'), attempts to perform a division operation ('c = a / b'), and handles exceptions that may arise. If an exception occurs, such as division by zero, it gracefully prints an error message and the specific exception details. If no exception occurs, it prints "else block." This code demonstrates the robustness of Python's exception handling mechanism.
        `,
    explanation: [
      "Taking User Input:",
      "User Input Prompt: The code begins by using the input() function to interact with the user. The user is prompted to enter two integer values, which correspond to variables 'a' and 'b.'",
      "User Input Conversion: The values entered by the user are converted to integers using the int() function. These converted values are stored in the variables 'a' and 'b.'",
      "Performing Division:",
      "Division Operation: The code attempts to perform a division operation to calculate 'c' as the result of 'a' divided by 'b' (c = a / b).",
      "Handling Exceptions:",
      "Try Block: The code implements a try block, within which the division operation is executed. It monitors for exceptions that might occur during this operation.",
      "Exception Handling: In the try block, the code specifies that it is looking for exceptions that inherit from the base Exception class, which is a general class for handling exceptions.",
      "Except Block:",
      "Exception Handling Block: If an exception occurs during the division operation, the code gracefully handles it by jumping to the except block.",
      "Error Message Display: In the except block, the code prints 'can't divide by zero' to indicate that a division by zero error has occurred. It also displays the specific error message associated with the exception using print(e) to provide more context about the error.",
      "Else Block:",
      "Non-Exception Scenario: The else block is executed only if no exception is raised during the division operation in the try block. In this case, it prints 'a/b=' followed by the result and 'else block.'",
      "Exception Control: This block is not executed if an exception is raised in the try block.",
      "Output: When the code is executed, it prompts the user to enter values for 'a' and 'b.'",
      "If the user enters valid values and the division is performed without errors, it prints 'a/b=' followed by the result and 'else block.'",
      "If the user enters 0 for 'b' (leading to a division by zero), the code catches the exception, prints 'can't divide by zero,' and displays the specific error message associated with the exception. The 'else block' is not executed in this case.",
      "This code exemplifies how to handle exceptions gracefully in Python, allowing the program to continue running even if errors occur during execution.",
    ],
    ytLink: "https://www.youtube.com/embed/6SPDvPK38tw",
    sources: [
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/python-exception-handling/",
      },
      {
        name: "Programiz",
        url: "https://www.programiz.com/python-programming/exception-handling",
      },
    ],
  },
];

module.exports = experimentData;