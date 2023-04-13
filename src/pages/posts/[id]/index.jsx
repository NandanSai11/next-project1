import React from "react";
import axios from "axios";
import Head from "next/head";
// import { useState, useEffect } from "react";
//import styles from "@/styles/Home.module.css";
import Link from "next/link";
export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}/comments`
  );
  const data = res.data;
  return {
    props: {
      data,
    },
  };
}

export default function index({ data }) {
  return (
    <>
      <Head>
        <title>posts/comments by next js</title>
      </Head>
      <Link href={"/Home"}>
        <button className="btn btn-dark  mt-3 mx-3">Back</button>
      </Link>
      <div className="container col-8">
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <div className="row align-items-start">
                <div className="col">
                  {" "}
                  <h4>Name</h4>
                  <p style={{ textAlign: "justify" }}>{ele.name}</p>
                </div>
                <div className="col">
                  {" "}
                  <h4>Email</h4>
                  <p style={{ textAlign: "justify" }}>{ele.email}</p>
                </div>
                <div className="col">
                  {" "}
                  <h4>Body</h4>
                  <p style={{ textAlign: "justify" }}>{ele.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
