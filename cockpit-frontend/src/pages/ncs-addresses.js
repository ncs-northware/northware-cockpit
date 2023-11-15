import AddressTable from "@/content-components/cockpit/AddressTable";
import Layout from "@/theme/components/Layout";
import { useState } from "react";


export default function Addresses() {
    const [query, setQuery] = useState("");
    return(
        <Layout siteTitle="Adressbuch">
            <h1>Adressbuch</h1>
            <AddressTable query={query} />
        </Layout>
    )
}