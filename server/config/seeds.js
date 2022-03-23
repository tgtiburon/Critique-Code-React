// Load required files/functions
const db = require("./connection");
const { Comment, Post, User  } = require("../models");


// open the database
db.once("open", async () => {
  // Delete all current comments in the db
  await Comment.deleteMany();
  // Add all the following comments to the db
  const comments = await Comment.insertMany([
    {
      id: 1,
      comment_body: 'Looking fine! Ideally we would not store userdata in an array of objects, but as a place holder its not bad.',
      user_id: 6,
      post_id: 1
    },
    {
      id: 2, 
      comment_body: 'Gotta love C++ syntax lol',
      user_id: 6,
      post_id: 8
    },
    {
      id: 3,
      comment_body: 'Yeah, that cant be right.',
      user_id: 3,
      post_id: 10
    },
    {
      id: 4,
      comment_body: ' Selection is defined before its called on the custom-text-selection, so it does that thing.',
      user_id: 3,
      post_id: 18
      
    },
    {
      id: 5,
      comment_body: 'Syntax wise, they are really similar. Which is a good thing, but at the same time, you could get some things mixed up. But as a Java developer, you should have no issues getting used to it.',
      user_id: 7,
      post_id: 5
    },
    {
      id: 6,
      comment_body: 'I have often wondered that too when date formatting. Anyone have an idea of why this is?',
      user_id: 1,
      post_id: 20
    },
    {
      id: 7,
      comment_body: '.... Your CTO is forcing you to do WHAT?',
      user_id: 6,
      post_id: 7
    },
    {
      id: 8,
      comment_body: 'Thats part of the syntax of the new lambda expressions, to be introduced in Java 8.',
      user_id: 7,
      post_id: 4
    },
    {
      id: 9,
      comment_body: 'Wait, is the java.util.Date a library that is being reassigned here?',
      user_id: 6,
      post_id: 12
    },
    {
      id: 10,
      comment_body: 'No idea why its like that, but I just use it anyways and it works',
      user_id: 6,
      post_id: 20
    },
    {
      id: 11,
      comment_body: 'If you dont need to worry about speed, probably a good choice haha',
      user_id: 3,
      post_id: 14
    },
    {
      id: 12,
      comment_body: 'Someone already mentioned what it does, but does anyone have links to how this would work in more detail?',
      user_id: 5,
      post_id: 4
    },
    {
      id: 13,
      comment_body: 'If you are trying to get it into production, you need a db. Full stop. If it is for prototyping youre good.',
      user_id: 4,
      post_id: 9
    },
    {
      id: 14,
      comment_body:'Just differences in syntax bro ;)',
      user_id: 5,
      post_id: 14
    },
    {
      id: 15,
      comment_body: 'Same lol',
      user_id: 6,
      post_id: 2
    },
    {
      id: 16,
      comment_body: 'Just try not to get caught.',
      user_id: 8,
      post_id: 2
    },
    {
      id: 17,
      comment_body:'In the same boat as the rest of you',
      user_id: 2,
      post_id: 20
    },
    {
      id: 18,
      comment_body: 'Normally we would just import the date library and just call it from main or other methods.',
      user_id: 4,
      post_id: 11
    },
    {
      id: 19,
      comment_body:'Basically public means that you will be able to use it global rather than when private, they can only be accessed by individual object instances.',
      user_id: 5,
      post_id: 13
    },
    {
      id: 20,
      comment_body:'So would map be like, formatting the values?',
      user_id: 9,
      post_id: 16
    },
    {
      id: 21,
      comment_body: 'Basically, the -> separates the parameters (left-side) from the implementation (right side).',
      user_id: 6,
      post_id: 4
    },
    {
      id: 22,
      comment_body: 'The commas are just indicating what the input will accept.',
      user_id: 4,
      post_id: 10
    },
    {
      id: 23,
      comment_body: 'Python might take a bit to get used to, but just imagine being the person above you and being forced to use PHP lol',
      user_id: 3,
      post_id: 8
    },
    {
      id: 24,
      comment_body:'Other user answered, just wanted to comment to seem smart :)',
      user_id: 8,
      post_id: 10
    },
    {
      id: 25,
      comment_body:'You are forgetting a curly bracket I reckon.',
      user_id: 1,
      post_id: 15
    },
    {
      id: 26,
      comment_body: 'I would say that this checks out. If you arent getting any css errors then you should be good :)',
      user_id: 5,
      post_id: 3
    },
    {
      id: 27,
      comment_body: 'Yeah it is the curly bracket. Right after you declare the loop',
      user_id: 1,
      post_id: 15
    },
    {
      id: 28,
      comment_body: 'The map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.',
      user_id: 4,
      post_id: 16
    },
    {
      id: 29,
      comment_body: 'That kind of looks regex? I could be wrong though.',
      user_id: 4,
      post_id: 18
    },
    {
      id: 30,
      comment_body: 'Commas :^) hehe',
      user_id: 4,
      post_id: 10
    },
    {
      id: 31,
      comment_body: 'Dont make fun of Java, I use it every day ;-; it is my favorite programming language',
      user_id: 7,
      post_id: 5
    },
    {
      id: 32,
      comment_body: 'I never knew that javascript arrays could be used with the find function',
      user_id: 10,
      post_id: 1
    },
    {
      id: 33,
      comment_body: 'Regex, 90% sure',
      user_id: 3,
      post_id: 19
    },
    {
      id: 34,
      comment_body: 'Does the checkbox-symbol corrilate with something in the container?',
      user_id: 5,
      post_id: 3
    },
    {
      id: 35,
      comment_body: 'I mean, C++ isnt that bad if you are doing game stuff. Most of the time you can get away with just unity or some other language, but for making something like a game engine, you should probably learn C++.',
      user_id: 10,
      post_id: 14
    },
    {
      id: 36,
      comment_body: 'So since its a map call, int would be a function I reckon',
      user_id: 10,
      post_id: 8
    },
    {
      id: 37,
      comment_body: 'That would be correct, first child is an element inside of the checkbox div.',
      user_id: 10,
      post_id: 11
    },
    {
      id: 38,
      comment_body: 'You are just getting a bunch of different objects as arguments?',
      user_id: 8,
      post_id: 5
    },
    {
      id: 39,
      comment_body: 'HTML is virtually composed of strings, and what makes regular expression so powerful is, a regular expression can match different strings. Admittedly, a regular expression is not the first choice to correctly parse HTML, because there are some common mistakes such as missing closing tags, mismatching some tags, etc',
      user_id: 8,
      post_id: 19
    },
    {
      id: 40,
      comment_body: 'A regular expression (sometimes called a rational expression) is a sequence of characters that define a search pattern, mainly for use in pattern matching with strings, or string matching, i.e. "find and replace"-like operations.',
      user_id: 9,
      post_id: 19
    },
    {
      id: 41,
      comment_body:'Welcome to Java, friend.',
      user_id: 5,
      post_id: 4
    },
    {
      id: 42,
      comment_body:'Yeah so, this syntax is quite normal. With the second class call, we are getting the svg specifically in the first child.',
      user_id: 2,
      post_id: 11
    },
    {
      id: 43,
      comment_body: 'You bought into the C++ meme didnt you...?',
      user_id: 4,
      post_id: 6
    },
    {
      id: 44,
      comment_body: 'C++ has nothing to do with memes.',
      user_id: 9,
      post_id: 6
    },
    {
      id: 45,
      comment_body:'I gave up C++. I prefer C# but understand why people still prefer it.',
      user_id: 7,
      post_id: 9
    },
    {
      id: 46,
      comment_body: 'Ah yes, regex. My mind trembles.',
      user_id: 4,
      post_id: 19
    },
    {
      id: 47,
      comment_body: 'Always nice to see new people coming t JavaScript',
      user_id: 10,
      post_id: 1
    },
    {
      id: 48,
      comment_body:'Unpopular opinion but I actually like regex lol',
      user_id: 2,
      post_id: 19
    },
    {
      id: 49,
      comment_body: 'Oops, made a typeo. to**',
      user_id: 10,
      post_id: 1
    },
    {
      id: 50,
      comment_body: 'Dumb question, and kind of unrealated, but can you use regex in Java?',
      user_id: 10,
      post_id: 12
    }
   
   

   
  ]);
  console.log("Comments seeded");
  // delete all posts
  await Post.deleteMany();
  // Add all the new posts
  const posts = await Post.insertMany([

    {
      id: 1,
      upVoted_user_ids: [1],
      downVoted_user_ids: [2],
      title: 'How is my JavaScript looking? Still getting used to the language.',
      post_body: `
      let customers = [
        { id: 0, name: 'paul' },
        { id: 1, name: 'jeff' },
        { id: 2, name: 'mary' }
      ];
      let customer = customers.find(cust => cust.name === 'jeff');
      console.log(customer);
      --> { id: 1, name: 'jeff' }`,
      vote_count: 2,
      user_id: 1,
      tag_genre: 'Advice',
      tag_language: 'Javascript'
    },
    {
      id: 2,
      upVoted_user_ids: [3],
      downVoted_user_ids: [4],
      title: 'Lol, funny Java. Slacking off at the office, just thought I should share.',
      post_body: `
      String a = String.valueOf(2);   //integer to numeric string
      int i = Integer.parseInt(a); //numeric string to an int`,
      vote_count: 2,
      user_id: 2,
      tag_genre: 'Funny',
      tag_language: 'Java'
    },
    {
      id: 3,
      upVoted_user_ids: [5],
      downVoted_user_ids: [6],
      title: 'Is this the proper way to style a checkbox? I feel I could be doing something better.',
      post_body: `
      .checkbox-container {
          box-sizing: border-box;
          background: #ffffff;
          color: #222;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: row wrap;
      }
      `,
      vote_count: 2,
      user_id: 3,
      tag_genre: 'Advice',
      tag_language: 'CSS'
    },
    {
      id: 4,
      upVoted_user_ids: [1],
      downVoted_user_ids: [2],
      title: 'Literally an arrow. Not even an => just ->',
      post_body: `
      public static int[] filterNonUnique(int[] elements) {
        return Arrays.stream(elements)
            .filter(el -> indexOf(elements, el) == lastIndexOf(elements, el))
            .toArray();
      }
      `,
      vote_count: 2,
      user_id: 4,
      tag_genre: 'Funny',
      tag_language: 'Java'
    },
    {
      id: 5,
      upVoted_user_ids: [3],
      downVoted_user_ids: [4],
      title: 'I come from a Java background, new to C# so I want to know if there is a better way of doing this :)',
      post_body: `
      // Enter "vmethod2 [Tab]", then...  
      public virtual void MyMethod(object arg1, object arg2)  {
          throw new NotImplementedException();
      }
  
      // Enter "vmethod3 [Tab]", then...  
      public virtual void MyMethod(object arg1, object arg2, object arg3)  {
          throw new NotImplementedException();
      }
      `,
      vote_count: 2,
      user_id: 5,
      tag_genre: 'Advice',
      tag_language: 'C#'
    },
    {
      id: 6,
      upVoted_user_ids: [5],
      downVoted_user_ids: [6],
      title: 'C++ pls...',
      post_body: `
      Cout width example
  
      //illustrates setting cout width 
      #include <iostream.h>
      #include <stdlib.h>
      #include <iomanip.h>
      
      int main()
      {
      
        cout<<setw(20)<<"setw(20)"<<endl;
        cout<<setw(10)<<"setw(10)"<<endl;
        cout<<setw(15)<<"setw(15)"<<endl;
        
        return 0;
      }
      `,
      vote_count: 2,
      user_id: 6,
      tag_genre: 'Funny',
      tag_language: 'C++'
    },
    {
      id: 7,
      upVoted_user_ids: [3],
      downVoted_user_ids: [2],
      title: 'Alright, so the CTO is forcing us to change from Python to a PHP backend and I have no idea what I am doing... Any advice for this?',
      post_body: `
      $result = $mysqli->query('SELECT * FROM students');
      while ($row = $result->fetch_assoc()) {
        echo $row['name'] . '<br>';
      }`,
      vote_count: 2,
      user_id: 7,
      tag_genre: 'Advice',
      tag_language: 'PHP'
    },
    {
      id: 8,
      upVoted_user_ids: [1],
      downVoted_user_ids: [6],
      title: 'What is the meaning of int here? I feel like this syntax is a bit funny.',
      post_body: `
      ## Taking Two Integers as input
      a, b = map(int,input().split())
      print("a:",a)
      print("b:",b)
      
      ## Taking a List as input
      arr = list(map(int,input().split()))
      print("Input List:",arr)`,
      vote_count: 2,
      user_id: 1,
      tag_genre: 'Funny',
      tag_language: 'Python'
    },
    {
      id: 9,
      upVoted_user_ids: [5],
      downVoted_user_ids: [2],
      title: 'Storing an array of objects, but it feels wrong for actual customer data. Should I be doing something different?',
      post_body: `
      let customers = [
        { id: 0, name: 'paul' },
        { id: 1, name: 'jeff' },
        { id: 2, name: 'mary' }
      ];
      let customer = customers.find(cust => cust.name === 'jeff');
      console.log(customer);
      --> { id: 1, name: 'jeff' }`,
      vote_count: 2,
      user_id: 2,
      tag_genre: 'Advice',
      tag_language: 'Javascript'
    },
    {
      id: 10,
      upVoted_user_ids: [1],
      downVoted_user_ids: [6],
      title: 'Commas... :^)',
      post_body: `<input type="file" name="my_image" accept="image/gif,image/jpeg,image/jpg,image/png">`,
      vote_count: 2,
      user_id: 3,
      tag_genre: 'Funny',
      tag_language: 'HTML'
    },
    {
      id: 11,
      upVoted_user_ids: [5],
      downVoted_user_ids: [2],
      title: 'With the .checkbox span:first-child, we are getting the first-child as the class right? Just want some clarification',
      post_body: `
      .checkbox span:first-child {
          position: relative;
          flex: 0 0 18px;
          width: 18px;
          height: 18px;
          border-radius: 4px;
          transform: scale(1);
          border: 1px solid #cccfdb;
          transition: all 0.3s ease;
      }`,
      vote_count: 2,
      user_id: 4,
      tag_genre: 'Advice',
      tag_language: 'CSS'
    },
    {
      id: 12,
      upVoted_user_ids: [1],
      downVoted_user_ids: [6],
      title: 'Funny date formating in Java.',
      post_body: `java.util.Date = java.text.DateFormat.getDateInstance().parse(date String);`,
      vote_count: 2,
      user_id: 5,
      tag_genre: 'Funny',
      tag_language: 'Java'
    },
    {
      id: 13,
      upVoted_user_ids: [5],
      downVoted_user_ids: [6],
      title: 'By making the methods public, that means that they can be accessed globally across the entire file structure, right? Or am I missing something...',
      post_body: `
      // Enter "method [Tab]", then...  
      public void MyMethod()  {
          throw new NotImplementedException();
      }
      
      // Enter "method1 [Tab]", then...  
      public void MyMethod(object arg)  {
          throw new NotImplementedException();
      }`,
      vote_count: 2,
      user_id: 6,
      tag_genre: 'Advice',
      tag_language: 'C#'
    },
    {
      id: 14,
      upVoted_user_ids: [5],
      downVoted_user_ids: [2],
      title: 'Today is the first day I tried to use C++. Today is also the last :)',
      post_body: `
      Average
  
      #include <iostream.h>
      #include <math.h> 
      int main()
      {
        int number1,number2,number3;
        double average;
        
        cout<<"Enter three integers and I will display the average"<<endl;
        cin>>number1>>number2>>number3;
        average = (number1 + number2 + number3) / 3.0;
        cout<<"The average is "<<average<<endl;
        
        return 0;
      }`,
      vote_count: 2,
      user_id: 7,
      tag_genre: 'Funny',
      tag_language: 'C++'
    },
    {
      id: 15,
      upVoted_user_ids: [1],
      downVoted_user_ids: [6],
      title: 'Changing around some code, but I am not sure if this is correct in PHP. Not getting any errors, but the while loop is not working. Whats wrong?',
      post_body: `
      $result = $mysqli->query('SELECT * FROM students');
      while ($row = $result->fetch_assoc()) 
        echo $row['name'] . '<br>';
      }`,
      vote_count: 2,
      user_id: 6,
      tag_genre: 'Advice',
      tag_language: 'PHP'
    },
    {
      id: 16,
      upVoted_user_ids: [1],
      downVoted_user_ids: [2],
      title: 'So, map takes in two integers but it literally is using the same syntax as javascript would use on a string.',
      post_body: `
      ## Taking Two Integers as input
      a, b = map(int,input().split())
      print("a:",a)
      print("b:",b)
      
      ## Taking a List as input
      arr = list(map(int,input().split()))
      print("Input List:",arr)`,
      vote_count: 2,
      user_id: 5,
      tag_genre: 'Funny',
      tag_language: 'Python'
    },
    {
      id: 17,
      upVoted_user_ids: [5],
      downVoted_user_ids: [6],
      title: 'Would the keys hewre be the name before the semicolon?',
      post_body: `
      let myObject = { one: 1, two: 2, three: 3 };
      Object.keys(myObject).forEach((key, value) => {
        //...do something
        console.log(key, value);
      });`,
      vote_count: 2,
      user_id: 4,
      tag_genre: 'Advice',
      tag_language: 'Javascript'
    },
    {
      id: 18,
      upVoted_user_ids: [1],
      downVoted_user_ids: [4],
      title: 'What is this weird string in pattern??? lol',
      post_body: `<input type="text" title="email_address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />`,
      vote_count: 2,
      user_id: 3,
      tag_genre: 'Funny',
      tag_language: 'HTML'
    },
    {
      id: 19,
      upVoted_user_ids: [3],
      downVoted_user_ids: [6],
      title: 'What is the difference between :: and : ? It looks like you can use :: stand alone maybe?',
      post_body: `
      ::selection {
        background: aquamarine;
        color: black;
      }
      
      .custom-text-selection::selection {
        background: deeppink;
        color: white;
      }`,
      vote_count: 2,
      user_id: 2,
      tag_genre: 'Advice',
      tag_language: 'CSS'
    },
    {
      id: 20,
      upVoted_user_ids: [5],
      downVoted_user_ids: [4],
      title: 'Why does the MM upper case but dd and yyyy are lowercase? Kinda funny.',
      post_body:  `
      SimpleDateFormat format = new SimpleDateFormat( "dd.MM.yyyy" );
      Date date = format.parse( myString );
      `,
      vote_count: 2,
      user_id: 1,
      tag_genre: 'Funny',
      tag_language: 'Java'
    },
    {
      id: 21,
      upVoted_user_ids: [3],
      downVoted_user_ids: [4],
      title: 'Advice for a C++ developer trying to get into C#? Not used to this syntax at all and would like some advice.',
      post_body: `
      // Enter "imethod [Tab]", then...  
      public void MyMethod();
      
      // Enter "imethod1 [Tab]", then...  
      public void MyMethod(object arg);`,
      vote_count: 2,
      user_id: 2,
      tag_genre: 'Advice',
      tag_language: 'C#'
    },
    {
      id: 22,
      upVoted_user_ids: [5],
      downVoted_user_ids: [2],
      title: 'Funny >> << lol',
      post_body: `
      Area of rectangle
  
      #include <iostream> 
      using namespace std; 
      
      const double pi = 3.14159; 
      
      int main() 
      { 
        float length, width, area; 
        
        cout << "Enter The Length Of The Rectangle: "; 
        cin >> length; 
        cout << "Enter The Width Of Rectangle: "; 
        cin >> width; 
        area = length*width; 
        
        cout <<"The area of the rectangle is : "<< area << endl;
        
        return 0; 
      }
      `,
      vote_count: 2,
      user_id: 3,
      tag_genre: 'Funny',
      tag_language: 'C++'
    },

   
  ]);
  console.log("Posts seeded");
  // delete Users
  await User.deleteMany();
  // create a couple users
  await User.create({
    id: 1,
    userName: "TestName1",
    email: "Test1@test.com",
    title: "Junior Developer",
    bio: "Test bio",
    github: "r2d2",
    avatar: "avatar1.png",
    password: "pass1234",
   
  });

  await User.create({
    id: 2,
    userName: "TestName2",
    email: "test2@test.com",
    title: "Senior Developer",
    bio: "Test bio 2",
    github: "c3p0",
    avatar: "avatar2.png",
    password: "pass1234",

  });
  await User.create({
    id: 3,
    userName: "TestName3",
    email: "test3@test.com",
    title: "Senior Developer",
    bio: "Test bio 3",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",

  });
  await User.create({
    id: 4,
    userName: "TestName4",
    email: "test4@test.com",
    title: "Senior Developer",
    bio: "Test bio 4",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",

  });
  await User.create({
    id: 5,
    userName: "TestName5",
    email: "test5@test.com",
    title: "Senior Developer",
    bio: "Test bio 5",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",

  });
  await User.create({
    id: 6,
    userName: "TestName6",
    email: "test6@test.com",
    title: "Senior Developer",
    bio: "Test bio 6",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",

  });
  await User.create({
    id: 7,
    userName: "TestName7",
    email: "test7@test.com",
    title: "Senior Developer",
    bio: "Test bio 7",
    github: "r2d2",
    avatar: "avatar1.png",
    password: "pass1234",

  });
  
  console.log("Users seeded");
 
 

  process.exit();
});

