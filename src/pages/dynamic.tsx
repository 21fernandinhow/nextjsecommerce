// pages/dynamic.tsx

import { GetServerSideProps, NextPage } from "next"
import { ReactNode, useEffect, useState } from "react"

interface ApiResponsive{
  name: string
  timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideData: ApiResponsive = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json());

  return {
    props:{
      serverSideData
    }
  }
};


const Dynamic: NextPage = (props: {
  children?: ReactNode
  serverSideData?: ApiResponsive
}) => {

  const [clientSideData, setClientSideData] = useState<ApiResponsive>()

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("/api/hello").then(res => res.json());
    setClientSideData(data);
  };

  return (
    <div className="container text-center">
        <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

        <div className="row">
            <div className="col py-2">
                <h3>Gerado no lado do servidor:</h3>
                <h4>{props.serverSideData?.timestamp.toString()}</h4>
            </div>
            <div className="col py-2">
                <h3>Gerado no lado do cliente:</h3>
                <h4>{clientSideData?.timestamp.toString()}</h4>
            </div>
        </div>
    </div>
  )
}

export default Dynamic