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
          <div className="text-center ">
            <h1 className="heading">Delivery Log</h1>
          </div>
            <section className="mx-auto w-10/12">
                <div className="ag-theme-alpine "
                    style={{
                    width: "100%" }}
                >
                {deliveryData !== null ? (
                    <AgGridReact
                        domLayout='autoHeight'
                        // ignoring date
                        columnDefs={[{
                            headerName: "Location", field: "location", resizable: true
                        }, {
                            headerName: "Items", field: "items", sortable: true
                        }, {
                            headerName: "Quantity", field: "quantity", resizable: true
                        }, {
                            headerName: "Notes", field: "notes"
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