<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Concepts</title>
</head>
<body>

    <h1>JavaScript Functions</h1>
    <p>A function that multiplies two numbers.</p>
    <p id="multiply-result"></p>

    <h1>JavaScript Functions</h1>
    <h2>The return Statement</h2>
    <p>A function that returns a text:</p>
    <p id="hello-msg"></p>

    <h1>JavaScript Operators</h1>
    <p>Performing calculations (Addition, Multiplication, Division):</p>
    <p id="operator-results"></p>

    <script>
        // Logic for Multiply
        function multiply(a, b) {
            return a * b;
        }
        document.getElementById("multiply-result").innerHTML = "The result is " + multiply(3, 4);

        // Logic for Return Statement
        function getHello() {
            return "Hello World";
        }
        document.getElementById("hello-msg").innerHTML = getHello();

        // Logic for Operators
        let sum = 10 + 15;
        let prod = 20 * 30;
        let div = 30 / 5;
        document.getElementById("operator-results").innerHTML = 
            "Sum: " + sum + " | Product: " + prod + " | Division: " + div;
    </script>
</body>
</html>