import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  //state
  const [githubUsersState, setGithubUsersState] = useState({
    githubUsers: [
      {userName: "avasquez-ve"}
    ]
  })
  console.log(githubUsersState);

  //functions
  const changeUserNameHandler = (event) => {
    setGithubUsersState({
      githubUsers: [
        {userName: event.target.value}
      ]
    })
  }

  return (
    <div className="App">
        <h1>Primera tarea del curso de React:</h1>
        <p className="withLink"><a className="App-link" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">https://www.udemy.com/course/react-the-complete-guide-incl-redux/</a></p>
        <br/>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput ✔</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs ✔</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice) ✔</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there ✔</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component ✔</li>
          <li>Add a method to manipulate the state (=> an event-handler method) ✔</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event ✔</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput ✔</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username ✔</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets ✔</li>
        </ol>
        <hr/>
        <br/>

        {/* Components are here */}
        <div className="contComponents">
          <UserInput 
            change={changeUserNameHandler} 
            defaultVal={githubUsersState.githubUsers[0].userName}
            />
          <div className="userContainer">
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
          </div>
          <div className="userContainer">
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
          </div>
          <div className="userContainer">
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
            <UserOutput userName={githubUsersState.githubUsers[0].userName} />
          </div>
        </div>
    </div>
  );
}

export default App;
