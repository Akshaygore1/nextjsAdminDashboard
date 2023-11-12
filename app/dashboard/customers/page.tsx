import { fetchCustomers } from "@/app/lib/data";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import CustomersTables from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {
	CustomerTableSkeleton,
	InvoicesTableSkeleton
} from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page() {
	return (
		<>
			<h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
				Customers
			</h1>
			<Search placeholder="Search customers..." />

			<Suspense fallback={<CustomerTableSkeleton />}>
				<CustomersTables />
			</Suspense>
		</>
	);
}
