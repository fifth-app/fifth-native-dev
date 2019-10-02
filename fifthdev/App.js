import React, { Component, useState } from 'react';
import MainFlowTabNav from './navigators/MainFlowTabNav.js';
import LoginStack from './navigators/LoginStack';

export default function App(props) {
    return ( true ? <LoginStack /> : <MainFlowTabNav />);
}