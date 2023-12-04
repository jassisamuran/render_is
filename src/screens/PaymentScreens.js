import React,{useState,useEffect} from 'react'
import { ReactLocation, Router } from 'react-location'
import {useNavigate} from 'react-router-dom'
import {Form,Row,Col,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'
import savePaymentMethod from '../components/CheckoutSteps'
import CheckoutSteps from '../components/CheckoutSteps'
const PaymentScreens = () => {
  const navigate=useNavigate()
  const cart=useSelector(state=>state.cart)
  const {shippingAddress}=cart

  if(!shippingAddress){
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const dispatch=useDispatch()
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    console.log(paymentMethod)
    navigate('/placeorder')
    // console.log('submit')
  }

  return (
      <FormContainer>
        <CheckoutSteps step1 step2 step3/>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
            
            <Col>
            <Form.Check 
                type='radio'
                label='paypal or Credit card'
                id='paypal'
                name='paymentMethod'
                value='Paypal'
                // checked
                onChanged={(e)=>setPaymentMethod(e.target.value)}>

                </Form.Check>

                {/* <Form.Check 
                type='radio'
                label='Stripe'
                id='Stripe'
                name='paymentMethod'
                value='Stripe'
                
                onChanged={(e)=>setPaymentMethod(e.target.value)}>
                    
                </Form.Check> */}
            </Col>
            </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>

        </Form>
      </FormContainer>
      
  )
}

export default PaymentScreens
