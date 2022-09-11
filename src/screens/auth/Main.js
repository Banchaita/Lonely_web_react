import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { SignLog, Login, Otp, GenderSelect, TypesOfConnection, Interest, Profile, Location, Notifications } from "./index";

const Main = () => {

    return (
        <Routes>
            <Route path="/" exact element={<SignLog />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/otp" exact element={<Otp />} />
        </Routes>
    )
}

export default Main
