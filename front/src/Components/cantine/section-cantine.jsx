import React from 'react';
import "./section-cantine.css";
import { Document,  Page } from 'react-pdf/dist/entry.webpack';




function CantinePage(){
        return (
            <div>
                <div>
                    <Document file={"D60_fr.pdf"}>
                        
                        <Page pageNumber={1}></Page>
                    </Document>
                    

                </div>
               

            </div>
        )
}

export default CantinePage;