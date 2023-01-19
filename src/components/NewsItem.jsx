const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2023/01/18/1600x900/omid-armin-AGRtDoZlpYw-unsplash_1619504599411_1674027502765_1674027502765.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
