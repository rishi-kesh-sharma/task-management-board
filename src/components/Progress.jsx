// eslint-disable-next-line react/prop-types
const Progress = ({ value }) => {
    return (
      <div className="progress">
        <div
          className="progress-indicator"
          style={{
            width: `calc(${value}%`,
          }}></div>
      </div>
    );
  };

  export default Progress;