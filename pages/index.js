import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";

import React, { useState, useEffect } from "react";

import sub_nav from '../styles/SubNav.module.css';

import PaintIcon from '../public/svg/paintbrush-pencil.svg';
import FileSolid from '../public/svg/file-solid.svg';
import TrashSolid from '../public/svg/trash-solid.svg';

import debug_ from '../components/debug_helper';

export default function Home() {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<nav className={sub_nav.subnav}>
				<div className={sub_nav.subnav_header}>
					<h1>GROUP 3 <TrashSolid/> MANAGEMENT</h1>
				</div>
				<ul className={sub_nav.subnav_nav}>
					<li className={sub_nav.nav_item}>
						<Link href="/infographic"><a className={sub_nav.nav_link}>
							<PaintIcon/>
							<span className={sub_nav.link_text}>Infographic</span>
						</a>
						</Link>
					</li>
					<li className={sub_nav.nav_item}>
						<Link href="/concept-paper"><a className={sub_nav.nav_link}>
							<FileSolid/>
							<span className={sub_nav.link_text}>Concept Paper</span>
						</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
