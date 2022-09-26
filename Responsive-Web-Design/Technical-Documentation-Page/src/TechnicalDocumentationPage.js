import React from 'react';
import './TechnicalDocumentationPage.css';

class TechnicalDocumentationPage extends React.Component{
    render() {
        return(
            <div id="technical-documentation-page">
                <nav id="navbar">
                    <header id="sidebar-title">
                        <h1 className="main-section-heading-format">JS Documentation</h1>
                    </header>
                    <ul id="nav-ul">
                        <li className="navigation-list-format"><a href="#Introduction" className="nav-link">Introduction</a></li>
                        <li className="navigation-list-format"><a href="#What_you_should_already_know" className="nav-link">What you should already know</a></li>
                        <li className="navigation-list-format"><a href="#JavaScript_and_Java" className="nav-link">JavaScript and Java</a></li>
                        <li className="navigation-list-format"><a href="#Hello_World" className="nav-link">Hello World</a></li>
                        <li className="navigation-list-format"><a href="#Variables" className="nav-link">Variables</a></li>
                        <li className="navigation-list-format"><a href="#Declaring_variables" className="nav-link">Declaring variables</a></li>
                        <li className="navigation-list-format"><a href="#Variable_scope" className="nav-link">Variable scope</a></li>
                        <li className="navigation-list-format"><a href="#Global_variables" className="nav-link">Global variables</a></li>
                        <li className="navigation-list-format"><a href="#Constants" className="nav-link">Constants</a></li>
                        <li className="navigation-list-format"><a href="#Data_types" className="nav-link">Data types</a></li>
                        <li className="navigation-list-format"><a href="#if...else_statement" className="nav-link">if...else statement</a></li>
                        <li className="navigation-list-format"><a href="#while_statement" className="nav-link">while statement</a></li>
                        <li className="navigation-list-format"><a href="#Function_declarations" className="nav-link">Function declarations</a></li>
                        <li className="navigation-list-format"><a href="#Reference" className="nav-link">Reference</a></li>
                    </ul>
                </nav>
                <main id="main-doc">
                    <section className="main-section" id="Introduction">
                        <header>
                            <h1 className="main-section-heading-format">Introduction</h1>
                        </header>
                        <p className="paragraph-format">
                            JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
                        </p>
                        <p className="paragraph-format">
                            JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
                        </p>
                        <ul>
                            <li className="list-format">Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.</li>
                            <li className="list-format">Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.</li>
                        </ul>
                    </section>
                    <section className="main-section" id="What_you_should_already_know">
                        <header>
                            <h1 className="main-section-heading-format">What you should already know</h1>
                        </header>
                        <p className="paragraph-format">
                            This guide assumes you have the following basic background:
                        </p>
                        <ul>
                            <li className="list-format">A general understanding of the Internet and the World Wide Web (WWW).</li>
                            <li className="list-format">Good working knowledge of HyperText Markup Language (HTML).</li>
                            <li className="list-format">Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.</li>
                        </ul>
                    </section>
                    <section className="main-section" id="JavaScript_and_Java">
                        <header>
                            <h1 className="main-section-heading-format">JavaScript and Java</h1>
                        </header>
                        <p className="paragraph-format">
                            JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.
                        </p>
                        <p className="paragraph-format">
                            In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.
                        </p>
                        <p className="paragraph-format">
                            JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.
                        </p>
                    </section>
                    <section className="main-section" id="Hello_World">
                        <header>
                            <h1 className="main-section-heading-format">Hello World</h1>
                        </header>
                        <p className="paragraph-format">
                            To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:
                        </p>
                        <code className="code-format">
                            function greetMe() &#123; alert("Hello"  + yourName); &#125; <br/>
                            greetMe("World");
                        </code>
                        <p className="paragraph-format">
                            Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!
                        </p>
                    </section>
                    <section className="main-section" id="Variables">
                        <header>
                            <h1 className="main-section-heading-format">Variables</h1>
                        </header>
                        <p className="paragraph-format">
                            You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
                        </p>
                        <p className="paragraph-format">
                            A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
                        </p>
                        <p className="paragraph-format">
                            You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.
                        </p>
                    </section>
                    <section className="main-section" id="Declaring_variables">
                        <header>
                            <h1 className="main-section-heading-format">Declaring variables</h1>
                        </header>
                        <p className="paragraph-format">
                            You can declare a variable in three ways:
                        </p>
                        <p className="paragraph-format">
                            With the keyword var. For example,
                        </p>
                        <code className="code-format">
                            var x = 42.
                        </code>
                        <p className="paragraph-format">
                            This syntax can be used to declare both local and global variables.
                        </p>
                        <p className="paragraph-format">
                            By simply assigning it a value. For example,
                        </p>
                        <code className="code-format">
                            x = 42.
                        </code>
                        <p className="paragraph-format">
                            This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.
                        </p>
                        <p className="paragraph-format">
                            With the keyword let. For example,
                        </p>
                        <code className="code-format">
                            let y = 13.
                        </code>
                        <p className="paragraph-format">
                            This syntax can be used to declare a block scope local variable. See Variable scope below.
                        </p>
                    </section>
                    <section className="main-section" id="Variable_scope">
                        <header>
                            <h1 className="main-section-heading-format">Variable scope</h1>
                        </header>
                        <p className="paragraph-format">
                            When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.
                        </p>
                        <p className="paragraph-format">
                            JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within. For example the following code will log 5, because the scope of x is the function (or global context) within which x is declared, not the block, which in this case is an if statement.
                        </p>
                        <code className="code-format">
                            if (true) &#123; var x = 5; &#125; <br/>
                            console.log(x); // 5
                        </code>
                        <p className="paragraph-format">
                            This behavior changes, when using the let declaration introduced in ECMAScript 2015.
                        </p>
                        <code className="code-format">
                            if (true) &#123; let y = 5; &125; <br/>
                            console.log(y); <br/>
                            &#47;&#47; ReferenceError: y is not defined
                        </code>
                    </section>
                    <section className="main-section" id="Global_variables">
                        <header>
                            <h1 className="main-section-heading-format">Global variables</h1>
                        </header>
                        <p className="paragraph-format">
                            Global variables are in fact properties of the global object. In web pages the global object is window, so you can set and access global variables using the window.variable syntax.
                        </p>
                        <p className="paragraph-format">
                            Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.
                        </p>
                    </section>
                    <section className="main-section" id="Constants">
                        <header>
                            <h1 className="main-section-heading-format">Constants</h1>
                        </header>
                        <p className="paragraph-format">
                            You can create a read-only, named constant with the const keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign and can contain alphabetic, numeric, or underscore characters.
                        </p>
                        <code className="code-format">
                            const PI = 3.14;
                        </code>
                        <p className="paragraph-format">
                            A constant cannot change value through assignment or be re-declared while the script is running. It has to be initialized to a value.
                        </p>
                        <p className="paragraph-format">
                            The scope rules for constants are the same as those for let block scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable.
                        </p>
                        <p className="paragraph-format">
                            You cannot declare a constant with the same name as a function or variable in the same scope. For example:
                        </p>
                        <code className="code-format">
                            &#47;&#47; THIS WILL CAUSE AN ERROR <br/>
                            function f() &#123;&#125;; <br/>
                            const f = 5; <br/>
                            &#47;&#47; THIS WILL CAUSE AN ERROR ALSO <br/>
                            function f() &#123; const g = 5; var g; //statements &#125;
                        </code>
                        <p className="paragraph-format">
                            However, object attributes are not protected, so the following statement is executed without problems.
                        </p>
                        <code className="code-format">
                            const MY_OBJECT = &#123;"key": "value"&#125;; <br/>
                            MY_OBJECT.key = "otherValue";
                        </code>
                    </section>
                    <section className="main-section" id="Data_types">
                        <header>
                            <h1 className="main-section-heading-format">Data types</h1>
                        </header>
                        <p className="paragraph-format">
                            The latest ECMAScript standard defines seven data types:
                        </p>
                        <ul>
                            <li className="list-format">Six data types that are primitives:</li>
                            <ul>
                                <li className="list-format">Boolean. true and false.</li>
                                <li className="list-format">null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.</li>
                                <li className="list-format">undefined. A top-level property whose value is undefined.</li>
                                <li className="list-format">Number. 42 or 3.14159.</li>
                                <li className="list-format">String. "Howdy"</li>
                                <li className="list-format">Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.</li>
                            </ul>
                            <li className="list-format">and Object</li>
                        </ul>
                        <p className="paragraph-format">
                            Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. Objects and functions are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.
                        </p>
                    </section>
                    <section className="main-section" id="if...else_statement">
                        <header>
                            <h1 className="main-section-heading-format">if...else statement</h1>
                        </header>
                        <p className="paragraph-format">
                            Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:
                        </p>
                        <code className="code-format">
                            if (condition) &#123; statement_1; &#125; <br/>
                            else &#123; statement_2; &#125;
                        </code>
                        <p className="paragraph-format">
                            condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.
                        </p>
                        <p className="paragraph-format">
                            You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:
                        </p>
                        <code className="code-format">
                            if (condition_1) &#123; statement_1; &#125; <br/>
                            else if (condition_2) &#123; statement_2; &#125; <br/>
                            else if (condition_n) &#123; statement_n; &#125; <br/>
                            else &#123; statement_last; &#125;
                        </code>
                        <p className="paragraph-format">
                            In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement (&#123; ... &#125;) . In general, it's good practice to always use block statements, especially when nesting if statements:
                        </p>
                        <code className="code-format">
                            if (condition) &#123; statement_1_runs_if_condition_is_true; statement_2_runs_if_condition_is_true; &#125; <br/>
                            else &#123; statement_3_runs_if_condition_is_false; statement_4_runs_if_condition_is_false; &#125;
                        </code>
                        <p className="paragraph-format">
                            It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:
                        </p>
                        <code className="code-format">
                            if (x = y) &#123; /* statements here */ &#125;
                        </code>
                        <p className="paragraph-format">
                            If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:
                        </p>
                        <code className="code-format">
                            if ((x = y)) &#123; /* statements here */ &#125;
                        </code>
                    </section>
                    <section className="main-section" id="while_statement">
                        <header>
                            <h1 className="main-section-heading-format">while statement</h1>
                        </header>
                        <p className="paragraph-format">
                            A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:
                        </p>
                        <code className="code-format">
                            while (condition) statement
                        </code>
                        <p className="paragraph-format">
                            If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
                        </p>
                        <p className="paragraph-format">
                            The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.
                        </p>
                        <p className="paragraph-format">
                            To execute multiple statements, use a block statement (&#123; ... &#125;) to group those statements.
                        </p>
                        <p className="paragraph-format">
                            Example:
                        </p>
                        <p className="paragraph-format">
                            The following while loop iterates as long as n is less than three:
                        </p>
                        <code className="code-format">
                            var n = 0; var x = 0; <br/>
                            while (n &lt; 3) &#123; n++; x += n; &#125;
                        </code>
                        <p className="paragraph-format">
                            With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:
                        </p>
                        <ul>
                            <li className="list-format">After the first pass: n = 1 and x = 1</li>
                            <li className="list-format">After the second pass: n = 2 and x = 3</li>
                            <li className="list-format">After the third pass: n = 3 and x = 6</li>
                        </ul>
                        <p className="paragraph-format">
                            After completing the third pass, the condition n &LT; 3 is no longer true, so the loop terminates.
                        </p>
                    </section>
                    <section className="main-section" id="Function_declarations">
                        <header>
                            <h1 className="main-section-heading-format">Function declarations</h1>
                        </header>
                        <p className="paragraph-format">
                            A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
                        </p>
                        <ul>
                            <li className="list-format">The name of the function.</li>
                            <li className="list-format">A list of arguments to the function, enclosed in parentheses and separated by commas.</li>
                            <li className="list-format">The JavaScript statements that define the function, enclosed in curly brackets, &#123; &#125;.</li>
                        </ul>
                        <p className="paragraph-format">
                            For example, the following code defines a simple function named square:
                        </p>
                        <code className="code-format">
                            function square(number) &#123; return number * number; &#125;
                        </code>
                        <p className="paragraph-format">
                            The function square takes one argument, called number. The function consists of one statement that says to return the argument of the function (that is, number) multiplied by itself. The return statement specifies the value returned by the function.
                        </p>
                        <code className="code-format">
                            return number * number;
                        </code>
                        <p className="paragraph-format">
                            Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.
                        </p>
                    </section>
                    <section className="main-section" id="Reference">
                        <header>
                            <h1 className="main-section-heading-format">Reference</h1>
                        </header>
                        <ul>
                            <li className="list-format">All the documentation in this page is taken from MDN</li>
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}

export default TechnicalDocumentationPage;