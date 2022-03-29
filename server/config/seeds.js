// Load required files/functions
const db = require("./connection");
const { Comment, Post, User } = require("../models");

// open the database
db.once("open", async () => {
  //#region Comments
  // Delete all current comments in the db
  await Comment.deleteMany();
  // Add all the following comments to the db
  const comments = await Comment.insertMany([
    {
      comment_body:
        "Looking fine! Ideally we would not store userdata in an array of objects, but as a place holder its not bad.",
      userName: "User1",
    },
    {
      comment_body: "Gotta love C++ syntax lol",
      userName: "User2",
    },
    {
      comment_body: "Yeah, that cant be right.",
      userName: "User3",
    },
    {
      comment_body:
        " Selection is defined before its called on the custom-text-selection, so it does that thing.",
      userName: "User3",
    },
    {
      comment_body:
        "Syntax wise, they are really similar. Which is a good thing, but at the same time, you could get some things mixed up. But as a Java developer, you should have no issues getting used to it.",
      userName: "User3",
    },
    {
      comment_body:
        "I have often wondered that too when date formatting. Anyone have an idea of why this is?",
      userName: "User3",
    },
    {
      comment_body: ".... Your CTO is forcing you to do WHAT?",
      userName: "User3",
    },
    {
      comment_body:
        "Thats part of the syntax of the new lambda expressions, to be introduced in Java 8.",
      userName: "User3",
    },
    {
      comment_body:
        "Wait, is the java.util.Date a library that is being reassigned here?",
      userName: "User3",
    },
    {
      comment_body:
        "No idea why its like that, but I just use it anyways and it works",
      userName: "User3",
    },
    {
      comment_body:
        "If you dont need to worry about speed, probably a good choice haha",
      userName: "User3",
    },
    {
      comment_body:
        "Someone already mentioned what it does, but does anyone have links to how this would work in more detail?",
      userName: "User3",
    },
    {
      comment_body:
        "If you are trying to get it into production, you need a db. Full stop. If it is for prototyping youre good.",
      userName: "User3",
    },
    {
      comment_body: "Just differences in syntax bro ;)",
      userName: "User3",
    },
    {
      comment_body: "Same lol",
      userName: "User3",
    },
    {
      comment_body: "Just try not to get caught.",
      userName: "User3",
    },
    {
      comment_body: "In the same boat as the rest of you",
      userName: "User3",
    },
    {
      comment_body:
        "Normally we would just import the date library and just call it from main or other methods.",
      userName: "User3",
    },
    {
      comment_body:
        "Basically public means that you will be able to use it global rather than when private, they can only be accessed by individual object instances.",
      userName: "User3",
    },
    {
      comment_body: "So would map be like, formatting the values?",
      userName: "User3",
    },
    {
      comment_body:
        "Basically, the -> separates the parameters (left-side) from the implementation (right side).",
      userName: "User3",
    },
    {
      comment_body:
        "The commas are just indicating what the input will accept.",
      userName: "User3",
    },
    {
      comment_body:
        "Python might take a bit to get used to, but just imagine being the person above you and being forced to use PHP lol",
      userName: "User3",
    },
    {
      comment_body:
        "Other user answered, just wanted to comment to seem smart :)",
      userName: "User3",
    },
    {
      comment_body: "You are forgetting a curly bracket I reckon.",
      userName: "User3",
    },
    {
      comment_body:
        "I would say that this checks out. If you arent getting any css errors then you should be good :)",
      userName: "User3",
    },
    {
      comment_body:
        "Yeah it is the curly bracket. Right after you declare the loop",
      userName: "User3",
    },
    {
      comment_body:
        "The map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.",
      userName: "User3",
    },
    {
      comment_body: "That kind of looks regex? I could be wrong though.",
      userName: "User3",
    },
    {
      comment_body: "Commas :^) hehe",
      userName: "User3",
    },
    {
      comment_body:
        "Dont make fun of Java, I use it every day ;-; it is my favorite programming language",
      userName: "User3",
    },
    {
      comment_body:
        "I never knew that javascript arrays could be used with the find function",
      userName: "User3",
    },
    {
      comment_body: "Regex, 90% sure",
      userName: "User3",
    },
    {
      comment_body:
        "Does the checkbox-symbol corrilate with something in the container?",
      userName: "User3",
    },
    {
      comment_body:
        "I mean, C++ isnt that bad if you are doing game stuff. Most of the time you can get away with just unity or some other language, but for making something like a game engine, you should probably learn C++.",
      userName: "User3",
    },
    {
      comment_body: "So since its a map call, int would be a function I reckon",
      userName: "User3",
    },
    {
      comment_body:
        "That would be correct, first child is an element inside of the checkbox div.",
      userName: "User3",
    },
    {
      comment_body:
        "You are just getting a bunch of different objects as arguments?",
      userName: "User3",
    },
    {
      comment_body:
        "HTML is virtually composed of strings, and what makes regular expression so powerful is, a regular expression can match different strings. Admittedly, a regular expression is not the first choice to correctly parse HTML, because there are some common mistakes such as missing closing tags, mismatching some tags, etc",
      userName: "User3",
    },
    {
      comment_body:
        'A regular expression (sometimes called a rational expression) is a sequence of characters that define a search pattern, mainly for use in pattern matching with strings, or string matching, i.e. "find and replace"-like operations.',
      userName: "User3",
    },
    {
      comment_body: "Welcome to Java, friend.",
      userName: "User3",
    },
    {
      comment_body:
        "Yeah so, this syntax is quite normal. With the second class call, we are getting the svg specifically in the first child.",
      userName: "User3",
    },
    {
      comment_body: "You bought into the C++ meme didnt you...?",
      userName: "User3",
    },
    {
      comment_body: "C++ has nothing to do with memes.",
      userName: "User3",
    },
    {
      comment_body:
        "I gave up C++. I prefer C# but understand why people still prefer it.",
      userName: "User3",
    },
    {
      comment_body: "Ah yes, regex. My mind trembles.",
      userName: "User3",
    },
    {
      comment_body: "Always nice to see new people coming t JavaScript",
      userName: "User3",
    },
    {
      comment_body: "Unpopular opinion but I actually like regex lol",
      userName: "User3",
    },
    {
      comment_body: "Oops, made a typeo. to**",
      userName: "User3",
    },
    {
      comment_body:
        "Dumb question, and kind of unrealated, but can you use regex in Java?",
      userName: "User3",
    },
  ]);
  console.log("Comments seeded");
  //#endregion

  //#region  Users
  // delete Users
  await User.deleteMany();
  // create a couple users
  let users = [];
  users[0] = await User.create({
    id: 0,
    userName: "TestName1",
    email: "Test1@test.com",
    title: "Junior Developer",
    bio: "Test bio",
    github: "r2d2",
    avatar: "avatar1.png",
    password: "pass1234",
    posts: [
      "623cd978dc341b28888f262c",
      "623cd978dc341b28888f2639",
      "623cd978dc341b28888f263a",
    ],
  });

  users[1] = await User.create({
    id: 1,
    userName: "TestName2",
    email: "test2@test.com",
    title: "Senior Developer",
    bio: "Test bio 2",
    github: "c3p0",
    avatar: "avatar2.png",
    password: "pass1234",
    posts: [
      "623cd978dc341b28888f262d",
      "623cd978dc341b28888f2638",
      "623cd978dc341b28888f263b",
    ],
  });
  users[2] = await User.create({
    id: 2,
    userName: "TestName3",
    email: "test3@test.com",
    title: "Senior Developer",
    bio: "Test bio 3",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",
    posts: [
      "623cd978dc341b28888f262e",
      "623cd978dc341b28888f2637",
      "623cd978dc341b28888f263c",
    ],
  });
  users[3] = await User.create({
    id: 3,
    userName: "TestName4",
    email: "test4@test.com",
    title: "Senior Developer",
    bio: "Test bio 4",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",
    posts: [
      "623cd978dc341b28888f262f",
      "623cd978dc341b28888f2636",
      "623cd978dc341b28888f263d",
    ],
  });
  users[4] = await User.create({
    id: 4,
    userName: "TestName5",
    email: "test5@test.com",
    title: "Senior Developer",
    bio: "Test bio 5",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",
    posts: ["623cd978dc341b28888f2630", "623cd978dc341b28888f2635"],
  });
  users[5] = await User.create({
    id: 5,
    userName: "TestName6",
    email: "test6@test.com",
    title: "Senior Developer",
    bio: "Test bio 6",
    github: "r2d2",
    avatar: "avatar3.png",
    password: "pass1234",
    posts: ["623cd978dc341b28888f2631", "623cd978dc341b28888f2634"],
  });
  users[6] = await User.create({
    id: 6,
    userName: "TestName7",
    email: "test7@test.com",
    title: "Senior Developer",
    bio: "Test bio 7",
    github: "r2d2",
    avatar: "avatar1.png",
    password: "pass1234",
    posts: [
      "623cd978dc341b28888f2632",
      "623cd978dc341b28888f2633",
      "623cd978dc341b28888f263f",
    ],
  });
  //console.log("USER=", users);

  console.log("Users seeded");
  //#endregion

  //#region Post
  // delete all posts
  await Post.deleteMany();
  // Add all the new posts
  // TODO:

  const posts = await Post.insertMany([
    {
      // id: 1,
      userName: "TestName1",
      upVoted_user_ids: [users[1]._id],
      downVoted_user_ids: [users[2]._id],
      title:
        "How is my JavaScript looking? Still getting used to the language.",
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
      //  user_id: 1,
      tag_genre: "Advice",
      tag_language: "Javascript",
      comments: [],
    },
    {
      // id: 2,
      userName: "TestName2",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[1]._id],
      title:
        "Lol, funny Java. Slacking off at the office, just thought I should share.",
      post_body: `
      String a = String.valueOf(2);   //integer to numeric string
      int i = Integer.parseInt(a); //numeric string to an int`,
      vote_count: 2,
      // user_id: 2,
      tag_genre: "Funny",
      tag_language: "Java",
      comments: [],
    },
    {
      //id: 3,
      userName: "TestName3",
      upVoted_user_ids: [users[5]._id],
      downVoted_user_ids: [users[1]._id],
      title:
        "Is this the proper way to style a checkbox? I feel I could be doing something better.",
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
      // user_id: 3,
      tag_genre: "Advice",
      tag_language: "CSS",
      comments: [],
    },
    {
      //id: 4,
      userName: "TestName4",
      upVoted_user_ids: [users[1]._id],
      downVoted_user_ids: [users[2]._id],
      title: "Literally an arrow. Not even an => just ->",
      post_body: `
      public static int[] filterNonUnique(int[] elements) {
        return Arrays.stream(elements)
            .filter(el -> indexOf(elements, el) == lastIndexOf(elements, el))
            .toArray();
      }
      `,
      vote_count: 2,
      // user_id: 4,
      tag_genre: "Funny",
      tag_language: "Java",
      comments: [],
    },
    {
      //id: 5,
      userName: "TestName5",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[4]._id],
      title:
        "I come from a Java background, new to C# so I want to know if there is a better way of doing this :)",
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
      // user_id: 5,
      tag_genre: "Advice",
      tag_language: "C#",
      comments: [],
    },
    {
      //id: 6,
      userName: "TestName6",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[4]._id],
      title: "C++ pls...",
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
      // user_id: 6,
      tag_genre: "Funny",
      tag_language: "C++",
      comments: [],
    },
    {
      //id: 7,
      userName: "TestName7/",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[2]._id],
      title:
        "Alright, so the CTO is forcing us to change from Python to a PHP backend and I have no idea what I am doing... Any advice for this?",
      post_body: `
      $result = $mysqli->query('SELECT * FROM students');
      while ($row = $result->fetch_assoc()) {
        echo $row['name'] . '<br>';
      }`,
      vote_count: 2,
      // user_id: 7,
      tag_genre: "Advice",
      tag_language: "PHP",
      comments: [],
    },
    {
      //id: 8,
      userName: "TestName1",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[6]._id],
      title:
        "What is the meaning of int here? I feel like this syntax is a bit funny.",
      post_body: `
      ## Taking Two Integers as input
      a, b = map(int,input().split())
      print("a:",a)
      print("b:",b)

      ## Taking a List as input
      arr = list(map(int,input().split()))
      print("Input List:",arr)`,
      vote_count: 2,
      //  user_id: 1,
      tag_genre: "Funny",
      tag_language: "Python",
      comments: [],
    },
    {
      //id: 9,
      userName: "TestName1",
      upVoted_user_ids: [users[0]._id],
      downVoted_user_ids: [users[2]._id],
      title:
        "Storing an array of objects, but it feels wrong for actual customer data. Should I be doing something different?",
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
      // user_id: 2,
      tag_genre: "Advice",
      tag_language: "Javascript",
      comments: [],
    },
    {
      //id: 10,
      userName: "TestName1",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[6]._id],
      title: "Commas... :^)",
      post_body: `<input type="file" name="my_image" accept="image/gif,image/jpeg,image/jpg,image/png">`,
      vote_count: 2,
      // user_id: 3,
      tag_genre: "Funny",
      tag_language: "HTML",
      comments: [],
    },
    {
      //id: 11,
      userName: "TestName1",
      upVoted_user_ids: [users[5]._id],
      downVoted_user_ids: [users[2]._id],
      title:
        "With the .checkbox span:first-child, we are getting the first-child as the class right? Just want some clarification",
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
      //  user_id: 4,
      tag_genre: "Advice",
      tag_language: "CSS",
      comments: [],
    },
    {
      // id: 12,
      userName: "TestName1",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[6]._id],
      title: "Funny date formating in Java.",
      post_body: `java.util.Date = java.text.DateFormat.getDateInstance().parse(date String);`,
      vote_count: 2,
      //  user_id: 5,
      tag_genre: "Funny",
      tag_language: "Java",
      comments: [],
    },
    {
      //id: 13,
      userName: "TestName1",
      upVoted_user_ids: [users[0]._id],
      downVoted_user_ids: [users[6]._id],
      title:
        "By making the methods public, that means that they can be accessed globally across the entire file structure, right? Or am I missing something...",
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
      // user_id: 6,
      tag_genre: "Advice",
      tag_language: "C#",
      comments: [],
    },
    {
      //id: 14,
      userName: "TestName1",
      upVoted_user_ids: [users[5]._id],
      downVoted_user_ids: [users[2]._id],
      title:
        "Today is the first day I tried to use C++. Today is also the last :)",
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
      //  user_id: 7,
      tag_genre: "Funny",
      tag_language: "C++",
      comments: [],
    },
    {
      // id: 15,
      userName: "TestName1",
      upVoted_user_ids: [users[0]._id],
      downVoted_user_ids: [users[6]._id],
      title:
        "Changing around some code, but I am not sure if this is correct in PHP. Not getting any errors, but the while loop is not working. Whats wrong?",
      post_body: `
      $result = $mysqli->query('SELECT * FROM students');
      while ($row = $result->fetch_assoc())
        echo $row['name'] . '<br>';
      }`,
      vote_count: 2,
      // user_id: 6,
      tag_genre: "Advice",
      tag_language: "PHP",
      comments: [],
    },
    {
      //id: 16,
      userName: "TestName1",
      upVoted_user_ids: [users[1]._id],
      downVoted_user_ids: [users[2]._id],
      title:
        "So, map takes in two integers but it literally is using the same syntax as javascript would use on a string.",
      post_body: `
      ## Taking Two Integers as input
      a, b = map(int,input().split())
      print("a:",a)
      print("b:",b)

      ## Taking a List as input
      arr = list(map(int,input().split()))
      print("Input List:",arr)`,
      vote_count: 2,
      //user_id: 5,
      tag_genre: "Funny",
      tag_language: "Python",
      comments: [],
    },
    {
      // id: 17,
      userName: "TestName1",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[4]._id],
      title: "Would the keys hewre be the name before the semicolon?",
      post_body: `
      let myObject = { one: 1, two: 2, three: 3 };
      Object.keys(myObject).forEach((key, value) => {
        //...do something
        console.log(key, value);
      });`,
      vote_count: 2,
      // user_id: 4,
      tag_genre: "Advice",
      tag_language: "Javascript",
      comments: [],
    },
    {
      //id: 18,
      userName: "TestName1",
      upVoted_user_ids: [users[1]._id],
      downVoted_user_ids: [users[4]._id],
      title: "What is this weird string in pattern??? lol",
      post_body: `<input type="text" title="email_address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />`,
      vote_count: 2,
      // user_id: 3,
      tag_genre: "Funny",
      tag_language: "HTML",
      comments: [],
    },
    {
      // id: 19,
      userName: "TestName1",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[6]._id],
      title:
        "What is the difference between :: and : ? It looks like you can use :: stand alone maybe?",
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
      // user_id: 2,
      tag_genre: "Advice",
      tag_language: "CSS",
      comments: [],
    },
    {
      // id: 20,
      userName: "TestName1",
      upVoted_user_ids: [users[5]._id],
      downVoted_user_ids: [users[4]._id],
      title:
        "Why does the MM upper case but dd and yyyy are lowercase? Kinda funny.",
      post_body: `
      SimpleDateFormat format = new SimpleDateFormat( "dd.MM.yyyy" );
      Date date = format.parse( myString );
      `,
      vote_count: 2,
      // user_id: 1,
      tag_genre: "Funny",
      tag_language: "Java",
      comments: [],
    },
    {
      // id: 21,
      userName: "TestName1",
      upVoted_user_ids: [users[3]._id],
      downVoted_user_ids: [users[4]._id],
      title:
        "Advice for a C++ developer trying to get into C#? Not used to this syntax at all and would like some advice.",
      post_body: `
      // Enter "imethod [Tab]", then...
      public void MyMethod();

      // Enter "imethod1 [Tab]", then...
      public void MyMethod(object arg);`,
      vote_count: 2,
      user_id: 2,
      tag_genre: "Advice",
      tag_language: "C#",
      comments: [],
    },
    {
      // id: 22,
      userName: "TestName1",
      upVoted_user_ids: [users[5]._id],
      downVoted_user_ids: [users[2]._id],
      title: "Funny >> << lol",
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
      // user_id: 3,
      tag_genre: "Funny",
      tag_language: "C++",
      comments: [],
    },
  ]);
  console.log("Posts seeded");
  //#endregion

  process.exit();
});
