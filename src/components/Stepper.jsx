import React from "react";
import "./Stepper.css";

const Stepper = () => {
    const steps = ['Customer Info', 'Shipping Info', 'Payment'];
    return (
        <div>
            {steps?.map((steps, i)=> (
                <div key={i}>
                <div>{i + 1}</div>
                <p>{step}</p>
            </div>
            ))}

        </div>
    );
};

export default Stepper;