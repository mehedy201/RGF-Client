// import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const FreeQuoteThankYou = () => {
    const navigate = useNavigate()
    const navigateHandle = () =>{
        navigate('/')
    }
    return (
        <div style={{height: '80vh'}} className='d-flex align-items-center justify-content-center'>
            <Result
                status="success"
                title="Your message has been successfully received by the RGV Turf team."
                subTitle="Thank you for reaching out to us. Our team is currently reviewing your inquiry and will respond soon. If you haven't heard from us within 24 hours, we kindly ask you to check your spam folder, as our response may have been inadvertently directed there."
                extra={[
                <Button onClick={() => navigateHandle()} key="buy">Go Back Home</Button>,
                ]}
            />
        </div>
    );
};

export default FreeQuoteThankYou;