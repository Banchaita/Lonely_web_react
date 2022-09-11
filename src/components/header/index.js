import React, { useState, useEffect } from 'react';
import { Layout, Modal, Radio, Slider, Checkbox, Divider } from 'antd';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button, Form, FormControl, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { CloseCircleOutlined } from "@ant-design/icons"
import cancelBut from '../../images/cancel-circle.png'
const { Header } = Layout;

const MyHeader = () => {
	const dispatch = useDispatch();
	const location = useNavigate()
	const history = useNavigate();
	const [filterModal, setFilterModal] = useState(false)

	let user = localStorage.getItem('user')
	const plainOptions = ['Male', 'Females', 'Couples', 'Others'];
	const connectionOptions = ['Local Hookup', 'Dating', 'Friendship'];
	const accountOptions = ['Verified Photo', 'Driving License', 'Background Check'];

	// useEffect(() => {
	// 	activeNavigation(location.location.pathname)
	// }, [page, location])

	// const activeNavigation = (path) => {
	// 	switch (path) {
	// 		case "/home":
	// 			setPage('Home')
	// 			break;
	// 		case "/portfolios":
	// 			setPage('Portfolios')
	// 			break;
	// 		case "/favorites":
	// 			setPage('Favorites')
	// 			break;
	// 		case "/connection_concent":
	// 			setPage('Connections')
	// 			break;
	// 		case "/notifications":
	// 			setPage('Notifications')
	// 			break;
	// 		case "/profile":
	// 			setPage('Profile')
	// 			break;
	// 		default:
	// 			setPage('Home')
	// 	}
	// }

	return (
		<>
			<Navbar expand="lg" style={{ background: 'black' }}>
				<Modal
					title={
						<div className='row'>
							<div className='col-md-4'>
								<img src={cancelBut} style={{ height: '20px', cursor: 'pointer' }} onClick={() => setFilterModal(false)}></img>
								{/* <CloseCircleOutlined style={{ fontSize: '22px', color: '#08c' }} /> */}
							</div>
							<div className='col-md-4'>
								<h6 className='text-center text-white'>Search Filters</h6>
							</div>
							<div className='col-md-4'>
								<h6 className='text-right' style={{ color: '#4edfdf', cursor: 'pointer' }}>clear</h6>
							</div>
						</div>
					}
					style={{ top: 100 }}
					visible={filterModal}
					closable={false}
					// width={'40%'}
					// onOk={() => loadAllUsers()}
					onCancel={() => setFilterModal(false)}
					footer={null}
				>
					{/* <Checkbox.Group style={{ width: '100%' }}/> */}
					<Row className='row'>
						<Col className='mb-2 col-md-12' style={{ fontSize: '18px', fontWeight: 'bold', color: '#f580f0' }}><u>Intrested In</u></Col>
						<Col span={24} className='mb-2 col-md-12' style={{ fontSize: '18px', fontWeight: 'bold' }}>
							<Checkbox.Group style={{ width: '100%', color: 'white' }} options={plainOptions} defaultValue={['Apple']} />
						</Col>
						<hr></hr>

						<Divider className='mt-3 mb-2' />
						<Col span={24} className='mb-2' style={{ fontSize: '18px', fontWeight: 'bold', color: '#f580f0' }}><u>Connection Type</u></Col>
						<Checkbox>
							Check all
						</Checkbox>
						<Col span={24} className='mb-2 col-md-12' style={{ fontSize: '18px', fontWeight: 'bold' }}>
							<Checkbox.Group style={{ width: '100%' }} options={connectionOptions} defaultValue={['Apple']} />
						</Col>
						<Divider className='mt-3 mb-2' />
						<Col span={24} className='mb-2 col-md-12' style={{ fontSize: '18px', fontWeight: 'bold', color: '#f580f0' }}><u>Distance</u></Col>
						<Col span={24} className="col-md-12">
							<Slider defaultValue={30} />
						</Col>
						<Col span={12}>
							<Checkbox>Global</Checkbox>
						</Col>
						<Divider className='mt-3 mb-2' />
						<Col span={24} className='mb-2 col-md-12' style={{ fontSize: '18px', fontWeight: 'bold', color: '#f580f0' }}><u>Age</u></Col>
						<Col span={24}>
							<Slider min={20} max={100} range defaultValue={[20, 80]} />
						</Col>
						<Divider className='mt-3 mb-2' />
						<Col className='mb-2 col-md-12' style={{ fontSize: '18px', fontWeight: 'bold', color: '#f580f0' }}><u>Account Verifiaction</u></Col>
						<Col span={24} className='mb-2 col-md-12 mb-5' style={{ fontSize: '18px', fontWeight: 'bold' }}>
							<Checkbox.Group style={{ width: '100%' }} options={accountOptions} defaultValue={['Apple']} />
						</Col>
						<Col className='col-md-6 mx-auto mb-2'>
							<button className='btn btn-block' onClick={() => setFilterModal(false)} style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#000', borderRadius: '13px', color: 'white', borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>Save</button>
						</Col>
					</Row>
					{/* </Checkbox.Group> */}
				</Modal>
				<Container className='' style={{ color: 'white', width: '100%' }}>
					<Navbar.Brand href="#home">
						<img src='plugins/images/Group 17086.png' style={{ width: '180px', height: 'auto' }} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse className='navbar-marginleft' id="basic-navbar-nav ">
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link style={{ padding: '0 1rem', }}><Link to={'/'}>Home</Link></Nav.Link>
							<Nav.Link style={{ padding: '0 1rem' }}><Link to={'/discover'}>Discover</Link></Nav.Link>
							<Nav.Link style={{ padding: '0 1rem' }}><Link to={'/map'}>Map</Link></Nav.Link>
							<Nav.Link style={{ padding: '0 1rem' }}><Link to={'/connection'}>Connection</Link></Nav.Link>
							<Nav.Link style={{ padding: '0 1rem' }}><Link to={'/chatbot'}>Chat</Link></Nav.Link>
							<Nav.Link style={{ padding: '0 1rem' }}><Link to={'/profile'}>Profile</Link></Nav.Link>
						</Nav>
						<Form className="d-flex justify-content-center align-items-center ">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2 searchbox-navaber"
								aria-label="Search"
								style={{
									background: 'black',
									border: '2px solid white',
									borderRadius: '12px',
									color: 'white',
									marginLeft: '1rem',
									minWidth: '150px'
								}}
							/>
							<img onClick={() => setFilterModal(true)} src='plugins/images/Group 17268 (1).png' style={{ width: '40px', height: '40px', transform: `translateX(-20px)` }} />
							<img onClick={() => history('/setting')} className='settingimg' src='plugins/images/setting.png' style={{ width: '40px', height: '40px', marginLeft: '10px' }} />
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default MyHeader