function List({list, removeGoal, editGoal}) {
  return (
    <div className="list-div">
        {list.map((goal) => {
            return (
                <div className="goal-div" key={goal.id}>
                    <p id="goal-text">{goal.name}</p>
                    <button className="btn btn-primary" style={{margin: "10px"}} onClick={() => editGoal(goal.id)}>Edit</button>
                    <button className="btn btn-primary" style={{margin: "10px"}} onClick={() => removeGoal(goal.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  );
}

export default List;
