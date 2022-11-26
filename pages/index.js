import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from "react";

import debug_ from '../components/debug_helper';

import inner_nav from '../styles/InnerNav.module.css';

import FunctionIcon from '../public/svg/function-solid.svg';
import EqualsIcon from '../public/svg/equals-solid.svg';
import LessThanEqualIcon from '../public/svg/less-than-equal-solid.svg';

export default function Home({m_posts}) {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
		</>	
	)
}
