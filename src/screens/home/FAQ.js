import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Button } from 'antd';
import messageIcon from '../../images/messageIcon.png'
import deleteIcon from '../../images/deleteIcon.png'
import toast from "../../components/common/toast"
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { img_url } from '../../constants/const';
import { getFaqdata } from '../../actions/users'
import { setCallResponse } from "../../actions/auth"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const { Content } = Layout;

const FAQ = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const faq_data = useSelector((state) => state.users.faq_data)
    const call_response = useSelector((state) => state.auth.call_response)

    console.log('faq_data==========', faq_data)


    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getFaqdata(data))
    }, [])





    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/discover")
                dispatch(setCallResponse(null))
                let token = localStorage.getItem("check_token")
                let data = {
                    token: token
                }
                dispatch(getFaqdata(data))
            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])




    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div style={{ padding: '3rem 0' }}>
                        <p className='my-5' style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', paddingTop: '5rem' }}>FAQ</p>
                    </div>
                    <div style={{ padding: '3rem 0' }}>
                        {/* <p className='my-2' style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>No Block User Found</p> */}
                        <div className='container mt-5'>

                            <div className='row'>
                                <div className="col-md-6 mx-auto">
                                    <>
                                        <Accordion>
                                            {faq_data?.map((faq, key) => (
                                                <AccordionItem key={key?._id}>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            {faq?.question}
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>
                                                            {faq?.answer}
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                            ))}
                                        </Accordion>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default FAQ
