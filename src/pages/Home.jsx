import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
function Home() {
  const [data, setData] = useState([]);
  const [indData, setIndData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>posts/comments by next js</title>
      </Head>
      <Link href="/">
        <button className="btn btn-dark mt-3" style={{ marginLeft: "1400px" }}>
          Logout
        </button>
      </Link>
      <div className={styles.verticalmenu}>
        {data.map((ele) => {
          return (
            <>
              {" "}
              <a onClick={() => setIndData([ele])}>{ele.title}</a>
            </>
          );
        })}
      </div>
      {indData.length > 0 ? (
        <div
          style={{
            width: "850px",
            height: "400px",
            backgroundColor: " #eee",
            marginLeft: "500px",
            marginTop: "5%",
            padding: " 30px",
            borderRadius: "10px",
          }}
        >
          {indData.map((ele) => {
            return (
              <>
                <div key={ele.id}>
                  <h3>Title</h3>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {ele.title}
                  </p>
                  <h3>Body</h3>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {ele.body}
                  </p>
                  <br />
                  <Link href={`/posts/${ele.id}`}>
                    <button className="btn btn-dark">View Comments</button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default Home;
