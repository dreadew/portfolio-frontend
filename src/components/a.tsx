"use client"

import Link from "next/link"
import { Icons } from "./Icons"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const ASIDE = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<aside className={cn("sticky h-full w-[5rem] py-5 px-5 transition-all",
			{
				"w-[15rem]": isOpen
			})}>
				<Link className="flex items-center gap-x-3" href="/">
					<Icons.logo className="h-10 w-10" />
					<h3 className={cn("font-bold hidden", {
						"flex": isOpen
					})}>Logo</h3>
				</Link>

				<ul className={cn("hidden mt-[5rem] flex-col gap-y-2", {
					"visible flex": isOpen
				})}>
					<li className="px-2 py-1.5 font-semibold text-gray-600 text-sm text-left hover:bg-gray-100 rounded-lg transition-colors">
						<Link href="#">Link 1</Link>
					</li>
					<li className="px-2 py-1.5 font-semibold text-gray-600 text-sm text-left hover:bg-gray-100 rounded-lg transition-colors">
						<Link href="#">Link 2</Link>
					</li>
					<li className="px-2 py-1.5 font-semibold text-gray-600 text-sm text-left hover:bg-gray-100 rounded-lg transition-colors">
						<Link href="#">Link 3</Link>
					</li>
				</ul>

				<div className={cn("hidden lg:ml-6 mt-3",{
					"flex": isOpen
				})}>
					<span className="h-px w-full bg-gray-200" aria-hidden="true" />
				</div>

				<ul className={cn("hidden mt-[1rem] flex-col gap-y-2", {
					"visible flex": isOpen
				})}>
					<li className="px-2 py-1.5 font-semibold text-gray-600 text-sm text-left hover:bg-gray-100 rounded-lg transition-colors">
						<Link href="#">Link 1</Link>
					</li>
					<li className="px-2 py-1.5 font-semibold text-gray-600 text-sm text-left hover:bg-gray-100 rounded-lg transition-colors">
						<Link href="#">Link 2</Link>
					</li>
				</ul>

				<button onClick={() => setIsOpen(!isOpen)} className="mt-10">
					asd
				</button>
			</aside>
		</>
	)
}