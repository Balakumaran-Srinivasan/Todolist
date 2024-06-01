import './welcompage.css'

export default function WelcomePage({ setPagetab }) {
  return (
    <div className="welcome-container">
      <h1>Welcome to Your Todo List!</h1>
      <p>
        Organize your tasks and stay productive with this React Todo List
        application.
      </p>

      <button 
      onClick={() => setPagetab("signin")}
      className="button">Sign in</button>
      <button 
      onClick={() => setPagetab("signup")}
      className="button">Signup</button>
    </div>
  );
}
