const Card = ({ values }) => {
    return (
      <div className="card">
        <h2 id={values.id}> {values.title}</h2>
        
      </div>
    );
  };

export default Card;