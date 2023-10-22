def fibonacci(n):
    n1 = 0
    n2 = 1
    print(n1)
    print(n2)
    for x in range(0, n):
        n3 = n1+n2
        if (n3 >= n):
            break
        print(n3, end='')
    n1 = n2
    n2 = n3
#  (save it as fibonacci.py)


# import fibonacci
n = int(input("enter range"))
if (n < 0):
    print("enter valied range")
else:
    print("the range is \n")
    fibonacci(n)
