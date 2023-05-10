import React from "react";

const Reviews = ({ reviews }) => {
  const [limit, setLimit] = React.useState(10);
  // const [reviews, setReviews] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     const data = await response.json();
  //     setReviews(data);
  //   };
  //   fetchData();
  // }, []);
  console.log(limit);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Отзывы клиентов
      </h1>
      {!!reviews &&
        reviews.slice(0, `${limit}`).map((res) => {
          return (
            <div className="reviewItem" key={res.id}>
              <p>
                <strong>{res.id} </strong> &nbsp;
                {res.body.slice(0, 90) + "..."}
              </p>
            </div>
          );
        })}
      <p
        onClick={() => setLimit((prev) => prev + 5)}
        style={{ color: "red", cursor: "pointer" }}
      >
        Показать еще...
      </p>
      {limit > 10 && (
        <p
          onClick={() => setLimit(10)}
          style={{ color: "red", cursor: "pointer" }}
        >
          Свернуть
        </p>
      )}
    </div>
  );
};
export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    props: {
      reviews: data,
    },
  };
};

export default Reviews;
