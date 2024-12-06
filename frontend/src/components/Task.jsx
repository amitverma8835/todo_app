import React from 'react'

function Task() {
  return (
    <div>
      <div className="task-box">
        <div className="task">
                <h2>Your Task</h2>
                <h3>title : <span>{}</span></h3>
                <h3>description : <span>{}</span></h3>
                
        <div className="btn-grp">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Task
