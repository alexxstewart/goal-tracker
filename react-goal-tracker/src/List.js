function List({list}) {
  return (
    <div className="list-div">
        {list.map((goal) => {
            return (
                <div className="goal-div" key={goal.id}>
                    <p id="goal-text">{goal.name}</p>
                    <button className="btn btn-primary" style={{margin: "10px"}}>Edit</button>
                    <button className="btn btn-primary" style={{margin: "10px"}}>Remove</button>
                </div>
            )
        })}
    </div>
  );
}

export default List;
