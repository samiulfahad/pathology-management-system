import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const Page404 = () => {
  return (
    <Layout>
      <section>
        <div className="flexCol text-lg h-screen w-full -mt-28 font-bold">
          <p>NOT Found</p>
          <Link to={"/"} className="btn">
            {" "}
            Home{" "}
          </Link>
          <Link to={"/create-invoice"} className="btn">
            {" "}
            Create Invoice{" "}
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Page404
