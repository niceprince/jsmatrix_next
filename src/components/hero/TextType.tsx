'use client'

import React, {useEffect, useRef } from "react";
import Typed from 'typed.js';
import style from './TextType.module.css'

export const TextType = () => {
	const typedRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Development', 'Web Maintenance', 'Web Designing', 'Graphic Design', 'Printing', 'SEO Services', 'Digital Marketing', 'Stationeries'],
      typeSpeed: 100,
			startDelay: 100,
			backSpeed: 80,
			loop: true,
			backDelay: 2700,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

	return (
		<>
			<h4 style={{color: 'white'}} className="mb-8 mt-8 text-3xl sm:text-3xl md:text-4xl uppercase text-center font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight">
					-: We Provide :-
			</h4>
			<div className={`${style.example5} mb-8`}>
				<div className={style.innerBox}>
					<h4 className="mb-0text-3xl text-4xl sm:text-5xl md:text-6xl uppercase text-center font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight">
						<span className={`${style.gradient}`} ref={typedRef} />
					</h4>
				</div>
			</div>
		</>
	)
}