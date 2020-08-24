import { AgGridReact } from 'ag-grid-react';
import SEO from "../components/seo";
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const ChartPage = () => {
    const [deliveryData, setDeliveryData] = useState(null);
    useEffect(() => {
        const getDeliveryData = async () => {
        const res = await axios.get("/api/data");
        setDeliveryData(res.data["delivery_data"]);
        };
        getDeliveryData();
    }, []);
    
    return(
      <>
      <SEO title="Delivery Log" />
      <main>
        <section className="container my-12">
          <div className="text-center">
            <h1 className="heading">Delivery Log</h1>
          </div>
          <div className="text-center mb-8">
            <h2 className>This page displays the deliveries that have been made to fulfill requests submitted to YCRO. </h2>
          </div>
            <section className="mx-auto w-full">
                <div className="ag-theme-alpine"
                    style={{
                    width: "100%" }}
                >
                {deliveryData !== null ? (
                    <AgGridReact
                        domLayout='autoHeight'
                        columnDefs={[{
                            headerName: "Location", field: "location", resizable: true, sortable: true, minwidth:200, maxwidth:500, flex:5
                        }, {
                            headerName: "Items", field: "items", sortable: true, resizable: true, minwidth:200, maxWidth:300, flex: 5
                        }, {
                            headerName: "Quantity", field: "quantity", resizable: true, width: 100, 
                        }, {
                            headerName: "Manufactured by", field: "notes", width:200, maxwidth: 300, flex: 2
                        }]}
                        rowData={deliveryData}>
                    </AgGridReact>
                    ) : ( <div></div>)}
                </div>
            </section>
        </section>
      </main>
      </>
    )
}

export default ChartPage;