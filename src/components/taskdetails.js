function Taskdetails({ title, description, due_date, completion_status }) {
    function renderCompletionStatus() {
        if (completion_status !== true ) {
            return <i className="icon" class="fa-solid fa-check-circle fa-2x" onClick={() => console.log("click")}></i>
        } else {
            return null
        }
    }
    return (
      <div className="details">
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Due_date: {due_date}</p>
        <p>
          completion status: {completion_status ? "completed" : "Incomplete"} {renderCompletionStatus()}
        </p>
      </div>
    );
  }
  export default Taskdetails;