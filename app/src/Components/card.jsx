const Card = ({ values }) => {
    return (
      <div className="card">
        <h2 id={values.id}> {values.title}</h2>
        <button >delete</button>
      </div>
    );
  };

export default Card;