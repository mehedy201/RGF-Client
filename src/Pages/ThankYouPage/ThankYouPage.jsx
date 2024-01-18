import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const ThankYouPage = () => {
    const navigate = useNavigate()
    const navigateHandle = () =>{
        navigate('/')
    }
    return (
        <div style={{height: '80vh'}} className='d-flex align-items-center justify-content-center'>
            <Result
                status="success"
                title="Your message has been successfully received by the RGV Turf team."
                subTitle="Our team will review it promptly and respond shortly. In case you do not receive a response within 24 hours, please check your spam folder."
                extra={[
                <Button onClick={() => navigateHandle()} key="buy">Go Back Home</Button>,
                ]}
            />
        </div>
    );
};

export default ThankYouPage;